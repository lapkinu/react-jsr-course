import { useParams, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectDishById, selectDishCountInCart } from '../../store/selectors';
import { increment, decrement } from '../../store/cart';
import { Counter } from '../../components/Counter/Counter';
import { COUNTER_CONST_MENU } from '../../constants/counterConst';
import { useAuth } from '../../hooks/useAuth';

import styles from './DishPage.module.css';

export const DishPage = () => {
  const { dishId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dish = useSelector((state) => selectDishById(state, dishId));
  const count = useSelector((state) => selectDishCountInCart(state, dishId));
  const { user } = useAuth();

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
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        &larr; Back
      </button>

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

          {user && (
            <Counter
              value={count}
              onIncrement={() => dispatch(increment(dishId))}
              onDecrement={() => dispatch(decrement(dishId))}
              canIncrement={count < COUNTER_CONST_MENU.MAX}
              canDecrement={count > COUNTER_CONST_MENU.MIN}
            />
          )}
        </div>
      </article>
    </div>
  );
};
