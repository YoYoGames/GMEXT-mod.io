
sound_filename = -1;
sound = -1;
background = -1;

folder_path = "./extracted/"

var _file;
if(directory_exists(folder_path))
{	
	_file = folder_path + "/sound.ogg"
	if (file_exists(_file))
	{
		sound = audio_create_stream(_file)
		audio_play_sound(sound, 1, true)
	}
	
	_file = folder_path + "/background.png"
	if (file_exists(_file))
	{
		background = sprite_add(_file, 0, 0, 0, 0, 0)
		layer_background_change(layer_background_get_id("Background"), background)
	}

	var _data_struct = {}
	var _file_path = folder_path + "/data.txt"
	if (file_exists(_file_path))
	{
		var _buffer = buffer_load(_file_path);
		var _file_data = buffer_read(_buffer, buffer_string);
		buffer_delete(_buffer);
			
		_data_struct = json_parse(_file_data)
		show_debug_message(instance_number(obj_gmext_textbox))
		obj_gmext_textbox.text = _data_struct.data
	}
	else
		show_debug_message("File Doesn't Exists: " + _file_path)
			
	_file = folder_path + "/character1.png"
	if (file_exists(_file))
	{
		var _spr = sprite_add(_file, _data_struct.character1 ?? 1, 0, 0, 0, 0);
		instance_create_depth(500, 500, 0, obj_modio_play_character, { sprite_index: _spr });
	}
	
	_file = folder_path + "/character2.png"
	if (file_exists(_file))
	{
		var _spr = sprite_add(_file, _data_struct.character2 ?? 1, 0, 0, 0, 0);
		instance_create_depth(700, 500, 0, obj_modio_play_character, { sprite_index: _spr });
	}
		

}

