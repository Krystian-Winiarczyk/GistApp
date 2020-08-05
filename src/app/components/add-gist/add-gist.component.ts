import { Component, OnInit } from '@angular/core';
import {GistsService} from '../../services/gists.service';
import {fileUpload, prepareFiles} from '../../shared/files';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-gist',
  templateUrl: './add-gist.component.html',
  styleUrls: ['./add-gist.component.css']
})
export class AddGistComponent implements OnInit {
  description: string = '';
  deleteIcon = faTrash;
  files = [];

  constructor(private gistsService: GistsService) { }

  ngOnInit(): void {}

  onChange(event) {
    this.files = fileUpload(event.target.files);
  }

  createGist() {
    const payload = {
      description: this.description,
      files: prepareFiles(this.files),
      public: true
    };
    this.gistsService.createGist(payload);
  }
}
