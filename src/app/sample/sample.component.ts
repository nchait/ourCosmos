import { Component, OnInit } from '@angular/core';
import {SampleService} from '../sample.service';
import { GetPicturesComponent } from '../get-pictures/get-pictures.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  // Initialize response with empty string
  response = '';
  fill = '';

  pictures = new Array(100);
  constructor(private _sampleService: SampleService) {
    this._sampleService.getData(this.onResponse.bind(this),'');
  }

  ngOnInit() {
  }
  
  onClick() {
    // Call the service method, passing the onResponse as the callback
    // binding 'this' is required to avoid "this is undefined error"
    //this._sampleService.getData(this.onResponse.bind(this));
  }
  
  /*
   * The HTTP request is aynchronous.
   * Therefore a callback function is required to get back the response.
   */
  onResponse(res) {
    console.log(res);
    this.pictures=res;


  }

}
//  <img width="300" alt="Angular Logo" src="https://images-assets.nasa.gov/image/'Witch Head' Brews Baby Stars_10592267924_o/'Witch Head' Brews Baby Stars_10592267924_o~thumb.jpg">  