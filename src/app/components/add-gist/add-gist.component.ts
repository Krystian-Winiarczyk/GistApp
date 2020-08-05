import { Component, OnInit } from '@angular/core';
import {GistsService} from '../../services/gists.service';
import {fileUpload} from '../../shared/files';

@Component({
  selector: 'app-add-gist',
  templateUrl: './add-gist.component.html',
  styleUrls: ['./add-gist.component.css']
})
export class AddGistComponent implements OnInit {
  description: string = '';
  files = [];

  constructor(private gistsService: GistsService) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.files = fileUpload(event.target.files);
  }

  onTest() {
    // this.gistsService.createGist();
    console.log(this.files);
  }
}
