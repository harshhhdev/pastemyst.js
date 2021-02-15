import * as pastemyst from './../../../src/pastemyst'

new pastemyst.CreatePasteMystLoggedIn(
	'pastemyst api key',
	'Logged In Paste',
	pastemyst.ExpiresOptions.never,
	true,
	false,
	['PasteMyst API', 'pastemyst.js'],
	[
		{
			title: 'Pasty #1',
			language: pastemyst.Languages.Haskell,
			code: 'main = putStrLn "Hello PasteMyst!"',
		},
	]
)
	.createPaste()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
