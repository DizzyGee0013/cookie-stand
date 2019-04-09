'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
0
// Gabriel -  down below is how to construct the bones :)
var firstAndPike = {
  id: 'first-and-pike', 
  minCustomer: 23, 
  maxCustomer: 65,
  avgCookieSales: 6.3, // - Gabriel cookie sales per hour
  cookiesPerHour: [],
  totalCookies: 0,
  // Gabriel - the following methods are functional logic attached to the object (first and pike)
  customerTally: function(min, max){ 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  dailyStoreTotals: function(){
    for (var i = 0; i < hoursOfOperation.length; i++){
      this.cookiesPerHour.push(Math.ceil(this.customerTally(this.minCustomer, this.maxCustomer) * this.avgCookieSales));
    }
  },
  render: function(){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
  }


};

firstAndPike.render();