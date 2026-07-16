import { ThemeSwitcher } from '../Buttons/ThemeSwitcher';
import { UserLogin } from '../Buttons/UserLogin';
import { Cart } from '../Cart/Cart';

export const Header = () => {
  return (
    <>
      <header>
        <h2>Header</h2>
        <Cart />
        <ThemeSwitcher />
        <UserLogin />
      </header>
    </>
  );
};
