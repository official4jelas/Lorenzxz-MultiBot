/*******************************************************
 * @author  : Lorenzxz
 * @contact : 
 *      - YouTube: @Lorenzxz
 *      - Instagram: Lorenzxz
 *      - Telegram: t.me/Atzmus
 *      - GitHub: @Lorenzxz
 *      - WhatsApp: +6283879020370
 *      - WhatsApp Channel: https://whatsapp.com/channel/0029VamXcap4Crfjc2tSod1a
 * 
 * @description:
 *      Re-upload? Recode? Copy code? Give credit ya :)
 * 
 * @note:
 *      Want more free bot scripts? Subscribe to my YouTube channel:
 *      https://youtube.com/@LLorenzxz
 ******************************************************/

const fs = require('fs')

global.owner = "6285766450735" //owner number
global.footer = "_Lorenzxz ZcoderX_" //footer section
global.status = true //"self/public" section of the bot
global.telegram = {
token: '7884130330:AAH5bGqJ8B1W_Y7KgwYBcL8FNGa3yTC2nfc',
ownerid: '7721854443'
} //token and owner id for telegram bots, for debugging not filled no problem, do not confuse this token with the one in telegram.json
global.discord = {
token: ''
} //token for discord bots

global.mess = {
ingroup: "it's not funny, this feature is only for groups💢",
admin: "not funny, only group admins use this feature💢",
botadmin: 'make the bot a Group Admin first!',
owner: "wow! You're not my owner🗣️",
premium: "you are not a premium user",
seller: "you don't have access as a seller yet",
wait: '⏳ wait a minute sir...',
maintenance: 'this feature is currently under maintenance',
errorlink: 'input URL starting with https://',
error: 'this feature is encountering an error, immediately reporting to the owner bot!'
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
