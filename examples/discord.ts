import * as pastemyst from '../dist/pastemyst.js'
import Discord from 'discord.js'

const client = new Discord.Client()

client.on('message', async (msg) => {
	const args = msg.content.split(' ')
	const cmd = args[0]

	if (cmd === '!pastemyst') {
		const paste = new pastemyst.CreatePasteMyst(
			// title
			'PasteMyst',
			// expiration time
			pastemyst.ExpiresOptions.never,
			// pasty
			[
				{
					// syntax language.
					language: pastemyst.Languages.Autodetect,
					// PastyTitle
					title: 'Codeblock Pasted from Discord',
					// Code inside of the Pasty
					code: args.slice(1).join(' '),
				},
			]
		)

		return paste.createPaste().then((res) => {
			msg.channel.send(`https://paste.myst.rs/${res._id}/`)
		})
	}
})

client.login('your-api-key-here')
