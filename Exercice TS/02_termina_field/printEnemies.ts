export default function printEnemies(array: string[]) {
  for (const value of array) {
    if (value.substring(0, 'evil'.length).toLowerCase() === 'evil') {
      console.log(value.replace(' ', '_'));
    }
    if (value.substring(0, 'bad'.length).toLowerCase() === 'bad') {
      console.log(value.replace(' ', '_'));
    }
    if (value.substring(0, 'rotten'.length).toLowerCase() === 'rotten') {
      console.log(value.replace(' ', '_'));
    }
    // console.log(value.substring(0, 'evil'.length))
  }
}
