import { Cart } from '../Cart/Cart';

export const Header = () => {
  return (
    <>
      <div style={{ height: '200vh', padding: '20px' }}></div>
      <header>
        <h2>Header</h2>
        <Cart />
      </header>
    </>
  );
};
