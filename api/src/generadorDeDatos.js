let usuarios = [];

for (let i = 1 ; i < 31; i++) {
    let userObjet = {
        name: `User Last ${i}`,
        email: `email_${i}@gmail.com`,
        password: "clave"+i,
        id: i,
    }
    usuarios.push(userObjet)
}

export let usersGenerate = [...usuarios];