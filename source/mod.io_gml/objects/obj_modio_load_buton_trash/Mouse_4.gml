
modio_mods_delete(owner.data.id, function(_response) {
	show_message_async("Delete Success")
	with(obj_modio_load_controller) refresh();
}, function() {
	show_message_async("Subscribe Failed")
});
