import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';
import { CanFly } from '../../pipes/can-fly.pipe';


@Component({
  selector: 'products-order',
  standalone: false,
  
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredavil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    },
  ]

  toogleUppercase(): void {
    this.isUpperCase = !this.isUpperCase;
  };

  changeOrder( value: keyof Hero ) {
    this.orderBy = value;
  }
}
