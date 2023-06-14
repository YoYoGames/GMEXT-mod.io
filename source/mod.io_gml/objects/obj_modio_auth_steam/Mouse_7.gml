
if (locked) return;

var _buff = buffer_create(0, buffer_grow, 1);
steam_user_request_encrypted_app_ticket(_buff);
buffer_delete(_buff);

