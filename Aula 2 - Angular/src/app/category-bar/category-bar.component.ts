import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {

  categories: Category[]=[
    {id: 1, title: 'Cursos de TI', image: 'assets/TI.png'},
    {id: 2, title: 'Category 2', image: 'assets/TI.png'},
    {id: 3, title: 'Category 3', image: 'assets/TI.png'},
    {id: 4, title: 'Category 4', image: 'assets/TI.png'},
    {id: 5, title: 'Category 5', image: 'assets/TI.png'},
  ]

}
