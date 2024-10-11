import {Component} from '@angular/core';
import {Appointment} from "../models/appointment";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent {

  appointmentList: Appointment[] = [];

  appointmentTitle: string = '';
  appointmentDate: Date = new Date();

  addAppointment() {
    alert(this.appointmentTitle + ' ' + this.appointmentDate);
  }

}
