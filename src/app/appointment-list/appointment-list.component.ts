import { Component } from '@angular/core';
import {Appointment} from "../models/appointment";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent {

  appointmentList: Appointment =
    {
      id: 5,
      title: 'saeed',
      date: new Date()
    }
}
