const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {
  message.react("✅");
   const hataembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Aç yada kapat yazmalısın!! Örnek: **vp!sa-as aç**')
     const hata = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!')

  if (!args[0]) return message.channel.send(hataembed)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(hata)
 
  if (args[0] === 'aç') {
     let acik = db.fetch(`saas_${message.guild.id}`)
    const hataembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Açık olan bir şeyi tekrar açamam.')
    if (acik) return message.channel.send(hataembed)
    db.set(`saas_${message.guild.id}`, 'acik')
         const ok = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sa As sistemi açıldı!')

    message.channel.send(ok)
 
  }
  
  if (args[0] === 'kapat') {
    let acik = db.fetch(`saas_${message.guild.id}`)
    const hataembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Açık olmayan bir şeyi kapatamam.')
    if (!acik) return message.channel.send(hataembed)
    db.delete(`saas_${message.guild.id}`)
    const ok = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sa As sistemi kapatıldı!')

    message.channel.send(ok)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['saas'],
  permLevel: 0,
  kategori: "Ayarlar"
};
 
exports.help = {
  name: 'sa-as',
  description: 'Sa As ayarlarsın.',
  usage: 'sa-as'
};