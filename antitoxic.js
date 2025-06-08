const badWords = ['anjing', 'goblok', 'tolol', 'babi'];

module.exports = (msg, chat) => {
    if (chat.isGroup) {
        const isToxic = badWords.some(word => msg.body.toLowerCase().includes(word));
        if (isToxic) {
            msg.reply('⚠️ Jangan toxic ya!');
        }
    }
};
