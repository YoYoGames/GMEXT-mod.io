
show_debug_message($"downloading: {owner.data.modfile.download.binary_url} -> {working_directory}");
request = http_get_file(owner.data.modfile.download.binary_url, $"{working_directory}/m_temp_file.zip");
