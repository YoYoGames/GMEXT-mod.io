
if(locked) exit

var _buff = buffer_create(0, buffer_grow, 1);
GOG_User_RequestEncryptedAppTicket(_buff);
buffer_delete(_buff)


