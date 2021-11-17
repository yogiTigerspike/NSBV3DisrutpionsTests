import http, { expectedStatuses } from 'k6/http';
import { describe } from 'https://jslib.k6.io/expect/0.0.4/index.js';
//import { assert } from 'chai';
import { sleep, check } from 'k6';
export let options = {
    vus: 3,
    duration: '60s',
    httpDebug: '',
};

export default function () {
describe('Basic API test', (t) => {
    const devId = 3001360;
    const apiKey = "b3cf230f-c638-47e8-9e6e-60e5a994c154";

    const response = http.get('https://api.ptv.vic.gov.au/v3/disruptions?route_types=0&route_types=1&route_types=2&route_types=3&token=2ED28A2A37D63A2558F09685BF87F10F5FE9B3FB');
    t.expect(response.status).toEqual(200);
    const res = response.body;
    var data = JSON.parse(res)
    var trains = data.disruptions.metro_train.length;
    var tram = data.disruptions.metro_tram.length;
    var bus = data.disruptions.metro_bus.length;
    console.log("Train disruptions count is: "+trains);
    console.log("Tram disruptions count is: "+tram);
    console.log("Bus disruptions count is: "+bus);
    //assert(2).to.equal(2); 
  });
 }