export default function calculateMode(input) {
    // Converte a entrada para um array de números, se for uma string
    const numbers = typeof input === 'string'
        ? input.split(',').map(num => Number(num.trim()))
        : Array.isArray(input)
        ? input
        : [];

    // Cria um mapa de frequências
    const frequencyMap = {};
    let maxFreq = 0;
    let mode = [];

    // Cria o mapa de frequências
    numbers.forEach(num => {
        if (!isNaN(num)) { // Verifica se o número é válido
            if (frequencyMap[num]) {
                frequencyMap[num]++;
            } else {
                frequencyMap[num] = 1;
            }
        }
    });

    // Encontra a maior frequência
    for (const key in frequencyMap) {
        const numericKey = Number(key);
        if (frequencyMap[numericKey] > maxFreq) {
            maxFreq = frequencyMap[numericKey];
            mode = [numericKey];
        } else if (frequencyMap[numericKey] === maxFreq) {
            mode.push(numericKey);
        }
    }

    return mode;
}
