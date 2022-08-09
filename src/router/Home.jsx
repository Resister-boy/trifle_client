import React from 'react';
import GenreList from '../components/GenreList';
import Notification from '../components/Notification';
import Dashboard from '../components/Dashboard';
import WebSearch from '../components/WebSearch';

function Home() {
  return (
    <div>
      <Notification />
      <GenreList />
      <Dashboard />
      <WebSearch />
    </div>
  )
}

export default Home