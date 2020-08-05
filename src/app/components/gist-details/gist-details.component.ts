import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GistsService} from '../../services/gists.service';
import {faEdit, faPlus, faSave, faTrash} from '@fortawesome/free-solid-svg-icons';
import {fileUpload, prepareFiles} from '../../shared/files';

@Component({
  selector: 'app-gist-details',
  templateUrl: './gist-details.component.html',
  styleUrls: ['./gist-details.component.css']
})
export class GistDetailsComponent implements OnInit {
  private icons = {
    edit: faEdit,
    delete: faTrash,
    save: faSave,
    plus: faPlus
  };
  currentGist: any = null;
  loading: boolean = true;
  isEdited: boolean = false;
  newFiles: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private gistsService: GistsService, private router: Router) { }

  ngOnInit(): void {
    this.gistsService.getGist(this.activatedRoute.snapshot.params.gist_id)
      .subscribe(res => {
        const response = res;
        const files = [];
        for (let fileName in res.files) {
          files.push(res.files[fileName]);
        }
        response.files = files;
        this.currentGist = response;
        this.loading = false;
      })
  }

  deleteGist() {
    this.gistsService.deleteGist(this.currentGist.id);
    this.router.navigate(['/']);
  }

  saveEditedGist() {
    this.isEdited = false;
    const files: {} = prepareFiles(this.currentGist.files);

    const editedGistPayload = {
      description: this.currentGist.description,
      files,
      public: true
    };
    console.log(editedGistPayload);
  }

  onChange(event) {
    this.newFiles = fileUpload(event.target.files);
  }

}
