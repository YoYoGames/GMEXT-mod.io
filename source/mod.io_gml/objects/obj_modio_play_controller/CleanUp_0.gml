/// @description Insert description here
// You can write your code in this editor

if (!is_undefined(sound)) 
{
	audio_stop_sound(sound);
	audio_destroy_stream(sound);
}

if (sprite_exists(background)) sprite_delete(background);

if (directory_exists(folder_path)) directory_destroy(folder_path);