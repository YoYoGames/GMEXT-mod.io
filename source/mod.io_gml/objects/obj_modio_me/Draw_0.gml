
var _ind = 0
var _step = 50
var _offset = 100
draw_set_valign(fa_top);
draw_set_halign(fa_left);

draw_text(20, _offset + _ind++ * _step, $"events_count: {events_count}");
draw_text(20, _offset + _ind++ * _step, $"games_count: {games_count}");
draw_text(20, _offset + _ind++ * _step, $"ratings_count: {ratings_count}");
draw_text(20, _offset + _ind++ * _step, $"muted_count: {muted_count}");

