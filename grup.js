module.exports = async (msg, chat) => {
    const text = msg.body.toLowerCase();

    if (text.startsWith('!add ')) {
        const number = text.split(' ')[1];
        if (chat.isGroup) {
            await chat.addParticipants([`${number}@c.us`]);
            msg.reply(`✅ Berhasil menambahkan ${number}`);
        }
    }

    if (text.startsWith('!kick')) {
        if (!msg.mentionedIds.length) return msg.reply('Gunakan @ untuk memilih siapa yang dikick.');
        await chat.removeParticipants(msg.mentionedIds);
        msg.reply('✅ Anggota dikeluarkan.');
    }
};
