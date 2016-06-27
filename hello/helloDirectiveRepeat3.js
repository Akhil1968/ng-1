var mymodule = angular.module('repeatApp', []);
mymodule.controller('MainCtrl', [function() {
      var self = this;
      self.notes = [
        {id: 1, label: 'First task completed', done: false},
        {id: 2, label: 'Second task completed', done: false},
        {id: 3, label: 'Third task completed', done: true},
        {id: 4, label: 'Last task completed', done: false}
      ];
}]);