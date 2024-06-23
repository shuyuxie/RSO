import React from 'react';
import { useRouter } from 'next/router';
import Home from './home';

import OrganizationProfileAbout from './organization_profile_about';
import OrganizationProfileAnnouncements from './organization_profile_announcements';
import OrganizationProfileEvents from './organization_profile_events';
import OrganizationProfileContact from './organization_profile_contact';

import UserProfileAccount from './user_profile_account';
import UserProfileJoinedRSOs from './user_profile_joined_rsos';
import UserProfileFindRelated from './user_profile_find_related';
import UserProfileFriends from './user_profile_friends';

import RSOLogin from './rso_login';
import UserLogin from './user_login';

const App: React.FC = () => {
  const router = useRouter();

  const renderPage = () => {
    const { pathname } = router;

    switch (pathname) {
      case '/':
        return <Home />;
      case '/organization_profile_about':
        return <OrganizationProfileAbout />;
      case '/organization_profile_announcements':
        return <OrganizationProfileAnnouncements />;
      case '/organization_profile_events':
        return <OrganizationProfileEvents />;
      case '/organization_profile_contact':
        return <OrganizationProfileContact />;
      case '/user_profile_account':
        return <UserProfileAccount />;
      case '/user_profile_joined_rsos':
        return <UserProfileJoinedRSOs />;
      case '/user_profile_find_related':
        return <UserProfileFindRelated />;
      case '/user_profile_friends':
        return <UserProfileFriends />;
      case '/rso_login':
        return <RSOLogin />;
      case '/user_login':
        return <UserLogin />;
      default:
        return <div>Page not found</div>;
    }
  };

  return renderPage();
};

export default App;
