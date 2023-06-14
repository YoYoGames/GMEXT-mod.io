
#macro TERMS_AGREED_METAFILE "terms_metafile.dat"


var _buff = buffer_create(1, buffer_grow, 1);
buffer_write(_buff, buffer_string, "---AGREED---");


buffer_async_group_begin(MODIO_FOLDER);
buffer_async_group_option("savepadindex", false);
buffer_async_group_option("showdialog", false);
buffer_async_group_option("subtitle", "mod.io terms (terms agreement)"); 
buffer_save_async(_buff, TERMS_AGREED_METAFILE, 0, buffer_get_size(_buff));
	
var _request = buffer_async_group_end();

buffer_delete(_buff);

room_goto(rm_modio_authentication)
