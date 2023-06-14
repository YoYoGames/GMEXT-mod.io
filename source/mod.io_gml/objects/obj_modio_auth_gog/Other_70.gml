
switch(async_load[? "type"])
{
	case "GOG_User_RequestEncryptedAppTicket":
	
		if (async_load[? "success"])
		{
			var _ticket = GOG_User_GetEncryptedAppTicket()
			modio_auth_gog(_ticket, undefined, function(_response){
				room_goto(rm_modio_menu)
			}, function() {
				show_debug_message("GOG signin failed.")
			})
		}
		break;
	
	case "GOG_User_SignInGalaxy":
		locked = false;
		break;
}

