
request_zip = noone
request_mod_id = ""

event_inherited();

if (directory_exists("./character1")) directory_destroy("./character1")
if (directory_exists("./character2")) directory_destroy("./character2")

text = "Submit"

var _x = 100;
var _y = 150;
instance_create_depth(_x, _y, 0, obj_modio_create_color, { image_blend: c_red })
instance_create_depth(_x + 40, _y, 0, obj_modio_create_color,{ image_blend: c_green });
instance_create_depth(_x + 80, _y, 0, obj_modio_create_color,{ image_blend: c_blue });
instance_create_depth(_x + 120, _y, 0, obj_modio_create_color, { image_blend: c_yellow });
instance_create_depth(_x + 160, _y, 0, obj_modio_create_color, { image_blend: c_orange });
instance_create_depth(_x + 200, _y, 0, obj_modio_create_color, { image_blend: c_white });
instance_create_depth(_x + 240, _y, 0, obj_modio_create_color, { image_blend: c_fuchsia });
instance_create_depth(_x + 280, _y, 0, obj_modio_create_color, { image_blend: c_maroon });
instance_create_depth(_x + 320, _y, 0, obj_modio_create_color, { image_blend: c_lime });
instance_create_depth(_x + 360, _y, 0, obj_modio_create_color, { image_blend: c_navy });
instance_create_depth(_x + 400, _y, 0, obj_modio_create_color, { image_blend: c_black });

icon = instance_create_depth(32, 192, 0, obj_modio_create_canvas, { width: 512, height: 288, radius: 15, color: c_green });

character1 = instance_create_depth(100, 500, 0, obj_modio_create_canvas,{ width: 96, height: 96, radius: 5, color: c_green, name: "character1" });
instance_create_depth(100 + 140, 500 + 48, 0, obj_modio_create_add_frame, { owner: character1 });

character2 = instance_create_depth(320, 500, 0, obj_modio_create_canvas, {width: 96, height: 96, radius: 5, color: c_green, name: "character2" });
instance_create_depth(320 + 140, 500 + 48, 0, obj_modio_create_add_frame, { owner: character2 });
