/**
 * Input box used to type a message.
 */
component.input = function() {
  component.apply(this, arguments);
};
assessment.extend(component.input, component);

/**
 * Draw the input area, the button, and attach an event listener to the button
 * for sending messages.
 *
 * @param {HTMLDivElement} parent
 */
component.input.prototype.decorate = function(parent) {
  var table = document.createElement('table');
  table.className = 'input_table';
  parent.appendChild(table);

  var tr = document.createElement('tr');
  table.appendChild(tr);

  var td_left = document.createElement('td');
  td_left.className = 'td_left';
  tr.appendChild(td_left);

  var td_right = document.createElement('td');
  td_right.className = 'td_right';
  tr.appendChild(td_right);

  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.className = 'input_text';
  td_left.appendChild(input);

  var button = document.createElement('button');
  button.className = 'input_button';
  button.innerHTML = 'Send Message';
  td_right.appendChild(button);

  button.addEventListener('click', function() {
    assessment.api(
      'message',
      'create',
      {
        'name': localStorage.name,
        'message': input.value
      },
      function() {
        input.value = '';
        input.focus();
      }
    );
  });

  /** TODO 1
   * -------------------------------------------------------------------------
   *
   * It's not very convenient to click the "Send" button with the mouse. Make
   * this simpler by allowing the user to press the <enter> key instead. This
   * is a fairly trivial task but you may find that you need to make some
   * other adjustments to do this properly.
   *
   * -------------------------------------------------------------------------
   */

  // [ Your code here ]
  input.addEventListener('keypress', function(e) {
    var keyPressed = e.which || e.keyCode; // Supports more browsers
    if (keyPressed === 13) {
      assessment.api(
      'message',
      'create',
      {
        'name': localStorage.name,
        'message': input.value
      },
      function() {
       input.value = '';
       input.focus();
      }
      )
    }
  }
  );
};
