
events_count = 0
games_count = 0
mods_count = 0
ratings_count = 0
subscriptions_count = 0
muted_count = 0

modio_me(function(_response){
	instance_create_depth(900, 100, depth, obj_modio_schema_user, { data: _response } );
});

modio_me_events(function(_response) {
	events_count = _response.result_count
});

modio_me_games(function(_response){
	games_count = _response.result_count
});

modio_me_ratings(	 function(_response){
	ratings_count = _response.result_count
});

page_limit = 3;
page_index = 0;

instance_create_depth(64, 300, 0, obj_modio_load_previous, { owner:id });
instance_create_depth(64, 550, 0, obj_modio_load_next, { owner:id } );

function refresh()
{
	delete_comment_objects();
	delete_mod_objects();

	modio_me_mods(function(_response) {
		mods_count = _response.result_count;
		for(var _i = 0; _i < mods_count; ++_i)
		{
			instance_create_depth(150, 110 + _i*225, 0, obj_modio_schema_mod, { data: _response.data[_i], owner: id });
		}
	}).limit(page_limit).offset(page_limit*page_index).descending("date_added");
		
	modio_me_subscriptions(function(_response) {
		subscriptions_count = _response.result_count
		for(var _i = 0; _i < subscriptions_count; ++_i)
		{
			instance_create_depth(600, 110 + _i*225, 0, obj_modio_schema_mod, { data: _response.data[_i], owner: id });
		}
	}).limit(page_limit).offset(page_limit*page_index).descending("date_added");
}

refresh()


modio_me_user_muted(function(_response) {
	muted_count = _response.result_count
	for(var _i = 0; _i < muted_count; ++_i) {
		instance_create_depth(200+_i*200,800,0,obj_modio_schema_user, { data: _response.data[_i] })
	}
});

