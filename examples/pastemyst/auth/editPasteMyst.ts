import * as pastemyst from './../../../src/pastemyst'

// You can find your API key by going to https://paste.myst.rs/, go to profile and hit settings. Copy your API key and paste it here.
// Make sure not to leak your API key into public.
new pastemyst.EditPasteMyst(
	'pastemyst API token',
	// In case you did not know, your paste ID is the numbers behind https://paste/myst.rs/
	'paste id',
	// New paste title (optional, if you don't want to change it add in the previous one. Same goes for all other fields)
	'new title',
	// Should the paste only be accessible by you?
	false,
	// Show the paste on your profile
	false,
	// Tags
	['new', 'tags'],
	// Pasties
	[
		{
			// Pasty ID
			_id: 'pasty ID',
			// Pasty title
			title: 'new pasty title',
			// Pasty language for syntax highlighting
			language: pastemyst.Languages.ClojureScript,
			// The code inside the pasty
			code: '(println "New Edit!")',
		},
	]
)
	// Run the function to edit the paste
	.editPaste()
	// Log the response
	.then((res) => console.log(res))
	// Handle the errors
	.catch((err) => console.log(err))
