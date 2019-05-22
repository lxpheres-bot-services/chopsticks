module.exports.run = async (bot, message, args) => {
	if (message.member.hasPermission("ADMINISTRATOR")) {
		const sayMessage = args.join(" ");
		message.channel.send(sayMessage);
		message.delete();
	} else {message.reply("You can't use this command! This command is for SHR's+!");}
};

module.exports.help = {
	name: "say",
	usage: "say <message>",
	description: "Sends the message as a bot.",
	longdes: "Sends the message given in the command as the bot.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};
