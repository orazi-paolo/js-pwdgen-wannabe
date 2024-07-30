/* Scaletta svolgimento
1. prendo il div interessato
2. imposto il numero standard da aggiungere alla password
3. chiedo all'utente il suo nome
4. chiedo all utente il suo cognome
5. chiedi il suo colore preferito
6. Creo la password
7. stampo l'output da mostrare al cliente
*/

// prendo il div dall html
const password = document.getElementById ('reccomendedPassword')
console.log(password)

// imposto il numero standard da aggiungere alla password

const number = '21'

// chiedo all utente il suo nome

const firstName = prompt('Qual è il tuo nome?', 'Paolo');
console.log(firstName)

// chiedo all'utente il suo cognome 

const lastName = prompt('E il tuo cognome?', 'Orazi')
console.log(lastName)

// chiedi all utente il suo colore preferito
const color = prompt('Qual è il tuo colore preferito?', 'Rosso')
console.log(color)

// Creo la password

const completePassword = firstName + lastName + color + number
console.log(completePassword)

// stampo l output da mostrare al cliente
password.innerText = 'La tua password consigliata è ' + completePassword

