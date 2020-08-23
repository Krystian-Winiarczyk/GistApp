import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GistsService} from '../../services/gists.service';
import {faCheck, faEdit, faExclamation, faPlus, faSave, faTrash} from '@fortawesome/free-solid-svg-icons';
import {fileUpload, prepareFiles} from '../../shared/files';

@Component({
  selector: 'app-gist-details',
  templateUrl: './gist-details.component.html',
  styleUrls: ['./gist-details.component.css']
})
export class GistDetailsComponent implements OnInit, OnChanges {
  private icons = {
    edit: faEdit,
    delete: faTrash,
    save: faSave,
    plus: faPlus,
    danger: faExclamation,
    success: faCheck
  };
  private currentUserId: string = null;
  currentGist: any = null;
  loading: boolean = true;
  isEdited: boolean = false;
  description: string = '';
  newFiles: any[] = [];
  deletedFiles: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private gistsService: GistsService, private router: Router) {
    this.currentUserId = JSON.parse(localStorage.getItem("user")).id;
  }

  ngOnInit(): void {
    this.getGist();
  }

  deleteGistFile(index, filename) {
    this.deletedFiles.push({ [filename]: null });
    this.currentGist.files.splice(index, 1);
  }

  deleteGist() {
    this.gistsService.deleteGist(this.currentGist.id);
    this.router.navigate(['/gists']);
  }

  saveEditedGist() {
    this.loading = true;
    this.isEdited = false;
    const currentFiles = [
      ...this.currentGist.files,
      ...this.newFiles.filter(file => file.size > 0)
    ];

    if (currentFiles.length === 0 && this.deletedFiles.length === 0) {
      alert("No files to upload");
      this.loading = false;
    } else {
      const files: {} = prepareFiles(currentFiles);
      Object.assign(files, ...this.deletedFiles)

      const editedGistPayload = {
        description: this.currentGist.description,
        files,
        public: true
      };
      this.gistsService.updateGist(editedGistPayload, this.currentGist.id)
        .subscribe(res => {
          this.getGist();
          this.loading = true;
        })
    }
  }

  onChange(event) {
    this.newFiles = fileUpload(event.target.files);
  }

  private getGist() {
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
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}

//TODO
// dodać opis w razie braku
<<<<<<< HEAD
=======
// filtr pustch plikow 
>>>>>>> 55367726084731b7b2263c383e8b2d238042f16e
