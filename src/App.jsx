import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import Layout from './Components/Layout';

export const FRIENDS = [
  {
    id: 1,
    name: 'David Kim',
    picture: 'https://i.pravatar.cc/150?u=1',
    days: 62,
    status: 'almost-due',
    tags: ['WORK'],
  },
  {
    id: 2,
    name: 'Emma Wilson',
    picture: 'https://i.pravatar.cc/150?u=2',
    days: 45,
    status: 'overdue',
    tags: ['FAMILY'],
  },
  {
    id: 3,
    name: 'Lisa Nakamura',
    picture: 'https://i.pravatar.cc/150?u=3',
    days: 12,
    status: 'on-track',
    tags: ['WORK'],
  },
  {
    id: 4,
    name: 'James Wright',
    picture: 'https://i.pravatar.cc/150?u=4',
    days: 80,
    status: 'overdue',
    tags: ['HOBBY'],
  },
  {
    id: 5,
    name: 'Sarah Chen',
    picture: 'https://i.pravatar.cc/150?u=5',
    days: 5,
    status: 'on-track',
    tags: ['FRIEND'],
  },
  {
    id: 6,
    name: 'Michael Ross',
    picture: 'https://i.pravatar.cc/150?u=6',
    days: 34,
    status: 'almost-due',
    tags: ['WORK'],
  },
  {
    id: 7,
    name: 'Anna Scott',
    picture: 'https://i.pravatar.cc/150?u=7',
    days: 90,
    status: 'overdue',
    tags: ['FAMILY'],
  },
  {
    id: 8,
    name: 'Kevin Hart',
    picture: 'https://i.pravatar.cc/150?u=8',
    days: 2,
    status: 'on-track',
    tags: ['HOBBY'],
  },
  {
    id: 9,
    name: 'John Doe',
    picture: 'https://i.pravatar.cc/150?u=9',
    days: 55,
    status: 'almost-due',
    tags: ['FRIEND'],
  },
  {
    id: 10,
    name: 'Jane Smith',
    picture: 'https://i.pravatar.cc/150?u=10',
    days: 15,
    status: 'on-track',
    tags: ['WORK'],
  },
  {
    id: 11,
    name: 'Chris Evans',
    picture: 'https://i.pravatar.cc/150?u=11',
    days: 72,
    status: 'overdue',
    tags: ['FRIEND'],
  },
  {
    id: 12,
    name: 'Robert Downey',
    picture: 'https://i.pravatar.cc/150?u=12',
    days: 28,
    status: 'almost-due',
    tags: ['WORK'],
  },
];

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [timeline, setTimeline] = useState([]);

  const addActivity = (type, person, icon) => {
    const today = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date());

    setTimeline(prev => [
      { id: Date.now(), type, person, date: today, icon },
      ...prev,
    ]);

    toast.success(`${type} recorded with ${person}`, {
      style: {
        borderRadius: '12px',
        background: '#244D3F',
        color: '#fff',
        fontWeight: 'bold',
      },
      iconTheme: { primary: '#fff', secondary: '#244D3F' },
    });
  };

  return (
    <Layout setSelectedFriend={setSelectedFriend}>
      <Outlet
        context={{
          selectedFriend,
          setSelectedFriend,
          addActivity,
          timeline,
          setTimeline,
        }}
      />
    </Layout>
  );
}
