
if(async_load[?"status"] >= 0)
switch(async_load[?"id"])
{
	case request_spr:
	
	    sprite_index = request_spr
		
		instance_create_depth(bbox_right + 25, y + 20, 0, obj_modio_load_buton_play, { owner:id })
		instance_create_depth(bbox_right + 25, y + 60, 0, obj_modio_load_button_comment, { owner:id })
		instance_create_depth(bbox_right + 25, y + 100, 0, obj_modio_load_buton_subscribe, { owner:id })
		instance_create_depth(bbox_right + 25, y + 140, 0, obj_modio_load_buton_trash, { owner:id })
		
	break
	
	case request_spr_submitted_by:
		
	break
}

