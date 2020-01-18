import { getFlightNumbers } from '../utils';

describe('Flight Search Utility Functions', () => {
  describe('Flight Numbers', () => {
    it('should a single concatenated airline code and flight number', () => {
      const flights = [
        {
          marketingAirlineCode: 'NK',
          marketingFlightNumber: 123,
          airline: 'Spirit',
        },
      ];
      expect(getFlightNumbers(flights)).toEqual('NK 123');
    });

    it('should return a string of multiple concatenations if there are multiple flights', () => {
      const flights = [
        {
          marketingAirlineCode: 'NK',
          marketingFlightNumber: 123,
          airline: 'Spirit',
        },
        {
          marketingAirlineCode: 'F9',
          marketingFlightNumber: 456,
          airline: 'Frontier',
        },
      ];
      expect(getFlightNumbers(flights)).toEqual('NK 123, F9 456');
    });
  });
});
