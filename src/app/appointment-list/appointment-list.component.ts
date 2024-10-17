import {Component, OnInit} from '@angular/core';
import {Appointment} from "../models/appointment";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent implements OnInit {

  appointmentList: Appointment[] = [];

  appointmentTitle: string = '';
  appointmentDate: Date = new Date();

  ngOnInit() {
    const savedAppointment = localStorage.getItem('appointments');
    this.appointmentList = savedAppointment ? JSON.parse(savedAppointment) : [];
  }

  addAppointment() {
    if (this.appointmentTitle.trim().length && this.appointmentDate) {

      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.appointmentTitle,
        date: this.appointmentDate,
      }

      this.appointmentList.push(newAppointment);

      this.appointmentTitle = '';
      this.appointmentDate = new Date();

      localStorage.setItem('appointments', JSON.stringify(this.appointmentList));

    }
  }

  deleteItem(index: number) {
    this.appointmentList.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointmentList));
  }
}
