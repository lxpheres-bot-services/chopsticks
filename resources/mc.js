let m = {};

const creator = class creator {
	constructor(response, client) {
		this.response = response;
		this.client = client;
		m = {};

		m.author = this.response.author;
		m.member = this.response.guild.members.get(this.response.author.id);
		m.channel = this.response.channel;
		m.content = this.response.content;
		m.ct = this.response.createdTimestamp;

		m.reply = function(cont) {
			m.channel.send(m.author + ", " + cont);
		};

		m.delete = function() {
			this.response.delete();
		};
	}

	get author() {
		return m.author;
	}

	get member() {
		return m.member;
	}

	get channel() {
		return m.channel;
	}

	get content() {
		return m.content;
	}

	get createdTimestamp() {
		return m.ct;
	}

	setAuthor(id) {
		m.author = this.client.users.get(id);
		m.member = this.response.guild.members.get(id);
		return m;
	}

	setContent(cont) {
		m.content = cont;
		return m;
	}

	setCT(ts) {
		m.ct = ts;
		return m;
	}

	setChannel(id) {
		m.channel = this.client.channels.get(id);
		return m;
	}

	createReplyMethod() {
		m.reply = function(cont) {
			m.channel.send(m.author + ", " + cont);
		};
	}
};

module.exports.Creator = creator;

const manager = class manager {
	constructor() {
		this.m = m;
	}

	args(me) {
		const args = me.content.split(" ");
		args.shift();
		return args;
	}
};

module.exports.Manager = manager;
