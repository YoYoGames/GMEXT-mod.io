
if(textbox.text != "")
{
	modio_comments_add(owner.owner.data.id, textbox.text, undefined, function(_response) {
		owner.refresh()
		show_message_async("Comment Added")
	});
}
