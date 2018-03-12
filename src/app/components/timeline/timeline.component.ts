import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SharepointService } from '../../services/sharepoint.service';
import { Timeline } from './timeline';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() data: Timeline[];
  @Input() totalItems: number;

  itemSelect: Timeline;
  listaNoticias: Timeline[] = [];
  currentPage = 1;
  itemPorPage = 5;



  constructor() {
  }

  ngOnInit() {

    console.log(this.getData());
  }

  getTotalPages() {
    return Math.ceil(this.totalItems / this.itemPorPage);
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  getData() {
    return this.data;
  }

  selectItem(e: Event, item: Timeline) {
    e.preventDefault();
    this.itemSelect = item;
  }

  selectPage(e: Event, direction: boolean) {

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

  onPrev() {
    if (this.currentPage < 1) {
      return;
    }
    this.currentPage = this.currentPage--;
    console.log(this.currentPage);
  }


}
