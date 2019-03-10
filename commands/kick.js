module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("KICK_MEMBERS") return message.reply("Well well well, back again for some more? You need the `KICK_MEMBERS` permissiont to use this command, good try though!");

	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if (!member)
		return message.reply("Ah, so I want to kick the air? Please give me a user to kick!");
	if (!member.kickable)
		return message.reply("Hey seems like this person has a higher role than me, check my permissions and double check again!");

	let reason = args.slice(1).join(" ");
	if (!reason) reason = "No reason provided";

	const wUser = member;

	await member.kick(reason)
		.catch((error) => message.reply(`Sorry ${message.author}, I couldn't kick because of : ${error}`));
	require("../resources/embed.js").log("Moderation Action - Kick", `**User:** ${wUser.user.tag} \n**Moderator:** ${message.author.tag} \n**Reason:** ${reason}`, message);
	wUser.send(`Hey there bud! You have been kicked from **${message.guild.name}** because of **${reason}**. Next time follow the rules!`);
	message.channel.send(`You got it! ${wUser.user.tag} was kicked for ${reason}, ${message.author.tag}.`);
};

module.exports.help = {
	name: "kick",
	usage: "kick <user> [reason]",
	description: "nil",
	longdes: "Kicks the user given.",
	mentionedperm: "KICK_MEMBERS",
	category: "Moderation"
};
