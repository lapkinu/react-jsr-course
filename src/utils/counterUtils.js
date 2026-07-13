import { COUNTER_CONST_MENU } from '../constants/counterConst';

export const incrementKey = (counters, key) => {
  const currentCount = counters[key] || 0;

  if (currentCount >= COUNTER_CONST_MENU.MAX) {
    return counters;
  }

  return {
    ...counters,
    [key]: currentCount + COUNTER_CONST_MENU.STEP,
  };
};

export const decrementKey = (counters, key) => {
  const currentCount = counters[key] || 0;

  if (currentCount <= COUNTER_CONST_MENU.MIN) {
    return counters;
  }

  const newCount = currentCount - COUNTER_CONST_MENU.STEP;
  const updatedCounters = { ...counters };

  if (newCount === COUNTER_CONST_MENU.MIN) {
    delete updatedCounters[key];
  } else {
    updatedCounters[key] = newCount;
  }

  return updatedCounters;
};
