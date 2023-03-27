const TelegramBot = require('node-telegram-bot-api');
const token = '6239067337:AAHb7yvjwJJBFo2umdEgzBIi-nulK6RQlhE';
const bot = new TelegramBot(token, { polling: true });
const Calculatematrix = require('./calculateMatrix.js') ;

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Добро пожаловать к Боту Нумерологии. Я могу расчитать психоматрицу по дате рождения. Отправте мне дату рождения в формате 'ДД.ММ.ГГГГ'.");
  bot.sendSticker(chatId, 'https://raw.githubusercontent.com/coolox/my-sticker/main/images/sticker.webp')
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const dob = msg.text.split('.');

  if (msg.text === '/start') {
    return; // do nothing if the command is /start
  } else if (dob.length === 3) {
    // If input is in the format 'dd.mm.yyyy'
    let day = parseInt(dob[0]);
    let month = parseInt(dob[1]);
    let year = parseInt(dob[2]);

    if (isNaN(day) || 31 < day || isNaN(month) || 12 < month || isNaN(year) || dob[2].length !== 4 ){
      // If any of the date components are not numbers, send an error message
      bot.sendMessage(chatId, "Неправельный формат даты. Пожалуйста отправте мне дату рождения в формате 'ДД.ММ.ГГГГ'.");
    } else {

      const results = Calculatematrix({ day, month, year });
      const response = `Дата рождения: ${day}.${month}.${year}
  ${results.character.join('')}/${results.energy.join('')}/${results.interest.join('')}/${results.helth.join('')}/${results.logic.join('')}/${results.work.join('')}/${results.luck.join('')}/${results.duty.join('')}/${results.memory.join('')}  
  Число Судьбы: ${results.destiny} Быт: ${results.life} Семья: ${results.family} Цель: ${results.purposefulness} Темперамент: ${results.temperament} Привычки: ${results.habits}
          `;
        bot.sendMessage(chatId, response);
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
      const results = Calculatematrix({day, month, year});
      const response = `Дата рождения: ${day}.${month}.${year}
      
      Хараетер: ${results.character.join('')},
      Здоровье: ${results.helth.join('')},
      Удача: ${results.luck.join('')},
      Цель: ${results.purposefulness},
      Энергия: ${results.energy.join('')},
      Логика: ${results.logic.join('')},
      Долг: ${results.duty.join('')},
      Семья: ${results.family},
      Интерес: ${results.interest.join('')},
      Труд: ${results.work.join('')},
      Память: ${results.memory.join('')},
      Привычки: ${results.habits},
      Быт: ${results.life},
      Число Судьбы: ${results.destiny},
      Темперамент ${results.temperament}
      `;
    bot.sendMessage(chatId, response);
    }
  } else {
    bot.sendMessage(chatId, "Неправельный формат даты. Пожалуйста отправте мне дату рождения в формате 'ДД.ММ.ГГГГ'.");
  }
});


