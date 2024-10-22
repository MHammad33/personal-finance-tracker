# Personal Finance Tracker Documentation

## 1. Project Overview

**Personal Finance Tracker** is a web application that enables users to add
expenses and incomes, and track their spending through various graph views.

## 1.1 Visual Overview

![App Screenshot](image.png)

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
     MONGODB_URI=<your-mongodb-uri> # MongoDB URI for database connection
     PORT=5000  # Backend server port
     ```
     Note: Ensure to replace `<your-mongodb-uri>` with the actual URI string
     from your MongoDB account.

4. **Run the backend server**:

   ```bash
   npm run server
   ```

5. **Run the frontend application**:

   ```bash
   npm run dev
   ```

6. **Open in browser**:
   - Visit `http://localhost:5173` to view the application.

## 5. Usage Instructions

- **Add Transactions**: Click the "Add Transactions" button on the transactions
  page, and provide the relevant details. For example:
  - Amount: "100"
  - Description: "Groceries"
  - Type: "Income" or "Expense"
  - Category: "Food"
  - Date: "Oct 16, 2024"
- **View Transactions**: Go to the transactions page listed in the navbar.
- **Switch Graph Views for Tracking**: Use static graph views in the Dashboard.

## 6. Deployment

The project is deployed on **Vercel**. You can access it here:
[https://finance-frontend-rust-three.vercel.app/](https://finance-frontend-rust-three.vercel.app/).

## 7. Troubleshooting

- **Issue**: MongoDB connection error
  - **Solution**: Ensure that the `MONGODB_URI` in your `.env` file is correct
    and the MongoDB service is running.
- **Issue**: App not running on `http://localhost:5173`
  - **Solution**: Ensure both the backend (`npm run server`) and frontend
    (`npm run client`) are running.

## 8. API Documentation

- **POST /api/transactions**: Add a new transaction

  - Request body:
    ```json
    {
      "type": "expense",
      "amount": 100,
      "category": "Food",
      "description": "Grocery shopping",
      "date": "2024-10-16"
    }
    ```
  - Response:

    ```json
    {
      "userId": "unique_user_id",
      "amount": 100,
      "description": "Groceries",
      "type": "expense",
      "category": "Food",
      "date": "2024-10-16T00:00:00.000Z",
      "createdAt": "2024-10-16T09:28:21.888Z",
      "updatedAt": "2024-10-16T09:28:21.888Z",
      "id": "unique_transaction_id"
    }
    ```

## 9. Contributing

Contributions are welcome! Here's how you can get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.
6. Wait for review and address any feedback provided by the maintainers.
7. Once approved, your feature will be merged.

## 10. License

**All rights reserved**: This project is copyrighted, and all rights are
reserved by the author.
