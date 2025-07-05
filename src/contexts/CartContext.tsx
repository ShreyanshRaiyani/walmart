import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  originalPrice?: number;
  bagType?: 'plastic' | 'paper';
}

export interface DeliveryOption {
  id: string;
  name: string;
  price: number;
  ecoPoints: number;
  estimatedTime: string;
  icon: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  selectedDelivery: DeliveryOption | null;
  totalEcoPoints: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity' | 'bagType'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'UPDATE_BAG_TYPE'; payload: { id: string; bagType: 'plastic' | 'paper' } }
  | { type: 'SET_DELIVERY'; payload: DeliveryOption }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const deliveryOptions: DeliveryOption[] = [
  {
    id: 'standard',
    name: 'Standard Delivery',
    price: 0,
    ecoPoints: 0,
    estimatedTime: '3-5 business days',
    icon: 'truck'
  },
  {
    id: 'express',
    name: 'Express Delivery',
    price: 9.99,
    ecoPoints: 0,
    estimatedTime: '1-2 business days',
    icon: 'zap'
  },
  {
    id: 'ebike',
    name: 'E-Bike Delivery (Eco-Friendly)',
    price: 4.99,
    ecoPoints: 3,
    estimatedTime: 'Same day (within 10 miles)',
    icon: 'bike'
  },
  {
    id: 'pickup',
    name: 'Store Pickup',
    price: 0,
    ecoPoints: 2,
    estimatedTime: 'Ready in 2 hours',
    icon: 'store'
  }
];

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return calculateCartTotals(updatedItems, state.selectedDelivery);
      }
      
      const newItems = [...state.items, { ...action.payload, quantity: 1, bagType: 'plastic' }];
      return calculateCartTotals(newItems, state.selectedDelivery);
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return calculateCartTotals(newItems, state.selectedDelivery);
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      return calculateCartTotals(newItems, state.selectedDelivery);
    }

    case 'UPDATE_BAG_TYPE': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, bagType: action.payload.bagType }
          : item
      );
      return calculateCartTotals(newItems, state.selectedDelivery);
    }

    case 'SET_DELIVERY': {
      return {
        ...state,
        selectedDelivery: action.payload,
        totalEcoPoints: calculateEcoPoints(state.items, action.payload)
      };
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0, selectedDelivery: null, totalEcoPoints: 0 };
    
    case 'LOAD_CART':
      return calculateCartTotals(action.payload, state.selectedDelivery);
    
    default:
      return state;
  }
};

const calculateEcoPoints = (items: CartItem[], delivery: DeliveryOption | null): number => {
  const bagPoints = items.reduce((points, item) => {
    return points + (item.bagType === 'paper' ? item.quantity * 5 : 0);
  }, 0);
  
  const deliveryPoints = delivery ? delivery.ecoPoints : 0;
  
  return bagPoints + deliveryPoints;
};

const calculateCartTotals = (items: CartItem[], delivery: DeliveryOption | null): CartState => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = delivery ? delivery.price : 0;
  const total = subtotal + deliveryFee;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalEcoPoints = calculateEcoPoints(items, delivery);
  
  return { items, total, itemCount, selectedDelivery: delivery, totalEcoPoints };
};

interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, 'quantity' | 'bagType'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateBagType: (id: string, bagType: 'plastic' | 'paper') => void;
  setDelivery: (delivery: DeliveryOption) => void;
  clearCart: () => void;
  deliveryOptions: DeliveryOption[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
    selectedDelivery: null,
    totalEcoPoints: 0
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedDelivery = localStorage.getItem('selectedDelivery');
    
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
    
    if (savedDelivery) {
      const delivery = deliveryOptions.find(d => d.id === savedDelivery);
      if (delivery) {
        dispatch({ type: 'SET_DELIVERY', payload: delivery });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  useEffect(() => {
    if (state.selectedDelivery) {
      localStorage.setItem('selectedDelivery', state.selectedDelivery.id);
    }
  }, [state.selectedDelivery]);

  const addItem = (item: Omit<CartItem, 'quantity' | 'bagType'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const updateBagType = (id: string, bagType: 'plastic' | 'paper') => {
    dispatch({ type: 'UPDATE_BAG_TYPE', payload: { id, bagType } });
  };

  const setDelivery = (delivery: DeliveryOption) => {
    dispatch({ type: 'SET_DELIVERY', payload: delivery });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      ...state,
      addItem,
      removeItem,
      updateQuantity,
      updateBagType,
      setDelivery,
      clearCart,
      deliveryOptions
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
