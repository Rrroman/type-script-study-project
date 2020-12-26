class JobClass {
  job: string;
  private nameList: string[] = [];

  constructor(jobParam: string) {
    this.job = jobParam;
  }

  greet(this: JobClass) {
    console.log(`Hello ${this.job}`);
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

const bob = new JobClass('Director');
bob.greet();

bob.hireWorker('Greg');
bob.hireWorker('Gim');
bob.hireWorker('Jonathan');

// bob.nameList[6] = 'Nathan'; // Private field. Used to block this possibility to change array directly without method hireWorker().

bob.printWorkersListInfo();

// const jack = { job: 'Waiter', greet: bob.greet };
// jack.greet();
