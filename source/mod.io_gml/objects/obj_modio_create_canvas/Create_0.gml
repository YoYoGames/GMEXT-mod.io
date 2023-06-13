
surf = surface_create(width, height)

surface_set_target(surf);
draw_clear(c_black);
surface_reset_target();

index = 0;
function add_frame()
{
	surface_save(surf, $"./{name}/{index}.png");
	index++
}
