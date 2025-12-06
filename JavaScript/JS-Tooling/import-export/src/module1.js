// export { nome, sobrenome, idade, fullName };

// const nome = 'Gabriel';
// const sobrenome = 'Verdan';
// const idade = 28;

// function fullName(nome, sobrenome) {
//     return nome + " " + sobrenome;
// }


// Também posso EXPORTAR assim:

export const nome = 'Gabriel';
export const sobrenome = 'Verdan';
export const idade = 28;

// Esse DEFAULT pode ser exportado por qualquer nome.
// Só posso ter UM default por modulo.

export default function fullName(nome, sobrenome) {
    return nome + " " + sobrenome;
}