import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  shippingAddress: Address;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses: Address[];
  orders: Order[];
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  updateProfile: (updates: Partial<User>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, updates: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  addOrder: (order: Omit<Order, 'id' | 'date'>) => string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication
    if (email && password) {
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        phone: '+1 (555) 123-4567',
        addresses: [
          {
            id: '1',
            name: 'Home',
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'United States',
            isDefault: true
          }
        ],
        orders: []
      };
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock registration
    if (name && email && password) {
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        addresses: [],
        orders: []
      };
      setUser(newUser);
      return true;
    }
    return false;
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  const addAddress = (address: Omit<Address, 'id'>) => {
    if (user) {
      const newAddress: Address = {
        ...address,
        id: Date.now().toString()
      };
      setUser({
        ...user,
        addresses: [...user.addresses, newAddress]
      });
    }
  };

  const updateAddress = (id: string, updates: Partial<Address>) => {
    if (user) {
      setUser({
        ...user,
        addresses: user.addresses.map(addr => 
          addr.id === id ? { ...addr, ...updates } : addr
        )
      });
    }
  };

  const deleteAddress = (id: string) => {
    if (user) {
      setUser({
        ...user,
        addresses: user.addresses.filter(addr => addr.id !== id)
      });
    }
  };

  const addOrder = (order: Omit<Order, 'id' | 'date'>): string => {
    if (user) {
      const newOrder: Order = {
        ...order,
        id: Date.now().toString(),
        date: new Date().toISOString()
      };
      setUser({
        ...user,
        orders: [newOrder, ...user.orders]
      });
      return newOrder.id;
    }
    return '';
  };

  return (
    <UserContext.Provider value={{
      user,
      login,
      logout,
      register,
      updateProfile,
      addAddress,
      updateAddress,
      deleteAddress,
      addOrder
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
