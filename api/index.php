<?php

require 'configuration.php';

// Compress output.
ob_start('ob_gzhandler');

// Set a reasonable time limit.
set_time_limit(5);

// Turn on all error reporting.
error_reporting(-1);
ini_set('display_errors', '1');

// Autoload classes as necessary so there are no includes/requires.
spl_autoload_register();

// Create the database object.
$mysqli = new mysqli(
  $database_host,
  $database_username,
  $database_password,
  $database_name
);

// Create the resource and do the API call.
$resource = new $_REQUEST['resource']($mysqli);
$response = call_user_func(
  array($resource, $_REQUEST['method']),
  json_decode($_REQUEST['arguments'], true)
);

// Return the API response as JSON.
die(json_encode($response));
