
file = get_open_filename_ext("ogg|*.ogg","",working_directory,"mod.io")

if(file != "")
{

	if (audio_exists(sound)) audio_destroy_stream(sound)

	sound = audio_create_stream(file)
	audio_play_sound(sound, 1, false)
}
