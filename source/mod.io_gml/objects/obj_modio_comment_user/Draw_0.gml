

if (sprite_exists(avatar_spr)) {
	draw_sprite_ext(avatar_spr, 0, x-50, y-50, 1, 1, 0, c_white, 1);
}
else draw_rectangle(x-50,y-50,x+50,y+50,false)