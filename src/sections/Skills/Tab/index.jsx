import { useState } from 'react';
import { Nav } from './Nav';
import { Panel } from './Panel';

export const Tab = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div>
      <Nav activeTab={ activeTab } handleActiveTab={ setActiveTab } />
      <Panel activeTab={ activeTab } />
    </div>
  );
};
