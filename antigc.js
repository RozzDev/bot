module.exports = (msg, chat) => {
    if (msg.body.toLowerCase() === '!antigc on') {
        msg.reply('❌ Grup hanya admin yang bisa kirim pesan.');
        chat.setMessagesAdminsOnly(true);
    }

    if (msg.body.toLowerCase() === '!antigc off') {
        msg.reply('✅ Semua member bisa kirim pesan.');
        chat.setMessagesAdminsOnly(false);
    }
};
