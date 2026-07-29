import { useParams, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../store/selectors';
import { Counter } from '../../components/Counter/Counter';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/Common/Button';

import styles from './DishPage.module.css';
import { useDishCounter } from '../../hooks/useDishCounter';

export const DishPage = () => {
  const { dishId } = useParams();
  const navigate = useNavigate();

  const dish = useSelector((state) => selectDishById(state, dishId));
  const { user } = useAuth();
  const counterProps = useDishCounter(dishId);

  if (!dish) {
    return (
      <div className={styles.container}>
        <p className={styles.empty}>Dish not found...</p>
        <button className={styles.backButton} onClick={() => navigate('/restaurants')}>
          Back to restaurants
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Button className={styles.backButton} onClick={() => navigate(-1)}>
        &larr; Back
      </Button>
      <article className={styles.card}>
        <h1 className={styles.title}>{dish.name}</h1>
        {dish.ingredients && dish.ingredients.length > 0 && (
          <div className={styles.ingredientsBlock}>
            <h3 className={styles.subTitle}>Ingredients:</h3>
            <p className={styles.ingredients}>{dish.ingredients.join(', ')}</p>
          </div>
        )}
        <div className={styles.footer}>
          <span className={styles.price}>price {dish.price} €</span>
          {user && <Counter {...counterProps} />}
        </div>
      </article>
    </div>
  );
};
