import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

import { ClerkProvider } from '@clerk/clerk-react'
import { MantineProvider } from '@mantine/core';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </ClerkProvider>
  </React.StrictMode>,
)
