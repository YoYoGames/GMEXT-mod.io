
if(file_exists("data.txt"))
	file_delete("data.txt")

if(file_exists("background.png"))
	file_delete("background.png")

if(file_exists("sound.ogg"))
	file_delete("sound.ogg")

if(file_exists("character1"))
	file_delete("character1")
	
if(file_exists("character2"))
	file_delete("character2")
	
var _temp_png = "submit.png"
if(file_exists(_temp_png)) file_delete(_temp_png)

var _surf = obj_modio_create_canvas.surf
var _spr = sprite_create_from_surface(_surf,0,0,surface_get_width(_surf),surface_get_height(_surf),0,0,0,0)

sprite_save(_spr, 0, _temp_png);

modio_mods_add(obj_modio_create_textbox_title.text, _temp_png, obj_modio_create_textbox_description.text, undefined, function(_response) {
	var _zip = zip_create();
		
	with(obj_modio_create_add_sound)
	{
		if(file != "")
		{
			var __ = zip_add_file(_zip, "sound.ogg", file);
		}
	} 
		
	with(obj_modio_create_add_background)
	{
		if(file != "")
		{
			var __ = zip_add_file(_zip, "background.png", file);
		}
	}
		
	var _struct_data = {data: obj_modio_create_textbox_filedata.text}
		
	with(obj_modio_create_add_frame)
	{
		if (directory_exists( $"./{owner.name}"))
		{
			var _index = 0
			var _array = []
			var _file_frame = $"./{owner.name}/{_index}.png"
			while (file_exists(_file_frame))
			{
				array_push(_array, _file_frame)
				_index++
				_file_frame = $"./{owner.name}/{_index}.png"
			}
			var _surf = array_of_images_to_surface_strip(_array, owner.width, owner.height)
			surface_save(_surf, $"{owner.name}.png")
			surface_free(_surf)
			var __ = zip_add_file(_zip, $"{owner.name}.png", $"{owner.name}.png" );
				
			_struct_data[$ owner.name] = owner.index;
		}
	}
		
	var _file_data = buffer_create(1, buffer_grow, 1);
	buffer_write(_file_data, buffer_string, json_stringify(_struct_data));
	buffer_save(_file_data, "data.txt");
	
	var __ = zip_add_file(_zip, "data.txt", "data.txt");
		
	var _array = obj_modio_add_extra_files.array;
	for(var _i = 0 ; _i < array_length(_array) ; _i++)
	{
		__ = zip_add_file(_zip, $"./ExtraFiles/{filename_name(_array[_i])}", _array[_i]);
	}
	
	request_zip = zip_save(_zip, "upload.zip");
	request_mod_id = _response.stats.mod_id;
	
}, function() {
	show_message_async("Submit Failed")
})

sprite_delete(_spr);
