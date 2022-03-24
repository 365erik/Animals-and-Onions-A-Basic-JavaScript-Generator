function* randomAnimalGenerator() {
  let animals = [
    "🧅",
    "cat",
    "dog",
    "hamster",
    "bird",
    "snake",
    "turtle",
    "guinea pig",
    "horse",
    "fish",
    "mouse",
    "lemur",
    "whale",
    "crab",
  ];
  while (animals.length) {
    const i = Math.floor(Math.random() * animals.length);
    yield animals[i];
    animals.splice(i, 1);
  }
}

const getAnimal = randomAnimalGenerator();

const resetInstructions = `All out of animals! Reload the script to reset the demo.`;

const ohNoOnions = `OH, NO!!! 🧅🧅🧅🧅🧅🧅 ONIONS!!!'`;

const animal = () => {
  const a = getAnimal.next();
  if (!a.done) {
    return a.value === "🧅" ? "🧅🧅🧅🧅 Onions!!!!" : a.value;
  }

  return resetInstructions;
};

const onion = () => {
  let o = getAnimal.next();
  while (!o.done) {
    if (o.value === "🧅") {
      return "🧅🧅🧅🧅 Onions!!!!";
    }
    console.log(o.value);
    o = getAnimal.next();
  }

  return resetInstructions;
};
