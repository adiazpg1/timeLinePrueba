import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SharepointService } from '../../services/sharepoint.service';
import { Timeline } from './timeline';
import { Observer } from 'rxJs';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() data: Timeline[];
  @Input() totalItems: number;
  @Input() itemPorPage = 3;
  @Input() titleLimit = 30;

  itemSelect: Timeline;
  listaNoticias: Timeline[] = [];
  currentPage = 1;
  constructor() {
  }

  ngOnInit() {
  }

  getTotalPages() {
    console.log(Math.ceil(this.totalItems / this.itemPorPage));
    return Math.ceil(this.totalItems / this.itemPorPage);
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  selectItem(e: Event, item: Timeline) {
    e.preventDefault();
    this.itemSelect = item;
  }

  selectPage(e: Event, direction: boolean) {

    e.preventDefault();

    if (this.currentPage === 1 && this.listaNoticias.length === 0) {
     this.listaNoticias = this.data;
    }

    if (direction) {
      this.currentPage = this.currentPage + 1;
      this.data = this.listaNoticias.slice((this.currentPage - 1) * this.itemPorPage, this.currentPage * this.itemPorPage);
    } else {
      this.currentPage = this.currentPage - 1;
      this.data = this.listaNoticias.slice((this.currentPage - 1) * this.itemPorPage, this.currentPage * this.itemPorPage);
    }

    console.log(this.currentPage);
  }

}
