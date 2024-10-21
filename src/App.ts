import {
  Point,
  Shape,
  Rectangle,
  Ellipse,
  Square,
  Circle,
  Shapes,
} from "./Shape";

const shapes: Shapes = new Shapes();
shapes.drawall();
shapes.add(new Rectangle("R1", new Point(1, 2), 11, 22));
shapes.drawall();
const name: string = "R2";
let s: Shape = shapes.remove(name) as Shape;
console.log(
  `Tried to remove by: ${name}, result: ${
    s != undefined ? s.toString() : "not found"
  }`,
);
shapes.drawall();
shapes.add(new Ellipse("E1", new Point(3, 4), 33, 44));
const p: Point = new Point(1, 2);
s = shapes.remove2(p) as Shape;
console.log(
  `Tried to remove by: ${p.toString()}, result: ${
    s != undefined ? s.toString() : "not found"
  }`,
);
shapes.drawall();
shapes.add(new Square("S1", new Point(5, 6), 55));
shapes.add(new Circle("C1", new Point(7, 8), 77));
shapes.drawall();
