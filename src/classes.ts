abstract class JobClass {
  constructor(
    public job: string,
    protected secretPhrase: string,
    protected nameList: string[] = [],
  ) {}

  abstract greet(this: JobClass): void;

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

// const bob = new JobClass('Director', 'Sun is shining, flowers are smelling');
// bob.greet();

// bob.hireWorker('Greg');
// bob.hireWorker('Gim');
// bob.hireWorker('Jonathan');

// bob.printWorkersListInfo();

class Musician extends JobClass {
  static iWantPhrase = 'I want to';
  private static instance: Musician;

  get songsAnswer() {
    if (this.song.length < 1) {
      throw new Error('Just sing your songs');
    }
    return this.song;
  }

  set answer(newSong: string) {
    if (!newSong) {
      throw new Error('Please sing song!');
    }
    this.singSong(newSong);
  }

  private constructor(
    musicStyle: string,
    private food: string,
    private song: string[] = [],
  ) {
    super(musicStyle, 'Cats sing songs');
  }

  static getInstance() {
    if (Musician.instance) {
      return this.instance;
    }
    this.instance = new Musician('singer', 'i like borscht');
    return this.instance;
  }

  static printSongNumber(songNum: number): void {
    console.log(`${Musician.iWantPhrase} hear song number ${songNum}`);
  }

  hireWorker(name: string) {
    this.nameList.push(`Sound helper ${name}`);
  }

  sayFavoriteFood(oneMoreDish: string) {
    console.log(`I just love ${this.food} and ${oneMoreDish}`);
  }

  singSong(songs: string) {
    this.song.push(songs);
  }

  greet() {
    console.log(`Hello ${this.job} My secret is: ${this.secretPhrase}`);
  }
}

const tom = Musician.getInstance();
const kenny = Musician.getInstance();
console.log(`Is tom equal kenny? -> ${tom === kenny}`);

console.log((tom.answer = 'Maroon 5 songs'));
// console.log((tom.answer = ''));
console.log(tom.songsAnswer);
tom.singSong('Happy New Year');
console.log(tom.songsAnswer);

tom.greet();
tom.sayFavoriteFood('Crabs');
tom.hireWorker('Steve');
tom.printWorkersListInfo();
Musician.printSongNumber(42);
