import { Component } from '@angular/core';
import { WeatherItem } from './weather-item';

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html'
})
export class WeatherItemComponent{
	weatherItem: WeatherItem;

	constructor() {
		this.weatherItem = new WeatherItem("Araraquara", "chuvoso", 23);
	}
}
