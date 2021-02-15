import axios, { AxiosRequestConfig } from 'axios'

interface pasty {
	title?: string
	language?: Languages
	code: string
}

interface EditPasty {
	_id: string
	title?: string
	language?: Languages
	code?: string
}

export enum Languages {
	Autodetect = 'Autodetect',
	Plaintext = 'Plaintext',
	APL = 'APL',
	PGP = 'PGP',
	ASN1 = 'ASN.1',
	Asterisk = 'Asterisk',
	Brainfuck = 'Brainfuck',
	Clang = 'C',
	C = 'C',
	Cpp = 'C++',
	Cobol = 'Cobol',
	Csharp = 'C#',
	Css = 'CSS',
	Clojure = 'Clojure',
	ClojureScript = 'ClojureScript',
	GSS = 'Closure Stylesheets (GSS)',
	CMake = 'CMake',
	CoffeeScript = 'CoffeeScript',
	Lisp = 'Common Lisp',
	Cypher = 'Cypher',
	CSS = 'CSS',
	Crystal = 'Crystal',
	CQL = 'CQL',
	Dlang = 'D',
	D = 'D',
	Dart = 'Dart',
	Diff = 'Diff',
	Django = 'Django',
	Docker = 'Docker',
	DTD = 'DTD',
	Dylan = 'Dylan',
	EBNF = 'EBNF',
	ECL = 'ECL',
	EDN = 'edn',
	Eiffel = 'Eiffel',
	Elm = 'Elm',
	Ejs = 'Embedded Javascript',
	ERB = 'Embedded Ruby',
	Erlang = 'Erlang',
	Esper = 'Esper',
	Factor = 'Factor',
	FCL = 'FCL',
	Forth = 'Forth',
	Fortran = 'Fortran',
	Fsharp = 'F#',
	Gas = 'Gas',
	Gherkin = 'Gherkin',
	GFM = 'GitHub Flavored Markdown',
	githubMarkdown = 'GitHub Flavored Markdown',
	Go = 'Go',
	Groovy = 'Groovy',
	HAML = 'HAML',
	Haskell = 'Haskhell',
	haskhellLiterate = 'Haskell (Literate)',
	Haxe = 'Haxe',
	HXML = 'HXML',
	ASPNet = 'ASP.NET',
	HTML = 'HTML',
	HTTP = 'HTTP',
	IDL = 'IDL',
	Pug = 'Pug',
	Java = 'Java',
	JSP = 'Java Server Pages',
	JavaScript = 'JavaScript',
	JSON = 'JSON',
	JSONLD = 'JSON-LD',
	JSX = 'JSX',
	Jinja2 = 'Jinja2',
	Julia = 'Julia',
	Kotlin = 'Kotlin',
	Less = 'Less',
	LiveScript = 'LiveScript',
	Lua = 'Lua',
	Markdown = 'Markdown',
	mIRC = 'mIRC',
	MariaDBSQL = 'MariaDB SQL',
	Mathematica = 'Mathematica',
	Modelica = 'Modelica',
	MUMPS = 'MUMPS',
	MSSQL = 'MS SQL',
	mbox = 'mbox',
	MySQL = 'MySQL',
	Nginx = 'Nginx',
	NSIS = 'NSIS',
	NTriples = 'NTriples',
	ObjectiveC = 'Objective-C',
	OCaml = 'Ocaml',
	Octave = 'Octave',
	Oz = 'Oz',
	Pascal = 'Pascal',
	PEGjs = 'PEG.js',
	Perl = 'Perl',
	PHP = 'PHP',
	Pig = 'Pig',
	PLSQL = 'PLSQL',
	PowerShell = 'PowerShell',
	PropertiesFiles = 'Properties files',
	ProtoBuf = 'ProtoBuf',
	Python = 'Python',
	Puppet = 'Puppet',
	Qlang = 'Q',
	Q = 'Q',
	RScript = 'R',
	R = 'R',
	reStructuredText = 'reStructuredText',
	RPMChanges = 'RPM Changes',
	Ruby = 'Ruby',
	Sas = 'Sas',
	Sass = 'Sass',
	Scala = 'Scala',
	Scheme = 'Scheme',
	SCSS = 'SCSS',
	Shell = 'Shell',
	Sieve = 'Sieve',
	Slim = 'Slim',
	Smalltalk = 'Smalltalk',
	Smarty = 'Smarty',
	Solr = 'Solr',
	SML = 'SML',
	Soy = 'Soy',
	SPARQL = 'SPARQL',
	Spreadsheet = 'Spreadsheet',
	SQL = 'SQL',
	SQLite = 'SQLite',
	Squirrel = 'Squirrel',
	Stylus = 'Stylus',
	SWIFT = 'SWIFT',
	sTeX = 'sTeX',
	LaTeX = 'LaTeX',
	SystemVerilog = 'SystemVerilog',
	Tcl = 'Tcl',
	Textile = 'Textile',
	TiddlyWiki = 'TiddlyWiki',
	TikiWiki = 'TikiWiki',
	TOML = 'TOML',
	Tornado = 'Tornado',
	troff = 'troff',
	TTCN = 'TTCN',
	TTCNCFG = 'TTCN_CFG',
	Turtle = 'Turtle',
	TypeScript = 'TypeScript',
	TypeScriptJSX = 'TypeScript-JSX',
	Twig = 'Twig',
	WebIDL = 'WebIDL',
	VBNET = 'VB.NET',
	VBScript = 'VBScript',
	Velocity = 'Velocity',
	Verilog = 'Verilog',
	VHDL = 'VHDL',
	Vue = 'Vue.js Component',
	VueJSComponent = 'Vue.js Component',
	XML = 'XML',
	Xquery = 'Xquery',
	YACAS = 'Yacas',
	YAML = 'YAML',
	Z80 = 'Z80',
	mscgen = 'mscgen',
	xu = 'xu',
	msgenny = 'msgenny',
}

export enum ExpiresOptions {
	never = 'never',
	OneHour = '1h',
	TwoHours = '2h',
	TenHours = '10h',
	OneDay = '1d',
	TwoDays = '2d',
	OneWeek = '1w',
	OneMonth = '1m',
	OneYear = '1y',
}

export class CreatePasteMyst {
	title: string
	expiresIn: ExpiresOptions
	pasties: pasty[]

	constructor(title: string, expiresIn: ExpiresOptions, pasties: pasty[]) {
		this.title = title
		this.expiresIn = expiresIn
		this.pasties = pasties
	}

	public async createPaste() {
		const response = await axios.post('https://paste.myst.rs/api/v2/paste', {
			title: this.title,
			expiresIn: this.expiresIn,
			pasties: this.pasties,
		})
		return response.data
	}
}

export class GetPasteMyst {
	id: string

	constructor(id: string) {
		this.id = id
	}

	public async getPaste() {
		const response = await axios.get(
			`https://paste.myst.rs/api/v2/paste/${this.id}`
		)

		return response.data
	}
}

export class GetPasteMystUser {
	username: string

	constructor(username: string) {
		this.username = username
	}

	public async getUser() {
		const response = await axios.get(
			`https://paste.myst.rs/api/v2/user/${this.username}`
		)

		return response
	}
}

export class GetPasteMystUserExists {
	username: string

	constructor(username: string) {
		this.username = username
	}

	public async getUserExists() {
		try {
			await axios
				.get(`https://paste.myst.rs/api/v2/user/${this.username}/exists`)
				.then(() => {
					return true
				})
		} catch {
			return false
		}
	}
}

export class CreatePasteMystLoggedIn {
	authorisation: string
	title: string
	expiresIn: ExpiresOptions
	isPrivate: boolean
	isPublic: boolean
	tags: string[]
	pasties: pasty[]

	constructor(
		authorisation: string,
		title: string,
		expiresIn: ExpiresOptions,
		isPrivate: boolean,
		isPublic: boolean,
		tags: string[],
		pasties: pasty[]
	) {
		this.authorisation = authorisation
		this.title = title
		this.expiresIn = expiresIn
		this.isPrivate = isPrivate
		this.isPublic = isPublic
		this.tags = tags
		this.pasties = pasties
	}

	config: AxiosRequestConfig = {
		headers: {
			'Content-Type': 'application/json',
			// @ts-ignore
			Authorization: this.authorisation,
		},
	}

	public async createPaste() {
		const response = await axios.post(
			'https://paste.myst.rs/api/v2/paste',
			{
				title: this.title,
				expiresIn: this.expiresIn,
				pasties: this.pasties,
				isPrivate: this.isPrivate,
				isPublic: this.isPublic,
				tags: this.tags,
			},
			this.config
		)
		return response.data
	}
}

export class GetPrivatePaste {
	authorisation: string
	id: string

	constructor(authorisation: string, id: string) {
		;(this.authorisation = authorisation), (this.id = id)
	}

	config: AxiosRequestConfig = {
		headers: {
			'Content-Type': 'application/json',
			// @ts-ignore
			Authorization: this.authorisation,
		},
	}

	public async getPaste() {
		const response = await axios.get(
			`https://paste.myst.rs/api/v2/paste/${this.id}`,
			this.config
		)

		return response.data
	}
}

export class EditPasteMyst {
	authorisation: string
	id: string
	title: string
	isPrivate: boolean
	isPublic: boolean
	tags: string[]
	pasties: EditPasty[]

	constructor(
		authorisation: string,
		id: string,
		title: string,
		isPrivate: boolean,
		isPublic: boolean,
		tags: string[],
		pasties: EditPasty[]
	) {
		this.authorisation = authorisation
		this.id = id
		this.title = title
		this.isPrivate = isPrivate
		this.isPublic = isPublic
		this.tags = tags
		this.pasties = pasties
	}

	config: AxiosRequestConfig = {
		headers: {
			'Content-Type': 'application/json',
			// @ts-ignore
			Authorization: this.authorisation,
		},
	}

	public async editPaste() {
		const response = await axios.patch(
			`https://paste.myst.rs/api/v2/paste/${this.id}`,
			{
				title: this.title,
				pasties: this.pasties,
				isPrivate: this.isPrivate,
				isPublic: this.isPublic,
				tags: this.tags,
			},
			this.config
		)
		return response.data
	}
}

export class DeletePasteMyst {
	id: string

	config: AxiosRequestConfig = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'KriGGIx4+EaxAL+65O0BU3flHVqArEzvSYHzxv/dGzU=',
		},
	}

	constructor(id: string) {
		this.id = id
	}

	public async deletePaste() {
		const response = await axios.delete(
			`https://paste.myst.rs/api/v2/paste/${this.id}`,
			this.config
		)

		return response.data
	}
}

export class GetLanguageByName {
	language: string

	constructor(language: string) {
		this.language = language
	}

	public async getLanguage() {
		const response = await axios.get(
			`https://paste.myst.rs/api/v2/data/language?name=${this.language}`
		)

		return response.data
	}
}

export class GetLanguageByExtension {
	extension: string

	constructor(extension: string) {
		this.extension = extension
	}

	public async getLanguage() {
		const response = await axios.get(
			`https://paste.myst.rs/api/v2/data/languageExt?extension=${this.extension}`
		)

		return response.data
	}
}

export class TimeExpiresUnixTimestamp {
	createdAt: number
	expiresIn: string

	constructor(createdAt: number, expiresIn: string) {
		this.createdAt = createdAt
		this.expiresIn = expiresIn
	}

	public async getUnixTimestamp() {
		const response = await axios.get(
			`https://paste.myst.rs/api/v2/time/expiresInToUnixTime?createdAt=${this.createdAt}&expiresIn=${this.expiresIn}`
		)

		return response.data
	}
}
