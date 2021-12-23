import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  findAllResidents = () =>
  fetch('http://covidapp-env.eba-k8mjhusi.us-east-2.elasticbeanstalk.com/api/residents')
  .then(response => response.json())

}
