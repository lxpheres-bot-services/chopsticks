const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.roles.get("579601910890233856")) return message.reply("Nope, not today! You need to be an SHR+, nice try though.").catch(() => bot.safeSend(message, module.exports.help.name));
		let embed = new Discord.RichEmbed()
		.setTitle("K | Kauai Announcement")
		.setColor("#fff993")
		.setDescription(args.join(" "))
		.setFooter(`This announcement was made by ${message.author.tag}`, message.author.displayAvatarURL)
 		.setThumbnail("https://cdn.discordapp.com/attachments/438816225909276683/580512978277761025/image0.png");
		bot.channels.get("623608305222418443").send({embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "announce",
	usage: "announce <txt>",
	description: "Announcement command, no ping.",
	longdes: "An announcement command, with no ping.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};
