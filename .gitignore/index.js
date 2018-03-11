const Discord = require("discord.js");
const client = new.Discord.Client();
const token = "NDE0ODU1OTc5NTcwODIzMTY4.DYalRg.lwtYkyQHCEkMmsDlyHegou9rE8k";
var prefix = ".";
var mention = "<414855979570823168>";
var memberCount = Client.users.size;
var servercount = Client.guilds.size;

client.on("ready", () => {
	var servers = Client.guilds.array().map(g => g.name).join(',');
	console.log("......................................');
console.log('[!] Connection en cours ...\n[!]Veuillez patienté! \n[!]Les évenement sont après ! :){
	\n[!]Les prefix actuelle sont : ' + prefix + "\n[!] Mentions = " + mention + "\n[!] Nombres de membres:" + memberCount + "\n[!] nombre de servers: " + servercount + "\n ")
}
});
client.on('message', message => {
	if(message.content === '/ip'){
	message.reply('dzis.playmc.pe 62541 !');
}else if (message.content === {"Bonjour")){
	message.reply{'Bonjour à toi '};
}else if(message.content.startsWith('/botname')){
	client.user.setUsername(message.content.substr(9});
}else if (message.content === "/stats") {
	let m = " ";
	m += 'Il y a actuellement s{message.guild.channels.size} channels sur ce serveurs \n';
	m += 'Je suis en compagnie de s{message.guild.members.size} membres';
	m += 'Je suis présent dans s{client.guild.size} serveurs \n';
	message.author.sendMessage(m).catch(console.log);
}
});

client.login(lwtYkyQHCEkMmsDlyHegou9rE8k);
