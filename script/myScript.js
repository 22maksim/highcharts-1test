

Highcharts.chart('container', {
  chart: {
    type: 'tilemap',
    height: '75%',
    backgroundColor: '#303130'
  },

  legend: {
      backgroundColor: 'gray'
  },

  accessibility: {
    description: 'Это карта Русских М.Н.',
    point: {
      valueDescriptionFormat: '{xDescription}, population {point.value}.'
    }
  },

  title: {
    text: 'U.S. states by population in 2016'
  },

  subtitle: {
    text: 'Source:<a href="https://simple.wikipedia.org/wiki/List_of_U.S._states_by_population">Wikipedia</a>'
  },

  xAxis: {
    visible: false,
    backgroundColor: 'gray'
  },

  yAxis: {
    visible: false,
    backgroundColor: 'gray'
  },

  colorAxis: {
    dataClasses: [{
      from: 0,
      to: 1000,
      color: '#FFC618',
    },{
      from: 2000,
      to: 3000,
      color: '#64CA2B',
  
    },{
      from: 4000,
      to: 5000,
      color: '#FD625E',
    
    }]
  },

  tooltip: {
    headerFormat: '',
    pointFormat: 'The population of <b> {point.name}</b> is <b>{point.value}</b>.<br><b>{point.region}</b>'
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.hc-a2}',
        color: '#2b1e1e',
        style: {
          textOutline: false
        }
      }
    }
  },


  series: [{
    name: '',
    data: [{
      'hc-a2': 'Кали',
      name: 'Калининград',
      region: 'West',
      x: 0,
      y: 9,
      value: 22
    }, {
      'hc-a2': 'Смол',
      name: 'Смоленская',
      region: 'West',
      x: 1,
      y: 8,
      value: 2300
    }, {
      'hc-a2': 'СПБ',
      name: 'Санкт-Петербург',
      region: 'West',
      x: 2,
      y: 10,
      value: 2400
    }, {
      'hc-a2': 'Сев',
      name: 'Севастополь',
      region: 'South',
      x: 2,
      y: 2,
      value: 2655
    }, {
      'hc-a2': 'Осе',
      name: 'Северная осетия',
      region: 'West',
      x: 5,
      y: 2,
      value: 2567
    }, {
      'hc-a2': 'КРД',
      name: 'Краснодарский',
      region: 'край',
      x: 4,
      y: 3,
      value: 2505
    }, {
      'hc-a2': 'Мур',
      name: 'Connecticut',
      region: 'Northeast',
      x: 3,
      y: 11,
      value: 2987
    }, {
      'hc-a2': 'Волог',
      name: 'Вологодская',
      region: 'область',
      x: 4,
      y: 9,
      value: 345
    }, {
      'hc-a2': 'Тамб',
      name: 'Тамбовская',
      region: 'Область',
      x: 5,
      y: 6,
      value: 289
    }, {
      'hc-a2': 'Кир',
      name: 'Кировская',
      region: 'область',
      x: 8,
      y: 8,
      value: 2456
    }, {
      'hc-a2': 'Мари',
      name: 'Мари-Эл',
      region: 'республика',
      x: 7,
      y: 9,
      value: 4560
    }, {
      'hc-a2': 'Став',
      name: 'Ставропольский',
      region: 'Край',
      x: 5,
      y: 3,
      value: 2345
    }, {
      'hc-a2': 'Ниж',
      name: 'Нижний-Новгород, Нижегородская',
      region: 'область',
      x: 6,
      y: 7,
      value: 2567
    }, {
      'hc-a2': 'Орл',
      name: 'Орловская',
      region: 'Область',
      x: 3,
      y: 6,
      value: 2390
    }, {
      'hc-a2': 'МО',
      name: 'Московская',
      region: 'Область',
      x: 3,
      y: 7,
      value: 2134
    }, {
      'hc-a2': 'Курск',
      name: 'Курск',
      region: 'Центр',
      x: 3,
      y: 5,
      value: 2011
    }, {
      'hc-a2': 'Врнж',
      name: 'Воронежская',
      region: 'Область',
      x: 5,
      y: 5,
      value: 2904
    }, {
      'hc-a2': 'Тул',
      name: 'Тульская',
      region: 'область',
      x: 4,
      y: 6,
      value: 2347
    }, {
      'hc-a2': 'Пенз',
      name: 'Пензенская',
      region: 'область',
      x: 6,
      y: 5,
      value: 2056
    }, {
      'hc-a2': 'Орен',
      name: 'Оренбургская',
      region: 'область',
      x: 8,
      y: 5,
      value: 156
    }, {
      'hc-a2': 'Яро',
      name: 'Ярославская',
      region: 'область',
      x: 4,
      y: 8,
      value: 2067
    }, {
      'hc-a2': 'Бря',
      name: 'Massachusetts',
      region: 'Northeast',
      x: 2,
      y: 6,
      value: 2034
    }, {
      'hc-a2': 'Калу',
      name: 'Калужская',
      region: 'Центр',
      x: 2,
      y: 7,
      value: 2745
    }, {
      'hc-a2': 'Сарат',
      name: 'Саратовская',
      region: 'область',
      x: 7,
      y: 6,
      value: 2356
    }, {
      'hc-a2': 'Морд',
      name: 'Мордовия',
      region: 'республика',
      x: 6,
      y: 6,
      value: 2467
    }, {
      'hc-a2': 'Лип',
      name: 'Липецкая',
      region: 'область',
      x: 4,
      y: 5,
      value: 2789
    }, {
      'hc-a2': 'Инг',
      name: 'Ингушетия',
      region: 'Республика',
      x: 6,
      y: 1,
      value: 345
    }, {
      'hc-a2': 'Бел',
      name: 'Белгородская',
      region: 'область',
      x: 4,
      y: 4,
      value: 3000
    }, {
      'hc-a2': 'Крч',
      name: 'Карачаево-черкеская',
      region: 'округ',
      x: 4,
      y: 2,
      value: 2347
    }, {
      'hc-a2': 'Уль',
      name: 'Ульяновская',
      region: 'область',
      x: 7,
      y: 7,
      value: 2368
    }, {
      'hc-a2': 'Кар',
      name: 'Карелия',
      region: 'Сев-западt',
      x: 3,
      y: 10,
      value: 345
    }, {
      'hc-a2': 'Калм',
      name: 'Калмыкия',
      region: 'республика',
      x: 6,
      y: 3,
      value: 2085
    }, {
      'hc-a2': 'Лен',
      name: 'Область',
      region: 'Ленинградский',
      x: 2,
      y: 9,
      value: 2467
    }, {
      'hc-a2': 'Иван',
      name: 'Ивановская',
      region: 'область',
      x: 5,
      y: 9,
      value: 2980
    }, {
      'hc-a2': 'Крым',
      name: 'крым',
      region: 'крым',
      x: 2,
      y: 3,
      value: 2045
    }, {
      'hc-a2': 'Тве',
      name: 'Тверская',
      region: 'Область',
      x: 3,
      y: 8,
      value: 675
    }, {
      'hc-a2': 'Волг',
      name: 'Волгоградская',
      region: 'область',
      x: 6,
      y: 4,
      value: 387
    }, {
      'hc-a2': 'Кбр',
      name: 'Кабардино-балкария',
      region: 'округ',
      x: 4,
      y: 1,
      value: 2897
    }, {
      'hc-a2': 'Нов',
      name: 'НОВГОРОДСКАЯ',
      region: 'область',
      x: 3,
      y: 9,
      value: 456
    }, {
      'hc-a2': 'Пск',
      name: 'Псков',
      region: 'Центр',
      x: 2,
      y: 8,
      value: 456
    }, {
      'hc-a2': 'Костр',
      name: 'Костромская',
      region: 'область',
      x: 6,
      y: 8,
      value: 2546
    }, {
      'hc-a2': 'Чеч',
      name: 'Чеченская',
      region: 'народная республика',
      x: 6,
      y: 2,
      value: 2587
    }, {
      'hc-a2': 'Ряз',
      name: 'Рязанская',
      region: 'область',
      x: 5,
      y: 7,
      value: 2345
    }, {
      'hc-a2': 'Астр',
      name: 'Астраханская',
      region: 'область',
      x: 7,
      y: 4,
      value: 4567
    }, {
      'hc-a2': 'Рост',
      name: 'Utah',
      region: 'West',
      x: 5,
      y: 4,
      value: 2942
    }, {
      'hc-a2': 'Чув',
      name: 'Чувашия',
      region: 'республика',
      x: 7,
      y: 8,
      value: 4456
    }, {
      'hc-a2': 'Влад',
      name: 'Владимирская',
      region: 'область',
      x: 5,
      y: 8,
      value: 2567
    }, {
      'hc-a2': 'Сам',
      name: 'Самарская',
      region: 'область',
      x: 8,
      y: 6,
      value: 745
    }, {
      'hc-a2': 'МСК',
      name: 'Московская',
      region: 'область',
      x: 4,
      y: 7,
      value: 2578
    }, {
      'hc-a2': 'Даг',
      name: 'Дагестан',
      region: 'республика',
      x: 7,
      y: 3,
      value: 2367
    }, {
      'hc-a2': 'Адыг',
      name: 'Адыгейский',
      region: 'край',
      x: 3,
      y: 3,
      value: 2346
    },{
      'hc-a2': 'Тат',
      name: 'Татарская',
      region: 'народная республика',
      x: 8,
      y: 7,
      value: 2346
    },{
      'hc-a2': 'Арх',
      name: 'Архангельская',
      region: 'область',
      x: 8,
      y: 9,
      value: 4589
    },{
      'hc-a2': 'Баш',
      name: 'Башкирская',
      region: 'республика',
      x: 9,
      y: 6,
      value: 2346
    },{
      'hc-a2': 'Удм',
      name: 'Удмуртский',
      region: 'край',
      x: 9,
      y: 7,
      value: 2346
    },{
      'hc-a2': 'Пермь',
      name: 'Пермский',
      region: 'край',
      x: 9,
      y: 8,
      value: 2346
    },{
      'hc-a2': 'Коми',
      name: 'Коми',
      region: 'республика',
      x: 9,
      y: 9,
      value: 2346
    },{
      'hc-a2': 'Нен',
      name: 'Ненецкий',
      region: 'АО',
      x: 9,
      y: 10,
      value: 2346
    },{
      'hc-a2': 'Чел',
      name: 'Челябинскаяй',
      region: 'область',
      x: 10,
      y: 6,
      value: 2346
    },{
      'hc-a2': 'Свер',
      name: 'Свердловская',
      region: 'область',
      x: 10,
      y: 7,
      value: 234
    },{
      'hc-a2': 'ХМАО',
      name: 'Адыгейский',
      region: 'край',
      x: 10,
      y: 8,
      value: 23
    },{
      'hc-a2': 'ЯНАО',
      name: 'ЯНАО',
      region: 'округ',
      x: 10,
      y: 9,
      value: 2346
    },{
      'hc-a2': 'Омск',
      name: 'Омская',
      region: 'область',
      x: 11,
      y: 7,
      value: 234
    },{
      'hc-a2': 'Кург',
      name: 'Курганская',
      region: 'область',
      x: 11,
      y: 8,
      value: 234
    },{
      'hc-a2': 'Тюмн',
      name: 'Тюменская',
      region: 'область',
      x: 11,
      y: 9,
      value: 2346
    },{
      'hc-a2': 'Р.Алт',
      name: 'Алтайская',
      region: 'республика',
      x: 12,
      y: 5,
      value: 4560
    },{
      'hc-a2': 'Алт.К',
      name: 'Алтайский',
      region: 'край',
      x: 12,
      y: 6,
      value: 234
    },{
      'hc-a2': 'Ново',
      name: 'Новосибирская',
      region: 'область',
      x: 12,
      y: 7,
      value: 2346
    },{
      'hc-a2': 'Том',
      name: 'Томская',
      region: 'область',
      x: 12,
      y: 8,
      value: 2346
    },{
      'hc-a2': 'Тыва',
      name: 'Тыва',
      region: 'республика',
      x: 13,
      y: 6,
      value: 2346
    },{
      'hc-a2': 'Хак',
      name: 'Хакасия',
      region: 'республика',
      x: 13,
      y: 7,
      value: 246
    },{
      'hc-a2': 'Кем',
      name: 'Кемеровская',
      region: 'область',
      x: 13,
      y: 8,
      value: 234
    },{
      'hc-a2': 'Крас',
      name: 'Красноярский',
      region: 'край',
      x: 13,
      y: 9,
      value: 4723
    },{
      'hc-a2': 'Заб',
      name: 'Забайкальский',
      region: 'край',
      x: 14,
      y: 6,
      value: 234
    },{
      'hc-a2': 'Бур',
      name: 'Бурятия',
      region: 'республика',
      x: 14,
      y: 7,
      value: 2346
    },{
      'hc-a2': 'Ирк',
      name: 'Иркутская',
      region: 'область',
      x: 14,
      y: 8,
      value: 234
    },{
      'hc-a2': 'Евр',
      name: 'Еврейский',
      region: 'АО',
      x: 15,
      y: 7,
      value: 2346
    },{
      'hc-a2': 'Амур',
      name: 'Амурская',
      region: 'область',
      x: 15,
      y: 8,
      value: 2346
    },{
      'hc-a2': 'Якут',
      name: 'Якутская',
      region: 'республика Саха',
      x: 15,
      y: 9,
      value: 2346
    },{
      'hc-a2': 'Прим',
      name: 'Приморский',
      region: 'край',
      x: 16,
      y: 6,
      value: 2346
    },{
      'hc-a2': 'Хаб',
      name: 'Хабаровский',
      region: 'край',
      x: 16,
      y: 7,
      value: 2346
    },{
      'hc-a2': 'Маг',
      name: 'Магаданская',
      region: 'область',
      x: 16,
      y: 8,
      value: 2346
    },{
      'hc-a2': 'Чук',
      name: 'Чукотский',
      region: 'край',
      x: 16,
      y: 9,
      value: 2346
    },{
      'hc-a2': 'КМЧ',
      name: 'Камчатский',
      region: 'край',
      x: 17,
      y: 9,
      value: 2346
    },{
      'hc-a2': 'Схл',
      name: 'Сахалин',
      region: 'республика',
      x: 17,
      y: 6,
      value: 4534
    }]
  }]
});

