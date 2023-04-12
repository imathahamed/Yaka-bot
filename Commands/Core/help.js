module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "🤖",
  category: "Core",
  start: async (Miku, m, { prefix, pushName, NSFWstatus, args, commands, uptime }) => {
      const pad = (s) => (s < 10 ? "0" : "") + s;


          let txt = `
  ⎾ＬＩＳＴ ＯＦ ＣＯＭＭＡＮＤ ＭＥＮＵ⏌
    ════════════════════

           
    👾 *ʙᴀsɪᴄ* ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage ████████ *${prefa}core*
 ══════════════════════
    👾 ɢʀᴏᴜᴘ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage ████████ *${prefa}grpc*
 ══════════════════════
    👾 ᴍᴏᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage ████████ *${prefa}modc*
 ══════════════════════
    👾 ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs! Cᴀɴ ᴜsᴇ ɪɴ ɢʀᴏᴜᴘs.
    🈁 Usage ████████ *${prefa}func*
 ══════════════════════
    👾 ᴅᴏᴡɴʟᴏᴀᴅ ʏᴛ/ᴛɪᴋᴛᴏᴋ/ɪɢ ᴠɪᴅ/ᴀᴜᴅ (ɪɴᴄʟᴜᴅᴇ ᴅᴏᴄ ᴛʏᴘᴇ).
    🈁 Usage ████████ *${prefa}mediac*
 ══════════════════════
    👾 ᴀɴɪᴍᴇ, ɢᴏᴏɢʟᴇ, sᴏɴɢ ʟʏʀɪᴄs ᴇᴛᴄ.
    🈁 Usage ████████ *${prefa}searchc*
 ══════════════════════
    👾 ᴀᴜᴅɪᴏ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage ████████ *${prefa}utilitiesc*
 ══════════════════════
    👾 ᴍᴀᴋᴇ ᴀ sᴛɪᴄᴋᴇʀ/ϙᴜᴏᴛᴇ, ᴛᴜʀɴ ᴛᴏ ᴀᴜᴅ/ᴠɪᴅ.
    🈁 Usage ████████ *${prefa}imageeditc*
 ══════════════════════
    👾 sᴀʏ ᴀɴʏᴛʜɪɴɢ ɪɴ ᴇɴɢʟɪsʜ, ᴊᴀᴘᴀɴᴇsᴇ.
    🈁 Usage ████████ *${prefa}audioc*
 ══════════════════════
    👾 ᴍᴀᴋᴇ ᴀɴʏ ɪᴍᴀɢᴇ ɪɴᴛᴏ ʙʟᴜʀ, ᴄɪʀᴄʟᴇ ᴏʀ ʀᴇᴍᴏᴠᴇ ʙɢ.
    🈁 Usage ████████ *${prefa}essentialsc*
 ══════════════════════
    👾 *ᴏɴʟʏ ғᴏʀ ᴛʜᴇ ᴡᴇᴇʙs!* 
    👾 Iғ ʏᴏᴜ ʟᴜᴄᴋʏ, ᴄᴀɴ sᴇᴇ ᴛʜᴇ NSFW ᴄᴏᴍᴍᴀɴᴅs ᴀs ᴡᴇʟʟ.
    🈁 Usage ████████ *${prefa}weebc*
 ══════════════════════
    👾 ʀᴇᴀᴄᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage ████████ *${prefa}reactionc*
 ══════════════════════
    👾 ᴍᴀᴋᴇ ᴀɴ ᴀᴡsᴏᴍᴇ ʟᴏɢᴏ ᴜsɪɴɢ ʙᴏᴛ!
    🈁 Usage ████████ *${prefa}logomakerc*
 ══════════════════════
    👾 RPG ɢᴀᴍᴇ. Mɪɴᴇ!!
    🈁 Usage ████████ *${prefa}minecraftc*
 ══════════════════════
    👾 ɢᴇᴛ ᴛʜᴇ ᴇᴄᴏɴᴏᴍʏ ʀᴇʟᴀᴛᴇᴅ ᴄᴏᴍᴍᴀɴᴅs.
    🈁 Usage ████████ *${prefa}economyc*
 ══════════════════════

    
    📶 𝚂𝚎𝚛𝚟𝚎𝚛 𝚄𝚙𝚝𝚒𝚖𝚎 | *${uptime}*
     ☞ 𝙊𝙬𝙣𝙚𝙙 𝘽𝙮 | 𝖄𝖆𝖐𝖆𝖘𝖍𝖎`;
     
    await Miku.sendMessage(m.from, {
        video:{url: "https://media.tenor.com/7J5qrMbAAAYAAAPo/zero-two-dance.mp4"},
        caption:txt, 
        gifPlayback: true
    },
        {quoted:m})

      }
  }
