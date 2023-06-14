
var _folder_path = "./extracted/"
		
if(directory_exists(_folder_path))
	directory_destroy(_folder_path)
	
var _path = get_open_filename_ext("images|*.zip","",working_directory,"mod.io")

if (_path != "") {
	request_unzip = zip_unzip_async(_path, _folder_path)
}
