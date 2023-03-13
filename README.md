# cryptoPedia
cryptoPedia is a crypto currency tracking platform that gives users real time updates on the prices about their favourite coins using data from the coin gecko API.

Table of Contents

Features
Installation
Usage
Technologies Used
Contributing


Features

Real-time market data for various cryptocurrencies
Detailed information about individual currency

Installation

To run CryptoPedia locally, you will need to have Node.js installed on your system. If you don't have it installed already, you can download it from the official website: https://nodejs.org/en/

Once you have Node.js installed, you can clone the repository to your local machine using Git:


git clone https://github.com/Ehizojie7/cryptoPedia.git
After cloning the repository, navigate to the project directory and install the required dependencies using npm:


cd cryptoPedia
npm install
You will also need to create a .env file in the root directory of the project and add the following environment variables:


NODE_ENV=development
PORT=5000
COINGECKO_API_BASE_URL=https://api.coingecko.com/api/v3
Usage

To start the server, run the following command in the root directory of the project:


npm run server
This will start the server at http://localhost:5000.

To start the client, run the following command in another terminal window in the root directory of the project:


npm run client
This will start the client at http://localhost:3000.

You can also run both the server and client together using the following command:


npm run dev
This will start the server and client concurrently.

Technologies Used

React
Node.js
CoinGecko API
Axios
Vanilla css
Font Awesome

Contributing

Contributions are welcome! If you find any bugs or issues, feel free to open an issue or submit a pull request.
