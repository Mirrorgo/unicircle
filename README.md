# Backend Project for Circle

This is a backend project developed using Spring Boot, MyBatis, and MySQL. It's designed to provide RESTful APIs for a platform named Circle, handling various entities like comments, posts, subjects, topics, and types.

## Technologies Used

- **Spring Boot**: 3.2.4
- **MyBatis**: 3.0.3
- **MySQL**: 8.0

## Project Structure

The project follows a standard Maven project structure with segregated packages for controllers, services, Data Transfer Objects (DTOs), models, and utility classes. 

## Setup and Installation

1. **Pre-requisites:**
   - JDK 1.8 or later
   - Maven 3.2+
   - MySQL 8.0

2. **Database Configuration:**
   - Create a MySQL database named `circle` (or any name you prefer).
   - Update the `src/main/resources/application.properties` file with your MySQL username, password, and database URL.

3. **Running the Application:**
   - Navigate to the project's root directory in your terminal.
   - Execute `mvn spring-boot:run` to start the application.
   - The application will be accessible at `http://localhost:8080`.

## REST API Endpoints

Document the available REST API endpoints here, detailing the path, method, request parameters, and the response body.

## Contributing

Instructions for how other developers can contribute to the project. Include guidelines for code style, commits, pull requests, etc.

## License

Specify the license under which this project is available. Open-source projects typically include a LICENSE file in the root directory.
