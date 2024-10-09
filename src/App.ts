class Point {
  constructor(private _x: number = 0, private _y: number = 0) {}

  get x(): number {
    return this._x;
  }
  set x(value: number) {
    if (typeof value === "number") {
      this._x = value;
    }
  }

  get y(): number {
    return this._y;
  }
  set y(value: number) {
    if (typeof value === "number") {
      this._y = value;
    }
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

abstract class Shape {}
