import * as pastemyst from './../../../src/pastemyst'

new pastemyst.GetLanguageByName('typescript')
	.getLanguage()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
