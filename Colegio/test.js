// Importamos la función que vamos a probar
const { validarCurso } = require('./datos.js');

// Importamos el módulo de aserciones
const assert = require('assert');

// Prueba para el atributo 'codigo'
it('Validar codigo', () => {
  assert.equal(validarCurso({ codigo: 'ABC123' }), true);
  assert.equal(validarCurso({ codigo: '' }), false);
});

// Prueba para el atributo 'nombre'
it('Validar nombre', () => {
  assert.equal(validarCurso({ nombre: 'Curso de Matemáticas' }), true);
  assert.equal(validarCurso({ nombre: '' }), false);
});

// Prueba para el atributo 'duracion'
it('Validar duracion', () => {
  assert.equal(validarCurso({ duracion: 60 }), true);
  assert.equal(validarCurso({ duracion: -30 }), false);
});

// Prueba para el atributo 'docente'
it('Validar docente', () => {
  assert.equal(validarCurso({ docente: 'John Doe' }), true);
  assert.equal(validarCurso({ docente: '' }), false);
});
