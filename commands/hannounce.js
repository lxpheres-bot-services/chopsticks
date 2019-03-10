const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.roles.get("542492271342518272")) return message.reply("Nope, not today! You need to be an HR+, nice try though.").catch(() => bot.safeSend(message, module.exports.help.name));
	let embed = new Discord.RichEmbed()
		.setTitle("Soy House Announcement")
		.setColor("#ff4b4b")
		.setDescription(args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL)
	        .setThumbnail("https://cdn.discordapp.com/attachments/540914985036021770/552983211794235394/Adobe_Post_20190306_081657.jpg");
          bot.channels.get("540914985036021770").send("@here", {embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "hannounce",
	usage: "hannounce <txt>",
	description: "Announcement command using here.",
	longdes: "An announcement command using here.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};
