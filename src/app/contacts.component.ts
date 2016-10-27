import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {EventBusService} from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {

  private title: string;

  constructor(
      private eventBusService: EventBusService,
      private titleService: Title
  ) {}

  ngOnInit () {
    this.eventBusService.observe('appTitleChange')
        .subscribe(title => {
            this.title = title;
            this.titleService.setTitle(title);
        });
  }
}
