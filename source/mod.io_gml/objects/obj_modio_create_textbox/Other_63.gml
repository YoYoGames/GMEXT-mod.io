
if (async_load[? "status"])
{ 
 	if (async_load[? "result"] != "")
	{
		switch (async_load[? "id"])
		{
			case request:
				text = async_load[?"result"]
				break;
		}
	}
}
