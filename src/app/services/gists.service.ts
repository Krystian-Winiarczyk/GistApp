import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistsService {
  private token = '265e9660f996c80a92e998c1b184ce28a394a1d4';

  constructor(private httpClient: HttpClient) { }

  getGists() {
    return this.httpClient.get("https://api.github.com/gists", {
      params: new HttpParams()
        .set("per_page", "100")
    });
  }

  getGist(id: string) {
    return this.httpClient.get(`https://api.github.com/gists/${id}`);
  }

  deleteGist(id: string) {
    this.httpClient.delete(`https://api.github.com/gists/${id}`, {
      headers: {
        "Authorization": 'token ' + this.token,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
      .subscribe(xd => {
        console.log(xd);
      }, err => {
        console.log(err);
      })
  }

  createGist(payload) {
    console.log(this.token);
    this.httpClient.post(`https://api.github.com/gists`, payload, {
      headers: {
        "Authorization": 'token ' + this.token,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
      .subscribe(res => {
        console.log(res);
      })
  }

}
