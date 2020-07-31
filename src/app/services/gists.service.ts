import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistsService {
  private token = 'f89d1c96ee4fea29d1f7688c16a75ac7d624e7ff';

  constructor(private httpClient: HttpClient) {
  }


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

  createGist() {
      this.httpClient.post(`https://api.github.com/gists`, {
        description: "HEHEHE",
        files: {
          "test.txt": {
            filenames: "nazwa",
            content: "xdadsd"
          }
        },
        public: true
      }, {
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
