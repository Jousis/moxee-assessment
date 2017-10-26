var assessment = {};

/**
 * Run an API call with some basic error handling.
 *
 * @param {string} resource
 * @param {string} method
 * @param {object} args
 * @param {Function} callback Function to call upon successful execution of
 * the API call.
 */
assessment.api = function(resource, method, args, callback) {
  var callback_ = function() {
    var json = JSON.parse(this.responseText);
    callback(json);
  };

  var request = new XMLHttpRequest();
  request.addEventListener('load', callback_);
  request.open(
    'GET',
    'api/index.php?' +
    'resource=' + resource +
    '&method=' + method +
    '&arguments=' +
    JSON.stringify(args || [])
  );
  request.send();
};

/**
 * Runs when the document is fully loaded and ready to go.
 */
assessment.ready = function() {
  if (localStorage.name === undefined || localStorage.name === '') {
    localStorage.name = prompt('What\'s your name?', 'Jon');
  }

  var header = new component.header();
  header.render(document.body);

  var content = new component.content();
  content.render(document.body);

  var input = new component.input();
  input.render(document.body);
};

/**
 * Extends one class with another.
 *
 * @link https://oli.me.uk/2013/06/01/prototypical-inheritance-done-right/
 *
 * @param {Function} destination The class that should be inheriting things.
 * @param {Function} source The parent class that should be inherited from.
 *
 * @return {Object} The prototype of the parent.
 */
assessment.extend = function(destination, source) {
  destination.prototype = Object.create(source.prototype);
  destination.prototype.constructor = destination;

  return source.prototype;
};
