import { Component, OnInit } from '@angular/core';
import {GistsService} from '../../services/gists.service';

@Component({
  selector: 'app-add-gist',
  templateUrl: './add-gist.component.html',
  styleUrls: ['./add-gist.component.css']
})
export class AddGistComponent implements OnInit {
  description: string = '';
  files: any[] = [];

  constructor(private gistsService: GistsService) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.files = [];
    const files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.files.push({
            filenames: file.name,
            content: e.target.result,
            lastModified: file.lastModified,
            size: file.size
          })
        };
        reader.readAsText(file);
      }
    }
  }

  onTest() {
    // this.gistsService.createGist();
    console.log(this.files);
  }
}
