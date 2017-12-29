const Discord = require("discord.js")

const YTDL = require('ytdl-core');
const nodeopus = require('node-opus');
const ffmpeg = require('ffmpeg');
const fetchGifs = require('fetch-gifs');
const request = require('request');
const fs = require("fs");
const http = require('http');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const config = require("./config.json");

function play(connection, message, args) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(args[0]), {filter: "audioonly"});
  server.queue.shift();
  server.dispatcher.on("end", function() {
    if (server.queue[0]) play(connection, message);
    else connection.disconnect();
  });
}

var PREFIX = config.prefix;

var bot = new Discord.Client();
var servers = {};
var playing = ' ';

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on('message', async message => {
  
  bot.user.setPresence({game: {name: 'type u!help', type: 0}});  
  
if (!message.content.startsWith(PREFIX) || message.author.bot) return;

const args = message.content.slice(PREFIX.length).split(' ');
const command = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err);
  }
  
});

bot.login(process.env['SECRET']);