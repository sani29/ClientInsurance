import { Component, OnInit, ViewChild } from '@angular/core';
import { EventTriggerService } from 'src/app/services/event-trigger.service';
import { PolicyServiceService } from 'src/app/services/policy-service.service';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label, BaseChartDirective } from "ng2-charts";

@Component({
  selector: 'app-record-body',
  templateUrl: './record-body.component.html',
  styleUrls: ['./record-body.component.css']
})
export class RecordBodyComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private eventTriggerService: EventTriggerService, private policyService: PolicyServiceService) { }
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: '2018 Sales'}
  ];
  
  ngOnInit(): void {
    this.eventTriggerService.regionType.subscribe((data) => {
      this.policyService.getByCustomerRegion(data['region']).subscribe((data) => {
        this.sellHistory(data['data']);
      })
    })
  }

  sellHistory(sales: any){
    this.barChartData =  [
      {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: '2018 Sales'}
    ];
    for (const rec of sales) {
      if(rec['dateOfPurchase']){
        var month = parseInt(rec['dateOfPurchase'].trim().split("/")[0]);
        this.barChartData[0]['data'][month-1] += 1;
        this.chart.chart.update();
      }
    }
    // console.log(this.barChartData[0]['data']);
  }
}
