export default function createObject(name: string, description: string, hp: number) {
  const object = {
    name,
    description,
    hp,
  };

  return (object);
}
