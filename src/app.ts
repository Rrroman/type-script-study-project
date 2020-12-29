class JobClass {
  constructor(
    public job: string,
    private readonly secretPhrase: string,
    protected nameList: string[] = [],
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
  static iWantPhrase = 'I want to';

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

  static printSongNumber(songNum: number): void {
    console.log(`${Musician.iWantPhrase} hear song number ${songNum}`);
  }

  constructor(
    musicStyle: string,
    private food: string,
    private song: string[] = [],
  ) {
    super(musicStyle, 'Cats sing songs');
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
}

const tom = new Musician('singer', 'i like borscht');

console.log((tom.answer = 'Maroon 5 songs'));
// console.log((tom.answer = ''));
console.log(tom.songsAnswer);
tom.singSong('Happy New Year');
console.log(tom.songsAnswer);

tom.greet();
tom.sayFavoriteFood('Crabs');
tom.hireWorker('Steve');
tom.printWorkersListInfo();
Musician.printSongNumber(4);
