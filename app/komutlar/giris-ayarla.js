const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  let devtr = await db.fetch(`premod_${message.guild.id}`)
if (!devtr) return message.channel.send("Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını kullanamazsınız.")

//Bu bölümü kodunuzdaki export.run satırının hemen altına atın.

if(!message.member.hasPermission("MANAGE_GUILD")) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('**Hoşgeldin kanalını ayarlamak için `Sunucuyu Yönet` İznine sahip olmalısın!')
return message.channel.send(embed)
}
let kinal = db.fetch(`hgK_${message.guild.id}`)
if(db.has(`hgK_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`**HG kanalı <#${kinal}> kanalına ayarlı! Kapatmak için** \`${ayarlar.prefix}giriş-kanalkapat\``)
return message.channel.send(embed)
}
  
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`**Hoşgeldin kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}giriş-kanal #kanal\`**`)
return message.channel.send(embed)
}
db.set(`hgK_${message.guild.id}`, kanal.id);

const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`**Hoşgeldin kanalını ${kanal} olarak ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
}; // Astarius Code Share
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['hoşgeldinkanal','hg-kanal'],
permLevel: 0
};
exports.help = {
name: 'giriş-kanal',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'hgkanal #kanal'
};