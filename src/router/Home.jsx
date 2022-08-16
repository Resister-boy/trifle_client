import React from 'react';
import GenreList from '../components/GenreList';
import Notification from '../components/Notification';
import Dashboard from '../components/Dashboard';
import { KeywordsProvider } from '../context/KeywordContext';

function Home() {
  return (
    <div>
      <Notification />
      <GenreList />
      <KeywordsProvider>
        <Dashboard />
      </KeywordsProvider>
    </div>
  )
}

export default Home