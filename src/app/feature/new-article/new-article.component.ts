import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor() { }

  public articleFormGroup: FormGroup = new FormGroup({
    articleTitle: new FormControl('', [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(100)
    ]),
    articleDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(2), 
      Validators.maxLength(250)
    ]),
    articleBody: new FormControl('', [
      Validators.required,
      Validators.minLength(2), 
      Validators.maxLength(2500)
    ]),
    articleTags: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
  })
  public tags: string = ''
  
  ngOnInit(): void {
    this.articleFormGroup.controls['articleTags'].valueChanges.subscribe(el => 
      this.tags = el.toLowerCase().split(' ')
      )
  }

  get articleTitle() { 
    return this.articleFormGroup.get('articleTitle'); 
  }
  get articleDescription() { 
    return this.articleFormGroup.get('articleDescription'); 
  }
  get articleBody() { 
    return this.articleFormGroup.get('articleBody'); 
  }
  get articleTags() { 
    return this.articleFormGroup.get('articleTags'); 
  }
  
  public onSubmit() {
    console.log("Article is published");
    this.articleFormGroup.reset();
  }
}
