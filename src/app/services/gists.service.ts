import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistsService {
  private token = '2ab70e5fa28da1d12361e307cc973ea4fe6eabfe';

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
      description: "Test",
      files: {
        "test.txt": {
          filenames: "nazwa",
          content: "content"
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

  // uploadFiles(files) {
  //   const filesArray = [];
  //   if (files) {
  //     for (let file of files) {
  //       let reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         filesArray.push({
  //           filename: file.name,
  //           content: e.target.result,
  //           lastModified: file.lastModified,
  //           size: file.size
  //         });
  //       };
  //       reader.readAsText(file);
  //     }
  //   }
  //   return filesArray;
  // }

}
