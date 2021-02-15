import * as pastemyst from './../../src/pastemyst'

// the ID of the paste you want to get
new pastemyst.GetPasteMyst('codemyst')
	// Run the function to get the paste
	.getPaste()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
