import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class WeatherService{

	constructor (private http: Http){}

	getWeather(){

	}

	searchWeatherData(cityName: string): Observable<any>{
		return this.http.get('api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=8b7d803b4516079512cdba5b36870e8f&units=metric')
			.map(response => response.json())
			.catch(error => {
				console.error(error);
				return Observable.throw(error.json())
			});
	}
}