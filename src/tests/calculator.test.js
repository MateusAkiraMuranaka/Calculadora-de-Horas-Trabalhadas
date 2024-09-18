const { calculateWorkHours } = require('../services/calculator');

//UC1
test('deve calcular corretamente as horas trabalhadas', () => {
  const start = '08:00';
  const end = '17:00';
  const expectedHours = 9;
  expect(calculateWorkHours(start, end)).toBe(expectedHours);
});

test('deve lançar erro se o formato do horário for inválido', () => {
  const start = '08.00'; // formato inválido
  const end = '17:00'; // formato válido
  expect(() => calculateWorkHours(start, end)).toThrow('Formato inválido para os horários. Deve ser HH:mm ou H:mm ou HHmm ou Hmm.');
});

//UC2
test('deve descontar corretamente o intervalo de almoço das horas trabalhadas', () => {
  const start = '08:00';
  const end = '17:00';
  const lunchBreak = '01:00'; // intervalo de almoço de 1 hora
  const expectedHours = 8; // 9 horas de trabalho menos 1 hora de almoço
  expect(calculateWorkHours(start, end, lunchBreak)).toBe(expectedHours);
});

test('deve lançar erro se o formato do intervalo de almoço for inválido', () => {
  const start = '08:00'; // formato válido
  const end = '17:00'; // formato válido
  const lunchBreak = '1h'; // formato inválido
  expect(() => calculateWorkHours(start, end, lunchBreak)).toThrow('Formato inválido para o intervalo de almoço. Deve ser HH:mm ou H:mm ou HHmm ou Hmm.');
});

//UC3
test('deve calcular corretamente as horas trabalhadas se o horário de término for anterior ao horário de início', () => {
  const start = '22:00'; // início do trabalho
  const end = '06:00';   // término do trabalho (no dia seguinte)
  const lunchBreak = '00:00'; // sem intervalo
  const expectedHours = 8; // 8 horas de trabalho
  expect(calculateWorkHours(start, end, lunchBreak)).toBe(expectedHours);
});

//UC4
test('deve calcular corretamente as horas trabalhadas para horários sem ":"', () => {
  const start = '0800'; // formato HHmm
  const end = '1700'; // formato HHmm
  const lunchBreak = '01:00'; // formato HH:mm
  
  expect(calculateWorkHours(start, end, lunchBreak)).toBeCloseTo(8, 1); // 8 horas de trabalho menos 1 hora de intervalo
});