function isValidTimeFormat(time) {
    // Valida o formato HH:mm
    const matchWithColon = /^(\d{2}):(\d{2})$/.test(time);
    // Valida o formato H:mm
    const matchWithColonShort = /^(\d{1,2}):(\d{2})$/.test(time);
    // Valida o formato HHmm
    const matchWithoutColon = /^(\d{2})(\d{2})$/.test(time);
    // Valida o formato Hmm
    const matchWithoutColonShort = /^(\d{1,2})(\d{2})$/.test(time);
  
    return matchWithColon || matchWithColonShort || matchWithoutColon || matchWithoutColonShort;
  }
  
  function parseTimeToMinutes(time) {
    // Verifica se o formato é HH:mm
    const matchWithColon = time.match(/^(\d{2}):(\d{2})$/);
    if (matchWithColon) {
      return parseInt(matchWithColon[1], 10) * 60 + parseInt(matchWithColon[2], 10);
    }
  
    // Verifica se o formato é H:mm
    const matchWithColonShort = time.match(/^(\d{1,2}):(\d{2})$/);
    if (matchWithColonShort) {
      return parseInt(matchWithColonShort[1], 10) * 60 + parseInt(matchWithColonShort[2], 10);
    }
  
    // Verifica se o formato é HHmm
    const matchWithoutColon = time.match(/^(\d{2})(\d{2})$/);
    if (matchWithoutColon) {
      return parseInt(matchWithoutColon[1], 10) * 60 + parseInt(matchWithoutColon[2], 10);
    }
  
    // Verifica se o formato é Hmm
    const matchWithoutColonShort = time.match(/^(\d{1,2})(\d{2})$/);
    if (matchWithoutColonShort) {
      return parseInt(matchWithoutColonShort[1], 10) * 60 + parseInt(matchWithoutColonShort[2], 10);
    }
  
    throw new Error('Formato inválido. O horário deve estar no formato HH:mm ou H:mm ou HHmm ou Hmm.');
  }
  
  function calculateWorkHours(startTime, endTime, lunchBreak = '00:00') {
    console.log(`Validating startTime: ${startTime}, endTime: ${endTime}, lunchBreak: ${lunchBreak}`);
    
    // Validação de formato para horários de início e término
    if (!isValidTimeFormat(startTime) || !isValidTimeFormat(endTime)) {
      throw new Error('Formato inválido para os horários. Deve ser HH:mm ou H:mm ou HHmm ou Hmm.');
    }
  
    // Validação de formato para o intervalo de almoço
    if (!isValidTimeFormat(lunchBreak)) {
      throw new Error('Formato inválido para o intervalo de almoço. Deve ser HH:mm ou H:mm ou HHmm ou Hmm.');
    }
  
    // Converter horários e intervalo para minutos
    const startMinutes = parseTimeToMinutes(startTime);
    const endMinutes = parseTimeToMinutes(endTime);
    const lunchBreakMinutes = parseTimeToMinutes(lunchBreak);
  
    // Cálculo da diferença de minutos (ajustar se o horário de término for no próximo dia)
    let totalMinutesWorked = endMinutes - startMinutes;
    if (totalMinutesWorked < 0) {
      totalMinutesWorked += 24 * 60; // Ajusta caso o horário de término seja no próximo dia
    }
  
    // Subtrair o intervalo de almoço
    totalMinutesWorked -= lunchBreakMinutes;
  
    // Converter o total de minutos para horas
    const hoursWorked = totalMinutesWorked / 60;
    return hoursWorked;
  }

module.exports = { calculateWorkHours };
  