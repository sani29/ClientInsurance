import { Component, OnInit, ViewChild } from '@angular/core';
import { EventTriggerService } from 'src/app/services/event-trigger.service';
import { PolicyServiceService } from 'src/app/services/policy-service.service';
import { MatTable } from '@angular/material/table';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PolicyModel} from '../../../models/policy-model';
// import { FormControl, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-policy-body',
  templateUrl: './policy-body.component.html',
  styleUrls: ['./policy-body.component.css']
})
export class PolicyBodyComponent implements OnInit {
  displayedColumns: string[] = ["policyId", "dateOfPurchase", "customerId", "fuel", "vehicleSegment", "premium",
                                "bodilyInjuredLiability", "personalInjuryProtection", "propertyDamageLiability",
                                "collision", "comprehensive", "customerGender", "customerIncomeGroup", "customerRegion",
                                "customerMaritalStatus", "edit"]
  
  public dataSource: Array<Object> = [];
  selectedPolicy: PolicyModel;
  // rateControl = new FormControl("", [Validators.max(1000000), Validators.min(0)])
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private eventTriggerService: EventTriggerService, private policyService: PolicyServiceService,
              private modalService: NgbModal) { }

  ngOnInit(): void {

    this.eventTriggerService.searchType.subscribe((data) =>{
      if(data['type'] == 'policyid'){
        this.policyService.getPolicy(data['id']).subscribe((data) => {
          this.dataSource = new Array();
          this.dataSource.push(data['data']);
          this.table.renderRows();
        })
      } else{
        this.policyService.getByCustomerId(data['id']).subscribe((data) => {
          this.dataSource = new Array();
          this.dataSource.push(data['data']);
          this.table.renderRows();
        })
      }

    });
  }

  open(content, id: string){
    this.policyService.getPolicy(id).subscribe((result) => {
      this.selectedPolicy = result['data'];
      console.log(this.selectedPolicy);
      this.modalService.open(content, {size: 'lg'});
    })
  }

  declareSelectedPolicy(){
    this.selectedPolicy = new PolicyModel();
  }

  onAction(){
    this.policyService.updatePolicy(this.selectedPolicy.policyId, this.selectedPolicy.dateOfPurchase,
                                    this.selectedPolicy.customerId, this.selectedPolicy.fuel, this.selectedPolicy.vehicleSegment,
                                    this.selectedPolicy.premium, this.selectedPolicy.bodilyInjuredLiability, this.selectedPolicy.personalInjuryProtection,
                                    this.selectedPolicy.propertyDamageLiability, this.selectedPolicy.collision, this.selectedPolicy.comprehensive,
                                    this.selectedPolicy.customerGender, this.selectedPolicy.customerIncomeGroup, this.selectedPolicy.customerRegion,
                                    this.selectedPolicy.customerMaritalStatus).subscribe((data) => {
                                      this.declareSelectedPolicy();
                                      // console.log(data);
                                    })
  }

}
