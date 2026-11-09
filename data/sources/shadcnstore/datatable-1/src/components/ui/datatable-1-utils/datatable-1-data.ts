export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  lastLogin: string;
  twoStep: boolean;
  joinedDate: string;
}

export const usersData: User[] = [
  {
    id: '1',
    name: 'Emma Smith',
    email: 'smith@kpmg.com',
    avatar: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
    role: 'Administrator',
    lastLogin: 'Yesterday',
    twoStep: false,
    joinedDate: '24 Jun 2025, 6:05 pm',
  },
  {
    id: '2',
    name: 'Melody Macy',
    email: 'melody@altbox.com',
    avatar: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
    role: 'Analyst',
    lastLogin: '20 mins ago',
    twoStep: true,
    joinedDate: '22 Sep 2025, 10:30 am',
  },
  {
    id: '3',
    name: 'Max Smith',
    email: 'max@kt.com',
    avatar: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
    role: 'Developer',
    lastLogin: '3 days ago',
    twoStep: false,
    joinedDate: '10 Nov 2025, 6:43 am',
  },
  {
    id: '4',
    name: 'Ana Crown',
    email: 'ana.cf@limtel.com',
    avatar: 'https://notion-avatars.netlify.app/api/avatar?preset=female-3',
    role: 'Developer',
    lastLogin: '2 days ago',
    twoStep: true,
    joinedDate: '20 Dec 2025, 6:43 am',
  },
  {
    id: '5',
    name: 'Robert Doe',
    email: 'robert@benko.com',
    avatar: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2',
    role: 'Administrator',
    lastLogin: '5 days ago',
    twoStep: false,
    joinedDate: '19 Aug 2025, 2:40 pm',
  },
  {
    id: '6',
    name: 'John Miller',
    email: 'miller@mapple.com',
    avatar: 'https://notion-avatars.netlify.app/api/avatar?preset=male-3',
    role: 'Trial',
    lastLogin: '3 weeks ago',
    twoStep: false,
    joinedDate: '15 Apr 2025, 10:10 pm',
  },
  {
    id: '7',
    name: 'Sarah Johnson',
    email: 'sarah.j@techcorp.com',
    avatar: 'https://notion-avatars.netlify.app/api/avatar?preset=female-4',
    role: 'Manager',
    lastLogin: '1 hour ago',
    twoStep: true,
    joinedDate: '05 Jan 2025, 9:15 am',
  },
  {
    id: '8',
    name: 'Michael Brown',
    email: 'mbrown@devstudio.io',
    avatar: 'https://notion-avatars.netlify.app/api/avatar?preset=male-4',
    role: 'Designer',
    lastLogin: '2 hours ago',
    twoStep: false,
    joinedDate: '12 Feb 2025, 3:30 pm',
  },
];