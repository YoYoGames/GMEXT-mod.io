
modio_subscribe(owner.data.id, function(_response) {
	show_message_async("Subscribe Success")
	with(obj_modio_load_controller) refresh()
}, function() {
	show_message_async("Subscribe Failed")
});
