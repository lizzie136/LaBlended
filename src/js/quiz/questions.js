var questions = [
  {
    title: '¿Cuáles son las características de un Set? (Marca todas las respuestas correctas)',
    answers: [
      ['Almacenan datos', true],
      ['Pueden existir dos elementos iguales', false],
      ['Los elementos están en cualquier orden', true],
      ['Comunican una intención y ocultan la implementación', true]
    ]
  },
  {
    title: 'Los Set se puede implementar usando un arreglo',
    answers: [
      ['Si', true],
      ['No', false]
    ]
  },
  {
    title: 'Los sets sirven para comunicar ______ y ocultar _______',
    answers: [
      ['Intención - implementación', true],
      ['Implementación - Intención', false],
      ['Implementación - Arreglo', false],
      ['Intención - Arreglo', false],
    ]
  },
  {
    title: 'Los elementos en Set se pueden repetir?',
    answers: [
      ['Si', false],
      ['No', true]
    ]
  },
  {
    title: 'Cuáles son las operaciones básicas sobre un Set?',
    answers: [
      ['add / delete', false],
      ['add / delete / update / list', false],
      ['add / delete / has / size', true]
    ]
  },
  {
    title: 'JavaScript NO permite implementar estructuras de tipo Set',
    answers: [
      ['Si', false],
      ['No', true]
    ]
  },
  {
    title: 'Existe un constructor Set "built-in" en JavaScript?',
    answers: [
      ['Si', true],
      ['No', false]
    ]
  },
  {
    title: '¿Qué operaciones son comunes entre sets?',
    answers: [
      ['Intersección', true],
      ['Multiplicación', false],
      ['Unión', true],
      ['Diferencia', true],
      ['División', false]
    ]
  }
];


module.exports = {
    questions: questions
};
