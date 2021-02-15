import * as pastemyst from './../../src/pastemyst'

new pastemyst.CreatePasteMyst(
	'PasteMyst Paste',
	pastemyst.ExpiresOptions.never,
	[
		{
			language: pastemyst.Languages.Python,
			title: 'Pasty Title',
			code: 'print("PasteMyst World!")',
		},
	]
)
	.createPaste()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
