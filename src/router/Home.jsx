import React from 'react';
import GenreList from '../components/GenreList';
import Notification from '../components/Notification';
import Dashboard from '../components/Dashboard';

function Home() {
  return (
    <div>
      <Notification />
      <GenreList />
      <Dashboard />
    </div>
  )
}

export default Home