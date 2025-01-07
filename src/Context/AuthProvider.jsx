import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchdata } from '../utils/Youtubeapi';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  const fetchAllData = async (query) => {
    setLoading(true);
    try {
      const result = await fetchdata(`search?part=snippet&type=video&q=${query}&maxResults=1`);
      setData(result.items);
    } catch (error) {
      console.error('Error in fetchAllData:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
