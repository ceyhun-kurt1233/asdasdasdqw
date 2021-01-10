const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://im2.ezgif.com/tmp/ezgif-2-a3b4201ada02.gif', 'https://im2.ezgif.com/tmp/ezgif-2-a3b4201ada02.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Velocty Ana Menüsüne Hoş Geldin Dostum :innocent:
${client.user} Kullanırken \`@Velocty\` rolünü en yukarıda tutunuz.**
**
🐝 \`vp!premium\`



🆙 \`vp!diğer\`



🦋 \`vp!yetkili\`  



🔥 \`vp!oyunlar\` 




**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://im2.ezgif.com/tmp/ezgif-2-a3b4201ada02.gif').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};