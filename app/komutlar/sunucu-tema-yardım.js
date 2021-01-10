const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('#00001')
.setTitle('Velocty Sunucu Tema Şablon Sistem')
.setDescription(`**Tüm şablonlar ${client.user.username}'a Aittir.**
İçerikler de birden fazla tema var.

\`vp!j4j-tema\` 
**Hazır __join 4 join__ sunucu teması yollar**

\`vp!public-tema\` 
**Hazır karışık __public__ sunucu teması yollar**

\`vp!oyun-tema\` 
**Hazır __oyun__ sunucu teması yollar**

\`vp!gif-tema\` 
**Hazır gif share sunucu teması yollar**

\`vp!sunucu-kur\` 
**Klasik oyun & sohbet sunucusu kurar**

\`\`\`Farklı temalar için, Kendi sunucu şablonunuzu bize iletebilirsin!\`\`\``)
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-tema-sistem'
};