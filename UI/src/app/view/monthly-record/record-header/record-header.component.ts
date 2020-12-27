import { Component, OnInit } from '@angular/core';
import { EventTriggerService } from 'src/app/services/event-trigger.service';

@Component({
  selector: 'app-record-header',
  templateUrl: './record-header.component.html',
  styleUrls: ['./record-header.component.css']
})
export class RecordHeaderComponent implements OnInit {

  constructor(private eventTriggerService: EventTriggerService) { }

  ngOnInit(): void {

    
  }

  selectedRegion(region: String) {
    this.eventTriggerService.setRegionType(region);
  }

}
