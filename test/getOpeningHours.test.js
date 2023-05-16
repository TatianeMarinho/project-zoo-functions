const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('É uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('O nome do dia da semana passado como argumento é em inglês?', () => {
    expect(getOpeningHours('Segunda', '09:00-AM')).tothrowError('The day must be valid. Example: Monday');
  });

  it('Se o horário não tem abreviação \'AM\' e \'PM\' lança um erro', () => {
    expect(getOpeningHours('Monday', '09:00')).tothrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Se o horário não representa um número', () => {
    expect(getOpeningHours('Monday', '08:0y-AM')).tothrowError('The 08:0y-AM should represent a number');
  });

  it('Se a hora não está no formato entre 0 e 12 am/pm', () => {
    expect(getOpeningHours('Monday', '24:00-AM')).tothrowError('The hour must be between 0 and 12');
  });

  it('Se os minutos não está no formato entre 0 e 59', () => {
    expect(getOpeningHours('Monday', '09:60-AM')).tothrowError('The minutes must be between 0 and 59');
  });

  it('Se não passar argumento retorne um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Se o argumento for Monday, 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Se o argumento for Tuesday, 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Se o argumento for Wednesday, 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});
