# Moxee Coding Assessment

This assessment is a very simple chat application with a few parts missing. There are 3 `TODO` sections in the code that you must complete. Before you begin, you will need to set up a web server with Apache, PHP, and MySQL. We highly recommend using Cloud9 and have included setup instructions below. You are welcome to use your own web server if you prefer as the deliverable is your code, not a running web server.

The files with the TODO comments are:

1. `js/input.js`
2. `api/message.php`
3. `js/content.js`

## Cloud9

Cloud9 provides a web server as well as an online development environment all for free. There really is no catch, other than being limited to one private repository and they do shut down web servers after a few hours of inactivity until you log back in.

1. Sign up here: https://c9.io/signup.
2. Create a new workspace from your Cloud9 dashboard. Use the following settings:
    - Private repository
    - Clone from a Git URL (https://github.com/moxeehealth/codingassessment.git)
    - Choose a template: PHP, Apache & MySQL

## MySQL

1. Open your newly created project
2. Click the green "Run Project" button at the top of the screen to start all of the necessary services.
3. In the "bash" tab at the bottom of the screen, enter `mysql -u <your_cloud9_username>` to connect to MySQL.
4. Run the following queries by copy/pasting into the `mysql>` prompt.
    ```
    create database `moxee`;
    use `moxee`;
    create table `message` (
      `message_id` int(10) unsigned not null auto_increment,
      `name` varchar(255) not null,
      `message` varchar(1000) not null,
      `timestamp` timestamp not null default current_timestamp on update current_timestamp,
      primary key (`message_id`)
    );
    ```

## Configuration & Testing

1. Open `api/configuration.php` and enter your Cloud9 username on line 10. You should not need to change anything else.
2. View your project by opening the "Apache & PHP" tab in Cloud9, clicking on the link, then selecting "Open".
3. Navigate back to your Cloud9 window and view the "Apache & PHP" tab once more. If there are any issues with your setup you will see error messages begin to flood this screen. If it worked, it will either be blank or will fill with HTTP 200 messages.

## Help

This assessment is designed to take 2-4 hours depending on your level of experience. If at any point during the above configuration or coding, please reach out and let us know! It is a strength, not a weakness, to know when to ask for help.

### Finally, don't forget to go the extra mile and add some of your own flair!

If you're not the creative type, here are a few ideas to get you started:

- Add your own styles to make it look nice or pick an existing framework (Bootstrap, Materialize, etc) and convert the UI.
- Add commands to the chat area like `/name` or emoji like `:banana:`
- Add different chatrooms users can join that are all independent of each other

Have fun!
