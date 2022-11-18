# Grundläggande Javascript

Ett rätt resultat krävs på 2 av 4 problem för ett godkänt resultat.
4 av 4 för ett väl godkänt resultat.
Du har 4 timmar från att problemen delas ut att lämna in dina svar.

Läs uppgifterna noga, och alla kontroller är skriftkänsliga och skall returnera EXAKT det efterfrågade svaret.

## Kom igång

Klona ner repot till din dator och öppna projektet i VS Code så startar det automatiskt. Om det inte startar kan du köra en reload på VS Code.

Lös därefter det som har efterfrågats, du kan se i den inbyggda terminalen om du har löst problemet eller vad som är fel. När du har comittat och pushat upp dina ändringar startas rättningen automatiskt som en GitHub Action.

## Problem 1:

I den här uppgiften så skall vi räkna ut hur mycket en filmvisning på foketsbio har tjänat på sålda biljetter. In i funktionen så skickas två ingående värden, fee = kostnad för biljetten och soldTickets = antal sålda biljetter. Vi vill att funktionen returnerar ett tal på hur mycket biografen har tjänat på sålda biljtter.

```javascript
function solution1(fee, soldTickets) {
  return;
}
```

## Problem 2:

I denna funktion så skall vi skapa en James Bond funktion. De ingående parametrarna är ett förnamn och ett efternamn.
Sedan skall funktionen returnera en text sträng enligt klassis James Bond maner:
"My name is Bond, James Bond!"

```javascript
function solution2(fornamn, efternamn) {
  return;
}
```

## Problem 3:

I denna övning så skall vi skapa en funktion för att skriva ut en textsträng brevid en gilla knapp på en bild på en webbsida.
Den ingående parametern likes är en text array med namn på de som klickat på gilla knappen.
Är det inget namn så skall texten "Ingen har gillat bilden" skrivas ut. Har en person gillat så ska personens namn i singular skrivas ut som;
"Janne har gillat bilden". Upp till 4 namn skall skrivas ut i strängen, med ett och innan sista namnet;
"Janne, Kalle och Pelle har gillat bilden"
Vid fler namn än fyra skall så skall en siffra skrivas ut för att visa hur många som har gillat utöver de 4 utskrivna namnen.
"Janne, Kalle, Pelle, Anna och 5 till har gillat bilden"

```javascript
function solution3(likes) {
  return;
}
```

## Problem 4:

Denna funktion skall skapa korrekta HTML listor `<ul>` med barn `<li>` utifrån en text array som ingående parameter.
Den ingående listan är ett object på produkter med id, namn och pris.
Listan skall skapas med billigast produkt överst.

Listan kan se ut som:

```json
[
  { "id": 1, "namn": "Svart T-shirt", "pris": 199 },
  { "id": 2, "namn": "Bruna skor", "pris": 499 },
  { "id": 3, "namn": "Grön keps", "pris": 299 }
]
```

Det förväntade resultatet är ett html element enligt:

```html
<ul>
  <li id="1">Svart T-shirt</li>
  <li id="3">Grön keps</li>
  <li id="2">Bruna skor</li>
</ul>
```

```javascript
function solution4(produkter) {
  return;
}
```
