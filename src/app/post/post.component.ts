import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post: any;

  // post = {
  //   id: '',
  //   title: '',
  //   author: '',
  //   excert: '',
  //   image: '',
  //   date: ''
  // }

}
