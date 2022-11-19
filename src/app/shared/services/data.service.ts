import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Article, Tags } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = "https://api.realworld.io/api";

  constructor(private httpClient: HttpClient) { }

  public getTags(): Observable<any> {
    return this.httpClient.get<{ tags: Tags }>(`${this.apiUrl}/tags`)
    .pipe(map(res => res.tags));
  }

  public getArticles(): Observable<any> {
    return this.httpClient.get<{ articles: Article[] }>(`${this.apiUrl}/articles`, {
      params: {
        limit: 10,
        offset: 0
      }
    }).pipe(map(res => res.articles))
  }

}
