import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogpostService } from '../../services/blogpost-service';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule, MarkdownComponent],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {
  // inject Blogpost Service
  blogpostService = inject(BlogpostService);

  // content data
  contentData = signal("");

  // Form
  createPostForm = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(100)],
    }),

    content: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(3000)],
    }),
  });

  // getters for form elements
  get title() {
    return this.createPostForm.controls.title;
  }

  get content() {
    return this.createPostForm.controls.content;
  }

  // change content signal
  onChangeContent() {
    this.contentData.set(this.content.value);
  }
  // submit the form
  onFormSubmit() {
    if (!this.createPostForm.valid) {
      return;
    }

    this.blogpostService.createBlogPost(this.title.value, this.content.value);
  }
}
