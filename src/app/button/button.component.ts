import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title :String = ''
  @Output() Click: EventEmitter<any> = new EventEmitter<any>();
  @Input() disabled = false;
  constructor() { }

  ngOnInit(): void {

  }

  onClick ($event: any): void {
    this.Click.emit($event);
  }
}
