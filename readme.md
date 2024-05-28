## Игры разума

### Первый проект в программе фронтенд-разработчик на Хекслет. Он представляет собой набор игр, которые запускаются в консоли

### Установка

```bash
git clone https://github.com/sseezov/frontend-project-44.git
cd frontend-project-44
make install
```

### Запуск

Для запуска игры введите команду

```bash
brain-games <name>
```

Здесь `<name>` это имя игры из списка:

```bash
  "calc" - игра в калькулятор;
  "even" - игра в четное-нечетное;
  "gcd" - игра в поиск наибольшего общего делителя;
  "progression" - игра в поиск неизвестного числа в рамках арифметической прогрессии;
  "prime" - игра в простое число;
```

Игра принимает флаг -r для количества раундов. Например:

```bash
brain-games even -r 1 # запустится игра в четное-нечетное, длиной 1 раунд
```

Значение раундов по умолчанию равно 3.

### Hexlet tests and linter status

[![Maintainability](https://api.codeclimate.com/v1/badges/21aa19ce9cb07c0c395b/maintainability)](https://codeclimate.com/github/sseezov/frontend-project-44/maintainability)
