export type CoffeeDataProps = {
  brewMethod: string;
  ratio: string;
  grind: string;
  instructions: string;
};

export const coffeeData = [
  {
    brewMethod: 'pour over',
    ratio: '1:17',
    grind: 'medium, medium-fine',
    instructions: 'pour over instructions'
  },
  {
    brewMethod: 'stovetop espresso',
    ratio: '1:7',
    grind: 'medium-fine',
    instructions: 'stovetop espresso instructions'
  },
  {
    brewMethod: 'french press',
    ratio: '1:15',
    grind: 'coarse',
    instructions: 'french press instruction'
  },
  {
    brewMethod: 'cold brew',
    ratio: '1:4',
    grind: 'coarse',
    instructions: 'cold brew instructions'
  }
];
