import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getUserById } from '../Components/Data/User';
import { FaUser} from "react-icons/fa6";
import { BsPatchCheckFill,BsLinkedin,BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoLogoCodepen } from "react-icons/io";
import { FaHSquare } from "react-icons/fa";
import Logo from "./Images/Logo.png";
import { Link } from 'react-router-dom';
const UserProfile = () => {
  const { userid } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const data = getUserById(userid);
      setUserData(data);
      setLoading(false);
    }, 500);
  }, [userid]);

  if (loading) return <div className="p-4 text-white">Loading...</div>;
  if (!userData) return <div className="p-4 text-white">User not found</div>;

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      
      {/* Mobile version */}

<div className="block md:hidden bg-black border border-gray-900 rounded-lg p-4 mb-6">
  <div className="flex flex-col gap-4">

   
    <div className="w-34 h-34 flex">
        <FaUser className="w-28 h-28 object-cover p-2" />
        </div>

    <div>
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-semibold text-white">{userData.name}</h2>
        {userData.verified && (
          <BsPatchCheckFill className="text-blue-500 w-5 h-5" />
        )}
      </div>

      <p className="text-sm text-white mt-1 flex items-center gap-2">
       <span className='text-lg'> {userData.title}</span>
       <IoLogoCodepen className="w-6 h-6" />
       </p>
       <div className='flex flex-row justify-between items-center py-2'>
<div>
      {userData.tag && (
        <span className="inline-block mt-2 px-3 py-1 bg-white text-black text-xs rounded font-semibold">
          {userData.tag}
        </span>
      )}
    </div>

   
    <div className="flex gap-4 mt-2">
      {userData.socialLinks.linkedin && (
       <Link
       to="#"
       onClick={() => window.open("https://www.linkedin.com/in/suraj-singh-jadon-7102004q/", "_blank")}
       className="rounded-xl p-2"
     >
       <BsLinkedin className="w-6 h-6 text-blue-500" />
     </Link>
      )}
      {userData.socialLinks.twitter && (
        <Link
        to="#"
        onClick={() => window.open("https://x.com/", "_blank")}
        className="p-2"
      >
        <BsTwitterX className="w-6 h-6 text-white" />
      </Link>
      )}
      {userData.socialLinks.email && (
        <Link to="#" onClick={() => window.location.href = `mailto:${email}`} className="rounded-xl p-2">
        <SiGmail className="w-6 h-6 text-red-600" />
      </Link>
      )}
    </div>
    
    </div>
    </div>
  </div>
</div>

      {/*Desktop*/}
      <div className= " hidden md:block bg-black border border-gray-900 rounded-lg p-10 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-34 h-34 flex">
        <FaUser className="w-28 h-28 object-cover p-4" />
        </div>
          <div>

            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-medium">{userData.name}</h2>
              {userData.verified && (

                <span className="text-blue-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <BsPatchCheckFill /></svg>
                </span>
                
              )}
            </div>
          
            <div className="flex gap-3">
            <p className="text-white">{userData.title}</p>
            <IoLogoCodepen className="w-6 h-6" />
            </div>

            {userData.tag && (
              <span className="inline-block items-center justify-center px-2 w-[50%] h-6 bg-white text-dark text-1xs rounded mt-2">
                {userData.tag}
              </span>
            )}
            
            <div className="flex gap-3 mt-4 py-4 ">
              {userData.socialLinks.linkedin && (
              <div
              onClick={() =>
                window.open("https://www.linkedin.com/in/suraj-singh-jadon-7102004q/", "_blank")
              }
              className="cursor-pointer text-blue-500 bg-white rounded-xl"
            >
              <BsLinkedin className="w-10 h-10" />
            </div>
            
              )}
              {userData.socialLinks.twitter && (
              <div
              onClick={() =>
                window.open("https://twitter.com/", "_blank")
              }
              className="cursor-pointer text-white"
            >
              <BsTwitterX className="w-10 h-10" />
            </div>
                        
              )}
              {userData.socialLinks.email && (
             <div
             onClick={() =>
               window.open(`mailto:${userData.socialLinks.email}`, "_blank")
             }
             className="cursor-pointer px-1 bg-white rounded-xl"
           >
             <SiGmail className="w-10 h-10 text-red-600" />
           </div>
           
            
              )}
            </div>
            
          </div>

        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Founded Companies */}
        <div className="bg-black border border-gray-900 rounded-lg p-6">

          <h3 className="text-2xl font-medium mb-4">Founded Companies</h3>

          <div className="text-8xl font-medium mb-6">{userData.foundedCompanies.length.toString().padStart(2, '0')}</div>

          {userData.foundedCompanies.map(company => (
            <div key={company.id} className="flex items-center justify-between py-3 border-t border-gray-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded flex items-center justify-center">
                  <img src={Logo} alt={company.name} className="w-9 h-9" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className='text-white font-medium text-lg'>{company.name}</span>
                    {company.tag && (
                      <span className="text-xs px-2 py-0.5 bg-green-900 text-black rounded">
                        {company.tag}
                      </span>
                    )}
                  </div>
                  {company.foundedYear && (
                    <p className="text-sm text-white">
                      Founded in {company.foundedYear}, in <span className='font-medium'>{company.industry}</span>
                    </p>
                  )}
                  {company.details && (
                    <p className="text-sm text-white font-normal">{company.details}</p>
                  )}
                  {company.acquired && (
                    <p className="text-sm text-white font-normal">{company.acquired}</p>
                  )}
                </div>
              </div>
              <button className="text-xs text-white">View Profile</button>
            </div>
          ))}
        </div>
        
        {/* Experience */}
        <div className="bg-black border border-gray-900 rounded-lg p-6">
          <h3 className="text-2xl font-medium mb-4">Experience</h3>
          <div className="text-8xl font-medium mb-6">{userData.experience.length.toString().padStart(2, '0')}</div>
          {userData.experience.map(exp => (
            <div key={exp.id} className="flex items-center justify-between py-3 border-t border-gray-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10  rounded flex items-center justify-center">
                <FaHSquare className="w-9 h-9" />
                </div>
                <span className='font-medium text-lg'>{exp.name}</span>
              </div>
              <button className="text-xs text-white">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
