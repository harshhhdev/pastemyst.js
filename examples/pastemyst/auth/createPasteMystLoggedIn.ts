import * as pastemyst from './../../../src/pastemyst'

// You can find your API key by going to https://paste.myst.rs/, go to profile and hit settings. Copy your API key and paste it here.
// Make sure not to leak your API key into public.
new pastemyst.CreatePasteMystLoggedIn(
	// replace with your API key
	'pastemyst api key',
	// Paste title
	'Logged In Paste',
	// Expiration time
	pastemyst.ExpiresOptions.never,
	// Make paste private - if it's private it's only accessible by the owner
	true,
	// Show paste on profile
	false,
	// Tags
	['PasteMyst API', 'pastemyst.js'],
	// Pasties
	[
		{
			// Pasty title
			title: 'Pasty #1',
			// Pasty language for syntax. Set to pastemyst.Languages.Autodetect for autodetection.
			language: pastemyst.Languages.Haskell,
			// The code inside the pasty.
			code: 'main = putStrLn "Hello PasteMyst!"',
		},
	]
)
	// Run the function to create a paste
	.createPaste()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
