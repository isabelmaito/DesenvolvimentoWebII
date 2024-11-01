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
    {id: 1, title: 'Tecnologia da Informação', image: 'assets/TI.png'},
    {id: 2, title: 'Gestão de Obras', image: 'assets/TI.png'},
    {id: 3, title: 'Metodologias Ativas', image: 'assets/TI.png'},
    {id: 4, title: 'Projetos Mecânicos', image: 'assets/TI.png'},
    {id: 5, title: 'Processos de Fabricação', image: 'assets/TI.png'},
  ]

}
