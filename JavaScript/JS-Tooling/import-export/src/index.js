// Vulgo Modularização
import { nome, sobrenome, idade, fullName } from './module1';

// Ah, e se eu quiser importar TUDÃO
import * as TUDAO from './module1'; 

// IMPORT do da função com DEFAULT:
import qlqcoisa from './module1';
// Aqui to puxando a function fullName, por causa do DEFAULT.

console.log('DEFAULT: ' + qlqcoisa('gabriel', 'verdan'));

console.log('Importei tudo com o * Abaixo');
console.log(TUDAO);

/*
Não da pra redeclarar a variavel
Tipo const nome = 'oto nome'; (Já existe um NOME)
Para isso eu uso 'AS'
Ou posso fazer no EXPORT
*/

// console.log(fullName(nome, sobrenome), idade);
