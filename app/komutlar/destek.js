const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .addField(`Destek Sunucumuza Katılın!`, `https://discord.gg/vh6pvXc6FN`)
.setFooter(client.user.username, client.user.avatarURL())

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "destek-sunucu",
  description: "destek-sunucu",
  usage: "destek-sunucu"
};
