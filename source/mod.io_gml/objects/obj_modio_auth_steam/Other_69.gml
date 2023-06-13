
if(async_load[?"event_type"] == "user_encrypted_app_ticket_response_received") {
	if (async_load[? "result"])
	{
		show_debug_message(json_encode(async_load))
		var _ticket_data = async_load[? "ticket_data"]
		var _encoded_str = url_encode(_ticket_data);

		modio_auth_steam(_encoded_str, undefined, function(_response){
			room_goto(rm_modio_menu)
		}, function(){
			show_debug_message("Steam Failed :(")
		})
	}
}
