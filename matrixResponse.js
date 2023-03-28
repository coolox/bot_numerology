const Calculatematrix = require('./calculateMatrix.js');

function response({ day, month, year }) {
   const results = Calculatematrix({ day, month, year });
  
  return (`Дата рождения: ${day}.${month}.${year}
    ${ results.character.join('')}${results.character.length === 0 ? '' : '/'}${results.energy.join('')}${results.energy.length === 0 ? '' : '/'}${results.interest.join('')}${results.interest.length === 0 ? '' : '/'}${results.helth.join('')}${results.helth.length === 0 ? '' : '/'}${results.logic.join('')}${results.logic.length === 0 ? '' : '/'}${results.work.join('')}${results.work.length === 0 ? '' : '/'}${results.luck.join('')}${results.luck.length === 0 ? '' : '/'}${results.duty.join('')}${results.duty.length === 0 ? '' : '/'}${results.memory.join('')}  Число Судьбы: ${results.destiny}  Быт: ${results.life}  Семья: ${results.family}  Цель: ${results.purposefulness}  Темперамент ${results.temperament}  Привычки: ${results.habits}`
  )
}

module.exports = response