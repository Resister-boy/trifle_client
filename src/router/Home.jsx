import React from 'react';
import Notification from '../components/Notification';
import Dashboard from '../components/Dashboard';
import { KeywordsProvider } from '../context/KeywordContext';

function Home() {
  return (
    <div>
      <Notification />
      <KeywordsProvider>
        <Dashboard />
      </KeywordsProvider>
    </div>
  )
}

export default Home