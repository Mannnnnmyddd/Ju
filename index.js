//السورس الاساسي لـ اظهار رابط موقعك في ريبل ات
const express = require("express");
const app = express();
app.listen(() => console.log("Server started "));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
//https://ra3dstudio.com CopyRight Code
//كود تثبيت حسابك ٢٤ ساعة في روم فويس
const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
///
client.on('ready', async () => {

  console.log(`${client.user.username} is ready!`);
})
//  ثبات فويس 24ساعة v13 بدون اي مشاكل
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => { 
    setInterval( async () => { 
    client.channels.fetch(process.env.channel)
    .then((channel) => { 
        const VoiceConnection = joinVoiceChannel({ 
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
    }).catch((error) => { return; });
}, 1000)
});
//https://ra3dstudio.com CopyRight Codes
client.login(process.env.token);
//https://ra3dstudio.com CopyRight Codes
