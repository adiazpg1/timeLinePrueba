import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxJs/Rx';
import { TimelineElement } from '../components/horizontal-timeline/timeline-element';

@Injectable()
export class SharepointService {


  url = '../assets/data.json';

  constructor(private _http: HttpClient) { }

  getItems() {
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json;odata=verbose' });
    // tslint:disable-next-line:quotemark
    return this._http.get("http://arvsrvdevsp13:14203/_api/web/lists/GetByTitle('Noticias')/items", { headers });
  }

  getMockData() {
    return this._http.get(this.url);
  }



}
