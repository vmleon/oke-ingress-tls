const joker = require('one-liner-joke')
const cowsay = require('cowsay')
const lolcatjs = require('lolcatjs');

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const { body: joke } = joker.getRandomJoke()

const cowsayConfig = {
   text: joke,
   wrap: true,
   wrapLength: 10
}

lolcatjs.fromString(cowsay.say(cowsayConfig))
