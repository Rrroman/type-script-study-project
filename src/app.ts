class JobClass {
  constructor(
    public job: string,
    private readonly secretPhrase: string,
    private nameList: string[] = [],
  ) {}

  greet(this: JobClass) {
    console.log(`Hello ${this.job} ${this.secretPhrase}`);
  }

  hireWorker(name: string) {
    this.nameList.push(name);
  }

  printWorkersListInfo() {
    console.log(
      `We hired ${this.nameList.length} workers. They are ${this.nameList}`,
      this.nameList,
    );
  }
}

const bob = new JobClass('Director', 'Sun is shining, flowers are smelling');
bob.greet();

bob.hireWorker('Greg');
bob.hireWorker('Gim');
bob.hireWorker('Jonathan');

bob.printWorkersListInfo();

class Musician extends JobClass {
  constructor(musicStyle: string, private food: string) {
    super(musicStyle, 'Cats sing songs');
  }

  sayFavoriteFood(oneMoreDish: string) {
    console.log(`I just love ${this.food} and ${oneMoreDish}`);
  }
}
const tom = new Musician('singer', 'i like borscht');

tom.greet();
tom.sayFavoriteFood('Crabs');
