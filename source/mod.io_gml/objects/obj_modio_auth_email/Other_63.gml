
if(async_load[?"status"])
if(async_load[?"result"] != "")
switch(async_load[?"id"])
{
	case request_email:
		request_email = noone
		var _email = async_load[? "result"]
		modio_auth_email(_email, function(_response) {
			request_code = get_string_async(_response.message, "")
		});
		break
	
	case request_code:
		request_code = noone
		var _code = async_load[?"result"]
		modio_auth_email_exchange(_code, undefined, function() {
			room_goto(rm_modio_menu)
		})
		break;
}
