/**
 * Content area that displays all sent and received messages.
 */
component.content = function() {
  var self = this;

  component.apply(this, arguments);

  setInterval(
    function() {
      self.get_new_messages();
    },
    1000
  );
};
assessment.extend(component.content, component);

/**
 * Draw all of the messages.
 *
 * @param {HTMLDivElement} parent
 */
component.content.prototype.decorate = function(parent) {
  this.content_ = document.createElement('div');
  this.content_.className = 'content';
  parent.appendChild(this.content_);
};

/**
 * Check the server for new messages. When received, display them.
 */
component.content.prototype.get_new_messages = function() {
  var self = this;
  
  assessment.api(
    'message',
    'read',
    {
      // [ Your argument(s) here ]
      // Display only messages from the past 30 seconds.
      'timestamp':new Date(Date.now() - 30000).getTime() / 1000
    },
    function(response) {

      /** TODO 3
       * -------------------------------------------------------------------------
       *
       * The function you just wrote in PHP is already being called for you
       * once every second (check your development tools in the "net" tab).
       * The results of that function call are made available to you here in
       * the "response" variable. Take those messages and display them on the
       * screen. There are many different ways you can do this, so have fun
       * with it!
       *
       * -------------------------------------------------------------------------
       */

      // [ Your code here ]
      
      // Don't display the same messages multiple times. Simply refresh it every second.
      while (self.content_.firstChild) {
        self.content_.removeChild(self.content_.firstChild);
      }
      
      // Display messages
      for(var i = 0; i < response.length; i++) {
        var div = document.createElement('div');
        var parsedMessage = response[i].message;
        
        if (parsedMessage.charAt(0) == '/') {
          // Command parsing
          // Example message: "/color=red,font=italic bold 20px arial,serif:Hello, World!"
          var tokens = parsedMessage.substring(1).split(":");
          
          // Trim the message so the command doesn't show up when it's printed
          var trimmedMessage = '';
          for (var j = 1; j < tokens.length; j++) {
            trimmedMessage += tokens[j];
          }
          parsedMessage = trimmedMessage;
          
          var commands = tokens[0].split(",");
          
          // Handle the commands here
          for (var j = 0; j < commands.length; j++) {
            var args = commands[j].split("=");
            
            // There's probably a better way to enumerate this than if/else
            // But that seems like pretty advanced javascript for a beginner
            // This changes "color=red" into "div.style.color = 'red'", etc
            if (args[0] == 'color') {
              div.style.color = args[1];
            } else if (args[0] == 'font') {
              div.style.font = args[1];
            }
          }
        }
        div.innerHTML = response[i].name + ': (' + response[i].timestamp + ') ' + parsedMessage;
        self.content_.appendChild(div);
      }
    }
  );
};
