const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("EridiaBot, !help");
	console.log("Le bot à bien été connecté");
});

bot.login("NDE0ODU1OTc5NTcwODIzMTY4.DYbtVg.YmsCEnypAnd7yl7d4HH2YLhD1fg");
