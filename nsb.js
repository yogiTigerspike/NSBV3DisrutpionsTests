import http, { expectedStatuses } from 'k6/http';
import { describe } from 'https://jslib.k6.io/expect/0.0.4/index.js';
//import { assert } from 'chai';
import { sleep, check } from 'k6';
export let options = {
    vus: 3,
    duration: '10s',
    httpDebug: '',
};

export default function () {
describe('Basic API test', (t) => {
    const response = http.get('https://networkstatus.ptv.vic.gov.au/jsonservice/disruption/currentDisruptions?token=40:a2f64c7471324b92a625578efe114c58b3cd8f00');
    t.expect(response.status).toEqual(200);
    const res = response.body;
    var data = JSON.parse(res)
    console.log(data.response.items[0].ID);
  });
 }