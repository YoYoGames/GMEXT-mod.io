
event_inherited();

locked = !extension_exists("GOG");

text = "GOG"

if (locked) return;

GOG_User_SignInGalaxy(false)

