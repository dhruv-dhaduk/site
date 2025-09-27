/* eslint-disable no-restricted-properties */
/* eslint-disable @typescript-eslint/no-require-imports */
const readline = require('readline');

const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}

const apiId = Number(process.env.TELEGRAM_API_ID);
const apiHash = process.env.TELEGRAM_API_HASH;
const stringSession = new StringSession("");

(async () => {
    const client = new TelegramClient(stringSession, apiId, apiHash, {
        connectionRetries: 5,
    });

    await client.start({
        phoneNumber: async () => await ask('Enter your phone number: '),
        password: async () => await ask('2FA password (if any): '),
        phoneCode: async () => await ask('Code sent to Telegram: '),
        onError: console.log,
    });

    console.log('Login successful!');
    console.log('Save this session string in your .env');
    console.log(client.session.save());

    rl.close();
})();
