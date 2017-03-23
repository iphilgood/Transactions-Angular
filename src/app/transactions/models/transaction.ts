export class Transaction {
  public static fromDto(data: any): Transaction {
    return new Transaction(data.from, data.target, data.amount, data.total, data.date);
  }

  constructor(public from: String,
              public target: String,
              public amount: Number,
              public total: Number,
              public date: Date) {
  }

  toDto(): any {
    return {
      from: this.from,
      target: this.target,
      amount: this.amount,
      total: this.total,
      date: this.date
    };
  }
}
