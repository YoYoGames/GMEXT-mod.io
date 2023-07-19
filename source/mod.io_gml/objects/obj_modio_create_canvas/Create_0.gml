
surf = surface_create(width, height)

surface_set_target(surf);
draw_clear(c_black);
surface_reset_target();

index = 0;
sprite = -1;

function add_frame()
{
	if (sprite == -1) {
		sprite = sprite_create_from_surface(surf, 0, 0, width, height, 0, 0, 0, 0);
	}
	else sprite_add_from_surface(sprite, surf, 0, 0, width, height, 0, 0);
	index++;
}
