import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.scss']
})
export class ParticipateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  eventId$: Observable<string>;
  participation$: Observable<string | null>;

  ngOnInit(): void {
    this.eventId$ = this.route.params.pipe(map(params => params['eventId']));
    this.participation$ = this.eventId$.pipe(map(eventId => localStorage.getItem(`event-certificates/${eventId}`)));
  }

}
