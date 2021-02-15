import * as pastemyst from './../../../src/pastemyst'

// Name of the programming language
new pastemyst.GetLanguageByName('typescript')
	// Run the function to get info about the language
	.getLanguage()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
