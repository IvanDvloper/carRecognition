import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class AlprController {
  constructor(private http: HttpClient) {

  }

  postToRapidApi(urlImage: String): Observable<any> {
    var url = "https://openalpr.p.rapidapi.com/recognize_url";
    let headers = new HttpHeaders({
      "x-rapidapi-host": "openalpr.p.rapidapi.com",
      "x-rapidapi-key": "72f8d25fecmsh4febc8f56e71962p1306a9jsn42145d1d3d14",
      "content-type": "application/x-www-form-urlencoded",
      "useQueryString": "true"
    });


    return this.http.post(url, {"image_url": urlImage}, {
      headers: headers,
      params: {
        "country": "mx",
        "image_url": urlImage.toString(),
        "recognize_vehicle": '1'}
    });
  }
}
