export class WeatherModel {
    main!: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    weather!: { description: string }[];

    constructor(temp: number, feels_like: number, humidity: number, description: string) {
        this.main = { temp, feels_like, humidity };
        this.weather = [{ description }];
    }
}