
# Shottyme

## Overview

shottyme is a web application used to generate short url, this app was built using Express.js for the backend, EJS for views, Mongoose for the database, and the randomstring and validate-url npm packages for generating random strings and validating URLs, respectively.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone <repository-url>
   ```

2. Change to the project directory:

   ```shell
   cd repo
   ```

3. Install the required npm packages:

   ```shell
   npm install
   ```

4. Set up your MongoDB database by providing the connection URL in a `.env` file:

   ```shell
   MONGODB_URI=<your-mongodb-uri>
   ```

5. Start the application:

   ```shell
   npm start
   ```

6. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

## Usage

This URL generator allows users to shorten long URLs into unique, randomly generated short URLs. Users can also validate whether a URL is valid or not using the validation feature.

To create a shortened URL:

1. Enter a long URL in the input field on the homepage.
2. Click the "Shorten" button.
3. The system will generate a unique short URL for your input.

To validate a URL:

1. Click on the "Validate URL" option in the navigation menu.
2. Enter a URL in the validation input field.
3. Click the "Validate" button.
4. The system will check if the URL is valid and display the result.

## Features

- Shorten long URLs into unique, random short URLs.
- Validate the validity of URLs.
- Store and manage URLs in a MongoDB database.
- View a list of all shortened URLs.
- Click on shortened URLs to be redirected to the original URL.

## Dependencies

This project relies on the following npm packages:

- Express.js: A web application framework for Node.js.
- EJS: A simple templating engine for rendering views.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- randomstring: A package for generating random strings.
- validate-url: A package for validating URLs.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bug-fix`.
3. Commit your changes and push them to your forked repository.
4. Create a pull request to the main repository's `main` branch.
