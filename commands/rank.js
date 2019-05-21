var rbx = require("noblox.js");
module.exports.run = async (bot, message, args) => {
	if (!message.member.roles.get("579601910890233856")) return message.reply("Invalid permissons! You must be an SHR!").catch(() => bot.safeSend(message, module.exports.help.name));
	if (!args[1]) return message.reply("Usage: `;rank (username) (rank)`").catch(() => bot.safeSend(message, module.exports.help.name));
	rbx.getRoles(4435415).then((roles) => {
		rbx.getIdFromUsername(args[0]).then((result) => {
			rbx.getRankInGroup(4435415, result).then((currentRank) => {
				if (currentRank === 0) return message.reply("This person isn't in the group!").catch(() => bot.safeSend(message, module.exports.help.name));
				var rank = args.splice(1, args.length).join(" ");
				if (!roles.find((role) => role.Name === rank)) return message.reply("Not a valid rank name!").catch(() => bot.safeSend(message, module.exports.help.name));
				if (roles.find((role) => role.Name === rank).Rank > roles.find((role) => role.Name === "15 | Administrative Team").Rank || currentRank > roles.find((role) => role.Name === "15 | Administrative Team").Rank) return message.reply("You cannot change the rank of a 15 | Administrative Team, or anyone above the rank of one!.").catch(() => bot.safeSend(message, module.exports.help.name));
				rbx.setRank(4435415, result, roles.find((role) => role.Name === rank).Rank).then(async () => {
					message.reply(`Ranked \`${args[0]}\` to \`${rank}\``).catch(() => bot.safeSend(message, module.exports.help.name));
					await bot.channels.get("580112253110583296").send(`Alert! Since ${message.author.tag} requested, I have ranked \`${args[0]}\` to \`${rank}\`!`);
				}).catch((e) => {
					console.warn(e);
					message.reply("Couldn't rank this user in the group.").catch(() => bot.safeSend(message, module.exports.help.name));
				});
			}).catch((e) => {
				console.warn(e);
				message.reply("Couldn't fetch this user's rank.").catch(() => bot.safeSend(message, module.exports.help.name));
			});
		}).catch((e) => {
			console.warn(e);
			message.reply("Couldn't find this user.").catch(() => bot.safeSend(message, module.exports.help.name));
		});
	}).catch((e) => {
		console.warn(e);
		message.reply("Couldn't fetch group ranks.").catch(() => bot.safeSend(message, module.exports.help.name));
	});
},
module.exports.help = {
	name: "rank",
	usage: "rank <user> [rank]",
	description: "nil",
	longdes: "Ranks the user given.",
	mentionedperm: "Bot Permissions Role",
	category: "Utility"
};
