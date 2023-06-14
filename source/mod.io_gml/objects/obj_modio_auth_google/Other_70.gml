
if (async_load[? "type"] != "GoogleSignIn_Show") exit;

if (async_load[? "success"])
{
	var _id_token = async_load[? "idToken"];

	modio_auth_google(_id_token, undefined, function() {
		room_goto(rm_modio_menu)
	})
}

