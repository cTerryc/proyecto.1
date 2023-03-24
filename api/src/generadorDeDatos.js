let usuarios = [];
let x = 11;
let z = 1;
for (let i = 99999991; i < 99999999; i++) {
  let userObjet = {
    name: `User Last ${x++}`,
    dni: String(i),
    email: `email_${z++}@gmail.com`,
  };
  usuarios.push(userObjet);
}

export let usersGenerate = [...usuarios];


// let codeCounter = 1;

// async function getCodeCounter() {
//   const record = await Counter.findOne({ where: { name: 'user_code_counter' } });
//   if (record) {
//     return record.value;
//   } else {
//     const newRecord = await Counter.create({ name: 'user_code_counter', value: codeCounter });
//     return newRecord.value;
//   }
// }

// async function incrementCodeCounter() {
//   codeCounter++;
//   const record = await Counter.findOne({ where: { name: 'user_code_counter' } });
//   if (record) {
//     await record.update({ value: codeCounter });
//   } else {
//     await Counter.create({ name: 'user_code_counter', value: codeCounter });
//   }
// }

// Users.beforeCreate(async (user, options) => {
//   // Generar código de usuario único
//   const code = user.name.substring(0, 3) + user.dni.substring(0, 3) + await getCodeCounter();
//   user.code = code;
//   await incrementCodeCounter();
// });
