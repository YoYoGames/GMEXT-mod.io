
function delete_comment_objects()
{
	with(obj_modio_comment)
		instance_destroy()

	with(obj_modio_comment_send)
		instance_destroy()

	with(obj_modio_comment_user)
		instance_destroy()
	
	with(obj_modio_comment_next)
		instance_destroy()
	
	with(obj_modio_comment_back)
		instance_destroy()
		
	with(obj_modio_create_textbox)
		instance_destroy()
}

function delete_mod_objects()
{
	with(obj_modio_schema_mod)
		instance_destroy()
		
	with(obj_modio_load_buton_play)
		instance_destroy()

	with(obj_modio_load_buton_trash)
		instance_destroy()

	with(obj_modio_load_buton_subscribe)
		instance_destroy()
	
	with(obj_modio_load_button_comment)
		instance_destroy()
}

function url_encode(_input) 
{
	static dec_to_hexa = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ]
	
	var _char, _ord, _tmp, _result = "";
	
	var _length = string_length(_input);
	for (var _pos = 1; _pos <= _length; ++_pos)
	{
	    _char = string_char_at(_input, _pos);
	    _ord = ord(_char);
	    if ((_ord < 32) || (_ord > 126) || (_ord == 36) || (_ord == 38) || (_ord == 43) || (_ord == 44) || (_ord == 47) || (_ord == 58) || (_ord == 59) || (_ord == 61) || (_ord == 63) || (_ord == 64) || (_ord == 32) || (_ord == 34) || (_ord == 60) || (_ord == 62) || (_ord == 35) || (_ord == 37) || (_ord == 123) || (_ord == 125) || (_ord == 124) || (_ord == 92) || (_ord == 94) || (_ord == 126) || (_ord == 91) || (_ord == 93) || (_ord == 96))
		{
	        _tmp = floor(_ord/16);
	        _result += $"%{dec_to_hexa[_tmp]}{dec_to_hexa[_ord - _tmp*16]}";
		}
	    else
		{
	        _result = _result+_char;
		}
	}
	return _result;
}

function array_of_images_to_sprite(_array, _img_w, _img_h)
{
	if (!array_length(_array)) return noone;
	
	var _surf = array_of_images_to_surface_strip(_array, _img_w, _img_h);

	var _array_length = array_length(_array);
	var _spr = sprite_create_from_surface(_surf, 0, 0, _img_w * _array_length, _img_h, 0, 0, 0, 0);
	
	surface_free(_surf);

	return _spr;
}

function array_of_images_to_surface_strip(_array, _img_w, _img_h)
{
	if (!array_length(_array)) return noone;
	
	var _array_length = array_length(_array);
	
	var _surf = surface_create(_img_w * _array_length, _img_h);

	surface_set_target(_surf);
	
	for(var _i = 0; _i < _array_length; _i++)
	{
		var _spr = sprite_add(_array[_i], 0, 0, 0, 0, 0);
		draw_sprite(_spr, 0, _img_w*_i, 0);
		sprite_delete(_spr);
	}
	
	surface_reset_target();
	
	return _surf;
}
