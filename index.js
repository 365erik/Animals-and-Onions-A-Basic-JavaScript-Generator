function* randomAnimalGeneratorFunc() {
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

const randomAnimalGenerator = randomAnimalGeneratorFunc();

const animal = () => {
  const a = randomAnimalGenerator.next();
  
  if (!a.done) {
    return a.value === "🧅" ? "🧅🧅🧅🧅 Onions!!!!" : a.value;
  }

  return `You're out of animals (and onions).`;
};

const onion = () => {
  let o = randomAnimalGenerator.next();
  let list = [];
  
  while (!o.done) {
    if (o.value === "🧅") {
      list = [...list, "🧅🧅🧅🧅 Onions!!!!"];
      return list.join(", ");
    }
    list = [...list, o.value];
    o = randomAnimalGenerator.next();
  }

  return (list.length) ? list.join(", ") : `You're out of animals (and onions).`;
};
