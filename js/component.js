var component = function() {};

component.prototype.render = function(parent) {
  var container = document.createElement('div');
  this.decorate(container);
  parent.appendChild(container);
}
