<?php

class message {

  public function __construct($mysqli) {
    $this->mysqli = $mysqli;
  }

  /** TODO 2
   * -------------------------------------------------------------------------
   *
   * The application currently has no way to retrieve messages from the
   * database. This is the function that needs to be called but it's up to you
   * to complete the stub. Write a query and return a list of messages. This
   * function must take an argument (like timestamp or message_id) and only
   * return messages after that point. Look at the create() function if you're
   * not sure what to do.
   *
   * -------------------------------------------------------------------------
   *
   * @param array $arguments [timestamp]
   *
   * @return array [description]
   */
  public function read($arguments) {
    $messages = array();
    //error_log(json_encode($arguments));

    // [ Your code here ]
    $query = '
      select
        *
      from
        `message`
      where
        `timestamp` >= FROM_UNIXTIME(' . $arguments['timestamp'] . ')'
      //order by `timestamp`' // Already is
    ;
    
    $result = $this->mysqli->query($query) or die($this->mysqli->error);
    while($row = $result->fetch_assoc()) {
      $messages[] = $row;
    }

    return $messages;
  }

  /**
   * Create a new message.
   *
   * @param array $arguments [name, message]
   *
   * @return array The newly created message.
   */
  public function create($arguments) {
    $query = '
      insert into
        `message`(
          `name`,
          `message`
        )
        values(
          "' . $this->mysqli->real_escape_string($arguments['name']) . '",
          "' . $this->mysqli->real_escape_string($arguments['message']) . '"
        )
    ';
    $this->mysqli->query($query) or die($this->mysqli->error);
    $message_id = $this->mysqli->insert_id;

    $query = '
      select
        *
      from
        `message`
      where
        `message_id` = ' . $message_id
    ;
    $result = $this->mysqli->query($query) or die($this->mysqli->error);
    $message = $result->fetch_assoc();

    return $message;
  }

}
