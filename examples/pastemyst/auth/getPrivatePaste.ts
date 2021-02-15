import * as pastemyst from './../../../src/pastemyst'

new pastemyst.GetPrivatePaste('pastemyst api key', 'private-paste-id')
	.getPaste()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
