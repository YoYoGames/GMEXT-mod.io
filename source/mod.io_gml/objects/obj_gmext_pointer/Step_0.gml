
pressed = false
released = false
colliding = false

for(var _i = 0 ; _i < gamepad_get_device_count() ; _i++)
if(gamepad_is_connected(_i))
{
	x += gamepad_axis_value(_i, gp_axislh) * 10;
	y += gamepad_axis_value(_i, gp_axislv) * 10;
	
	var _list = ds_list_create();
	var _num = collision_point_list(x, y, all, false, true, _list, false);
	
	for(var _j = 0; _j < _num; _j++)
	{
		colliding = true
		
		with(_list[|_j])
		{
			if(gamepad_button_check_pressed(_i, gp_face1))
			{
				pressed = true
				event_perform(ev_mouse, ev_left_press);
			}
	
			if(gamepad_button_check_released(_i, gp_face1))
			{
				released = true
				event_perform(ev_mouse, ev_left_release);
			}
		}
	}
		
	ds_list_destroy(_list)
}

