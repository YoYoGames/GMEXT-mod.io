function GoogleSignIn_Show()
{
    google.accounts.id.initialize({
      client_id: GMS_API.extension_get_option_value("GoogleSignIn","html5ClientID"),
      callback: handleCredentialResponse
    });
	
    google.accounts.id.prompt((notification) => 
	{
		console.log(notification);
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) 
		{
            // try next provider if OneTap is not displayed or skipped
        }
		
		console.log(notification.getMomentType());
		console.log(notification.isDisplayed());
    });
}

function handleCredentialResponse(credentialResponse)
{
	
	GMS_API.send_async_event_social({
		type:"GoogleSignIn_Show",
		success:1.0,
		idToken:credentialResponse.credential
	});	
}
