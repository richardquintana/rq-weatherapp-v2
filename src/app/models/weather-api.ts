export class WeatherApi {
    city_name: String;
    state_code: String;
    country_code: String;
    lat: String;
    lon: String;
    timezone: String;
    data: [{
        datetime: String;
        ts: number;
        snow: number;
        precip: number;
        temp: number;
        dewpt: number;
        max_temp: number;
        min_temp: number;
        app_max_temp: number;
        app_min_temp: number;
        rh: number;
        clouds: number;
        weather: {
            "icon": String,
            "code": number,
            "description", String
        };
        slp: number;
        pres: number;
        uv: number;
        max_dhi: number;
        vis: number;
        pop: number;
        moon_phase: number;
        sunrise_ts: number;
        sunset_ts: number;
        moonrise_ts: number;
        moonset_ts: number;
        pod: String;
        wind_spd: number;
        wind_dir: number;
        wind_cdir: String;
        wind_cdir_full: String;
    }]
}
