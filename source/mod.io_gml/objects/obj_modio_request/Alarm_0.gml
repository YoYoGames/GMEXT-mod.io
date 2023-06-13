
request = http_request(url, http_method, header_map, body)

if (!is_string(body)) { 
	buffer_delete(body); 
	body = undefined;
}

ds_map_destroy(header_map);
header_map = undefined;