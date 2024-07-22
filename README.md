<h1 align="center"> URL Shrinker </h1>

<div align="center">
  <p>A Simple and Efficient URL Shortening Service.</p>
<img src="https://github.com/easyvansh/URL-Shortner/blob/main/images/urlShortner.JPG" style="width:800px; height:400px"/>
</div>

URL Shrinker allows you to easily shorten long URLs, track clicks, and manage your links with a user-friendly interface. Built with Node.js, Express.js, and MongoDB, and deployed on Render, this service is both reliable and scalable and is available online at [URL Shrinker](https://url-shortner-d5fy.onrender.com).

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Acknowledgments](#acknowledgments)



## Features

- **URL Shortening**: Quickly shorten long URLs for easy sharing.
- **Click Tracking**: Monitor the number of clicks each shortened URL receives.
- **Database Storage**: Store full URLs, shortened URLs, and click counts in a MongoDB Atlas database.


## Getting Started

1. **Visit the Web Service**: Access the URL Shortener Web Service online at [URL Shrinker](https://url-shortner-d5fy.onrender.com).
2. **Shorten a URL**: Enter the long URL you want to shorten and click "Shrink".
3. **Track Clicks**: View the number of clicks on each shortened URL.

### Requirements

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/easyvansh/URL-Shortner
   
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB Atlas URI:
   ```env
   MONGODB_URI=your-mongodb-atlas-uri
   ```

4. Start the server:
   ```bash
   npm run devStart
   ```

5. Visit the web service locally in your browser at `http://localhost:5000`.

## Usage

1. Enter the URL you want to shorten in the input field and click "Shorten URL".

2. Copy the generated shortened URL and share it as needed.

### Shortened URL and Click Tracking

![Shortened URL](https://github.com/easyvansh/URL-Shortner/blob/main/images/clicks.JPG)

3. The web service tracks the number of clicks each shortened URL receives, displayed on the homepage.

### MongoDB Database

![MongoDB Database](https://github.com/easyvansh/URL-Shortner/blob/main/images/mongoDB.JPG)


## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing URLs.
- **Render**: Platform for deploying web applications.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Render](https://render.com/)

---