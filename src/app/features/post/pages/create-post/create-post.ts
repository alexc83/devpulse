import { ChangeDetectorRef, Component, inject, input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogpostService } from '../../services/blogpost-service';
import { MarkdownComponent } from 'ngx-markdown';
import { ImageService } from '../../../../shared/services/image-service';
import { getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule, MarkdownComponent],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {
  // inject services and change detector ref
  blogpostService = inject(BlogpostService);
  imageService = inject(ImageService);
  cdr = inject(ChangeDetectorRef);

  // content data
  contentData = signal('');

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

    coverImageUrl: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    })
  });

  // getters for form elements
  get title() {
    return this.createPostForm.controls.title;
  }

  get content() {
    return this.createPostForm.controls.content;
  }

  get coverImageUrl() {
    return this.createPostForm.controls.coverImageUrl;
  }

  // change content signal
  onChangeContent() {
    this.contentData.set(this.content.value);
  }

  // file upload
  onCoverImageSelected(input: HTMLInputElement) {
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    this.imageService.uploadImage(file.name, file)
      .then(snapshot => {
        getDownloadURL(snapshot.ref)
          .then(downloadURL => {
            this.createPostForm.patchValue({
              coverImageUrl: downloadURL
            });
            this.cdr.detectChanges();
            alert("Image uploaded successfully.");
          })
      });


  }
  // submit the form
  onFormSubmit() {
    if (!this.createPostForm.valid) {
      return;
    }

    this.blogpostService.createBlogPost(
      this.title.value,
      this.content.value,
      this.coverImageUrl.value
    );

    alert("Data saved successfully.");
    this.createPostForm.reset();
  }
}
