

exception_unhandled_handler(function(_exception)
{
	var _error_str =	"=============================== GML ERROR REPORT START ==============================="
	_error_str +=		"\n\n"
	_error_str +=		json_stringify(_exception, true);
	_error_str +=		"\n\n"
	_error_str +=		"================================ GML ERROR REPORT END ================================"
	show_debug_message(_error_str);
});
