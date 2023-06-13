
if (sprite_exists(sprite_index))
{
	draw_sprite(sprite_index,0,x,y)
	var _ind = 0, _sep = 33;
	
	draw_set_font(fnt_gmext_20)
	
	draw_set_valign(fa_top)
	draw_set_halign(fa_left)
	draw_text(x, bbox_bottom + 20 + _sep*_ind++, $"name_id: {data.name_id}");
	draw_text(x, bbox_bottom + 20 + _sep*_ind++, $"username: {data.username}");
	draw_text(x, bbox_bottom + 20 + _sep*_ind++, $"date_online: {data.date_online}");
	draw_text(x, bbox_bottom + 20 + _sep*_ind++, $"date_joined: {data.date_joined}");
	draw_text(x, bbox_bottom + 20 + _sep*_ind++, $"timezone: {data.timezone}");
	draw_text(x, bbox_bottom + 20 + _sep*_ind++, $"language: {data.language}");
}

