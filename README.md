# Todo Go Web

A Next.js frontend for the Todo Go API.

## Overview

This project provides a simple web client for managing todos. It is built with
Next.js and communicates with a Go-based REST API to create, complete and delete
tasks.

## Requirements

- Node.js 18 or later and npm
- A running Go backend exposing the todo API (see [API/Backend](#apibackend))

## Environment Setup

Install dependencies and create a local environment file:

```bash
npm install
```

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Running the App

Start the development server on
[http://localhost:3001](http://localhost:3001):

```bash
npm run dev
```

## API/Backend

The frontend expects a Go service exposing the following endpoints:

- `GET /todos` – list all todos
- `POST /todos` – create a new todo
- `PATCH /todos/{id}/complete` – mark a todo as complete
- `DELETE /todos/{id}` – remove a todo

Ensure the backend is running at the URL specified by `NEXT_PUBLIC_API_URL`
before starting the frontend.

## Project Structure

```
src/
  app/         Next.js route handlers and pages
  components/  Reusable UI components
  lib/         API utilities
```

## Contributing

1. Fork the repository and create a feature branch.
2. Run `npm run lint` and fix any issues.
3. Commit your changes and submit a pull request.

