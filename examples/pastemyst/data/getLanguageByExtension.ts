import * as pastemyst from './../../../src/pastemyst'

// Get the language with extension ts (TypeScript 💞)
new pastemyst.GetLanguageByExtension('ts')
	// Run the function to get the language
	.getLanguage()
	// Log the language info
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
