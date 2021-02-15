import * as pastemyst from './../../../src/pastemyst'

// You can find your API key by going to https://paste.myst.rs/, go to profile and hit settings. Copy your API key and paste it here.
// Make sure not to leak your API key into public.

// In case you did not know, your paste ID is the numbers behind https://paste/myst.rs/

new pastemyst.GetPrivatePaste('pastemyst api key', 'private-paste-id')
	// Run the function to get the paste
	.getPaste()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
