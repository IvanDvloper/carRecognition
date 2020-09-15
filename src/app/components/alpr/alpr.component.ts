import {Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {AlprController} from "../../controllers/alprController";
import {Observable} from "rxjs";

@Component({
  selector: 'app-alpr',
  templateUrl: './alpr.component.html',
  styleUrls: ['./alpr.component.css']
})
export class AlprComponent implements OnInit {

  constructor(private _alprController: AlprController) {
  }

  ngOnInit(): void
  {

  }

  alprResult: String = "";
  vehicleColor: String = "";
  vehicleModel: String = "";

  makeRequest(imageUrl: String) {
    this._alprController.postToRapidApi(imageUrl).subscribe(next => {
        console.log(next);
        this.alprResult = next.results[0].plate;
        this.vehicleColor = next.results[0].vehicle.color[0].name;
        this.vehicleModel = next.results[0].vehicle.make[0].name;
      },
      error => {
        console.log(error);
      }
    );

  }


}
