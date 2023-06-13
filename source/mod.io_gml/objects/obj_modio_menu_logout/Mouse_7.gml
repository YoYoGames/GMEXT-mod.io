
if (!modio_is_logged()) {
	room_goto(rm_modio_authentication)
}
else
{
	modio_auth_logout(function() {
		room_goto(rm_modio_authentication);
	})
}
