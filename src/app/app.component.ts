import { AfterViewInit, Component } from '@angular/core';
declare global {
  interface Window {
    draw: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'dims';
  labels = [
    { label: 'in', name: 'Inches' },
    { label: 'ft', name: 'Feet' },
    { label: 'mm', name: 'Millimeter' }
  ];
  index = 0;
  dims1 = [
    {
      val: 100,
      label: 'width',
      id: 'x1'
    },
    {
      val: 100,
      label: 'height',
      id: 'x2'
    },
    {
      val: 100,
      label: 'depth',
      id: 'y'
    }
  ];

  ngAfterViewInit() {
    console.log('ngAfterViewInit :', this.dims1);
    window.draw(this.dims1);
  }

  onLabel() {
    if (!this.labels[this.index + 1]) { return this.index = 0; }
    this.index ++;
  }

  // draw() {
  // }

}

