import * as pastemyst from './../../src/pastemyst'

new pastemyst.CreatePasteMyst(
	// Title of your paste
	'PasteMyst Paste',
	// When the paste should expire
	pastemyst.ExpiresOptions.never,
	// Pasty array. Include multiple objects for multiple pasties.
	[
		{
			// Language for syntax highlighting. Set to pastemyst.Languages.Autodetect for autodetection.
			language: pastemyst.Languages.Python,
			// Title of your pasty
			title: 'Pasty Title',
			// Code inside your pasty
			code: 'print("PasteMyst World!")',
		},
	]
)
	// Run the function to create a past
	.createPaste()
	// Return the response. If you want to get a link, do .then((res) => console.log(`https://paste.myst.rs/${res._id}`/))
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
