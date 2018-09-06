export class WeatherModel {

    constructor(date: String, temp: number) {
        this.datetime = date;
        this.temp = temp;
        this.visible = true;
    }

    datetime: String;
    temp: number;
    visible: true;
}
