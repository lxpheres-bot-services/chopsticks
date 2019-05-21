module.exports.run = async (bot, message) => {
	const client = bot;

	let totalSeconds = process.uptime();
	//let realTotalSecs = Math.floor(totalSeconds % 60);
	let days = Math.floor((totalSeconds % 31536000) / 86400);
	let hours = Math.floor((totalSeconds / 3600) % 24);
	let minutes = Math.floor((totalSeconds / 60) % 60);
	let seconds = Math.round(totalSeconds % 60);

	let up = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	message.channel.send({embed: {
		color: 15158332,
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		},
		title: "\n",
		description: "\n",
		fields: [{
			name: "K| Kauai Server Bot Uptime",
			value: up,
			inline: true
		},
		],
		timestamp: new Date(),
		footer: {
			icon_url: `${message.author.avatarURL}`,
			text: `Command ran by ${message.author.tag}`
		}
	}
	});
};

module.exports.help = {
	name: "up",
	usage: "up",
	description: "nil",
	longdes: "The amount of time the bot has been up.",
	mentionedperm: "None",
	category: "Utility"
};
