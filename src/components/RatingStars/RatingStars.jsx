export const RatingStars = ({ rating, max = 5 }) => {
  return (
    <span style={{ fontSize: '1.4em', marginLeft: '8px' }}>
      {Array.from({ length: max }).map((_, index) => (
        <span
          key={index}
          style={{
            color: index < rating ? '#ffd700' : '#ddd',
            transition: 'color 0.2s',
          }}
        >
          ★
        </span>
      ))}
    </span>
  );
};
