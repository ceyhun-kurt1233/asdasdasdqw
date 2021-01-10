const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }  
let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send(":robot:  Bu Komutu Kullanabilmek İçin **Premium Üye** Olmalısın")}else{
      if( kullanıcı == 'gold'){
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setTitle(`PREMİUM ÜYE YAZDIRDIĞI MESAJ`)
     .setColor('8e0505')
    .setDescription(`**${mesaj}**`)
    return message.channel.send(embed);
     
    
  
  
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
  name: 'pre-yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};