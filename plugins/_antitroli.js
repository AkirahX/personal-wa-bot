let handler = m => m

handler.all = async function (m, { conn }) {
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
        m.reply('Algo suspeito detectado\n\n' + require('util').format(m.key), null)
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
        this.reply(global.owner[0] + '@s.whatsapp.net', `
Suspeito @${m.sender.split`@`[0]}
ID: ${m.isGroup ? m.chat : m.sender}
Nome: ${m.isGroup ? this.getName(m.chat) : this.getName(m.sender)}
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })

        if(m.isGroup){
            m.reply('')
            if(m.isBotAdmin){
                m.reply('Será removido como meio de prevenção, caso seja um erro de nossa parte será convidado novamente.')
                conn.groupRemove(m.chat, [m.sender])
            }
            
        }
    }
}
module.exports = handler