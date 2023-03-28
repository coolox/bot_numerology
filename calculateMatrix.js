function Calculatematrix ({day, month, year})  {
  const d = day
  const m = month
  const y = year
 
  const extraNumber1 = (d % 10 + Math.floor(d / 10))
    + (m % 10 + Math.floor(m / 10)) 
    + (y % 10 + Math.floor((y / 10) %10)+ Math.floor((y / 100) %10)+ Math.floor((y / 1000) %10))
  
  const extraNumber2 = extraNumber1 % 10 + Math.floor(extraNumber1 / 10)
  const extraNumber3 = extraNumber1 - (2 * (Math.floor(d / 10) !== 0 ? Math.floor(d / 10) : d %10 ))
  const extraNumber4 = extraNumber3 % 10 + Math.floor(extraNumber3 / 10)
  const digits = (extraNumber1.toString() + extraNumber2.toString() + extraNumber3.toString() + extraNumber4.toString()).split('').map((digit) => parseInt(digit))
  const allDigits = []
  allDigits.push(...d.toString().split('').map(digit => parseInt(digit)))
  allDigits.push(...m.toString().split('').map(digit => parseInt(digit)))
  allDigits.push(...y.toString().split('').map(digit => parseInt(digit)))
  allDigits.push(...digits)

  const character = allDigits.filter((digit => digit === 1))
  const energy = allDigits.filter((digit => digit === 2))
  const interest = allDigits.filter((digit => digit === 3))
  const helth = allDigits.filter((digit => digit === 4))
  const logic = allDigits.filter((digit => digit === 5))
  const work = allDigits.filter((digit => digit === 6))
  const luck = allDigits.filter((digit => digit === 7))
  const duty = allDigits.filter((digit => digit === 8))
  const memory = allDigits.filter((digit => digit === 9))
  const temperament = interest.length + logic.length + luck.length
  const purposefulness = character.length + helth.length + luck.length
  const family = energy.length + logic.length + duty.length
  const habits = interest.length + work.length + memory.length
  const life = helth.length + logic.length + work.length
  const destiny = extraNumber2 % 10 + Math.floor(extraNumber2 / 10)

  return {
    character, energy, interest, helth, logic, work, luck, duty, memory, temperament, purposefulness, family, habits, life, destiny
  }  
}

module.exports = Calculatematrix