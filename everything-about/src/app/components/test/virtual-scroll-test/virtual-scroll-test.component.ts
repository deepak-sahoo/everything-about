import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, HostListener } from '@angular/core';


@Component({
  selector: 'ea-virtual-scroll-test',
  templateUrl: './virtual-scroll-test.component.html',
  styleUrls: ['./virtual-scroll-test.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollTestComponent implements OnInit {

  items = Array.from({ length: 100 }).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit(): void {
  
  }
  
}
