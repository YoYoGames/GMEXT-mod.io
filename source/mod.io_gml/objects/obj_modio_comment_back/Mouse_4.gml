
with (owner)
{
	if(page_index > 0)
	{
		page_index--
		refresh()
	}
	else show_debug_message("You are in the first page")
}
