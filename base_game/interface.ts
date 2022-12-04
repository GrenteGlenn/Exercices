// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class Character {
  name : string;

  HP : number;

  STR : number;

  constructor(name: string, HP: number, STR: number) {
    this.name = name;
    this.HP = HP;
    this.STR = STR;
  }

  getName(): string {
    return this.name;
  }

  getHP(): number {
    return this.HP;
  }

  getSTR(): number {
    return this.STR;
  }

  setName(name: string) {
    this.name = name;
  }

  setHP(HP: number) {
    this.HP = HP;
  }

  setSTR(STR: number) {
    this.STR = STR;
  }
}
