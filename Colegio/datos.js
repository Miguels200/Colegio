// Función para validar los datos del curso
function validarCurso(curso) {
  // Validación para el atributo 'codigo'
  if (!curso.codigo || curso.codigo === '') {
    return false;
  }

  // Validación para el atributo 'nombre'
  if (!curso.nombre || curso.nombre === '') {
    return false;
  }

  // Validación para el atributo 'duracion'
  if (typeof curso.duracion !== 'number' || curso.duracion <= 0) {
    return false;
  }

  // Validación para el atributo 'docente'
  if (!curso.docente || curso.docente === '') {
    return false;
  }

  return true;
}

// Exportamos la función
module.exports = { validarCurso };
