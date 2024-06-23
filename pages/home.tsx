import React, { useState, useEffect } from 'react';
import HamburgerMenu from '../components/hamburger_menu';
import Link from 'next/link';
import '../app/globals.css';

const Home: React.FC = () => {
  const [organizations, setOrganizations] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displayedOrganizations, setDisplayedOrganizations] = useState<string[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/organization_names.csv');
        if (!response.ok) {
          throw new Error('Failed to fetch organizations data');
        }
        const text = await response.text();
        const orgNames = text.split('\n').filter(Boolean);
        setOrganizations(orgNames);
        setDisplayedOrganizations(orgNames);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform the search using the searchTerm
    const filteredOrganizations = organizations.filter(org =>
      org.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedOrganizations(filteredOrganizations);
  };

  const handleSort = () => {
    const sortedOrganizations = [...displayedOrganizations].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setDisplayedOrganizations(sortedOrganizations);
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999, height: '70px', backgroundColor: 'white' }} className="shadow-md">
        <div style={{ float: 'right', marginRight: '30px', marginTop: '25px' }}>
          <HamburgerMenu />
        </div>
      </div>
     
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start">

        <div style={{ paddingTop: '150px' }}>
          <h1 className="text-5xl md:text-7xl sm:text-7xl font-bold" style={{  color: 'rgb(19, 41, 75)' }}>Organizations</h1>
        </div>

        <div style={{ paddingTop: '5px' }}>
          <div className="flex mt-1 p-10" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <form onSubmit={handleSubmit} className="flex mt-1 p-10" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <input
          type="search"
          className="p-2 rounded-l border-2 border-white-300  text-1xl md:text-2xl sm:text-2xl h-auto md:h-12 lg:h-12 xl:h-12"
          style={{ width: '40vw', color: 'rgb(19, 41, 75)'}}
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-2 rounded-r text-white text-1xl md:text-2xl sm:text-2xl h-auto md:h-12 lg:h-12 xl:h-12"
          style={{ backgroundColor: 'rgb(19, 41, 75)'}}
        >
          Search
        </button>
      </form>
      <button
          onClick={handleSort}
          className="p-2 rounded text-white text-1xl md:text-2xl sm:text-2xl h-auto md:h-12 lg:h-12 xl:h-12 ml-4"
          style={{ backgroundColor: 'rgb(19, 41, 75)'}}
        >
          {sortOrder === 'asc' ? 'Sort A-Z' : 'Sort Z-A'}
        </button>
          </div>
        </div>
       
        <div className="flex flex-wrap w-full justify-around" style={{ alignItems: 'center', width: '80vw', paddingTop: '1vh' }}>
        {displayedOrganizations.map((org, index) => (
          <div 
            key={index} 
            className="w-full p-4"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <Link href={`/organization_profile_about?orgName=${org}`}>
              <div 
                style={{ backgroundColor: hoverIndex === index ? 'rgb(125, 152, 174)' : 'rgb(179, 206, 229)' }} 
                className="p-4 rounded-md shadow-md cursor-pointer"
              >
                <p className="text-1xl md:text-2xl sm:text-2xl font-semibold mb-2">{org}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Home;
