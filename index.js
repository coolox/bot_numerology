const TelegramBot = require('node-telegram-bot-api');
const token = '6239067337:AAHb7yvjwJJBFo2umdEgzBIi-nulK6RQlhE';
const bot = new TelegramBot(token, { polling: true });
const response = require('./matrixResponse.js')

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Привет! Это бот Мяхри Рамазановой - консультанта по статистическому психоанализу. Я могу расчитать психоматрицу по дате рождения. Отправь мне дату рождения в формате 'ДД.ММ.ГГГГ'.");
  bot.sendSticker(chatId, 'https://raw.githubusercontent.com/coolox/my-sticker/main/images/sticker.webp')
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const dob = msg.text.split('.');

  if (msg.text === '/start') {
    return; // do nothing if the command is /start

  }if (msg.text === '/info') {
    bot.sendMessage(chatId, `Вы можите связаться со мно по 
    Telegram: https://t.me/myahri_ram
    Instagram: https://www.instagram.com/myahri_ram/`);
    bot.sendSticker(chatId, 'https://raw.githubusercontent.com/coolox/my-sticker/master/images/sticker-info.webp')

  } else if (dob.length === 3) {
    // If input is in the format 'dd.mm.yyyy'
    let day = parseInt(dob[0]);
    let month = parseInt(dob[1]);
    let year = parseInt(dob[2]);

    if (isNaN(day) || 31 < day || isNaN(month) || 12 < month || isNaN(year) || dob[2].length !== 4 ){
      // If any of the date components are not numbers, send an error message
      bot.sendMessage(chatId, "Неправельный формат даты. Пожалуйста отправте мне дату рождения в формате 'ДД.ММ.ГГГГ'.");
    } else {
      bot.sendMessage(chatId, response({ day, month, year }));
    }

  } else if (dob.length === 3 && dob[1].length > 1 && dob[0].length > 1 && dob[2]=== 4) {
    // If input is in the format 'd.m.yyyy'
    const day = parseInt(dob[0]);
    const month = parseInt(dob[1]);
    const year = parseInt(dob[2]);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      // If any of the date components are not numbers, send an error message
      bot.sendMessage(chatId, "Неправельный формат даты. Пожалуйста отправте мне дату рождения в формате 'ДД.ММ.ГГГГ'.");
    } else {
      bot.sendMessage(chatId, response({ day, month, year }));
    }
  } else {
    bot.sendMessage(chatId, "Неправельный формат даты. Пожалуйста отправте мне дату рождения в формате 'ДД.ММ.ГГГГ'.");
  }
});
