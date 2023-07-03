
page_index = 0

function refresh()
{
	delete_comment_objects()

	modio_comments_get_list(owner.data.id, function(_response) {
		for(var _i = 0 ; _i < _response.result_count ; _i++)
		{
			var _content = _response.data[_i].content;
			var _avatar_url = _response.data[_i].user.avatar.thumb_100x100;
			instance_create_depth(600,260 + _i*110,0, obj_modio_comment_user, { owner: id, image_xscale: 9, image_yscale: 1.5, avatar_url: _avatar_url });
			instance_create_depth(950,260 + _i*110,0, obj_modio_comment, { owner: id, image_xscale: 9, image_yscale: 1.5, text: _content });
		}
			
		var _textbox = instance_create_depth(850,150,0, obj_modio_create_textbox, { owner: id, image_xscale: 9, image_yscale: 1.5 });
		
		instance_create_depth(1180,150,0, obj_modio_comment_send, { owner: id, textbox: _textbox });
		instance_create_depth(1310,325,0, obj_modio_comment_back, { owner: id, textbox: _textbox });
		instance_create_depth(1310,525,0, obj_modio_comment_next, { owner: id, textbox: _textbox });
			
	}).limit(4).offset(page_index*4).descending("date_added")
}
