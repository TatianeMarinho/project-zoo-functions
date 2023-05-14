const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('É uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('Retorna undefined quando não passados parametros', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Retornar Parâmetro inválido, é necessário uma string quando não recebe uma string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Retorna a média das idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 3);
  });

  it('Retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('Retorna um array com a relação de dias em que não possui Monday', () => {
    expect(handlerElephants('availability')).not.toEqual(['Monday']);
  });

  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
