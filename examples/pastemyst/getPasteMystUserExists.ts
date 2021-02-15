import * as pastemyst from './../../src/pastemyst'

// Username of the user
new pastemyst.GetPasteMystUserExists('codemyst')
	// Run the function to see if the user exists
	.getUserExists()
	// User exists
	.then((res) => console.log(res))
	// User doesn't exist
	.catch((err) => console.log(err))
