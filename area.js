export const PI = 3.14159;

export function circleArea(radius) {
    return PI * radius * radius;
}

export function rectangleArea(length, breadth) {
    return length * breadth;
}

export function cylinderArea(radius, height) {
    return 2 * PI * radius * (radius + height);
}
