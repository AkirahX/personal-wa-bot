let fs = require('fs')
global.owner = ['5511973584242', '557197253350', '558381465775', '5527996456816'] // Seu número aqui
global.mods = [] // Precisa de ajuda?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Usuários premium tem coins ilimitados
global.APIs = { // API Prefix
  // web: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { // APIKey aqui
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'akirahxxx',
  'https://pencarikode.xyz': 'pais'
}

// Sticker WM
global.packname = 'Ni-Bot'
global.author = 't.me/nifytech'

global.multiplier = 20 // Levelup

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
