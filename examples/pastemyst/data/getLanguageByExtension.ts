import * as pastemyst from './../../../src/pastemyst'

new pastemyst.GetLanguageByExtension('ts')
	.getLanguage()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
