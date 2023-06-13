
if(async_load[?"id"] == request)
{
	if(async_load[?"status"] == 1)
	{
		owner.download_process = async_load[?"contentLength"]/async_load[?"sizeDownloaded"]
	}
	
	if(async_load[?"status"] == 0)
	{
	    var _path = ds_map_find_value(async_load, "result");
    
		var _folder_path = "./extracted/"
		
		if(directory_exists(_folder_path)) directory_destroy(_folder_path)
		
		request_unzip = zip_unzip_async(_path, _folder_path)
	}
}
