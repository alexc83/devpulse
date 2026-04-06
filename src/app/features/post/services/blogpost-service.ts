import { inject, Injectable } from '@angular/core';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { BlogpostHelper } from '../../../core/helpers/blogpost-helper';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  firestore = inject(Firestore);


  createBlogPost(title: string, content: string, coverImageUrl: string) {
    /*
        This creates a collection for the database for using with the addDoc() method.
        USE THIS --> if you don't care about ID

        const postCollectionReference = collection(this.firestore, 'blog-posts');

     */
    /* addDoc -> don't care about the id
   addDoc(postCollectionReference,
     {
       title: title,
       content: content,
       publishedOn: new Date()
       slug: this.blogPostHelper.createSlug(title),
       coverImageUrl: coverImageUrl,
     }
   ); */

    // used to create a slug for the document id in the DB
    const slug = BlogpostHelper.createSlug(title);

    // create document for use with the setDoc() method
    //  USE THIS --> when you want to add a customized ID
    const blogPostDocumentReference = doc(this.firestore, 'blog-posts', slug);

    // setDoc -> set your own ID
    setDoc(blogPostDocumentReference, {
      title: title,
      content: content,
      publishedOn: new Date(),
      slug: BlogpostHelper.createSlug(title),
      coverImageUrl: coverImageUrl,
      // cover image
    });
  }


}
