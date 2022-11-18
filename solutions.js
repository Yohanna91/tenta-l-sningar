/**
 * I den här uppgiften så skall vi räkna ut hur mycket en filmvisning på foketsbio
 * har tjänat på sålda biljetter. In i funktionen så skickas två ingående
 * värden, fee = kostnad för biljetten och soldTickets = antal sålda biljetter.
 * Vi vill att funktionen returnerar ett tal på hur mycket biografen har
 * tjänat på sålda biljtter.
 */
export function solution1(fee, soldTickets) {
  return fee * soldTickets;
}

solution1(100, 4);
/**
 * I denna funktion så skall vi skapa en James Bond funktion. De ingående parametrarna är ett förnamn och ett efternamn.
 * Sedan skall funktionen returnera en text sträng enligt klassis James Bond maner:
 * "My name is Bond, James Bond!"
 */
export function solution2(fornamn, efternamn) {
  return `My name is ${efternamn}, ${fornamn} ${efternamn}!`;
}
solution2('James', 'Bond');
/**
 * I denna övning så skall vi skapa en funktion för att skriva ut en textsträng brevid en gilla knapp på en bild på en webbsida.
 * Den ingående parametern likes är en text array med namn på de som klickat på gilla knappen.
 * Är det inget namn så skall texten "Ingen har gillat bilden" skrivas ut. Har en person gillat så ska personens namn i singular skrivas ut som;
 * "Janne har gillat bilden". Upp till 4 namn skall skrivas ut i strängen, med ett och innan sista namnet;
 * "Janne, Kalle och Pelle har gillat bilden"
 * Vid fler namn än fyra skall så skall en siffra skrivas ut för att visa hur många som har gillat utöver de 4 utskrivna namnen.
 * "Janne, Kalle, Pelle, Anna och 5 till har gillat bilden"
 * @param {Array<string>} likes
 */

export function solution3(likes) {
  switch (likes.length) {
    case 0: 
      return 'Ingen har gillat bilden';
    case 1: 
      return `${likes[0]} har gillat bilden`
    case 2:
      return `${likes[0]} och ${likes[1]} har gillat bilden`;
    case 3:
      return `${likes[0]}, ${likes[1]} och ${likes[2]} har gillat bilden`;
    case 4:
      return `${likes[0]}, ${likes[1]}, ${likes[2]} och ${likes[3]} har gillat bilden`;
  }
  if (likes.length > 4) {
    return `${likes[0]}, ${likes[1]}, ${likes[2]}, ${
      likes[3]
    } och ${likes.splice(4).length} till har gillat bilden`;
  }
}

solution3(['Yohanna', 'Janne', 'Kalle']);

/**
 * Denna funktion skall skapa korrekta HTML listor `<ul>` med barn `<li>` utifrån en text array som ingående parameter.
 * Den ingående listan är ett object på produkter med id, namn och pris.
 * Listan skall skapas med billigast produkt överst.
 */
export function solution4(arr) {
  arr = arr.sort((productA, productB) => productA.pris - productB.pris)

  const ul = document.createElement('ul')
  arr.forEach(product => {
    const li = document.createElement('li')
    li.id = product.id
    li.textContent = product.namn
    ul.appendChild(li)
  })
  return ul
}

const produkter = [
  {
    id: 1,
    namn: "Äpple",
    pris: 29
  },
  {
    id: 2,
    namn: "Hallon",
    pris: 15
  },
  {
    id: 3,
    namn: "Apelsin",
    pris: 10
  }
]

solution4(produkter)


