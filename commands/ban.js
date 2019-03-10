module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Hey hey! Not so quick! You need the `BAN_MEMBERS` permission to swing the ban hammer!");

	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if (!member)
		return message.reply("Ah yes, I banned the air! Give me a user to ban!");
	if (!member.kickable)
		return message.reply("Hmm, I can't ban this user, they have a higher role than me. Check my permissions and try again!");

	let reason = args.slice(1).join(" ");
	if (!reason) reason = "No reason provided";

	await member.ban(reason)
		.catch((error) => message.reply(`Sorry ${message.author}, I couldn't ban this user because of ${error}, the developer has been notified of the issue.`));
	message.reply(`${member.user.tag} has been hit with the ban hammer by ${message.author.tag} because of ${reason}!`);
};

module.exports.help = {
	name: "ban",
	usage: "ban <user> [reason]",
	description: "nil",
	longdes: "Bans the user given.",
	mentionedperm: "BAN_MEMBERS",
	category: "Moderation"
};
