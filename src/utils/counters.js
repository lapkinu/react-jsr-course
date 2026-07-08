import { COUNTER_LIMITS } from '../constants/limits';

export const incrementKey = (counters, key) => {
  const currentCount = counters[key] || 0;

  if (currentCount >= COUNTER_LIMITS.MAX) {
    return counters;
  }

  return {
    ...counters,
    [key]: currentCount + 1,
  };
};

export const decrementKey = (counters, key) => {
  const currentCount = counters[key] || 0;

  if (currentCount <= COUNTER_LIMITS.MIN) {
    return counters;
  }

  const newCount = currentCount - 1;
  const updatedCounters = { ...counters };

  if (newCount === COUNTER_LIMITS.MIN) {
    delete updatedCounters[key];
  } else {
    updatedCounters[key] = newCount;
  }

  return updatedCounters;
};
