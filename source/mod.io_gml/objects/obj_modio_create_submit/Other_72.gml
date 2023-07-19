
exit;

if(async_load[?"id"] == request_zip)
if(async_load[?"status"] == 0 /*success*/)
{
	modio_modfiles_add(request_mod_id, "upload.zip", undefined, function() {
		show_message_async("Submit Success")
		if(directory_exists("./character1")) directory_destroy("./character1")
		if(directory_exists("./character2")) directory_destroy("./character2")
	}, function() {
		show_message_async("Submit Failed")
	});
}

