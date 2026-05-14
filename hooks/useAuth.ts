// hooks/useAuth.ts
import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);

  // Load session on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('ghl_user_session');
    if (storedToken) {
      setSessionToken(storedToken);
      verifySession(storedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  const verifySession = async (token: string) => {
    try {
      const response = await fetch('/api/ghl-saas-hunt/auth/session', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      
      if (data.success) {
        setUser(data.user);
        setSessionToken(token);
      } else {
        localStorage.removeItem('ghl_user_session');
        setSessionToken(null);
        setUser(null);
      }
    } catch (error) {
      console.error('Session verification failed:', error);
      localStorage.removeItem('ghl_user_session');
      setSessionToken(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const sendOTP = async (name: string, email: string, phone: string): Promise<boolean> => {
    setIsVerifying(true);
    try {
      const response = await fetch('/api/ghl-saas-hunt/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Send OTP error:', error);
      return false;
    } finally {
      setIsVerifying(false);
    }
  };

  const verifyOTP = async (email: string, otp: string): Promise<boolean> => {
    setIsVerifying(true);
    try {
      const response = await fetch('/api/ghl-saas-hunt/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('ghl_user_session', data.sessionToken);
        setSessionToken(data.sessionToken);
        setUser(data.user);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Verify OTP error:', error);
      return false;
    } finally {
      setIsVerifying(false);
    }
  };

  const logout = async () => {
    if (sessionToken) {
      await fetch('/api/ghl-saas-hunt/auth/logout', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${sessionToken}` }
      });
    }
    localStorage.removeItem('ghl_user_session');
    setSessionToken(null);
    setUser(null);
  };

  return {
    user,
    sessionToken,
    isLoading,
    isVerifying,
    sendOTP,
    verifyOTP,
    logout,
    isAuthenticated: !!sessionToken && !!user,
  };
}