import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import '../app/globals.css';

const OrganizationProfileMenu: React.FC = () => {
  const router = useRouter();
  const { orgName } = router.query;
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

{/* Buttons, needs to be fixed so that they are responsive */}
  return (
    <div style={{ backgroundColor: 'rgb(179, 206, 229)', width: '100%', display: 'flex' }}>
      
      <Link href={`/organization_profile_about?orgName=${orgName}`} 
        onMouseEnter={() => setHoverIndex(0)}
        onMouseLeave={() => setHoverIndex(null)}
  className="p-2 rounded-r text-white text-1xs md:text-1xs sm:text-1xs "
  style={{ backgroundColor: hoverIndex === 0 ? 'rgb(125, 152, 174)' : 'rgb(179, 206, 229)', flex: 1, flexBasis: '100%', margin: '0 2px', borderRight: '3px solid white', color: 'white', textAlign: 'center' }}>
  <button>
    ABOUT
  </button>
</Link>

<Link href={`/organization_profile_announcements?orgName=${orgName}`} 
  onMouseEnter={() => setHoverIndex(1)}
  onMouseLeave={() => setHoverIndex(null)}
className="p-2 rounded-r text-white text-1xs md:text-1xs sm:text-1xs "
style={{ backgroundColor: hoverIndex === 1 ? 'rgb(125, 152, 174)' : 'rgb(179, 206, 229)',  flex: 1, flexBasis: '100%', margin: '0 2px', borderRight: '3px solid white', color: 'white', textAlign: 'center' }}>
  <button>
    ANNOUNCEMENTS
  </button>
</Link>

<Link href={`/organization_profile_events?orgName=${orgName}`} 
  onMouseEnter={() => setHoverIndex(2)}
  onMouseLeave={() => setHoverIndex(null)}
className="p-2 rounded-r text-white text-1xs md:text-1xs sm:text-1xs "
style={{ backgroundColor: hoverIndex === 2 ? 'rgb(125, 152, 174)' : 'rgb(179, 206, 229)',  flex: 1, flexBasis: '100%', margin: '0 2px', borderRight: '3px solid white', color: 'white', textAlign: 'center' }}>
  <button>
    EVENTS
  </button>
</Link>

<Link href={`/organization_profile_contact?orgName=${orgName}`} 
  onMouseEnter={() => setHoverIndex(3)}
  onMouseLeave={() => setHoverIndex(null)}
className="p-2 rounded-r text-white text-1xs md:text-1xs sm:text-1xs "
style={{ backgroundColor: hoverIndex === 3 ? 'rgb(125, 152, 174)' : 'rgb(179, 206, 229)', flex: 1, flexBasis: '100%', margin: '0 2px', color: 'white', textAlign: 'center' }}>
  <button>
    CONTACT
  </button>
</Link>

    </div>
  );
};

export default OrganizationProfileMenu;
