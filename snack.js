class Snack {
  constructor(type) {
    this.type = type;
    this.deliciousLevel = 'extra';
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
    this.healthy = type.includes('Fruit')
  }
  getEaten() {
    this.amount -= 10;
    if(this.amount < 21) {
      this.cuttingItClose = true;
    }
  }
}

module.exports = Snack;
