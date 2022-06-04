const Discord = require("discord.js");  //Metiuw
const config = require("./config.json");
const client = new Discord.Client();    //Metiuw


client.on("ready", async () => {    //Metiuw
    console.log(`${client.user.username} Bot online`)

});

const izinliReklam = ["youtube", "youtu.be"];
let reklamlar = ["discord.app", "discord.gg", "discord.gg/", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"]


client.on('message', async message => {

    if (izinliReklam.some(word => message.content.toLowerCase().includes(word))) {
        return false;

    } else {
        if (reklamlar.some(word => message.content.toLowerCase().includes(word))) {

            if (message.member.hasPermission("ADMINISTRATOR")) return;  // Reklam yapan kişide yönetici yetkisi varsa return eder
            message.delete()
            message.member.roles.add(`${config.mutedrole}`);
        }
    }

});



client.on("messageUpdate", async (oldMsg, newMsg) => {

    if (izinliReklam.some(word => newMsg.content.toLowerCase().includes(word))) {
        return false;

    } else {
        if (reklamlar.some(word => newMsg.content.toLowerCase().includes(word))) {

            if (newMsg.member.hasPermission("ADMINISTRATOR")) return; // Reklam yapan kişide yönetici yetkisi varsa return eder
            newMsg.delete()
            message.member.roles.add(`${config.mutedrole}`);
        }
    }

});


//Bu bot metiuw tarafından yapılmıştır.
client.login(config.token);
