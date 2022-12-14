import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../../model/ticket.model';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  @Input() ticket?: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

}
