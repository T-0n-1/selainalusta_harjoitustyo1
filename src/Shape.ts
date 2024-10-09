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

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}

abstract class Shape {
  constructor(
    private _name: string = "Circle",
    private _location: Point = new Point()
  ) {}

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get location(): Point {
    return this._location;
  }
  set location(value: Point) {
    this._location = value;
  }

  toString(): string {
    return `name: ${this.name}, location: ${this.location}`;
  }

  abstract draw(): void;
}
