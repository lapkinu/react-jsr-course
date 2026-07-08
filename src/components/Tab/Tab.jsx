export const Tab = ({ name, isActive, onClick }) => {
  return (
    <button
      style={{ margin: '10px' }}
      className={`tab-button ${isActive ? 'tab-button--active' : ''}`}
      onClick={onClick}
      disabled={isActive}
    >
      {name}
    </button>
  );
};
