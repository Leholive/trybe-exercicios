    // 1-
    const newEmployees = (newRegister) => {
    const employees = {
      id1: newRegister ('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: newRegister ('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: newRegister ('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  }; 

  const newRegister = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com`};
  };

  console.log(newEmployees(newRegister));

  //   2-
    const resultSort = (aposta, sorteio) => { 
    const sorteado = Math.floor(Math.random() * (6 - 1) + 1);
    return sorteio(sorteado, aposta);
  };
  const sorteio = (sorteado, escolhido) => {
    if (sorteado === escolhido) {
        return 'Parabéns você ganhou!';
     } else {
         return 'Tente novamente';
     }
}

  console.log(resultSort(2, sorteio));

//   3-
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const confereGabarito = (answers, student, callback) => {
  const recebeNota = answers.reduce((acc,_,i) => (acc + callback(answers[i], student[i])), 1);
  return `Resultado: ${recebeNota} pontos`;
}

 const comparaResp = (answers, student) => {
  if (answers === student) return 1;
  if (answers === 'N.A') {
    return 0;
  } return -0.5;
  };


console.log(confereGabarito(gabarito, respostas, comparaResp));
