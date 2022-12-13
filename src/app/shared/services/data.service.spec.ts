import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  const article = {
    slug: "string",
    title: "string",
    description: "string",
    body: "string",
    tagList: [],
    createdAt: "Jun 15, 2015, 9:03:01 AM",
    updatedAt: "Jun 15, 2015, 9:03:01 AM",
    favorited: true,
    favoritesCount: 1.618,
    author: {
        username: "string",
        bio: "string",
        image: "string",
        following: true
    }
  }
  const params = {
    limit: 10,
    offset: 0
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: {
          get: () => of({})
        }}
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tags', waitForAsync(() => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'get').and.returnValue(of({tags: []}));
    const result = service.getTags();
    expect(spy).toHaveBeenCalledOnceWith('https://api.realworld.io/api/tags');
    result.subscribe(res => expect(res).toEqual([]));
  }));

  it('should get articles', waitForAsync(() => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'get').and.returnValue(of({articles: [article]}))
    const result = service.getArticles();
    expect(spy).toHaveBeenCalledOnceWith('https://api.realworld.io/api/articles', {params});
    result.subscribe(res => expect(res).toEqual([article]));
  }));
  
});
