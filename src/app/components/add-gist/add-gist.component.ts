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
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e);
          this.files.push({
            filenames: "tak",
            content: e.target.result
          })
        };
        reader.readAsText(files[i]);
      }
    }
  }

  onTest() {
    // this.gistsService.createGist();
    console.log(this.files);
  }
}
