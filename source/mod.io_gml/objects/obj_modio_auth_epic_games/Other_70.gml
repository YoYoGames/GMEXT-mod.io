
switch(async_load[?"type"])
{
	case "EpicGames_Auth_Login":
		
		switch(async_load[?"status"])
		{
			case EpicGames_Success:
		
				var _account_id = async_load[?"AccountID"]
				
				var _auth_token = EpicGames_Auth_CopyUserAuthToken(_account_id)
				
				modio_auth_epicgames(_auth_token.AccessToken, undefined, function(_response){
					room_goto(rm_modio_menu)
				},function(){
					show_debug_message("EpicGames login failed!")
				});
				
				break;
		}
}


