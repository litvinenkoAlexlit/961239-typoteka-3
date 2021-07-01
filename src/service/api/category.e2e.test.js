'use strict';

const express = require(`express`);
const request = require(`supertest`);

const category = require(`./category`);
const CategoryService = require(`../data-service/category`);
const {StatusCode} = require(`./../constants`);

const mockData = [
  {
    "id": `E1QgVC`,
    "title": `Обзор новейшего смартфона`,
    "announce": `Достичь успеха помогут ежедневные повторения. Программировать не настолько сложно, как об этом говорят. Это один из лучших рок-музыкантов.`,
    "fullText": `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Как начать действовать? Для начала просто соберитесь. Достичь успеха помогут ежедневные повторения. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Из под его пера вышло 8 платиновых альбомов. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Простые ежедневные упражнения помогут достичь успеха. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры.`,
    "createDate": `2021-06-04T05:54:13.654Z`,
    "category": [
      `IT`,
      `Музыка`,
      `Кино`,
      `Железо`,
      `Программирование`,
      `За жизнь`,
      `Деревья`,
      `Без рамки`
    ],
    "comments": [

    ]
  },
  {
    "id": `NyYjMU`,
    "title": `Борьба с прокрастинацией`,
    "announce": `Он написал больше 30 хитов. Программировать не настолько сложно, как об этом говорят. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
    "fullText": `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Золотое сечение — соотношение двух величин, гармоническая пропорция. Собрать камни бесконечности легко, если вы прирожденный герой. Из под его пера вышло 8 платиновых альбомов. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Программировать не настолько сложно, как об этом говорят. Достичь успеха помогут ежедневные повторения. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Это один из лучших рок-музыкантов.`,
    "createDate": `2021-06-03T07:12:55.894Z`,
    "category": [
      `Кино`,
      `За жизнь`,
      `IT`,
      `Железо`,
      `Без рамки`,
      `Деревья`,
      `Разное`,
      `Музыка`,
      `Программирование`
    ],
    "comments": [
      {
        "id": `va3wfi`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      },
      {
        "id": `bHjsO-`,
        "text": `Мне кажется или я уже читал это где-то?`
      },
      {
        "id": `Nuzdkb`,
        "text": `Планируете записать видосик на эту тему?`
      },
      {
        "id": `FRSWmO`,
        "text": `Совсем немного...`
      },
      {
        "id": `9F3jeO`,
        "text": `Согласен с автором!`
      }
    ]
  },
  {
    "id": `7QSr3N`,
    "title": `Как собрать камни бесконечности`,
    "announce": `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Простые ежедневные упражнения помогут достичь успеха. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
    "fullText": `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Достичь успеха помогут ежедневные повторения. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Первая большая ёлка была установлена только в 1938 году. Он написал больше 30 хитов. Ёлки — это не просто красивое дерево. Это прочная древесина. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Золотое сечение — соотношение двух величин, гармоническая пропорция. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Это один из лучших рок-музыкантов. Из под его пера вышло 8 платиновых альбомов. Простые ежедневные упражнения помогут достичь успеха. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Как начать действовать? Для начала просто соберитесь.`,
    "createDate": `2021-05-02T00:41:31.915Z`,
    "category": [
      `Железо`,
      `IT`,
      `За жизнь`,
      `Без рамки`
    ],
    "comments": [
      {
        "id": `_t4X_u`,
        "text": `Согласен с автором!`
      },
      {
        "id": `MZYkrj`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      },
      {
        "id": `VblSrj`,
        "text": `Плюсую, но слишком много буквы!`
      },
      {
        "id": `VItjSl`,
        "text": `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`
      },
      {
        "id": `N7B7RS`,
        "text": `Совсем немного...`
      }
    ]
  },
  {
    "id": `H9ZQog`,
    "title": `Лучшие рок-музыканты 20-века`,
    "announce": `Первая большая ёлка была установлена только в 1938 году. Ёлки — это не просто красивое дерево. Это прочная древесина.`,
    "fullText": `Ёлки — это не просто красивое дерево. Это прочная древесина. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
    "createDate": `2021-06-02T17:23:40.921Z`,
    "category": [
      `Деревья`
    ],
    "comments": [
      {
        "id": `_AecUg`,
        "text": `Согласен с автором!`
      },
      {
        "id": `nlBoGL`,
        "text": `Это где ж такие красоты?`
      },
      {
        "id": `bsfyEP`,
        "text": `Мне кажется или я уже читал это где-то?`
      },
      {
        "id": `cYU1fa`,
        "text": `Это где ж такие красоты?`
      },
      {
        "id": `PPQGD1`,
        "text": `Согласен с автором!`
      },
      {
        "id": `YcjxL3`,
        "text": `Согласен с автором!`
      }
    ]
  },
  {
    "id": `EpaSsF`,
    "title": `Ёлки. История деревьев`,
    "announce": `Как начать действовать? Для начала просто соберитесь. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Программировать не настолько сложно, как об этом говорят.`,
    "fullText": `Из под его пера вышло 8 платиновых альбомов. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Как начать действовать? Для начала просто соберитесь. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Это один из лучших рок-музыкантов. Достичь успеха помогут ежедневные повторения. Золотое сечение — соотношение двух величин, гармоническая пропорция. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Собрать камни бесконечности легко, если вы прирожденный герой. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Программировать не настолько сложно, как об этом говорят. Простые ежедневные упражнения помогут достичь успеха.`,
    "createDate": `2021-04-20T18:46:22.071Z`,
    "category": [
      `Разное`,
      `Деревья`,
      `Железо`,
      `Программирование`,
      `Кино`,
      `Без рамки`,
      `Музыка`,
      `IT`,
      `За жизнь`
    ],
    "comments": [
      {
        "id": `NijvDT`,
        "text": `Планируете записать видосик на эту тему?`
      },
      {
        "id": `-JMAPq`,
        "text": `Плюсую, но слишком много буквы!`
      },
      {
        "id": `rTsTeC`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      },
      {
        "id": `gm0W4z`,
        "text": `Согласен с автором!`
      },
      {
        "id": `WVXrXF`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      },
      {
        "id": `xuRY-D`,
        "text": `Мне не нравится ваш стиль. Ощущение, что вы меня поучаете.`
      },
      {
        "id": `4fcHXa`,
        "text": `Планируете записать видосик на эту тему?`
      },
      {
        "id": `ucy9h-`,
        "text": `Совсем немного...`
      },
      {
        "id": `TgH4lC`,
        "text": `Мне кажется или я уже читал это где-то?`
      }
    ]
  }
];

const app = express();
app.use(express.json());
category(app, new CategoryService(mockData));


describe(`API returns all categories`, () => {
  let response;

  beforeAll(async () => {
    response = await request(app)
          .get(`/categories`);
  });

  test(`Status code 200`, () => expect(response.statusCode).toBe(parseInt(StatusCode.OK, 10)));
  test(`All categories found`, () => expect(response.body).toEqual([
    `IT`,
    `Музыка`,
    `Кино`,
    `Железо`,
    `Программирование`,
    `За жизнь`,
    `Деревья`,
    `Без рамки`,
    `Разное`
  ]));
});
