var _folder_path = "./extracted/"
		
if(directory_exists(_folder_path))
	room_goto(rm_modio_play)
else
	show_debug_message("Mod Doesn't Exists")
	
