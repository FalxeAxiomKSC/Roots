import { calculateCarbonFootprint, validateEmail, generateId } from '../src/index';

describe('Shared Utilities', () => {
  describe('calculateCarbonFootprint', () => {
    it('should calculate carbon footprint for transportation', () => {
      const result = calculateCarbonFootprint(10, 'transportation', 'miles');
      expect(result).toBe('4.00');
    });

    it('should calculate carbon footprint for energy', () => {
      const result = calculateCarbonFootprint(5, 'energy', 'kwh');
      expect(result).toBe('2.50');
    });

    it('should handle unknown category', () => {
      const result = calculateCarbonFootprint(10, 'unknown', 'units');
      expect(result).toBe('0.00');
    });
  });

  describe('validateEmail', () => {
    it('should validate correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('generateId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
      expect(id1).toMatch(/^[a-z0-9]+$/);
      expect(id2).toMatch(/^[a-z0-9]+$/);
    });

    it('should generate different IDs on each call', () => {
      const ids = new Set();
      for (let i = 0; i < 100; i++) {
        ids.add(generateId());
      }
      expect(ids.size).toBe(100);
    });
  });
});