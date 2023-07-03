
var _ind = 0
var _step = 50
var _offset = 100
draw_set_valign(fa_top);
draw_set_halign(fa_left);

var _text = $"events_count: {events_count}; games_count: {games_count}; ratings_count: {ratings_count}; muted_count: {muted_count}"

draw_text(20, _offset + _ind++ * _step, _text);
