import * as pastemyst from './../../src/pastemyst'

new pastemyst.GetPasteMyst('codemyst')
	.getPaste()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
