export * from './types';

// Utility functions for common operations
export const formatTimestamp = (date: Date): string => {
  return date.toISOString();
};

export const calculateCarbonFootprint = (
  value: number,
  category: string,
  unit: string
): number => {
  // Placeholder for carbon footprint calculation logic
  const conversionFactors: Record<string, number> = {
    transportation: 0.4, // kg CO2 per mile
    energy: 0.5, // kg CO2 per kWh
    food: 2.5, // kg CO2 per kg of food
    consumption: 0.3, // kg CO2 per item
  };
  
  return (value * (conversionFactors[category] || 0)).toFixed(2);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};