// Оператори порівняння
console.log(5 > 10);
console.log(15 >= 15);

// Приведення (перетворення) типів до числа
console.log('10' > 2);

// Оператори рівності (== та ===) та нерівності (!= та !==)
// Коли хочемо порівняти використовуємо лише строгу рівність чи нерівність, так як тоді не відбувається приведення типів
const isEqual = false == 0;
console.log(isEqual);

const isEqualStrict = true === 1;
console.log(isEqualStrict);