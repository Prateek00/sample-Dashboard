import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.scss']
})
export class ComponentDetailComponent implements OnInit {

  public component;

  constructor(
    private route: ActivatedRoute,
    private report: ReportService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let name: string = params['id'];

      this.report.viewDetails(name).subscribe(
        data => this.component = data,
        err => console.log(err)
      );

    })
  }
   
}
