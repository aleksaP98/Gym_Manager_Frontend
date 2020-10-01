import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts:Array<object>

  constructor(private postsService:PostsService) {
    this.posts = this.postsService.getPosts();
   }

  ngOnInit(): void {
  }

}
