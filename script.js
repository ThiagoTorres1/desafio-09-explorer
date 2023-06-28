const studentList = [
  {
    name: 'Thiago',
    firstGrade: 8,
    secondGrade: 7
  },
  {
    name: 'Maria',
    firstGrade: 10,
    secondGrade: 7
  },
  {
    name: 'Lucas',
    firstGrade: 5,
    secondGrade: 6
  },
  {
    name: 'Daniel',
    firstGrade: 3,
    secondGrade: 7
  },
]

const average = (grade1, grade2, name) => {
  let finalAverage = ((grade1 + grade2) / 2).toFixed(2)
  return finalAverage >= 7 ? `${finalAverage} \nParabéns ${name}! Você foi aprovado(a) no concurso!` : `${finalAverage} \nNão foi dessa vez, ${name}! Tente novamente!`
}

const concourse = (student) => {
  let message = `A média do(a) aluno(a) ${student.name} foi: ${average(student.firstGrade, student.secondGrade, student.name)}`
  return message
}

for(let index of studentList) {
  let finalMessage = concourse(index)
  alert(finalMessage)
}