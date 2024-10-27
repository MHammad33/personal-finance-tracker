# Contributing to Personal Finance Tracker

We appreciate your interest in contributing to **Personal Finance Tracker**!
This document outlines our guidelines and best practices to help you contribute
effectively.

## Table of Contents

1. [Code of Conduct](#1-code-of-conduct)
2. [How to Contribute](#2-how-to-contribute)
3. [Project Structure](#3-project-structure)
4. [Development Workflow](#4-development-workflow)
5. [Coding Guidelines](#5-coding-guidelines)
6. [Commit Message Guidelines](#6-commit-message-guidelines)
7. [Issue Reporting](#7-issue-reporting)
8. [Pull Request Process](#8-pull-request-process)

## 1. Code of Conduct

We follow a strict [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a welcoming
and inclusive community. Please review it to understand our community standards.

## 2. How to Contribute

### Reporting Bugs or Issues

- If you find a bug, **please check if it has already been reported**. If it
  hasn’t, feel free to create a new issue. Include as much detail as possible
  (e.g., steps to reproduce, environment, etc.).
- You can report an issue through the
  [GitHub Issues tab](https://github.com/MHammad33/personal-finance-tracker/issues).

### Suggesting Features or Improvements

- We welcome suggestions! To suggest a feature, please open an issue with a
  clear and descriptive title. Be sure to include why you believe this feature
  is valuable and any relevant use cases.

## 3. Project Structure

- **frontend/**: Contains the React code and related assets.
- **backend/**: Contains the Node.js code and API routes.
- **docs/**: Contains documentation files and images.
- **.github/**: GitHub-related files (e.g., issue templates).

## 4. Development Workflow

1. **Fork the repository** on GitHub.
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/<your-username>/personal-finance-tracker.git
   ```
3. **Create a new branch** for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**.

5. **Commit your changes** with a clear and descriptive message (see below for
   guidelines).

6. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

7. Create a Pull Request from your fork to the main repository.

## 5. Coding Guidelines

- Follow the project's **code style and formatting** rules to maintain
  consistency.
- Write **descriptive variable and function names**.
- Document your code with **comments if necessary**, especially for complex
  logic.
- Avoid making **unrelated changes** in a single pull request.

## 6. Commit Message Guidelines

Use clear and concise commit messages. Follow this convention:

- **type**: Indicates the purpose of the commit (e.g., `feat`, `fix`, `docs`,
  `refactor`).
- **scope**: Indicates the area of the codebase affected (e.g., `auth`,
  `transactions`, `api`).
- **description**: Provides a brief summary of the changes made.

### Example Commit Messages

- **Feature:** `feat(transactions): add filter by category`
- **Fix:** `fix(auth): resolve login issue`
- **Documentation:** `docs(README): update installation instructions`

## 7. Issue Reporting

When creating an issue, please include the following information:

- A clear and descriptive title.
- The steps to reproduce the issue.
- Any relevant error messages or screenshots.
- Details about your environment (e.g., browser, operating system, etc.).

## 8. Pull Request Process

- Ensure your changes follow the project’s coding guidelines.
- Double-check that your code passes all tests.
- Submit your pull request with a detailed description of the changes.
- Be responsive to any feedback or suggestions from maintainers or reviewers.
- Once your changes are approved, they will be merged into the main branch.

## Thank You for Contributing!

We appreciate your effort in improving **Personal Finance Tracker**! If you have
any questions, feel free to reach out via the Issues tab.
