console.log("animals");
// create a few types of animals
// birds
// cows
// dogs
// cats

type Mammals = {
  readonly legs: number;
  name: string;
  weight: 25 | 2000;
  hair: boolean;
};

type Birds = {
  readonly legs: 2;
  name: string;
  weight: 3 | 10;
  feathers: boolean;
};

type Animals = Birds | Mammals;

const eagle: Animals = {
  legs: 2,
  name: "eagle",
  weight: 10,
  feathers: true,
};

const rhino: Animals = {
    legs: 8,
    name: "big rhino",
    weight: 2000,
    hair: false
}