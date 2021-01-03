class LunchBox {
  constructor(lunchboxObject) {
    this.owner = lunchboxObject.owner;
    this.material = lunchboxObject.madeOf;
    this.shape = lunchboxObject.shape;
    this.color = lunchboxObject.color;
    this.handle = true;
    this.snacks = [];
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks() {
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].healthy === true) {
        healthySnacks.push(this.snacks[i])
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;
