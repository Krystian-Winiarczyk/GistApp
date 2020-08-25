import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistsService {
  constructor(private httpClient: HttpClient) { }

  getGists() {
    return this.httpClient.get("https://api.github.com/gists/public", {
      params: new HttpParams()
        .set("per_page", "100")
    });
  }

  getUserGists(username: string) {
    return this.httpClient.get(`https://api.github.com/users/${username}/gists`, {
      params: new HttpParams()
        .set("per_page", "20")
    });
  }

  getGist(id: string) {
    return this.httpClient.get(`https://api.github.com/gists/${id}`);
  }

  deleteGist(id: string) {
    this.httpClient.delete(`https://api.github.com/gists/${id}`)
      .subscribe(xd => {
        console.log(xd);
      }, err => {
        console.log(err);
      })
  }

  createGist(payload) {
    return this.httpClient.post(`https://api.github.com/gists`, payload);
  }

  updateGist(payload, gistId) {
    return this.httpClient.patch(`https://api.github.com/gists/${gistId}`, payload);
  }
}
// TODO
// Dodać uwierzytelnianie poprzez podanie tokenu autoryzacji
// pobrać dane usera przez /user
