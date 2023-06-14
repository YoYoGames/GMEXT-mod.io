
event_inherited();

var _x = x - 150
var _y = bbox_bottom - 170
var _color = c_green
if (point_in_rectangle(mouse_x,mouse_y,_x-75,_y-20,_x+75,_y+20))
{
	_color = c_blue
	if(mouse_check_button(mb_left)) url_open(links.terms.url)
}
draw_text_color(_x,_y,links.terms.text,_color,_color,_color,_color,1)

_x = x + 150
_y = bbox_bottom-170
_color = c_green
if (point_in_rectangle(mouse_x,mouse_y,_x-75,_y-20,_x+75,_y+20))
{
	_color = c_blue
	if (mouse_check_button(mb_left)) url_open(links.privacy.url)
}
draw_text_color(_x,_y,links.privacy.text,_color,_color,_color,_color,1)

