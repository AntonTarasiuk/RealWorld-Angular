import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, Tags } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getTags(): Observable<any> {
    return this.httpClient.get<{ tags: Tags }>(`${environment.apiUrl}/tags`)
    .pipe(map(res => res.tags));
  }

  public getArticles(): Observable<any> {
    return this.httpClient.get<{ articles: Article[] }>(`${environment.apiUrl}/articles`, {
      params: {
        limit: 10,
        offset: 0
      }
    }).pipe(map(res => res.articles))
  }

}
