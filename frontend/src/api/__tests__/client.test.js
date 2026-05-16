import { describe, it, expect, beforeEach, vi } from 'vitest';
import { cooperativeApi } from '../api/client';

describe('API Client', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Cooperative API', () => {
    it('should call getAll with correct URL', async () => {
      const response = {
        data: [],
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };
      vi.spyOn(global, 'fetch').mockResolvedValue(response as Response);

      await cooperativeApi.getAll();

      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/api/cooperatives', {
        headers: { 'Content-Type': 'application/json' },
      });
    });
  });

  describe('Match API', () => {
    it('should call getByCooperativeId with correct URL', async () => {
      const mockMatches = [
        {
          id: '1',
          match_score: 0.85,
          match_reasons: 'Focus areas align',
        }
      ];
      const response = {
        data: mockMatches,
        status: 200,
        statusText: 'OK',
      };
      vi.spyOn(global, 'fetch').mockResolvedValue({
        json: async () => mockMatches,
      } as Response);

      const result = await matchApi.getByCooperativeId('123');

      expect(fetch).toHaveBeenCalledWith(
        'http://localhost:3001/api/matches/123',
        expect.any(Object)
      );
    });
  });
});
