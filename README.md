# Your Project Name

Welcome to our application! This README will guide you through the setup process and help you get started with our app.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Support](#support)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (latest stable version)
- npm or yarn
- MySQL (if using the existing backend)

## Getting Started

To get started with this application, follow these steps:

1. Clone this repository to your local machine
2. Navigate to the project directory
3. Install the required dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Backend Setup

This application requires a backend to function properly. You have two options:

1. **Create your own backend**: If you prefer to create your own backend, ensure it's compatible with the API endpoints this application expects.

2. **Use the demo backend**: Alternatively, you can download and use the backend created specifically for this demo site.

If you choose to use the existing backend:

- Ensure you have MySQL installed and properly configured
- Follow the setup instructions provided with the demo backend

## Environment Variables

To connect the frontend with your backend, you need to set up environment variables. Create a `.env` file in the root of your project and add the following:

```
API_SERVICES=http://your-backend-url/api/
API_ASIDE=http://your-backend-url/api/services/
```

Replace `http://your-backend-url` with the actual URL of your backend. For local development, this might be `http://localhost:3000`.

Example:

```
API_SERVICES=http://localhost:3000/api/
API_ASIDE=http://localhost:3000/api/services/
```

## Usage

After setting up the backend and environment variables, you can start the application:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` (or the appropriate port) in your browser to see the application in action.

## Support

If you encounter any issues or have questions, please open an issue in this repository or contact our support team.

---

Thank you for using our application! We hope you find it useful and we look forward to your feedback.
