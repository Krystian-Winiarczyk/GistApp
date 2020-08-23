import {Component, OnInit} from '@angular/core';
import {GistsService} from '../../services/gists.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.css']
})
export class GistsComponent implements OnInit {
  loading: boolean = true;
  gists: any = [];
  p: number = 1;

  constructor(private gistsService: GistsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(q => {
      if (q.user_name) {
        this.gistsService.getUserGists(q.user_name)
          .subscribe(res => {
            this.gists = res;
            this.loading = false;
          });
      } else {
        this.gistsService.getGists()
          .subscribe(res => {
            this.gists = res;
            this.loading = false;
          });
      }
    });
  }
}
