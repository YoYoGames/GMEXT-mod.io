
// Early exist if request id doesn't match
if(async_load[? "id"] != request) exit;

// Executes the callback if defined
if (is_callable(callback)) callback(async_load[? "status"], buff);

// Makes sure the buffer is released (if it exists)
if (buffer_exists(buff)) buffer_delete(buff);

instance_destroy();

