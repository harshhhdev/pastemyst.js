import * as pastemyst from './../../src/pastemyst'

new pastemyst.GetPasteMystUserExists('codemyst')
	.getUserExists()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
