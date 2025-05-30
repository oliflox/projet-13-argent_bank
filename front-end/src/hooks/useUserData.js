import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserProfile } from '../services/userService';

export const useUserData = () => {
  const [userData, setUserData] = useState({ firstName: '', lastName: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const loadUserData = async () => {
    if (!isAuthenticated) return;
    
    setIsLoading(true);
    setError('');
    
    const result = await fetchUserProfile();
    if (result.success) {
      setUserData(result.data);
    } else {
      setError(result.error);
    }
    
    setIsLoading(false);
  };

  useEffect(() => {
    loadUserData();
  }, [isAuthenticated]);

  return {
    userData,
    error,
    isLoading,
    refreshUserData: loadUserData
  };
}; 