<p align='center'>
    <a href="https://paste.myst.rs/">
    <img alt="PasteMyst" src="https://media.discordapp.net/attachments/790618243068067890/806980849043374100/unknown.png?width=433&height=465" width="300" />
    <h2 align="center">pastemyst.js</h2>
  </a>
  <p align="center">A Node.js API wrapper for PasteMyst</p>
  <p align="center">This provides full support for the current [v2 API](https://paste.myst.rs/api-docs/)</p>
</p>

# Usage

Individually, in the [examples folder](https://github1s.com/harshhhdev/pastemyst.js/tree/master/examples) you can find all your desired samples on how to get something going.

## /paste

### Creating a Paste

```ts
import * as pastemyst from './../../src/pastemyst'

new pastemyst.CreatePasteMyst(
	// Title of your paste
	'PasteMyst Paste',
	// When the paste should expire
	pastemyst.ExpiresOptions.never,
	// Pasty array. Include multiple objects for multiple pasties.
	[
		{
			// Language for syntax highlighting. Set to pastemyst.Languages.Autodetect for autodetection.
			language: pastemyst.Languages.Python,
			// Title of your pasty
			title: 'Pasty Title',
			// Code inside your pasty
			code: 'print("PasteMyst World!")',
		},
	]
)
	// Run the function to create a past
	.createPaste()
	// Return the response. If you want to get a link, do .then((res) => console.log(`https://paste.myst.rs/${res._id}`/))
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
```

### Logging in and creating a paste. 

This enables more options such as tags, making it public on your profile, and private pastes.

```ts
import * as pastemyst from './../../../src/pastemyst'

// You can find your API key by going to https://paste.myst.rs/, go to profile and hit settings. Copy your API key and paste it here.
// Make sure not to leak your API key into public.
new pastemyst.CreatePasteMystLoggedIn(
	// replace with your API key
	'pastemyst api key',
	// Paste title
	'Logged In Paste',
	// Expiration time
	pastemyst.ExpiresOptions.never,
	// Make paste private - if it's private it's only accessible by the owner
	true,
	// Show paste on profile
	false,
	// Tags
	['PasteMyst API', 'pastemyst.js'],
	// Pasties
	[
		{
			// Pasty title
			title: 'Pasty #1',
			// Pasty language for syntax. Set to pastemyst.Languages.Autodetect for autodetection.
			language: pastemyst.Languages.Haskell,
			// The code inside the pasty.
			code: 'main = putStrLn "Hello PasteMyst!"',
		},
	]
)
	// Run the function to create a paste
	.createPaste()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
```

### Deleting a paste

```ts
import * as pastemyst from './../../../src/pastemyst'

// You can find your API key by going to https://paste.myst.rs/, go to profile and hit settings. Copy your API key and paste it here.
// Make sure not to leak your API key into public.

// In case you did not know, your paste ID is the numbers behind https://paste/myst.rs/

new pastemyst.DeletePasteMyst('pastemyst api key', 'paste id')
	// Run the function to delete the paste
	.deletePaste()
	// Log the response
	.then((res) => console.log(res))
	// Handle the errors
	.catch((err) => console.log(err))
```

### Editing a paste

```ts
import * as pastemyst from './../../../src/pastemyst'

// You can find your API key by going to https://paste.myst.rs/, go to profile and hit settings. Copy your API key and paste it here.
// Make sure not to leak your API key into public.
new pastemyst.EditPasteMyst(
	'pastemyst API token',
	// In case you did not know, your paste ID is the numbers behind https://paste/myst.rs/
	'paste id',
	// New paste title (optional, if you don't want to change it add in the previous one. Same goes for all other fields)
	'new title',
	// Should the paste only be accessible by you?
	false,
	// Show the paste on your profile
	false,
	// Tags
	['new', 'tags'],
	// Pasties
	[
		{
			// Pasty ID
			_id: 'pasty ID',
			// Pasty title
			title: 'new pasty title',
			// Pasty language for syntax highlighting
			language: pastemyst.Languages.ClojureScript,
			// The code inside the pasty
			code: '(println "New Edit!")',
		},
	]
)
	// Run the function to edit the paste
	.editPaste()
	// Log the response
	.then((res) => console.log(res))
	// Handle the errors
	.catch((err) => console.log(err))
```

### Getting a paste

```ts
import * as pastemyst from './../../src/pastemyst'

// the ID of the paste you want to get
new pastemyst.GetPasteMyst('codemyst')
	// Run the function to get the paste
	.getPaste()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
```

### Getting a private paste 

```ts
import * as pastemyst from './../../../src/pastemyst'

// You can find your API key by going to https://paste.myst.rs/, go to profile and hit settings. Copy your API key and paste it here.
// Make sure not to leak your API key into public.

// In case you did not know, your paste ID is the numbers behind https://paste/myst.rs/

new pastemyst.GetPrivatePaste('pastemyst api key', 'private-paste-id')
	// Run the function to get the paste
	.getPaste()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
```

## /user

### Getting a user

```ts
import * as pastemyst from './../../src/pastemyst'

// Username of the user
new pastemyst.GetPasteMystUser('codemyst')
	// Run the function to get the user
	.getUser()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
```

### Checking if a user exists

```ts
import * as pastemyst from './../../src/pastemyst'

// Username of the user
new pastemyst.GetPasteMystUserExists('codemyst')
	// Run the function to see if the user exists
	.getUserExists()
	// User exists
	.then((res) => console.log(res))
	// User doesn't exist
	.catch((err) => console.log(err))
```

## /data

### Getting a language by extension

```ts
import * as pastemyst from './../../../src/pastemyst'

// Get the language with extension ts (TypeScript 💞)
new pastemyst.GetLanguageByExtension('ts')
	// Run the function to get the language
	.getLanguage()
	// Log the language info
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
```

### Getting a language by name

```ts
import * as pastemyst from './../../../src/pastemyst'

// Name of the programming language
new pastemyst.GetLanguageByName('typescript')
	// Run the function to get info about the language
	.getLanguage()
	// Log the response
	.then((res) => console.log(res))
	// Handle errors
	.catch((err) => console.log(err))
```

### /time

### Time Expires to Unix Timestamp

```ts
import * as pastemyst from './../../../src/pastemyst'

new pastemyst.TimeExpiresUnixTimestamp(1588441258, '1w')
	.getUnixTimestamp()
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
```
