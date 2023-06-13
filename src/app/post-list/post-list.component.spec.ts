import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(300)),
    ]),
  ],
})
export class PostListComponent {
  posts = [
    {
      title: 'Meu primeiro post',
      content: 'Este é o conteúdo do meu primeiro post...',
      date: '2023-06-01',
      author: 'João'
    },
    {
      title: 'Outro post interessante',
      content: 'Este é o conteúdo de outro post...',
      date: '2023-06-05',
      author: 'Maria'
    }
  ];
}
