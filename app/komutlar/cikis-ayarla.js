const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let devtr = await db.fetch(`premod_${message.guild.id}`)
if (!devtr) return message.channel.send("Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını kullanamazsınız.")

//Bu bölümü kodunuzdaki export.run satırının hemen altına atın.

  if (!message.member.hasPermission("MANAGE_GUILD")) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        "**Baybay kanalını ayarlamak için `Sunucuyu Yönet` İznine sahip olmalısın!"
      );
    return message.channel.send(embed);
  }
  let kinal = db.fetch(`baybayK_${message.guild.id}`);
  if (db.has(`baybayK_${message.guild.id}`)) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(
        `**Baybay kanalı <#${kinal}> kanalına ayarlı! Kapatmak için** \`${ayarlar.prefix}çıkış-kanalkapat\``
      );
    return message.channel.send(embed);
  }

  let kanal = message.mentions.channels.first();

  if (!kanal) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        ` **Baybay Kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}çıkış-kanal #kanal\`**`
      );
    return message.channel.send(embed);
  }
  db.set(`baybayK_${message.guild.id}`, kanal.id);

  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`**Baybay kanalını ${kanal} olarak ayarlandı!**`);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["baybaykanal", "bb-kanal"],
  permLevel: 0
}; // ASTARIUS CODE SHARE
exports.help = {
  name: "çıkış-kanal",
  description: "Baybay kanalını ayarlamaya yarar.",
  usage: "çıkış-kanal #kanal"
};