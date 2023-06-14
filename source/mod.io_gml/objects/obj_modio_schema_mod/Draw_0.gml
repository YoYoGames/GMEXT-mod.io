
if(sprite_exists(sprite_index))
{
	draw_sprite(sprite_index,0,x,y)

	draw_set_font(fnt_gmext_15)
	draw_set_halign(fa_left)
	draw_set_valign(fa_top)
	
	draw_set_alpha(0.5)
	draw_rectangle_color(bbox_left,bbox_bottom,bbox_left+320,bbox_bottom-50,c_black,c_black,c_black,c_black,false)
	draw_set_alpha(1)
	
	if(sprite_exists(request_spr_submitted_by))
		draw_sprite(request_spr_submitted_by,0,bbox_left,bbox_bottom-50)
		
	draw_set_font(fnt_gmext_10)
	draw_text(bbox_left+55,bbox_bottom-45,data.name)
	draw_text(bbox_left+55,bbox_bottom-20,"By:" + data.submitted_by.username)
	
	draw_set_halign(fa_right)
	draw_text(bbox_right-5,bbox_bottom-45,"Downloads: " + string(data.stats.downloads_total))
	draw_text(bbox_right-5,bbox_bottom-20,"Subcribers: " + string(data.stats.subscribers_total))
	
	draw_rectangle_color(bbox_left,bbox_bottom,lerp(bbox_left,bbox_right,download_process>1?1.0:download_process),bbox_bottom+20,c_green,c_green,c_green,c_green,false)
}



