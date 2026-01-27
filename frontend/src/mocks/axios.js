const axiosMock = {
  post: jest.fn(() => Promise.resolve({ data: { success: true } })),
  get: jest.fn(() => Promise.resolve({ data: {} })),
};

export default axiosMock;
