const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('Scan QR ini untuk login');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot sudah siap!');
});

client.on('message', async msg => {
    const chat = await msg.getChat();
    const text = msg.body.toLowerCase();

    // Plugin Handlers
    require('./plugins/grup')(msg, chat);
    require('./plugins/antilink')(msg, chat);
    require('./plugins/antitoxic')(msg, chat);
    require('./plugins/antigc')(msg, chat);
});

client.initialize();
