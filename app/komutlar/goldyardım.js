const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => { 
 if (!message.guild) {
  return }  
const embedyardim = new Discord.MessageEmbed()
  .setTitle("PREMİUM KOMUT LİSTESİ")
   .setColor('260aff')
      .setDescription('⬜️ | vp!pre-kanna = Premium Üye kanna Yazısı Yazar\n⬜️ | vp!pre-duyuru-kanal = Premium Üye Sunucusuna Duyuru Kanalı Ayarlar\n⬜️ | vp!pre-duyuru = Premium Üye Duyuru Yapar\n⬜️ | vp!pre-özel-komut-ekle = Premium Üye Bota Sunucusuna özel Komut Ekler\n⬜️ | vp!pre-özel-komut-sil = Premium Üye Bota Sunucusundaki özel Komutu Siler\n⬜️ | vp!pre-sahtemesaj = Premium Üye Sahte Mesaj Atar\n⬜️ | vp!pre-söyle = Premium Üye Botu Sesliye Çağırıp Konuşturur\n⬜️ | vp!pre-yaz = Premium Üye Botu İstediği Mesajı Bota Yazdırır\n⬜️ | vp!pre-oylama = Premium Üye Botu İstediği Sunucuda Oylama Yapabilir\n⬜️ | vp!pre-sil = Premium Üye Chatı Siler Değişik Bir Şekilde\n\n**vp!premium-satınal = Premium Üye Satın Alırsınız**')
      .setFooter('Premium Üye Her Hangi Bir Sunucuya Girdiğinde Premium Üye Geldi Diye Mesaj Atar')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,   
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'premium',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};