
function __modio_internal()
{
	throw $"{_GMFUNCTION_} :: This script file cannot be called."
}

// Request Functions

/// @ignore
function __modio_request_get_base_url()
{
	static _api_url = string(extension_get_option_value("ModIO", $"{extension_get_option_value("ModIO", "environment")}URL"), MODIO_GAME_ID);
	return _api_url;
}

/// @ignore
function __modio_request_generate_boundary()
{
	return "--GM-ModIO-RequestData-dK37kExoTdHJXJE29S7rz3N37i04q5yrExWQGJdLzK0DVckmVdjLJTsAy49Ii"
}

/// @ignore
function __modio_request(_type, _url, _http_method, _header_map, _body, _callback_success, _callback_failed)
{
	return instance_create_depth(0, 0, 0, obj_modio_request, {
		type: _type,
		url: _url,
		http_method: _http_method,
		header_map: _header_map,
		body: _body,
		callback_success: _callback_success,
		callback_failed: _callback_failed,
	});
}

// Optionals Functions

/// @ignore
function __modio_optionals_extract(_optionals, _keys)
{
	var _length = array_length(_keys);

	if (struct_names_count(_optionals) == 0) return _optionals;

	var _output = {};
	for (var _i = 0; _i < _length; ++_i) 
	{
		var _key = _keys[_i];
		var _value = _optionals[$ _key]
		if (is_undefined(_value)) continue;
		
		_output[$ _key] = _value;
	}

	return _output;
}

// Field Functions

/// @ignore
function __modio_fields_add_file(_buffer, _boundary, _key, _file)
{
	if (!file_exists(_file)) {
		show_debug_message($"[ERROR] build request fields : specified filepath cannot be found ({_file})")
		return buffer_tell(_buffer);
	}
	
	buffer_write(_buffer, buffer_text, $"\r\n--{_boundary}\r\n");
	buffer_write(_buffer, buffer_text, $"Content-Disposition: form-data; name=\"{_key}\"; filename=\"{filename_name(_file)}\"\r\n");
	buffer_write(_buffer, buffer_text, "Content-Type: application/octet-stream\r\n\r\n");
	
	buffer_load_ext(_buffer, _file, buffer_tell(_buffer));
	buffer_seek(_buffer, buffer_seek_end, 0);
	
	return buffer_tell(_buffer);
}

/// @ignore
function __modio_fields_add_files_from_struct(_buffer, _boundary, _struct)
{
	var _key, _keys = struct_get_names(_struct);
	var _count = array_length(_keys);
	for(var _i = 0; _i < _count; _i ++)
	{
		_key = _keys[_i];
		__modio_fields_add_file(_buffer, _boundary, _key, _struct[$ _key]);
	}
	
	return buffer_tell(_buffer);
}

/// @ignore
function __modio_fields_add_value(_buffer, _boundary, _key, _value)
{
	buffer_write(_buffer, buffer_text, $"\r\n--{_boundary}\r\n");
	buffer_write(_buffer, buffer_text, $"Content-Disposition: form-data; name=\"{_key}\"\r\n\r\n");
	buffer_write(_buffer, buffer_text, _value);
	
	return buffer_tell(_buffer);
}

/// @ignore
function __modio_fields_add_values_from_struct(_buffer, _boundary, _struct)
{
	var _key, _keys = struct_get_names(_struct);
	var _count = array_length(_keys);
	for(var _i = 0; _i < _count; _i ++)
	{
		_key = _keys[_i]
		__modio_fields_add_value(_buffer,_boundary,_key, _struct[$ _key])
	}
	
	return buffer_tell(_buffer);
}
	
/// @ignore
function __modio_fields_add_ending(_buffer, _boundary)
{	
	buffer_write(_buffer, buffer_text, $"\r\n--{_boundary}--");
	
	return buffer_tell(_buffer);
}

// Parameter Functions

function __modio_params_add(_url)
{
	var _str = string_pos("?", _url) == 0 ? "?" : "";
	
	for(var _i = 1 ; _i < argument_count ; _i += 2)
	{
		var _key = argument[_i];
		var _value = argument[_i+1];
		
		if (is_array(_value)) {
			
			var _length = array_length(_value);
			for (var _j = 0; _j < _length; ++_j)
			{
				_str += $"{_key}={_value[_j]}&";
			}
		}
		else _str += $"{_key}={_value}&";
	}
	return _url + _str
}

function __modio_params_add_from_struct(_url, _struct)
{
	var _keys = struct_get_names(_struct);
	var _length = array_length(_keys);
	
	for(var _i = 0; _i < _length; ++_i)
	{
		var _key = _keys[_i];
		_url += __modio_params_add(_url, _key, _struct[$ _key]);
	}
	
	return _url;
}

// Session Functions

/// @ignore
function __modio_session_check(_type, _struct)
{
	static __ = modio_access_token();
	
	switch(_type)
	{
		case "modio_auth_steam":
		case "modio_auth_xboxlive":
		case "modio_auth_playStation":
		case "modio_auth_nintendo_switch":
		case "modio_auth_metaquest":
		case "modio_auth_gog":
		case "modio_auth_epicgames":
		case "modio_auth_itchio":
		case "modio_auth_google":
		case "modio_auth_discord":
		case "modio_auth_openid":
		case "modio_auth_email_exchange":
			modio_access_token.access_token_internal = _struct.access_token;
		
			// If we should keep the session alive save the access_token to disk
			if (extension_get_option_value("ModIO", "keepSessionAlive")) {
				
				__modio_session_save(json_stringify(_struct), function(_success) {
					if(_success)
						show_debug_message("Session saved successully.")
					else
						show_debug_message("Session failed to save.")
				})
			}
			break;
			
		case "modio_auth_logout":
			modio_access_token.access_token_internal = "";
			
			// Delete the session file (if it exists)
			var _session_file = $"{MODIO_FOLDER}/{MODIO_SESSION_FILE}";
			if (file_exists(_session_file)) file_delete(_session_file);
			
			break;
			
		default:
			// Don't do anything
			break;
	}
}

/// @ignore
function __modio_session_save(_str_data, _callback = undefined)
{	
	static internal_callback = function(_status, _buffer = undefined) {
		if (is_callable(callback)) callback(_status == 1);
	}

	var _buff = buffer_create(1, buffer_grow, 1);

	var _encoded_data = base64_encode(_str_data);
	buffer_write(_buff, buffer_string, _encoded_data);

	buffer_async_group_begin(MODIO_FOLDER);
	buffer_async_group_option("savepadindex", false);
	buffer_async_group_option("showdialog", false);
	buffer_async_group_option("subtitle", "mod.io session (login crendentials)"); 
	buffer_save_async(_buff, MODIO_SESSION_FILE, 0, buffer_get_size(_buff));
	
	var _request = buffer_async_group_end();
	
	buffer_delete(_buff)
	
	instance_create_depth(0, 0, 0, obj_modio_session, { callback: method({ callback: _callback }, internal_callback), request: _request});
}

/// @ignore
function __modio_session_load(_callback = undefined)
{

	static internal_callback = function(_status, _buffer = undefined) {
		
		static __ = modio_access_token();

		if (_status == 1)
		{
			try
			{
				var _encoded_data = buffer_read(_buffer, buffer_string);
				var _data = base64_decode(_encoded_data);
				var _struct = json_parse(_data);
			
				// Check if the token has expired
				static _timeAtEpoch = 25569;
				var _has_expired = floor(date_second_span(_timeAtEpoch, date_current_datetime())) > _struct.date_expires;
				
				// If is valid store it else delete the session file
				if (!_has_expired) modio_access_token.access_token_internal = _struct.access_token;
				else file_delete($"{MODIO_FOLDER}/{MODIO_SESSION_FILE}");
				
				// Execute callback
				if (is_callable(callback)) callback(!_has_expired);
			}
			catch(_exception)
			{
				if (is_callable(callback)) callback(false);
			}
		}
		else if (is_callable(callback)) callback(false);
	}
	
	var _buff = buffer_create(1,buffer_grow,1);

	buffer_async_group_begin(MODIO_FOLDER);
	buffer_async_group_option("savepadindex", 0);
	buffer_async_group_option("showdialog",0);
	buffer_load_async(_buff, MODIO_SESSION_FILE, 0, -1);
	
	var _request = buffer_async_group_end();
	
	instance_create_depth(0, 0, 0, obj_modio_session, { callback: method({ callback: _callback }, internal_callback), request: _request, buff: _buff });
}

