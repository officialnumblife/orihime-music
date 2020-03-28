const Discord = require("discord.js");
const { Client, Util } = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client({disableEveryone: true});
const config = require("./config.json");
const { RichEmbed } = require('discord.js');
const embed = new Discord.RichEmbed;
const Canvas = require ("canvas")
const moment = require("moment")

client.on("ready", async () => {
  console.log('BOT JAM SUDAH SIAP👤!!!')//log untuk menandakan bot kalian sudah online:v
    setInterval(() => {
     const status = [
      `Created by 『ғᴍᴄ』Misty zawe`,
      `🕛 ${moment().utcOffset('+0700').format("HH:mm")} (WIB)`,
      `🕛 ${moment().utcOffset('+0800').format("HH:mm")} (WITA)`,
      `🕛 ${moment().utcOffset('+0900').format("HH:mm")} (WIT)`
    ];
     let random = Math.floor(Math.random() * status.length)
     client.user.setPresence({ game: { name: status[random], type: "playing", url: "https://www.twitch.tv/_kibayy"}});
  }, 7000);
    console.log(`Logged in as : ${client.user.tag}`);
    console.log(`${client.user.username} is ready!`)
});
  


client.on('message', async message => { // eslint-disable-line
	if (message.author.bot) return undefined;
	let prefix = config.prefix;
	if (!message.content.startsWith(prefix)) return undefined;

	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length);
	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
  
const regex = /(https?:\/\/)?(www\.)?(discord(\.|dot|\(dot\))(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/ig.test(message.content);

if (regex) {
message.delete();
message.reply('<:Error:575148612166746112> | You don\'t have permission to run advertisement!') 
} 
  client.on('message', (message) => { 
  if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
    message.delete() //delete the message
      .then(message.channel.send('<:Error:575148612166746112> | You don\'t have permission to run advertisement!'))
  }
})
  
	
	try {
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args);
	} catch (e) {
		console.log(e.message)
	} finally {
		console.log(`${message.author.username} using command ${cmd}`);
	}
  
})

client.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.find(
    ch => ch.id === "660209942355116032"
  );
  if (!channel) return;
  const canvas = Canvas.createCanvas(1000, 500);
  const ctx = canvas.getContext("2d");
  console.log(member);
 
  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/624572225466400779/693417649383931974/images_8.jpeg"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 
  ctx.strokeStyle = "#FFFFFF";
  ctx.strokeRect(0, 0);
 
  ctx.font = "bold 50pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`WELCOME`, 496,377)
  
  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`${member.displayName} #${member.user.discriminator}`, 496,419)

  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.fillText(`Kamu Member ke ${member.guild.memberCount} di ${member.guild.name}`,496,460)
 
  ctx.beginPath();
	ctx.arc(495, 165, 130, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
  
 const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 365, 35, 260, 260);
 
 
  const att = new Discord.Attachment(canvas.toBuffer(), `${member.displayName}.png`);
  channel.send(`Selamat datang ${member.user} di server **DEADBYDEAD** <a:emoji_23:684359492946755595> Baca rules server di <#544201467762835502>, Cek juga <#542911754284302336> untuk mengetahui info terbaru. Semoga betah diserver ini <a:Eaaa:687149300140212245>
`, att);
});
 
client.on("guildMemberRemove", async member => {
  const channel = member.guild.channels.find(
    ch => ch.id === "660209942355116032"
  );
  if (!channel) return;
  const canvas = Canvas.createCanvas(1000, 500);
  const ctx = canvas.getContext("2d");
  console.log(member);
 
  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/624572225466400779/693417643788468265/images_9.jpeg");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 
  ctx.strokeStyle = "#FFFFFF";
  ctx.strokeRect(0, 0);
 
  ctx.font = "bold 50pt sans serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`GOOD BYE`, 496,377)
  
  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.textAlign = "center"
  ctx.fillText(`${member.displayName} #${member.user.discriminator}`, 496,419)

  ctx.font = " 30pt  serif"
  ctx.fillStyle = "#fff"
  ctx.fillText(`Member Sekarang ${member.guild.memberCount} di ${member.guild.name}`,496,460)
 
  ctx.beginPath();
	ctx.arc(495, 165, 130, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
  
 const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 365, 35, 260, 260);
 
 
  const att = new Discord.Attachment(canvas.toBuffer(), `${member.displayName}.png`);
  channel.send(`Selamat tinggal **${member.displayName}** <a:emoji_21:684359442170773524> Terimakasih atas kunjungannya. Semoga bahagia diluar sana, Mohon maaf yang sebesar besarnya apabila ada kata yang kurang berkenan atau ketidaknyamanan sewaktu disini <a:emoji_30:685056440515166333>`,att);
  
});



const express = require('express');
const http = require('http');
const app = express();

// 5 Minute Ping Times
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login(process.env.TOKEN);
//^^ TARO TOKEN BOT DI `.env` (yang ada logo kunci nya)
//format nya: BOT_TOKEN=YOUR_BOT_TOKEN;
