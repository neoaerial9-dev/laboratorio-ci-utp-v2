/**
 * Suma dos números.
 *
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} Resultado de la suma de ambos números.
 */
function sumar(a, b) { return a + b; }

/**
 * Resta dos números.
 *
 * @param {number} a - Número al que se le realizará la resta.
 * @param {number} b - Número que se restará.
 * @returns {number} Resultado de la resta.
 */
function restar(a, b) { return a - b; }

/**
 * Multiplica dos números.
 *
 * @param {number} a - Primer factor.
 * @param {number} b - Segundo factor.
 * @returns {number} Resultado de la multiplicación.
 */
function multiplicar(a, b) { return a * b; }

/**
 * Divide dos números.
 *
 * @param {number} a - Dividendo.
 * @param {number} b - Divisor.
 * @returns {number} Resultado de la división.
 * @throws {Error} Si el divisor es cero.
 */
function dividir(a, b) {
    if (b === 0) throw new Error("No es posible dividir entre cero");
    return a / b;
}

/**
 * Exporta las funciones matemáticas para que puedan
 * ser utilizadas en otros archivos del proyecto.
 *
 * @module operaciones
 * @exports sumar
 * @exports restar
 * @exports multiplicar
 * @exports dividir
 */
module.exports = { sumar, restar, multiplicar, dividir };
