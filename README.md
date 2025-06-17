# Event Platform

A comprehensive event management and social networking platform built with Next.js and PostgreSQL.

## Project Structure

The project is organized as a monorepo with the following structure:

```
/apps
  /event-mingle      → User-facing event social app
  /event-manager     → Admin-side event creation & logistics
  /master-dashboard  → Global analytics, security, roles

/packages
  /ui                → Shared components (cards, forms, headers)
  /utils             → Formatters, validators, permission checks
  /db                → SQL migrations and PostgreSQL schema
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- PostgreSQL 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/event-platform.git
cd event-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

## Features

### EventMingle (User App)
- Tinder-style event discovery
- Real-time chat and messaging
- Event invitations and cost splitting
- Calendar integration
- Social matching and networking

### EventManager (Admin App)
- Event creation and management
- Venue management
- Staff and resource allocation
- Client communication

### Master Dashboard
- Platform analytics
- Security and access control
- Integration management
- Team management

## Development

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 