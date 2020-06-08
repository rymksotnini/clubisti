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
  // title of icon picker
  @Input() heading: string;
  @Input() icon: string;
  @Output() event = new EventEmitter();
  public show = false;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Change status of visibility to icon picker
   */
  public toggleIcons() {
    this.show = !this.show;
  }

  /**
   * Change icon from default icons
   * @param {string} icon
   */
  public changeIcon(icon: string) {
    this.icon = icon;
    this.event.emit(this.icon); // Return icon
    this.show = false;
  }



}
