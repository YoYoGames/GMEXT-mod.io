
function modio_api() {
	throw $"{_GMFUNCTION_} :: This script file cannot be called."
}

#macro MODIO_SESSION_FILE "session.dat"
#macro MODIO_FOLDER "ModIO"

#macro MODIO_GAME_ID extension_get_option_value("ModIO", "gameID")
#macro MODIO_API_KEY extension_get_option_value("ModIO", "apiKey")
#macro MODIO_API_URL __modio_request_get_base_url()

// ###########################################################
//                      LOCAL FUNCTIONS
// ###########################################################

function modio_is_logged()
{
	return modio_access_token() != "";
}

function modio_access_token()
{
	static access_token_internal = "";
	return access_token_internal;
}

function modio_login_from_cache(_callback)
{
	if (file_exists($"{MODIO_FOLDER}/{MODIO_SESSION_FILE}")) __modio_session_load(_callback);
	else _callback(false);
}

// ###########################################################
//                      AUTHENTICATION
// ###########################################################

function modio_auth_terms(_callback_success = undefined, _callback_failed = undefined)
{
	static _base_url = $"{MODIO_API_URL}/authenticate/terms";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_terms", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_steam(_appdata, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/external/steamauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "appdata", _appdata);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_steam", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_xboxlive(_xbox_token, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/external/xboxauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "xbox_token", _xbox_token);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_xboxlive", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_playstation(_auth_code, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "env", "email", "date_expires", "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/external/psnauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_url, "api_key", MODIO_API_KEY, "auth_code", _auth_code);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_playstation", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_nintendo_switch(_id_token, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/external/switchauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "id_token", _id_token);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_nintendo_switch", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_metaquest(_device, _nonce, _user_id, _access_token, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/external/oculusauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "device", _device, "nonce", _nonce, "user_id", _user_id, "access_token", _access_token);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_metaquest", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_gog(_appdata, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	var _base_url = $"{MODIO_API_URL}/external/galaxyauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "appdata", _appdata);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_gog", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_epicgames(_access_token, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/external/epicgamesauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "access_token", _access_token);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_epicgames", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_itchio(_itchio_token, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/external/itchioauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "itchio_token", _itchio_token);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_itchio", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_google(_id_token, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	var _base_url = $"{MODIO_API_URL}/external/googleauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "id_token", _id_token);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_google", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_discord(_discord_token, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/external/discordauth";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "discord_token", _discord_token);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_discord", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_openid(_id_token, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "email", "date_expires", "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/external/openid";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "id_token", _id_token);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_openid", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_email(_email, _callback_success = undefined, _callback_failed = undefined)
{
	static _base_url = $"{MODIO_API_URL}/oauth/emailrequest";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "email", _email);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_email", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	show_debug_message("HELLO");
	
	return _request;
}

function modio_auth_email_exchange(_security_code, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "terms_agreed" ];
	static _base_url = $"{MODIO_API_URL}/oauth/emailexchange";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "security_code", _security_code);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	var _request = __modio_request("modio_auth_email_exchange", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_auth_logout(_callback_success = undefined, _callback_failed = undefined)
{
	static _base_url = $"{MODIO_API_URL}/oauth/logout";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _request = __modio_request("modio_auth_logout", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                            GAMES
// ###########################################################

function modio_games_get_list(_callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/games";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_games_get_list", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_games_get(_callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_games_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}


// ###########################################################
//                            MODS
// ###########################################################

function modio_mods_get_list(_callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	var _request = __modio_request("modio_mods_get_list", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_mods_get(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	var _request = __modio_request("modio_mods_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_mods_add(_name, _logo, _summary, _optionals = {}, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_fields = [ "name_id", "visible", "description", "homepage_url", "stock", "maturity_option", "community_options", "metadata_blob", "tags[]" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _boundary = __modio_request_generate_boundary();
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = $"multipart/form-data; boundary={_boundary}";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _fields = __modio_optionals_extract(_optionals, _optional_fields);
	
	var _buff = buffer_create(0, buffer_grow, 1);
	__modio_fields_add_file(_buff, _boundary, "logo", _logo);
	__modio_fields_add_value(_buff, _boundary, "summary", _summary);
	__modio_fields_add_value(_buff, _boundary, "name", _name);
	__modio_fields_add_values_from_struct(_buff, _boundary, _fields);
	
	_header_map[? "Content-Length"] = __modio_fields_add_ending(_buff, _boundary);
	
	var _request = __modio_request("modio_mods_add", _url, "POST", _header_map, _buff, _callback_success, _callback_failed);
	
	return _request;
}

function modio_mods_edit(_mod_id, _logo, _optionals = {}, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_fields = [ "status", "visible", "name", "name_id", "summary", "description", "homepage_url", "stock", "maturity_option", "community_options", "metadata_blob", "tags[]" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _boundary = __modio_request_generate_boundary();
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = $"multipart/form-data; boundary={_boundary}";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _fields = __modio_optionals_extract(_optionals, _optional_fields);
	
	var _buff = buffer_create(0, buffer_grow, 1);
	__modio_fields_add_file(_buff, _boundary, "logo", _logo);
	__modio_fields_add_values_from_struct(_buff, _boundary, _fields);
	
	_header_map[? "Content-Length"] = __modio_fields_add_ending(_buff, _boundary);
	
	var _request = __modio_request("modio_mods_edit", _url, "POST", _header_map, _buff, _callback_success, _callback_failed);
	
	return _request;
}

function modio_mods_delete(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _request = __modio_request("modio_mods_delete", _url, "DELETE", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                            FILES
// ###########################################################

function modio_modfiles_get_list(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/files";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY)
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	
	var _request = __modio_request("modio_modfiles_get_list", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_modfiles_get(_mod_id, _file_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/files/{_file_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY)
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	
	var _request = __modio_request("modio_modfiles_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_modfiles_add(_mod_id, _filedata, _optionals = {}, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_fields = [ "upload_id", "version", "changelog", "active", "filehash", "metadata_blob", "platforms" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/files";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY)
	
	var _boundary = __modio_request_generate_boundary();
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = $"multipart/form-data; boundary={_boundary}";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";

	var _fields = __modio_optionals_extract(_optionals, _optional_fields);

	var _buff = buffer_create(0, buffer_grow, 1);
	__modio_fields_add_file(_buff, _boundary, "filedata", _filedata)
	__modio_fields_add_values_from_struct(_buff, _boundary, _fields)
	
	_header_map[? "Content-Length"] = __modio_fields_add_ending(_buff, _boundary);
	
	var _request = __modio_request("modio_modfiles_add", _url, "POST", _header_map, _buff, _callback_success, _callback_failed);
	
	return _request;
}

function modio_modfiles_edit(_mod_id, _file_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_fields = [ "version", "changelog", "active", "metadata_blob" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/files/{_file_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY)
	
	var _boundary = __modio_request_generate_boundary();
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = $"multipart/form-data; boundary={_boundary}";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _fields = __modio_optionals_extract(_optionals, _optional_fields);
	
	var _buff = buffer_create(0, buffer_grow, 1);	
	__modio_fields_add_values_from_struct(_buff, _boundary, _fields)
	
	_header_map[? "Content-Length"] = __modio_fields_add_ending(_buff, _boundary);
	
	var _request = __modio_request("modio_modfiles_edit", _url, "PUT", _header_map, _buff, _callback_success, _callback_failed);

	return _request;
}

function modio_modfiles_delete(_mod_id, _file_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/files/{_file_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY)
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = $"application/x-www-form-urlencoded";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _request = __modio_request("modio_modfiles_delete", _url, "DELETE", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_modfiles_platforms(_mod_id, _file_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_params = [ "approved", "denied" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/files/{_file_id}/platforms";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _request = __modio_request("modio_modfiles_platforms", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                          SUBSCRIBE
// ###########################################################

function modio_subscribe(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/subscribe";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _request = __modio_request("modio_subscribe", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_unsubscribe(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/subscribe";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _request = __modio_request("modio_unsubscribe", _url, "DELETE", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                          COMMENTS
// ###########################################################

function modio_comments_get_list(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/comments";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_comments_get_list", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_comments_add(_mod_id, _content, _reply_id = 0, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/comments";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "content", _content, "reply_id", _reply_id);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_comments_add", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_comments_get(_mod_id, _comment_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/comments/{_comment_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_comments_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_comments_update(_mod_id, _comment_id, _content, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/comments/{_comment_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "content", _content);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_comments_update", _url, "PUT", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_comments_delete(_mod_id, _comment_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/comments/{_comment_id}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_comments_delete", _url, "DELETE", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_comments_karma(_mod_id, _comment_id, _karma, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/comments/{_comment_id}/karma";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "karma", _karma);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_comments_karma", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                           MEDIA
// ###########################################################

function modio_media_game_add(_optionals = {}, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_fields = [ "logo", "icon", "header" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/media";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _boundary = __modio_request_generate_boundary();
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = $"multipart/form-data; boundary={_boundary}";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _fields = __modio_optionals_extract(_optionals, _optional_fields);
	
	var _buff = buffer_create(0, buffer_grow, 1);
	__modio_fields_add_files_from_struct(_buff, _boundary, _fields)
	
	_header_map[? "Content-Length"] = __modio_fields_add_ending(_buff, _boundary);
	
	var _request = __modio_request("modio_media_game_add", _url, "POST", _header_map, _buff, _callback_success, _callback_failed);
	
	return _request;
}

function modio_media_mod_add(_mod_id, _optionals_files, _optionals_strings, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_file_fields = [ "logo", "images" ];
	static _optional_string_fields = [ "youtube[]", "sketchfab[]" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/media";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _boundary = __modio_request_generate_boundary();
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = $"multipart/form-data; boundary={_boundary}";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _file_fields = __modio_optionals_extract(_optionals_files, _optional_file_fields);
	var _string_fields = __modio_optionals_extract(_optionals_strings, _optional_string_fields);
	
	var _buff = buffer_create(0, buffer_grow, 1);
	__modio_fields_add_files_from_struct(_buff, _boundary, _file_fields);
	__modio_fields_add_values_from_struct(_buff, _boundary, _string_fields);
	
	_header_map[? "Content-Length"] = __modio_fields_add_ending(_buff, _boundary);
	
	var _request = __modio_request("modio_media_mod_add", _url, "POST", _header_map, _buff, _callback_success, _callback_failed);
	
	return _request;
}

function modio_media_mod_delete(_mod_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_params = [ "images[]", "youtube[]", "sketchfab[]" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/media";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = $"application/x-www-form-urlencoded";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _request = __modio_request("modio_media_mod_delete", _url, "DELETE", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_media_mod_reorder(_mod_id, _optionals = {}, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_params = [ "images[]", "youtube[]", "sketchfab[]" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/media/reorder";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Content-Type"] = $"application/x-www-form-urlencoded";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	
	var _request = __modio_request("modio_media_mod_reorder", _url, "PUT", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                           EVENTS
// ###########################################################

function modio_events_get_list(_callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/events";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_events_get_list", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_events_get(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/events";

	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_events_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                            TAGS 
// ###########################################################

function modio_tags_game_get(_callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/tags";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_tags_game_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_tags_game_add(_name, _type, _tags, _optionals = {}, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	static _optional_params = [ "hidden", "locked" ];
	
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/tags";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "name", _name, "type", _type, "tags[]", _tags);
	_url = __modio_params_add_from_struct(_url, _params);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_tags_game_add", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_tags_game_delete(_name, _tags, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/tags";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "name", _name, "tags[]", _tags);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_tags_game_delete", _url, "DELETE", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_tags_mod_get(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/tags";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_tags_mod_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_tags_mod_add(_mod_id, _tags, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/tags";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "tags[]", _tags);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_tags_mod_add", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_tags_mod_delete(_mod_id, _tags, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/tags";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "tags[]", _tags);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_tags_mod_delete", _url, "DELETE", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                           RATINGS 
// ###########################################################

function modio_ratings(_mod_id, _rating, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/ratings";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "rating", _rating);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_ratings", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                            STATS 
// ###########################################################

function modio_stats_game(_callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/stats";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_stats_game", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_stats_mods_get_list(_callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/stats";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_stats_mods_get_list", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_stats_mods_get(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/stats";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_stats_mods_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                       DEPENDENCIES
// ###########################################################

function modio_dependencies_get(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/dependencies";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_dependencies_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_dependencies_add(_mod_id, _dependencies, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/dependencies";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "dependencies[]", _dependencies);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_dependencies_add", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_dependencies_delete(_mod_id, _dependencies, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/dependencies";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "dependencies[]", _dependencies)
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_dependencies_delete", _url, "DELETE", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                           TEAMS 
// ###########################################################

function modio_teams_get_mod_members(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/team";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	var _request = __modio_request("modio_teams_get_mod_members", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                          GENERAL 
// ###########################################################

function modio_general_get_resource_owner(_resource_type, _resource_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/general/ownership";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "resource_type", _resource_type, "resource_id", _resource_id)
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_general_get_resource_owner", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                          REPORTS 
// ###########################################################

function modio_report(_resource, _unique_id, _type, _summary, _optionals = {}, _callback_success = undefined, _callback_failed = undefined)
{
	static _optional_params = [ "name", "contact" ];
	
	var _base_url = $"{MODIO_API_URL}/report";
	
	var _params = __modio_optionals_extract(_optionals, _optional_params);
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY, "resource", _resource, "unique_id", _unique_id, "type", _type, "summary", _summary)
	_url = __modio_params_add_from_struct(_url, _params)
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_report", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                         AGREEMENTS 
// ###########################################################

function modio_agreements_get(_agreement_type_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/agreements/types/{_agreement_type_id}/current";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	var _request = __modio_request("modio_agreements_get", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_agreements_version(_version, _callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/agreements/versions/{_version}";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	var _request = __modio_request("modio_agreements_version", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                            USER 
// ###########################################################

function modio_user_mute(_user_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/users/{_user_id}/mute";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_user_mute", _url, "POST", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_user_unmute(_user_id, _callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/users/{_user_id}/mute";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_user_unmute", _url, "Delete", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                             ME 
// ###########################################################

function modio_me(_callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/me";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_me", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_me_events(_callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/me/events";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_me_events", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_me_files(_callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/me/files";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_me_files", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_me_games(_callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/me/games";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_me_games", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_me_subscriptions(_callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/me/subscribed";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_me_subscriptions", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_me_mods(_callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/me/mods";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	var _request = __modio_request("modio_me_mods", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_me_user_muted(_callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/me/users/muted";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_me_user_muted", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

function modio_me_ratings(_callback_success = undefined, _callback_failed = undefined)
{
	var _base_url = $"{MODIO_API_URL}/me/ratings";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_me_ratings", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################
//                            PRICE 
// ###########################################################

function modio_price(_mod_id, _callback_success = undefined, _callback_failed = undefined, _game_id = MODIO_GAME_ID)
{
	var _base_url = $"{MODIO_API_URL}/games/{_game_id}/mods/{_mod_id}/price";
	
	var _url = __modio_params_add(_base_url, "api_key", MODIO_API_KEY);
	
	var _header_map = ds_map_create();
	_header_map[? "Accept"] = "application/json";
	_header_map[? "Authorization"] = $"Bearer {modio_access_token()}";
	_header_map[? "Content-Type"] = "application/x-www-form-urlencoded";
	
	var _request = __modio_request("modio_price", _url, "GET", _header_map, "", _callback_success, _callback_failed);
	
	return _request;
}

// ###########################################################