import { Component, OnInit } from '@angular/core';
import { EventTriggerService } from 'src/app/services/event-trigger.service';

@Component({
  selector: 'app-policy-search',
  templateUrl: './policy-search.component.html',
  styleUrls: ['./policy-search.component.css']
})
export class PolicySearchComponent implements OnInit {

  constructor(private eventTriggerService: EventTriggerService) { }

  ngOnInit(): void {
  }

  searchPolicy(id: string, type: string){
    this.eventTriggerService.setSearchType(id, type);
    
  }
}
