const readline = require('readline');
const { calculateWorkHours } = require('./calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  try {
    const startTime = await askQuestion('Digite o horário de início (HH:mm, H:mm, HHmm, Hmm): ');
    const endTime = await askQuestion('Digite o horário de término (HH:mm, H:mm, HHmm, Hmm): ');
    const lunchBreak = await askQuestion('Digite o intervalo de almoço (HH:mm, H:mm, HHmm, Hmm): ');

    const workHours = calculateWorkHours(startTime, endTime, lunchBreak);

    console.log(`Horas trabalhadas: ${workHours.toFixed(2)} horas`);
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  } finally {
    rl.close();
  }
}

main();
