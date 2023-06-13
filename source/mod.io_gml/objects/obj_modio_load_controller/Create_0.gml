
page_limit = 3
page_index = 0

instance_create_depth(64,300,0,obj_modio_load_previous,{ owner:id })
instance_create_depth(64,550,0,obj_modio_load_next,{ owner:id })
		
function refresh()
{
	delete_comment_objects();
	
	delete_mod_objects();

	modio_mods_get_list(function(_response) {
		for(var _i = 0 ; _i < _response.result_count ; _i ++)
		{
			instance_create_depth(150, 110 + _i*225, 0, obj_modio_schema_mod, { data: _response.data[_i], owner: id });
		}
	}).limit(page_limit).offset(page_limit*page_index).descending("date_added")
}

refresh();
