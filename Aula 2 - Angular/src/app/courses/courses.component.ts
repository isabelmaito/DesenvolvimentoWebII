import { Component } from '@angular/core';
import { Courses } from '../models/courses';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses: Courses[]=[
    {Id: 1, IdCategory: 1, Title: 'Cursos de TI', Description: 'Lorem Ypslum', Cost: 2300, Image: 'assets/TI.png', Duration: '3 anos'},

  ]

}
