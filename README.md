# hexagon-fractal
https://matweyl.github.io/hexagon-fractal/

## Что делает скрипт?
Скрипт отрисовывает фрактал в браузере по следующему закону:
1. Берется случайная точка в шестиугольнике
2. Выбирает случайная сторона шестиугольника - берутся координаты концов данной стороны. 
Мы имеем 3 точки, которые образуют треугольник
3. Находим центроид данного треугольника
4. Рисуем точку в центре центроида
5. Возвращаемся к шагу 2, пока не будет достигнуто нужное число итераций

## Пример работы

1. Перед запуском  
![image](https://github.com/MatweyL/hexagon-fractal/assets/74009572/3e24be85-518a-4403-93e7-0faf4a15abd3)

2. В процессе отрисовывания точек  
![image](https://github.com/MatweyL/hexagon-fractal/assets/74009572/2d80f868-4516-4136-b5e5-cedc5fe9e3f9)

3. Результат выполнения - фрактал  
![image](https://github.com/MatweyL/hexagon-fractal/assets/74009572/bbce69ad-24b3-4fb1-b637-d3afdd859a29)
