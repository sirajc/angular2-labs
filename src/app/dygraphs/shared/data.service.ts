import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private http: Http) {

  }

  getData(series: string): Observable<DygraphPoint[]> {
    // var json = require("json!/data-1.json");
    // console.log(json);
    // return Observable.from(json);

    return this.http.get(`/dygraph/series-${series}.json`)
      .map(response => response.json())
      .map(response => response.data)
      .map(this.transformer);

  }

  transformer(dataPoints: any[][] ): DygraphPoint[] {
    return dataPoints.map( dataPoint => {
      dataPoint[0] = new Date(dataPoint[0]);
      return dataPoint;
    });
  }
}
