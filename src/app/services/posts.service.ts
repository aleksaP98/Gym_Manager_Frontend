import { Injectable } from '@angular/core';
import posts from "../../assets/data/posts.json";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts:Array<object> = posts;
  constructor() { }
  getPosts(){
    return this.posts;
  } 
}
