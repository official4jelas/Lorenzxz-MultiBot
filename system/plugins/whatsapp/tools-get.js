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

const fetch = require("node-fetch");
const util = require("util");

module.exports = {
    command: 'get',
    type: ['tools'],
    description: '*provide URL*',
    async execute(client, m, args) {
        const text = args.join(" ");
        if (!/^https?:\/\//.test(text)) {
            return await m.reply("Awali *URL* dengan http:// atau https://");
        }

        const ajg = await fetch(text);
        const contentLength = Number(ajg.headers.get("content-length"));
        if (contentLength > 100 * 1024 * 1024) {
            return await m.reply(`Content-Length: ${contentLength}`);
        }

        const contentType = ajg.headers.get("content-type") || "";
        if (contentType.startsWith("image/")) {
            return await client.sendMessage(
                m.chat,
                { image: { url: text } },
                { quoted: m }
            );
        }
        if (contentType.startsWith("video/")) {
            return await client.sendMessage(
                m.chat,
                { video: { url: text } },
                { quoted: m }
            );
        }
        if (contentType.startsWith("audio/")) {
            return await client.sendMessage(
                m.chat,
                { audio: { url: text }, mimetype: contentType },
                { quoted: m }
            );
        }
        
        let alak = await ajg.buffer();
        try {
            alak = util.format(JSON.parse(alak.toString()));
        } catch (e) {
            alak = alak.toString();
        } finally {
            return await m.reply(alak.slice(0, 65536));
        }
    }
}