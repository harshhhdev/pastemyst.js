import * as pastemyst from './../../../src/pastemyst'

new pastemyst.EditPasteMyst(
	'pastemyst API token',
	'paste id',
	'new title',
	false,
	false,
	['new', 'tags'],
	[
		{
			_id: 'pasty ID',
			title: 'new pasty title',
			language: pastemyst.Languages.ClojureScript,
			code: '(println "New Edit!")',
		},
	]
)
	.editPaste()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
