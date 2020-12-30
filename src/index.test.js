import Index from './index';
jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('test ReactDOM.render', () => {
  it('snapshot test for React DOM.render', () => {
    expect(JSON.stringify(Index)).toMatchSnapshot();
  });
});
