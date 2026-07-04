import { MenuItem } from "../MenuItem/MenuItem";

export const MenuList = ({ menuItems }) => {
  return (
    <section className="menu-list">
      <ul>
        {menuItems.map((item) => (
          <MenuItem key={item.id} name={item.name} />
        ))}
      </ul>
    </section>
  );
};
