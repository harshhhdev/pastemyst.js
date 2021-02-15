import * as pastemyst from './../../../src/pastemyst'

// Add in the unix timestamp, and the expires after.
new pastemyst.TimeExpiresUnixTimestamp(1588441258, '1w')
	// Run the function to get the Unix timestamp.
	.getUnixTimestamp()
	// Log the response
	.then((res) => console.log(res))
	// Handle the errors
	.catch((err) => console.log(err))
