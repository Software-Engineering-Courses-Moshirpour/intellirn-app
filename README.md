# IntelliRN

A project with Faculty of Nursing | University of Calgary

## How to run backend and frontend

Below are steps to run the application

1. Clone the repository to your local machine.

2. Start the MySQL server on your local machine. If you are accessing the MySQL server over a network, edit the property `spring.datasource.url` in the file [application.properties](backend/src/main/resources/application.properties) and replace `localhost` with the server IP address.

3. Connect to your MySQL server using an admin user like `root`.

4. Run the below scripts on the MySQL server in the given order using `root`. These scripts will create a schema `intellirndb`, a user `intellirnapp` with password `intellirnpassword`, create all necessary tables and load them with some dummy data.

   1. [01_init.sql](sql/01_init.sql)
   2. [02_dummy_data.sql](sql/02_dummy_data.sql)

5. **To run the backend**

   1. On your machine, navigate to the directory [backend](backend). Running the below command will get the backend server running.

      ```bash
      $ mvn clean spring-boot:run
      ```

   2. To test all the implemented API endpoints, launch Postman on your local machine.

   3. Import [this](documents/IntelliRN.postman_collection.json) file into the Postman. You can then run all the API endpoints in the imported folder **IntelliRN** one by one.

   4. At any given time, you can also verify the db tables using the credentials mentioned in step #4.

6. **To run the frontend**

   1. On your machine, navigate to the directory [frontend](frontend). Running the below command will get the react server running and launch your default browser.
      ```bash
      $ npm install
      $ npm start
      ```

## Contributors

- [Bhavyai Gupta](https://github.com/zbhavyai)
- [Erika Wang](https://github.com/erikawyt)
- [Marko Mijovic](https://github.com/markomijovic)
- [Michael Ah Kiow](https://github.com/micdean19)
- [Michael Man Yin Lee](https://github.com/mikeePy)
