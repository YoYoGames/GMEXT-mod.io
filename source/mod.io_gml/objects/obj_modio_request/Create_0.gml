
request = noone
alarm[0] = 1

function limit(_value)
{
	url += $"&_limit={_value}";
	return id
}
	
function offset(_value)
{
	url += $"&_offset={_value}";
	return id
}
	
// Sorting
function ascending(_key)
{
	url += $"&_sort={_key}";
	return id
}
	
function descending(_key)
{
	url += $"&_sort=-{_key}";
	return id
}
	
// Filtering
function fulltextsearch(_text)
{
	url += $"&_q={_text}";
	return id
}
	
function equals(_key, _value)
{
	url += $"&{_key}={_value}";
	return id
}
	
function notequalto(_key, _value)
{
	url += $"&{_key}-not={_value}";
	return id
}
	
function likewildcards(_key, _value)
{
	url += $"&{_key}-lk={_value}";
	return id
}
	
function notlikewildcards(_key, _value)
{
	url += $"&{_key}-not-lk={_value}";
	return id
}
	
function in(_key, _value)
{
	url += $"&{_key}-in={_value}";
	return id
}
	
function notin(_key, _value)
{
	url += $"&{_key}-not-in={_value}";
	return id
}
	
function smallerthanorequalto(_key, _value)
{
	url += $"&{_key}-max={_value}";
	return id
}
	
function greaterthanorequalto(_key, _value)
{
	url += $"&{_key}-min={_value}";
	return id
}
	
function bitwiseand(_key, _value)
{
	url += $"&{_key}-bitwise-and={_value}";
	return id
}

