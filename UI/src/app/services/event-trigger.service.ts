import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventTriggerService {

  @Output() searchType: EventEmitter<Object> = new EventEmitter();

  constructor() { }

  setSearchType(id: string, type: string){
    this.searchType.emit({
      "id": id,
      "type": type
    })
  }
}
