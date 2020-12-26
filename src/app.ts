class JobClass {
  job: string;

  constructor(jobParam: string) {
    this.job = jobParam;
  }

  greet(this: JobClass) {
    console.log(`Hello ${this.job}`);
  }
}

const bob = new JobClass('director');
bob.greet();

const nick = { job: 'Waiter', greet: bob.greet };
nick.greet();
