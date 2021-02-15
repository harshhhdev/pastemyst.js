import * as pastemyst from './../../../src/pastemyst'

new pastemyst.TimeExpiresUnixTimestamp(1588441258, '1w')
	.getUnixTimestamp()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
