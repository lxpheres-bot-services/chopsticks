const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  function clean(text, token) {
    if (typeof(text) === "string") {
        return text.replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
            .replace(new RegExp(token, "gi"), "[ HIDDEN ]");
    } else {
        return text;
    }
  }
	
  const allowedid = ['293060399106883584'];
  if (allowedid.includes(message.author.id)) {
    try {
      const code = args.join(" ");
      let executed = execute(code);
 
      if (typeof executed !== "string")
        executed = require("util").inspect(executed);
 
      //message.channel.send(clean(executed), {code:"xl"});
      const client = bot;
    message.channel.send({embed: {
    color: 3066993,
    description: "\n",
    fields: [{
        name: "Executed!",
        value: (`\`\`\`js\n${clean(executed, bot.token).substring(0, 500)}\`\`\``)
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `Exec ran by ${message.author.tag}`
    }
  }
});
    } catch (err) {
      message.channel.send({embed: {
    color: 15158332,
    description: "\n",
    fields: [{
        name: "Error!",
        value: (`\`\`\`x1\n${clean(err, bot.token)}\`\`\``)
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `Exec ran by ${message.author.tag}`
    }
  }
});
    }
  } else {message.reply("error! You do not have permission to use this command! You need to be a bot developer to use this command!")}
}

module.exports.help = {
	name: "exec",
	usage: "exec <code>",
	description: "nil",
	longdes: "Executes the code given.",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
