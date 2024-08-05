//base by DGXeon
//recode by Rapikz
//YouTube: @rapikgimangYT
//Instagram: Rapik_Gimang
//Telegram: t.me/2348183139975

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "Kalu-Bot-Md" //ur yt chanel name
global.socialm = "github.com/Kalukukuzi" //ur github or insta name
global.location = "Nigeria" //ur location

//new
global.botname = 'Kalu-Bot-Md' //ur bot name
global.ownernumber = '2348183139975' //ur owner number
global.ownername = 'Kalukukuzi Mota' //ur owner name
global.websitex = "i"
global.wagc = ""
global.themeemoji = '🪀'
global.wm = "https://chat.whatsapp.com/Jwoln4WrS0X2f7FWNE8oax"
global.botscript =  //script link
global.packname = "Kalu"
global.author = "Mota"
global.creator = "2348183139975@s.whatsapp.net"
global.xprefix = '&'
global.premium = ["2348183139975"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Succes'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})