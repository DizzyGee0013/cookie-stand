'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
  hourlySum: function(){
    for(var i = 0; i < this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function(){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `total cookies sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  }


};

firstAndPike.dailyStoreTotals();
firstAndPike.hourlySum();
firstAndPike.render();

var seaTacAirport = {
  id: 'sea-tac', 
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSales: 1.2, // - Gabriel cookie sales per hour
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
  hourlySum: function(){
    for(var i = 0; i < this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function(){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `total cookies sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  }


};
seaTacAirport.dailyStoreTotals();
seaTacAirport.hourlySum();
seaTacAirport.render();

var seattleCenter = {
  id: 'seattle-center', 
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSales: 3.7, // - Gabriel cookie sales per hour
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
  hourlySum: function(){
    for(var i = 0; i < this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function(){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `total cookies sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  }

};
seattleCenter.dailyStoreTotals();
seattleCenter.hourlySum();
seattleCenter.render();

var capitalHill = {
  id: 'capital-hill', 
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSales: 2.3, // - Gabriel cookie sales per hour
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
  hourlySum: function(){
    for(var i = 0; i < this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function(){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `total cookies sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  }

};
capitalHill.dailyStoreTotals();
capitalHill.hourlySum();
capitalHill.render();


var alki = {
  id: 'alki', 
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSales: 4.6, // - Gabriel cookie sales per hour
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
  hourlySum: function(){
    for(var i = 0; i < this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  },
  render: function(){
    var ulElement = document.getElementById(this.id);
    for (var i = 0; i < this.cookiesPerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    liElement.textContent = `total cookies sold ${this.totalCookies}`;
    ulElement.appendChild(liElement);
  }

};
alki.dailyStoreTotals();
alki.hourlySum();
alki.render();

// Gabriel - My attempt at recreating the code above :)
