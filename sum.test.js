const { sumar } = require('./app');

describe('Pruebas de la función sumar', () => {
  
  test('2 + 3 debe ser igual a 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('0 + 0 debe ser igual a 0', () => {
    expect(sumar(0, 0)).toBe(0);
  });

  test('números negativos: -1 + -1 debe ser -2', () => {
    expect(sumar(-1, -1)).toBe(-2);
  });

});
