
export enum Color {
    black = 'negro', 
    blue = 'azul', 
    green = 'verde',
    red = 'rojo',
}

export interface Hero {
    name: string;
    canFly: boolean;
    color: Color;
}