
file = get_open_filename_ext("*/png", "", working_directory, "mod.io");

if (file != "")
{
	if (sprite_exists(spr)) sprite_delete(spr);

	spr = sprite_add(file, 0, 0, 0, 0, 0);
	layer_background_change(layer_background_get_id("Background"), spr)
}
