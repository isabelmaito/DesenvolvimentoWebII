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
    {
    id: 1,
      idCategory: 1,
      title: 'Angular',
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      cost: 100,
      image: 'assets/angular.png',
      duration: '40 hours'
    },
    {
      id: 2,
      idCategory: 1,
      title: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
      cost: 120,
      image: 'assets/React-icon.svg',
      duration: '30 hours'
    },
    {
      id: 3,
      idCategory: 1,
      title: 'Vue.js',
      description: 'Vue.js is a progressive framework for building user interfaces.',
      cost: 90,
      image: 'assets/vuejs.png',
      duration: '25 hours'
    },
    {
      id: 4,
      idCategory: 1,
      title: 'Node.js',
      description: 'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.',
      cost: 80,
      image: 'assets/node-js-icon.png',
      duration: '20 hours'
    },
    {
      id: 5,
      idCategory: 1,
      title: 'Express.js',
      description: 'Express.js is a web application framework for Node.js, released as free and open-source software under the MIT License.',
      cost: 70,
      image: 'assets/express-js.png',
      duration: '15 hours'
    }
  ];
}
