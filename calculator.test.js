/**
 * Importación de las funciones matemáticas del módulo calculator.js.
 * Se importan las operaciones de suma, resta, multiplicación y división.
 */
const { sumar, restar, multiplicar, dividir } = require('./calculator');

/**
 * Conjunto de pruebas unitarias del módulo Calculadora UTP.
 *
 * describe() agrupa todas las pruebas relacionadas con la calculadora.
 */
describe('Pruebas Unitarias del Módulo Calculadora UTP', () => {
    /**
     * Prueba unitaria de la función sumar().
     * Verifica que la suma de 5 + 5 sea igual a 10.
     */
    test('Suma correcta de dos números', () => { expect(sumar(5, 5)).toBe(10); });

    /**
     * Prueba unitaria de la función restar().
     * Verifica que la resta de 10 - 4 sea igual a 6.
     */
    test('Resta correcta de dos números', () => { expect(restar(10, 4)).toBe(6); });

    /**
     * Prueba unitaria de la función multiplicar().
     * Verifica que la multiplicación de 3 * 4 sea igual a 12.
     */
    test('Multiplicación correcta', () => { expect(multiplicar(3, 4)).toBe(12); });

    /**
     * Prueba unitaria de la función dividir().
     * Verifica que la división de 20 / 5 sea igual a 4.
     */
    test('División correcta', () => { expect(dividir(20, 5)).toBe(4); });

    /**
     * Prueba de manejo de errores de la función dividir().
     * Comprueba que al intentar dividir entre cero
     * se genere el error esperado.
     */
    test('Error al dividir por cero', () => {
        expect(() => dividir(10, 0)).toThrow("No es posible dividir entre cero");
    });
});
