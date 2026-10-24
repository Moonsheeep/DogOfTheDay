const pElement = document.querySelector('p');

const today = new Date();
const startDay = new Date(2026, 9, 16); // the month is 0-indexed
const day = Math.floor((today - startDay) / 86400000);
pElement.textContent = day;

const heading = document.querySelector('h2');
heading.textContent = today.toLocaleDateString("de-DE");

async function showDailyDog(dayNumber) {
  const breedResponse = await fetch("https://dog.ceo/api/breeds/list/all");
  const breedData = await breedResponse.json();
  const breeds = Object.keys(breedData.message).sort();
  const breed = breeds[dayNumber % breeds.length];

  const imageResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const imageData = await imageResponse.json();
  const imageUrl = imageData.message[dayNumber % imageData.message.length];

  document.getElementById("caption").textContent = breed;
  document.getElementById("dog").src = imageUrl;
  // this seems like a badd idea
  document.getElementById("dog").title = breed;
}

showDailyDog(day);
