const Calculatematrix = require('./calculateMatrix.js');

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