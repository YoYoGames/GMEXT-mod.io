

if(!surface_exists(surf))
	surf = surface_create(width, height)

if(mouse_check_button(mb_left) or mouse_check_button(mb_right))
if(point_in_rectangle(mouse_x,mouse_y,x,y,x+width,y+height))
{
	var _spr = noone;
	surface_set_target(surf)
	if(keyboard_check(vk_shift))
	{
		var _file = get_open_filename_ext("images|*.png;*.jpg;*.jpeg","",working_directory,"mod.io")

		if(_file != "")
		{
			_spr = sprite_add(_file, 0, 0, 0, 0, 0)
			draw_sprite(_spr, 0, 0, 0)
		}
	}
	else
	{
		if(mouse_check_button(mb_left)) draw_circle_color(mouse_x - x, mouse_y - y, radius, color, color, false)
		else if(mouse_check_button(mb_right)) draw_clear(color)
	}
	surface_reset_target()	
	
	if(sprite_exists(_spr)) sprite_delete(_spr)
}

