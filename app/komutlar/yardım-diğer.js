const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`\`\`\`Velocty Diğer Kullanabileceğin Komutlar Aşağıda Yer Almakta.\`\`\`

🐦 \`vp!av\`
**Kullanıcının profilinde ki fotoğrafı gösterir**

📖 \`vp!duyuru\`
**Yazı içeriğini oluşturabilirsin**

🐱 \`vp!afk\`
**Cihaz başında olmadığınız süre için kullanırsın**

☁️ \`vp!davet\`
**Velocty bağlantılarını gönderir**

📋 \`vp!kurallar\`
**Velocty hazır tema ile kurallarınızı yerleştirir**

🌟 \`vp!yavaş-mod\`
**Velocty üyelerinizin belirlediğiniz sürede bir mesaj yazmasını sağlar**

\`vp!emote\`
**Emoji URL veya Emoji girerek eğlenceli emojinin çizilimini atar**

🐝 \`vp!emoji\`
**Velocty sunucunda ki emoji ismini yaz sana indirme bağlantısı verir**

🔞 \`vp!nsfw\`
**Cinsel içerikler içeride seni bekliyor**

🎲 \`vp!oyunlar\`
**Eğlenceye kendini kaptırma**

🔐 \`vp!kanal-kilit\` **&** \`vp!kilit-aç\`
**Kanalı kilitlemenize yarar**

❕ \`vp!çek [@etiket]\` **|** \`vp!kes [@etiket]\` **|** \`vp!git [@etiket]\`
**Belirli sesli kanalda ki kullanıcıyı yanına çekmeni sağlar ve kişiyi sesten atmanı sağlar. Seste yanına gitmeni sağlar**

💐 \`vp!rol-renk\`
**Velocty Telefon kullananlar için Rol Renk değiştirme**

🗑 \`vp!sil [100]\`
**Velocty bot kanaldaki mesajları siler**

\`vp!sunucudan-ayrıl\`
**Velocty ile kurmuş olduğunuz ayarlarınızı sıfırlayarak sunucundan çıkar**`).setThumbnail(''));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['other'],
  permLevel: 0
}

exports.help = {
  name: 'diğer'
};