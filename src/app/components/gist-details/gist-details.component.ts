import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GistsService} from '../../services/gists.service';
import {faEdit, faSave, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gist-details',
  templateUrl: './gist-details.component.html',
  styleUrls: ['./gist-details.component.css']
})
export class GistDetailsComponent implements OnInit {
  private icons = {
    edit: faEdit,
    delete: faTrash,
    save: faSave
  };
  currentGist: any = null;
  loading: boolean = true;
  isEdited: boolean = false;

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

  saveEditedGist() {
    this.isEdited = false;
    const files: {} = {};
    for (let file of this.currentGist.files) {
      files[file.filename] = file;
    }

    const editedGistPayload = {
      description: this.currentGist.description,
      files,
      public: true
    };

    console.log(editedGistPayload);
  }

}
