class Point {
  private _x!: number;
  private _y!: number;

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

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}

abstract class Shape {
  private _name!: string;
  private _location!: Point;

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

  constructor(name: string = "parentShape", location: Point = new Point()) {
    this.name = name;
    this.location = location;
  }

  toString(): string {
    return `name: ${this.name}, location: ${this.location}`;
  }

  abstract draw(): void;
}

class Rectangle extends Shape {
  private _width!: number;
  private _height!: number;

  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }
  set height(value: number) {
    this._height = value;
  }

  constructor(
    name: string = "subshapeRectangle",
    location: Point = new Point(),
    width: number = 5,
    height: number = 5
  ) {
    super(name, location);
    this.width = width;
    this.height = height;
  }

  toString(): string {
    return `${super.toString()}, w: ${this.width}, h: ${this.height}`;
  }

  draw(): void {}
}

class Ellipse extends Shape {
  private _a!: number;
  private _b!: number;

  get a(): number {
    return this._a;
  }
  set a(value: number) {
    this._a = value;
  }

  get b(): number {
    return this._b;
  }
  set b(value: number) {
    this._b = value;
  }

  constructor(
    name: string = "subshapeEllipse",
    location: Point = new Point(),
    a: number = 5,
    b: number = 5
  ) {
    super(name, location);
    this.a = a;
    this.b = b;
  }

  toString(): string {
    return `${super.toString()}, w: ${this.a}, h: ${this.b}`;
  }

  draw(): void {}
}

class Square extends Rectangle {
  constructor(
    name: string = "subshapeSquare",
    location: Point = new Point(),
    side: number = 5
  ) {
    super(name, location, side, side);
  }
}

class Circle extends Ellipse {
  constructor(
    name: string = "subshapeCircle",
    location: Point = new Point(),
    r: number = 5
  ) {
    super(name, location, r, r);
  }
}
