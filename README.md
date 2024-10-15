# Personal Finance Tracker Documentation

## 1. Project Overview

**Personal Finance Tracker** is a web application that enables users to add
expenses and incomes, and track their spending through various graph views.

## 2. Features

- Add income/expense
- View transactions
- Track spending through multiple views of graphs (static graphs)

## 3. Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB

## 4. Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MHammad33/personal-finance-tracker
   cd personal-finance-tracker
   ```

2. **Install dependencies**:

   - For both frontend and backend, run the following command:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory with the following variables:
     ```bash
     MONGODB_URI=<your-mongodb-uri>
     PORT=5000
     ```

4. **Run the backend server**:

   ```bash
   npm run server
   ```

5. **Run the frontend application**:

   ```bash
   npm run client
   ```

6. **Open in browser**:
   - Visit `http://localhost:5173` to view the application.

## 5. Usage Instructions

- **Add Income/Expense**: Click the "Add Expense" button on the transactions
  page and provide relevant data.
- **View Transactions**: Go to the transactions page listed in the navbar.
- **Switch Graph Views for Tracking**: Use static graph views in the Dashboard.

## 6. Deployment

The project is deployed on **Vercel**. You can access it here:
[https://finance-frontend-rust-three.vercel.app/](https://finance-frontend-rust-three.vercel.app/).

## 7. License

**All rights reserved**: This project is copyrighted, and all rights are
reserved by the author.
