
// Early exit if ids don't match
if (async_load[?"id"] != request) exit;

// Print the ASYNC response (DEBUG only)
show_debug_message("ASYNC: " + json_encode(async_load))

var _struct, _status = async_load[? "status"];

// Early exit if the request has not finished yet
if (_status == 1) exit;

var _http_status = async_load[? "http_status"];

if(_status == 0 || _http_status == 204) // 204 is used by modio_mods_delete
{
	if(_http_status >= 200 && _http_status < 300)
	{
		try
		{
			_struct = json_parse(async_load[? "result"]);
		}
		catch (_exception)
		{
			show_debug_message("obj_modio_request : invalid json response");
			instance_destroy();
			exit;
		}
		
		if (!struct_exists(_struct, "code") || (_struct.code >= 200 && _struct.code < 300))
		{
			__modio_session_check(type, _struct);
			if (is_callable(callback_success)) callback_success(_struct);
		}
		else if (is_callable(callback_failed)) callback_failed(json_parse(json_encode(async_load)));
	}
}
else if(_status < 0)
{
	if (is_callable(callback_failed)) callback_failed(json_parse(json_encode(async_load)));
}

instance_destroy();
