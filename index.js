 const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  sharding: false, //true or false
  shardAmount: 2, //Shard amount
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
 fetchInvites: true,
  token: process.env.TOKEN, //Discord Bot Token
  prefix: ["-"],
  mobile: false,
  autoUpdate: ["false"]//Change PREFIX to your Prefix
})

bot.onMessageUpdate() 
bot.onMessage(); // Allows Commands to Executed
bot.loadCommands(`./commands/`);
