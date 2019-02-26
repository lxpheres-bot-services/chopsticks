const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MOVE_MEMBERS")) return message.reply("You cannot run this command. You must be a HR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Chopsticks Announcement")
		.setColor("#ff4b4b")
		.setDescription(args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL)
 		.setThumbnail("https://cdn.discordapp.com/attachments/546347946200006687/549740344418369537/image0-12.png");
	bot.channels.get("546347946200006687").send({embed: embed}).then(() => {
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
