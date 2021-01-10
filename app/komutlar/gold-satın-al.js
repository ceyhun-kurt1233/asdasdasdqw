const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
 if (!message.guild) {
  return }  
const embed = new Discord.MessageEmbed()
    .setColor('260aff')
  .setThumbnail('https://images-ext-2.discordapp.net/external/0aqG88keojh655IPOc6B-zqTLp2SQEgGmGDMhS6idAA/%3Fwidth%3D80%26height%3D80/https/images-ext-1.discordapp.net/external/zHhOS9Zfkbb6SiFZFtemKZEQa5nPbluyPM_CZVTwGos/%253Fwidth%253D413%2526height%253D413/https/media.discordapp.net/attachments/647143657471868930/649312286414209046/lotech.gif')
  .setDescription(`💰  1-AYLIK PREMİUM ÜYE 5 TL \n💰 1 YILLIK PREMİUM ÜYE 20 TL\n💰 SINIRSIZ PREMİUM ÜYE 60 TL \n\n**PREMİUM ÜYE ALMAK İÇİN**[TIKLA](https://discord.gg/9hB6nM3RQv)`,false)

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'premium-satınal',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};