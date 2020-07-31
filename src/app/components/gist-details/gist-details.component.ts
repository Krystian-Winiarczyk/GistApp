import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GistsService} from '../../services/gists.service';

@Component({
  selector: 'app-gist-details',
  templateUrl: './gist-details.component.html',
  styleUrls: ['./gist-details.component.css']
})
export class GistDetailsComponent implements OnInit {
  currentGist: any = null;
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private gistsService: GistsService) { }

  ngOnInit(): void {
    this.gistsService.getGist(this.activatedRoute.snapshot.params.gist_id)
      .subscribe(res => {
        const response = res;
        const files = [];
        for (let fileName in res.files) {
          files.push(res.files[fileName]);
        }
        response.files = files;
        console.log(response);
        this.currentGist = response;
        this.loading = false;
      })
  }

  deleteGist() {
    this.gistsService.deleteGist(this.currentGist.id)
  }

}
