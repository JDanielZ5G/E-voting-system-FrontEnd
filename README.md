# Secure Auditable E-Voting System

## 📌 Project Overview
A secure, transparent, and auditable electronic voting platform designed for university elections (e.g., Guild President). This system ensures:
- **One-Person-One-Vote**: Strict eligibility verification via OTP and single-use tokens.
- **Secret Ballot**: Decoupling voter identity from cast votes.
- **Auditability**: Immutable logs for all critical actions (nominations, voting, admin changes).
- **Real-time Reporting**: Live turnout dashboards and result visualization.

## 🚀 Tech Stack
- **Frontend**: React (Vite) + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: MySQL (Managed via Prisma ORM)
- **Mobile**: React Native (Expo) - *Optional/Bonus*
- **Testing**: Jest, Supertest, Cypress

## 📂 Repository Structure
```
/
├── client/              # React Frontend
├── server/              # Express Backend
├── mobile/              # React Native App (Bonus)
├── docs/                # Documentation (ERD, API, Wireframes)
├── scripts/             # Seed & Load Test Scripts
└── README.md            # You are here
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- MySQL (v8+)
- Git

### 1. Clone the Repository
```bash
git clone <repo-url>
cd e-voting-system
```

### 2. Backend Setup
```bash
cd server
npm install
cp .env.example .env  # Configure DATABASE_URL, JWT_SECRET, etc.
npx prisma migrate dev --name init
npx prisma db seed      # Seeds initial positions & voters
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
cp .env.example .env  # Configure VITE_API_URL
npm run dev
```

## 📚 Documentation
- [OpenAPI Specification](./docs/openapi.yaml)
- [Entity Relationship Diagram (ERD)](./docs/ERD.md)
- [Deployment Guide](./docs/deployment.md)
- [Testing Strategy](./docs/testing_strategy.md)
- [Performance & Accessibility Targets](./docs/perf_a11y_targets.md)
- [API Flow Charts](./docs/api_flows.md)
- [UI Flow Charts](./docs/ui_flows.md)

## 🧪 Running Tests
```bash
# Backend Tests
cd server
npm test

# Frontend Tests
cd client
npm test
```

## 👥 Contributors
- WASIKE JAMES DANIEL
- MWIMA MABLE
- ADONG ESTHER
- MUKUNZI TREVOR
- ELONGU KENNETH
