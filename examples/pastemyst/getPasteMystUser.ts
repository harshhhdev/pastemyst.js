import * as pastemyst from './../../src/pastemyst'

new pastemyst.GetPasteMystUser('codemyst')
	.getUser()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
