const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
const googleTTS = require('google-tts-api');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }  
let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send(":robot:  Bu Komutu Kullanabilmek İçin **Premium Üye** Olmalısın")}else{

      if( kullanıcı == 'gold'){

  let yazi = args.join(" ")
  if (!message.member.voiceChannel) return message.channel.send(':man_facepalming:  | Öncelikle Sesli Bir kanala Katıl');
  if (!yazi) return message.channel.send('Sesli olarak söylenmesini istediğin mesajı belirtmelisin. \`vp!pre-söyle Merhaba\`')
  
  googleTTS(`${yazi}`, 'tr', 1).then(url => {
    message.member.voiceChannel.join().then(connection => {
      message.channel.send(`:thumbsup:  \`${yazi}\` **Mesajı Sesli Olarak Söyleniyor** :thumbsup: `)
      connection.playStream(url).on("end",() => {
        connection.disconnect();
      })
    })
  })
  
};

}

    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pre-söyle',
  description: "Gold üye özel botu konuşturma",
  usage: 'söyle'
};