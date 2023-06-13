import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
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
