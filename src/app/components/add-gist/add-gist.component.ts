import {Component, OnInit} from '@angular/core';
import {GistsService} from '../../services/gists.service';
import {fileUpload, prepareFiles} from '../../shared/files';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-gist',
  templateUrl: './add-gist.component.html',
  styleUrls: ['./add-gist.component.css']
})
export class AddGistComponent implements OnInit {
  description: string = '';
  deleteIcon = faTrash;
  files = [];
  status: string = '';

  constructor(private gistsService: GistsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onChange(event) {
    this.files = fileUpload(event.target.files);
  }

  createGist() {
    const files = this.files.filter(file => file.size > 0);
    if (files.length > 0) {
      this.status = "loading";
      const payload = {
        description: this.description,
        files: prepareFiles(files),
        public: true
      };
      this.gistsService.createGist(payload)
        .subscribe(res => {
          this.status = "success";
          setTimeout(() => {
            this.router.navigate(['/gists']);
          }, 2000);
        });
    } else {
      alert('All Selected Files Are Empty');
    }
  }

}


