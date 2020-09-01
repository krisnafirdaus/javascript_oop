// Buatlah model class berdasarkan diagram di bawah. Kemudian buatlah masing-masing  object dari child class yang sudah dibuat
// - Pocong dan zombie beserta method boleh explore sendiri

class drakula {
  constructor(name, speed, healthPoint, attackPoint, isDead) {
    this.name = name;
    this.speed = speed;
    this.healthPoint = healthPoint;
    this.attackPoint = attackPoint;
    this.isDead = isDead;
  }
}

class kuyang extends drakula {
  gigit() {
    this.attackPoint += 200;
    return this.attackPoint;
  }

  supergigit() {
    this.attackPoint += 2000;
    return this.attackPoint;
  }
}

let point = new kuyang("dracula santuy", 50, 5000, 100, true);

console.log(point.name);
console.log(point.speed);
console.log(point.healthPoint);
console.log(point.attackPoint);
console.log(point.isDead);
console.log(point.gigit());
console.log(point.supergigit());

class vampire extends drakula {
  cekik() {
    this.attackPoint += 70;
    return this.attackPoint;
  }

  lompat() {
    this.attackPoint += 250;
    return this.attackPoint;
  }
}

let point2 = new vampire("vampire low", 50, 5000, 100, true);

console.log(point2.name);
console.log(point2.speed);
console.log(point2.healthPoint);
console.log(point2.attackPoint);
console.log(point2.isDead);
console.log(point2.cekik());
console.log(point2.lompat());
