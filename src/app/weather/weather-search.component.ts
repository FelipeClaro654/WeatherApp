import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  providers: [WeatherService]
})

export class WeatherSearch{

	constructor (private _weatherService: WeatherService) {}
	onSubmit(form: any): void{
		this._weatherService.searchWeatherData(form.value.location)
			.subscribe(
				data => {
					//const weatherItem = new WeatherItem();
				}
			);
	}

}
