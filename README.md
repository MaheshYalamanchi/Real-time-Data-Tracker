Technologies Used

    Backend: Node.js, Express, TypeScript, MongoDB
    Frontend: Next.js, React, Redux, TypeScript
    State Management: Redux (with localStorage)
    Styling: CSS/SCSS
    APIs: LiveCoinWatch, CoinGecko

Features

    Polls real-time data every few seconds for 5 stocks or cryptocurrencies.
    Stores real-time data in a MongoDB database.
    Fetches and displays the most recent 20 data entries for a selected stock or cryptocurrency in a dynamic table.
    Allows users to change the stock or cryptocurrency via a modal/popup.

Prerequisites

    Node.js (v14 or higher)
    npm or yarn
    MongoDB instance (local or cloud)
    
Getting Started
Clone the Repository
    git clone https://github.com/yourusername/realtime-price-tracker.git
    cd realtime-price-tracker
    
Install Dependencies
Backend
  cd stock-crypto-tracker
  npm install
  
Frontend
  cd stock-crypto-frontend
  npm install
  
Start the Backend
  cd stock-crypto-tracker
  npm run dev

Start the Frontend
  cd stock-crypto-frontend
  npm run dev


Project Structure
  realtime-price-tracker/
  │
  ├── backend/                   # Backend source files
  │   ├── src/
  │   │   ├── controllers/
  │   │   ├── models/
  │   │   ├── routes/
  │   │   ├── services/
  │   │   ├── utils/
  │   │   └── index.ts
  │   └── package.json
  │
  ├── frontend/                  # Frontend source files
  │   ├── pages/
  │   ├── components/
  │   ├── redux/
  │   │   ├── actions/
  │   │   ├── reducers/
  │   │   ├── selectors/
  │   │   └── store.ts
  │   ├── styles/
  │   ├── .env.local
  │   └── package.json
  │
  └── README.md

Usage

    The backend will start polling data from the API and store it in MongoDB.
    The frontend will display the most recent 20 data entries for a selected stock or cryptocurrency.
    Users can change the stock or cryptocurrency by clicking the button to open a modal/popup.

Contributing

Please feel free to submit issues, fork the repository, and send pull requests!


  



