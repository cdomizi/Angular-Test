import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../model/ticket.model';
import { TICKETS } from '../mock-tickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets = TICKETS;
  selectedTicket?: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(ticket: Ticket): void {
    this.selectedTicket = ticket;
  }

}
