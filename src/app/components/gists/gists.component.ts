import { Component, OnInit } from '@angular/core';
import { GistsService } from '../../services/gists.service';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.css']
})
export class GistsComponent implements OnInit {
  loading: boolean = true;
  gists: any = [];
  p: number = 1;

  constructor(private gistsService: GistsService) { }

  ngOnInit() {
    this.gistsService.getGists()
      .subscribe(res =>{
          this.gists = res;
          this.loading = false;
      })
  }

  test() {
    const id = "f2a3edc906549ecc246fbfc7968c6e36";
    this.gistsService.deleteGist(id);
  }
}
