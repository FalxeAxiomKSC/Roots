export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface CarbonFootprintData {
  id: string;
  userId: string;
  category: 'transportation' | 'energy' | 'food' | 'consumption';
  value: number;
  unit: 'kg' | 'miles' | 'kwh' | 'items';
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface SustainabilityGoal {
  id: string;
  userId: string;
  title: string;
  description: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  deadline: Date;
  category: string;
  isActive: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  joinedAt: Date;
  preferences: {
    units: 'metric' | 'imperial';
    notifications: boolean;
  };
}