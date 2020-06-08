import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss']
})
export class IconPickerComponent implements OnInit {

  public defaultIcon: string[] = [
    'icon1.png',
    'icon2.png',
    'icon3.png',
    'icon4.png',
    'icon5.png',
    'icon6.png',
    'icon7.png',
    'icon8.png',
    'icon9.png',
    'icon10.png',
    'icon11.png',
    'icon12.png',
    'icon13.png',
    'icon14.png',
    'icon15.png',
    'icon16.png',
    'icon17.png',
    'icon18.png',
    'icon19.png',
    'icon20.png',
    'icon21.png',
    'icon22.png',
    'icon23.png',
    'icon24.png',
    'icon25.png'
  ];
  // title of color picker
  @Input() heading: string;
  @Input() color: string;
  @Output() event = new EventEmitter();
  public show = false;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Change status of visibility to color picker
   */
  public toggleColors() {
    this.show = !this.show;
  }

  /**
   * Change color from default colors
   * @param {string} color
   */
  public changeColor(color: string) {
    this.color = color;
    this.event.emit(this.color); // Return color
    this.show = false;
  }


  /**
   * Change color from input
   * @param {string} color
   */
  public changeColorManual(color: string) {
    const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);

    if (isValid) {
      this.color = color;
      this.event.emit(this.color); // Return color
    }
  }

  changeIcon(icon: string) {

  }
}
