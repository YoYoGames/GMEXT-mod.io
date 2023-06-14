
if(textbox.text != "")
{
	textbox.text = "Sending..."
	modio_comments_add(owner.owner.data.id,textbox.text, undefined, function(_response) {
		owner.refresh()
		show_message_async("Comment Added")
	});
}
