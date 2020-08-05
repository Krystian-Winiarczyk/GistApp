import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistsService {
  private token = '71bad1cae7ce33324721d56d2bf12c8be85da501';

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
