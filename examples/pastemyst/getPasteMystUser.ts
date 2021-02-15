import * as pastemyst from './../../src/pastemyst'

// Username of the user
new pastemyst.GetPasteMystUser('codemyst')
	// Run the function to get the user
	.getUser()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
