
modio_login_from_cache(function(_success) {
	if(_success)
		room_goto(rm_modio_menu);
	else
	{
		var _terms_metafile = $"{MODIO_FOLDER}/{TERMS_AGREED_METAFILE}";
		var _target_room = file_exists(_terms_metafile) ? rm_modio_authentication : rm_modio_terms;
		
		room_goto(_target_room);
	}
})

