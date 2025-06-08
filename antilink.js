module.exports = (msg, chat) => {
    if (chat.isGroup && msg.body.includes('https://chat.whatsapp.com/')) {
        msg.reply('❌ Link grup dilarang!');
        chat.removeParticipants([msg.author]);
    }
};
