import MobileLogo from '../Images/MobileLogo.png';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const MobileTopbar = ({ users }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');

  const isActive = (path) => {
    return activeTab === path || location.pathname.includes(path);
  };

  const isUserPage = location.pathname.toLowerCase().includes('/user/');

  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-900">
        <div>
          {users && users.length > 0 && (
            <Link to={`/User/${users[3]?.id}`}>
              <img
                src={users[0]?.image}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
            </Link>
          )}
        </div>

        <img src={MobileLogo} alt="Logo" className="w-8 h-8" />

        <button className="text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-around border-b border-gray-900 text-sm font-medium">
        {isUserPage ? (
          <>
            <Link to={`/User/${users[3]?.id}`}
              className={`flex-1 py-4 text-center ${isActive('overview')
                ? 'text-white border-b-2 border-white'
                : 'text-gray-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </Link>
            <Link to={`/User/${users[2]?.id}`}
              className={`flex-1 py-4 text-center ${isActive('portfolio')
                ? 'text-white border-b-2 border-white'
                : 'text-gray-500'}`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </Link>
            <Link to={`/User/${users[0]?.id}`}
              className={`flex-1 py-4 text-center ${isActive('experience')
                ? 'text-white border-b-2 border-white'
                : 'text-gray-500'}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </Link>
            <Link to={`/User/${users[1]?.id}`}
              className={`flex-1 py-4 text-center ${isActive('media')
                ? 'text-white border-b-2 border-white'
                : 'text-gray-500'}`}
              onClick={() => setActiveTab('media')}
            >
              Media
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/analytics"
              className={`flex-1 py-4 text-center ${isActive('overview')
                ? 'text-white border-b-2 border-white'
                : 'text-gray-500'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </Link>
            <Link
              to="/demographics"
              className={`flex-1 py-4 text-center ${isActive('demographics')
                ? 'text-white border-b-2 border-white'
                : 'text-gray-500'}`}
              onClick={() => setActiveTab('demographics')}
            >
              Demographic
            </Link>
            <Link
              to="#"
              className="flex-1 py-4 text-center text-gray-500"
            ></Link>
            <Link
              to="#"
              className="flex-1 py-4 text-center text-gray-500"
            >
              More
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileTopbar;
