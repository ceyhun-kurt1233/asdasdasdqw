const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }  
let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send(":robot:  Bu Komutu Kullanabilmek İçin **Premium Üye** Olmalısın")}else{
      if( kullanıcı == 'gold'){

  let user = message.mentions.users.first();
  if (!user) return message.reply('Bir kişiyi etiketlemelisin!');
  
  if (user.bot === true) return message.reply('Bir insanı etiketle bot değil!');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('Yazılmasını istediğin yazıyı yazmalısın!');
  if (mesaj.includes("@everyone")) return message.reply('`@everyone` Etiketi Attıramasın');
  if (mesaj.includes("@here")) return message.reply('`@here` Etiketi Attıramasın');
  
  let x = /(m a l|ma l|m al|amk|sg|oç|sik|amına|amın|orospu|orospo|çocuğu|orosbu|orosbo|cocugu|mal|salak|kapçuk|amcık|amcuk|sikik|amk malı|amına kodum|amınakoduğum|amına koduğum)/
  if (mesaj.match(x)) return message.reply('ATıcağın Mesaj Küfür Barındırmamalı');
  
  message.delete();
  
  try {
  
  message.channel.createWebhook(user.username, user.avatarURL) //make the webhook with the authors name and avatar
    .then(wb => {
        const w = new Discord.WebhookClient(wb.id, wb.token) //get the webhook
        w.send(mesaj); //send the msg
        w.delete() //delete the webhook
    })
    
  } catch (err) {
  
    message.channel.send(`**Hata:** \n\`\`\`js\n${err}\n\`\`\``);
  
};

}

    }
}

    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 
};

exports.help = {
  name: 'pre-sahtemesaj',
  description: 'İstediğiniz yazıyı bota webhook ile etiketlenen kullanıcının ağzından yazdırır.',
  usage: 'yazdır <@kullanıcı> <yazı>'
};