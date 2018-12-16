const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "."


client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});











const developers = ["507838661153259520","",""]
const adminprefix = ".";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Now Playig   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leaveserver")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Now Watching   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Now Listening   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'stream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**Now Streaming   ${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

   client.on('message', async message => {
  if(message.content.startsWith(prefix + "order")) {
    await message.channel.send("**name?:small_orange_diamond:**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**Invites? :small_blue_diamond:**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**wallet address:shopping_cart:**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()
 
ms.delete()
 
 message.channel.send('** wait..**').then(b => {
        setTimeout(() => {
  b.edit(`**done ,the order have been sent:white_check_mark:**`)
        },2000);
var gg = message.guild.channels.find('name','orders')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**name:scroll: » \n ${lan}\n Invites :moneybag: » \n ${md} \n wallet address :round_pushpin: » \n ${br}  \n discordusername :top: » <@${message.author.id}> **`)  
          .setFooter(`Rqmi,System Team♥`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})
client.login(process.env.BOT_TOKEN); 
