import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {} from 'events';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  @Output() password: EventEmitter<string>;

  constructor() {
    this.password = new EventEmitter();
  }
  addcontr(password: string): void {
    this.password.emit(password);
  }
  ngOnInit(): void {}
}
