export default function printArray(array: string[]) {
  console.log('List of destinations:');
  for (const element of array) {
    console.log(array.indexOf(element) + 1, '-', (element));
  }
}
