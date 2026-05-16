# Sustainability Funding Interface - Frontend

React 18 + TypeScript + Vite frontend for the sustainability funding surfacing system.

## Features Built

### Core Pages
- **Dashboard**: Overview of matches, applications, and statistics
- **Funding Sources**: Browse and filter available funding opportunities
- **Applications**: Create and track funding applications
- **Matches**: AI-generated matches between cooperatives and funding sources
- **Landing Page**: Public-facing introduction and features

### Technical Features
- React Router v6 for navigation
- Axios for API communication
- Authentication context for user state
- Responsive design for mobile and desktop
- Loading states and error handling

## Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── navigation/
│   │       ├── Navigation.jsx
│   │       └── Navigation.css
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── api/
│   │   └── client.js
│   ├── pages/
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Dashboard.css
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   │   ├── FundingSources.jsx
│   │   ├── FundingSources.css
│   │   ├── Applications.jsx
│   │   ├── Applications.css
│   │   └── Matches.jsx
│   ├── styles.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Configuration

### API Configuration

Set the API URL in your environment:

```bash
# .env file
VITE_API_URL=http://localhost:3001
```

## Development

The frontend communicates with the backend API at `/api` endpoints.

### Available Routes

- `/` - Dashboard
- `/funding-sources` - Browse funding sources
- `/funding-sources/new` - Create new funding source (coming soon)
- `/applications` - Manage applications
- `/applications/create` - Create new application
- `/applications/:id` - View application details (coming soon)
- `/matches/:cooperativeId` - View matches
- `/communities` - Community planner (coming soon)
- `/cooperatives` - Cooperative management (coming soon)
- `/cooperatives/new` - Create cooperative (coming soon)
- `/cooperatives/:id` - View cooperative details (coming soon)

## Styling

Custom CSS is included in the component files and global styles.css. The design uses:
- Modern, clean aesthetic
- Green color scheme (#22c55e) for sustainability theme
- Responsive grid layouts
- Smooth transitions and hover effects

## Future Enhancements

- [ ] Integration tests
- [ ] E2E tests with Cypress
- [ ] Unit tests with Jest
- [ ] Storybook for component documentation
- [ ] Dark mode support
- [ ] More detailed match recommendations
- [ ] Real-time notifications
- [ ] Advanced filtering and search
- [ ] Reports and analytics dashboard

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

Built as part of the Roots sustainability funding platform.
