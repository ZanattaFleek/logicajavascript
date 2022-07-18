'use strict';

/**
 * Divide o dividendo pelo divisor
 * @param {number} dividendo 
 * @param {number} divisor 
 * @returns Resultado da Divisão
 */
export function dividir(dividendo, divisor) {
    if (!divisor) {
        throw new Error('Informe um Divisor diferente de 0')
    } else {
        if (typeof dividendo != 'number' || typeof divisor != 'number') {
            throw new Error('Informe 2 números para a divisão')
        } else {
            return dividendo / divisor
        }
    }
}