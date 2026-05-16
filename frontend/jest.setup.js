import { setupServer } from 'msw/node';
import { rest } from 'msw';

export function setupMSW(...handlers) {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    jest.clearAllMocks();
  });
  afterAll(() => server.close());

  return server;
}
