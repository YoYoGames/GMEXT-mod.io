
var _file = get_open_filename_ext("*/*", "", working_directory, "mod.io")

if(_file != "")
{
	show_debug_message($"New File Attached: {filename_name(_file)} -> {_file}");
	array_push(array, _file)
}
