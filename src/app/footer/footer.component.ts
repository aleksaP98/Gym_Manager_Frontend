import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  posts:Array<object>;
  constructor(private postsService:PostsService) {
    this.posts = this.postsService.getPosts();
   }

  ngOnInit(): void {
  }

}
