import * as pastemyst from './../../../src/pastemyst'

new pastemyst.DeletePasteMyst('pastemyst api key', 'paste id')
	.deletePaste()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
