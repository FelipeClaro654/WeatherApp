import { Component } from '@angular/core';
import { WeatherItem } from './weather-item';
import { WeatherItemComponent } from './weather-item.component';
import {WEATHER_ITEMS} from './weather.data';

@Component({
	selector: 'weather-list',
	templateUrl: './weather-list.component.html'
})

export class WeatherListComponent {
	weatherItems: WeatherItem[];

	ngOnInit():any {

	}
}
