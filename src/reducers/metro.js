import {sets} from './page'
const CHOOSE_STATION = "CHOOSE_STATION";
const CHOOSE_SET = "CHOOSE_SET";

const metro = [
  {
    fill: "#E50520",
    name: "Сокольническая",
    ways: [
      {id: "w0100", class: "st4", x: 1008, y: 199.8, width: 4.4, height: 7.6},
      {
        id: "w0101", class: "st4", x: 995.6, y: 209.9, width: 17.6, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 145.5673 774.382)"
      },
      {
        id: "w0102", class: "st4", x: 974.1, y: 226.1, width: 28.2, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 129.2664 767.7036)"
      },
      {
        id: "w0103", class: "st4", x: 960.4, y: 243.5, width: 20.9, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 111.8526 760.5135)"
      },
      {
        id: "w0104", class: "st4", x: 943.6, y: 259.2, width: 23.4, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 96.1659 754.1168)"
      },
      {
        id: "w0105", class: "st4", x: 924.4, y: 276.9, width: 26.5, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 78.4157 746.8129)"
      },
      {
        id: "w0106", class: "st4", x: 887.5, y: 303.1, width: 48.2, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 52.1468 736.0893)"
      },
      {
        id: "w0107", class: "st4", x: 866.8, y: 331.7, width: 32.6, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 23.4822 724.3267)"
      },
      {
        id: "w0108", class: "st4", x: 806.6, y: 370.2, width: 76.3, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -15.1148 708.4506)"
      },
      {
        id: "w0109", class: "st4", x: 765.4, y: 419.1, width: 61.6, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -64.0584 688.4274)"
      },
      {
        id: "w0110", class: "st4", x: 677.5, y: 481.2, width: 113.6, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -126.3257 662.896)"
      },
      {
        id: "w0111", class: "st4", x: 667.6, y: 532.5, width: 31.3, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -177.7285 641.7784)"
      },
      {
        id: "w0112", class: "st4", x: 640.7, y: 556.8, width: 36.9, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -202.0455 631.911)"
      },
      {
        id: "w0113", class: "st4", x: 596.6, y: 590.2, width: 58.4, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -235.5547 618.1027)"
      },
      {
        id: "w0114", class: "st4", x: 553.1, y: 632.5, width: 61.2, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -277.933 600.7253)"
      },
      {
        id: "w0115", class: "st4", x: 539.2, y: 663.6, width: 27.3, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -309.0492 588.0327)"
      },
      {
        id: "w0116", class: "st4", x: 520.1, y: 682.7, width: 27.4, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -328.2068 580.1014)"
      },
      {
        id: "w0117", class: "st4", x: 505, y: 700.4, width: 22.4, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -345.9198 572.8421)"
      },
      {id: "w0118", class: "st4", x: 506.6, y: 709, width: 4.4, height: 24},
      {id: "w0112", class: "st4", x: 506.6, y: 733, width: 4.4, height: 18.3},
      {id: "w0111", class: "st4", x: 506.6, y: 751.3, width: 4.4, height: 18.3},
      {id: "w0112", class: "st4", x: 506.6, y: 769.7, width: 4.4, height: 18.3}
    ],
    stations: [
      {
        id: "s0100", class: "st19", cx: 1009.8, cy: 199.8, r: 5,
        transform: "matrix(1 0 0 1 1021.3 203.6)", name: "Бульвар Рокоссовского",
        text: "Это Бульвар Рокоссовского. И тут будет наш текст:)"
      },
      {
        id: "s0101", class: "st19", cx: 998.1, cy: 218.3, r: 5,
        transform: "matrix(1 0 0 1 915.6668 220.7)", name: "Черкизовская",
        text: "Это Черкизовская. И тут будет наш текст:)"
      },
      {
        id: "s0102", class: "st19", cx: 978.5, cy: 238, r: 5,
        transform: "matrix(1 0 0 1 990.1915 243.6962)", name: "Преображенская площадь",
        text: "Это Преображенская площадь. И тут будет наш текст:)"
      },
      {
        id: "s0103", class: "st19", cx: 962.3, cy: 254.3, r: 5,
        transform: "matrix(1 0 0 1 974.2 261.3694)", name: "Сокольники",
        text: "Это Сокольники. И тут будет наш текст:)"
      },
      {
        id: "s0104", class: "st19", cx: 943.5, cy: 273.2, r: 5,
        transform: "matrix(1 0 0 1 954.2 279.6)", name: "Красносельская",
        text: "Это Красносельская. И тут будет наш текст:)"
      },
      {
        id: "s0105", class: "st19", cx: 929, cy: 288.7, r: 5,
        transform: "matrix(1 0 0 1 938.5 301.0061)", name: "Комсомольская",
        text: "Это Комсомольская. И тут будет наш текст:)"
      },
      {
        id: "s0106", class: "st19", cx: 892.9, cy: 324, r: 5,
        transform: "matrix(1 0 0 1 905.05 328.8)", name: "Красные Ворота",
        text: "Это Красные Ворота. И тут будет наш текст:)"
      },
      {
        id: "s0107", class: "st19", cx: 871.1, cy: 345.9, r: 5,
        transform: "matrix(1 0 0 1 786.6 349.6998)", name: "Чистые пруды",
        text: "Это Чистые пруды. И тут будет наш текст:)"
      },
      {
        id: "s0108", class: "st19", cx: 815.5, cy: 402.2, r: 5,
        transform: "matrix(1 0 0 1 762.8803 407.2)", name: "Лубянка",
        text: "Это Лубянка. И тут будет наш текст:)"
      },
      {
        id: "s0109", class: "st19", cx: 774.5, cy: 443, r: 5,
        transform: "matrix(1 0 0 1 783.8831 446.2)", name: "Охотный ряд",
        text: "Это Охотный ряд. И тут будет наш текст:)"
      },
      {
        id: "s0110", class: "st19", cx: 693.7, cy: 524.2, r: 5,
        transform: "matrix(1 0 0 1 544.7 527.4002)", name: "Библиотека имени Ленина",
        text: "Это Библиотека имени Ленина. И тут будет наш текст:)"
      },
      {
        id: "s0111", class: "st19", cx: 672.2, cy: 545.8, r: 5,
        transform: "matrix(1 0 0 1 683.2045 550.8)", name: "Кропоткинская",
        text: "Это Кропоткинская. И тут будет наш текст:)"
      },
      {
        id: "s0112", class: "st19", cx: 645.7, cy: 571.8, r: 5,
        transform: "matrix(1 0 0 1 560.5701 568.0002)", name: "Парк культуры",
        text: "Это Парк культуры. И тут будет наш текст:)"
      },
      {
        id: "s0113", class: "st19", cx: 605.2, cy: 613.1, r: 5,
        transform: "matrix(1 0 0 1 527.6 616.5)", name: "Фрунзенская",
        text: "Это Фрунзенская. И тут будет наш текст:)"
      },
      {
        id: "s0114", class: "st19", cx: 561.8, cy: 656.8, r: 5,
        transform: "matrix(1 0 0 1 571.4286 661.8)", name: "Спортивная",
        text: "Это Спортивная. И тут будет наш текст:)"
      },
      {
        id: "s0115", class: "st19", cx: 542.7, cy: 675.9, r: 5,
        transform: "matrix(1 0 0 1 446.3333 678.0339)", name: "Воробьёвы горы",
        text: "Это Воробьёвы горы. И тут будет наш текст:)"
      },
      {
        id: "s0116", class: "st19", cx: 523.3, cy: 695.4, r: 5,
        transform: "matrix(1 0 0 1 449.3332 696.667)", name: "Университет",
        text: "Это Университет. И тут будет наш текст:)"
      },
      {
        id: "s0117", class: "st19", cx: 508.8, cy: 709.9, r: 5,
        transform: "matrix(1 0 0 1 375.6665 713)", name: "Проспект Вернадского",
        text: "Это Проспект Вернадского. И тут будет наш текст:)"
      },
      {
        id: "s0118", class: "st19", cx: 508.8, cy: 734.3, r: 5,
        transform: "matrix(1 0 0 1 424.3332 737.5)", name: "Юго-Западная",
        text: "Это Юго-Западная. И тут будет наш текст:)"
      },
      {
        id: "s0119", class: "st19", cx: 508.8, cy: 752, r: 5,
        transform: "matrix(1 0 0 1 441.9998 755.5)", name: "Тропарёво",
        text: "Это Тропарёво. И тут будет наш текст:)"
      },
      {
        id: "s0120", class: "st19", cx: 508.8, cy: 769.7, r: 5,
        transform: "matrix(1 0 0 1 440.9998 773.2)", name: "Румянцево",
        text: "Это Румянцево. И тут будет наш текст:)"
      },
      {
        id: "s0121", class: "st19", cx: 508.8, cy: 787.3, r: 5,
        transform: "matrix(1 0 0 1 441.9998 792.3)", name: "Саларьево",
        text: "Это Саларьево. И тут будет наш текст:)"
      }
    ]
  },

  {
    fill: "E5E544",
    name: "Калининско-Солнцевская",
    ways: [
      {id: "w0800", x: 1129.4, y:399,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 50.8777 925.1849)", class:"st7", width:25.7, height:4.4},
      {id: "w0801", x: 1111.3, y:417.1,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 32.7708 917.6877)", class:"st7", width:25.7, height:4.4},
      {id: "w0802", x: 1093, y:435.3,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 14.5077 910.0854)", class:"st7", width:25.7, height:4.4},
      {id: "w0803", x: 1060.5, y:459.4,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -9.5257 900.1909)", class:"st7", width:42.7, height:4.4},
      {id: "w0804", x: 1029.6, y:489.8,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -39.9276 887.5392)", class:"st7", width:43.6, height:4.4},
      {id: "w0805", x: 1004.2, y:504.6, class:"st7", width:33.3, height:4.4},
      {id: "w0806", x: 946.9, y:504.7, class:"st7", width:57.4, height:4.4},
      {id: "w0807", x: 838.3, y:504.6, class:"st7", width:108.5, height:4.4},
      {id: "w0808", x: 365.4, y:616.2, class:"st7", width:4.4, height:23.3},
      {id: "w0809", x: 365.4, y:593.8, class:"st7", width:4.4, height:22.3},
      {id: "w0810", x: 365.4, y:575.7, class:"st7", width:4.4, height:18.1},
      {id: "w0811", x: 359.9, y:558.1,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -283.7488 435.5641)", class:"st7", width:48, height:4.4},
      {id: "w0812", x: 365.8, y:456.7,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -182.3267 477.6003)", class:"st7", width:239.1, height:4.4}
    ],
    stations: [
      {id: "s0800", class: "st22", cx: 1150.9, cy: 392.5, r: 5, transform: "matrix(1 0 0 1 1013.5004 510.4073)", name: "Площадь Ильича", text: "foxText"},
      {id: "s0801", class: "st22", cx: 1133.7, cy: 409.7, r: 5, transform: "matrix(1 0 0 1 1076.4712 480.8055)", name: "Автозаводская", text: "foxText"},
      {id: "s0802", class: "st22", cx: 1115.9, cy: 427.5, r: 5, transform: "matrix(1 0 0 1 1106.1666 456.1347)", name: "Шоссе Энтузиастов", text: "foxText"},
      {id: "s0803", class: "st22", cx: 1097, cy: 446.5, r: 5, transform: "matrix(1 0 0 1 1125.3336 431.4926)", name: "Перово", text: "foxText"},
      {id: "s0804", class: "st22", cx: 1066.6, cy: 476.8, r: 5, transform: "matrix(1 0 0 1 1143.1996 413.7115)", name: "Новогиреево", text: "foxText"},
      {id: "s0805", class: "st22", cx: 1004.2, cy: 506.9, r: 5, transform: "matrix(1 0 0 1 1160.3662 396.7115)", name: "Новокосино", text: "foxText"},
      {id: "s0806", class: "st22", cx: 946.5, cy: 506.9, r: 5, transform: "matrix(1 0 0 1 866.1 510.4073)", name: "Марксистская", text: "foxText"},
      {id: "s0807", class: "st22", cx: 837.6, cy: 506.8, r: 5, transform: "matrix(1 0 0 1 753.7365 503.4073)", name: "Третьяковская", text: "foxText"},
      {id: "s0808", class: "st22", cx: 367.6, cy: 639.4, r: 5, transform: "matrix(1 0 0 1 508.5717 373.9401)", name: "Деловой", text: "foxText"},
      {id: "s0809", class: "st22", cx: 367.6, cy: 616.2, r: 5, transform: "matrix(1 0 0 1 320.3849 538.6782)", name: "Парк Победы", text: "foxText"},
      {id: "s0810", class: "st22", cx: 367.7, cy: 593.8, r: 5, transform: "matrix(1 0 0 1 312.293 595)", name: "Минская", text: "foxText"},
      {id: "s0811", class: "st22", cx: 400.9, cy: 543.3, r: 5, transform: "matrix(1 0 0 1 223.4941 620)", name: "Ломоносовский проспект", text: "foxText"},
      {id: "s0812", class: "st22", cx: 568.4, cy: 375.2, r: 5, transform: "matrix(1 0 0 1 311.2046 643)", name: "Раменки", text: "foxText"}

    ]
  }
];

const unactive_metro = [
  {
    fill: "#E50520",
    name: "Сокольническая",
    ways: [
      {id: "w0100", class: "st4 unactive", x: 1008, y: 199.8, width: 4.4, height: 7.6},
      {
        id: "w0101", class: "st4 unactive", x: 995.6, y: 209.9, width: 17.6, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 145.5673 774.382)"
      },
      {
        id: "w0102", class: "st4 unactive", x: 974.1, y: 226.1, width: 28.2, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 129.2664 767.7036)"
      },
      {
        id: "w0103", class: "st4 unactive", x: 960.4, y: 243.5, width: 20.9, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 111.8526 760.5135)"
      },
      {
        id: "w0104", class: "st4 unactive", x: 943.6, y: 259.2, width: 23.4, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 96.1659 754.1168)"
      },
      {
        id: "w0105", class: "st4 unactive", x: 924.4, y: 276.9, width: 26.5, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 78.4157 746.8129)"
      },
      {
        id: "w0106", class: "st4 unactive", x: 887.5, y: 303.1, width: 48.2, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 52.1468 736.0893)"
      },
      {
        id: "w0107", class: "st4 unactive", x: 866.8, y: 331.7, width: 32.6, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 23.4822 724.3267)"
      },
      {
        id: "w0108", class: "st4 unactive", x: 806.6, y: 370.2, width: 76.3, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -15.1148 708.4506)"
      },
      {
        id: "w0109", class: "st4 unactive", x: 765.4, y: 419.1, width: 61.6, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -64.0584 688.4274)"
      },
      {
        id: "w0110", class: "st4 unactive", x: 677.5, y: 481.2, width: 113.6, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -126.3257 662.896)"
      },
      {
        id: "w0111", class: "st4 unactive", x: 667.6, y: 532.5, width: 31.3, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -177.7285 641.7784)"
      },
      {
        id: "w0112", class: "st4 unactive", x: 640.7, y: 556.8, width: 36.9, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -202.0455 631.911)"
      },
      {
        id: "w0113", class: "st4 unactive", x: 596.6, y: 590.2, width: 58.4, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -235.5547 618.1027)"
      },
      {
        id: "w0114", class: "st4 unactive", x: 553.1, y: 632.5, width: 61.2, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -277.933 600.7253)"
      },
      {
        id: "w0115", class: "st4 unactive", x: 539.2, y: 663.6, width: 27.3, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -309.0492 588.0327)"
      },
      {
        id: "w0116", class: "st4 unactive", x: 520.1, y: 682.7, width: 27.4, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -328.2068 580.1014)"
      },
      {
        id: "w0117", class: "st4 unactive", x: 505, y: 700.4, width: 22.4, height: 4.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -345.9198 572.8421)"
      },
      {id: "w0118", class: "st4 unactive", x: 506.6, y: 709, width: 4.4, height: 24},
      {id: "w0112", class: "st4 unactive", x: 506.6, y: 733, width: 4.4, height: 18.3},
      {id: "w0111", class: "st4 unactive", x: 506.6, y: 751.3, width: 4.4, height: 18.3},
      {id: "w0112", class: "st4 unactive", x: 506.6, y: 769.7, width: 4.4, height: 18.3}
    ],
    stations: [
      {
        id: "s0100", class: "st19 unactive_station", cx: 1009.8, cy: 199.8, r: 5,
        transform: "matrix(1 0 0 1 1021.3 203.6)", name: "Бульвар Рокоссовского",
        text: "Это Бульвар Рокоссовского. И тут будет наш текст:)"
      },
      {
        id: "s0101", class: "st19 unactive_station", cx: 998.1, cy: 218.3, r: 5,
        transform: "matrix(1 0 0 1 915.6668 220.7)", name: "Черкизовская",
        text: "Это Черкизовская. И тут будет наш текст:)"
      },
      {
        id: "s0102", class: "st19 unactive_station", cx: 978.5, cy: 238, r: 5,
        transform: "matrix(1 0 0 1 990.1915 243.6962)", name: "Преображенская площадь",
        text: "Это Преображенская площадь. И тут будет наш текст:)"
      },
      {
        id: "s0103", class: "st19 unactive_station", cx: 962.3, cy: 254.3, r: 5,
        transform: "matrix(1 0 0 1 974.2 261.3694)", name: "Сокольники",
        text: "Это Сокольники. И тут будет наш текст:)"
      },
      {
        id: "s0104", class: "st19  unactive_station", cx: 943.5, cy: 273.2, r: 5,
        transform: "matrix(1 0 0 1 954.2 279.6)", name: "Красносельская",
        text: "Это Красносельская. И тут будет наш текст:)"
      },
      {
        id: "s0105", class: "st19 unactive_station", cx: 929, cy: 288.7, r: 5,
        transform: "matrix(1 0 0 1 938.5 301.0061)", name: "Комсомольская",
        text: "Это Комсомольская. И тут будет наш текст:)"
      },
      {
        id: "s0106", class: "st19 unactive_station", cx: 892.9, cy: 324, r: 5,
        transform: "matrix(1 0 0 1 905.05 328.8)", name: "Красные Ворота",
        text: "Это Красные Ворота. И тут будет наш текст:)"
      },
      {
        id: "s0107", class: "st19 unactive_station", cx: 871.1, cy: 345.9, r: 5,
        transform: "matrix(1 0 0 1 786.6 349.6998)", name: "Чистые пруды",
        text: "Это Чистые пруды. И тут будет наш текст:)"
      },
      {
        id: "s0108", class: "st19 unactive_station", cx: 815.5, cy: 402.2, r: 5,
        transform: "matrix(1 0 0 1 762.8803 407.2)", name: "Лубянка",
        text: "Это Лубянка. И тут будет наш текст:)"
      },
      {
        id: "s0109", class: "st19 unactive_station", cx: 774.5, cy: 443, r: 5,
        transform: "matrix(1 0 0 1 783.8831 446.2)", name: "Охотный ряд",
        text: "Это Охотный ряд. И тут будет наш текст:)"
      },
      {
        id: "s0110", class: "st19 unactive_station", cx: 693.7, cy: 524.2, r: 5,
        transform: "matrix(1 0 0 1 544.7 527.4002)", name: "Библиотека имени Ленина",
        text: "Это Библиотека имени Ленина. И тут будет наш текст:)"
      },
      {
        id: "s0111", class: "st19 unactive_station", cx: 672.2, cy: 545.8, r: 5,
        transform: "matrix(1 0 0 1 683.2045 550.8)", name: "Кропоткинская",
        text: "Это Кропоткинская. И тут будет наш текст:)"
      },
      {
        id: "s0112", class: "st19 unactive_station", cx: 645.7, cy: 571.8, r: 5,
        transform: "matrix(1 0 0 1 560.5701 568.0002)", name: "Парк культуры",
        text: "Это Парк культуры. И тут будет наш текст:)"
      },
      {
        id: "s0113", class: "st19 unactive_station", cx: 605.2, cy: 613.1, r: 5,
        transform: "matrix(1 0 0 1 527.6 616.5)", name: "Фрунзенская",
        text: "Это Фрунзенская. И тут будет наш текст:)"
      },
      {
        id: "s0114", class: "st19 unactive_station", cx: 561.8, cy: 656.8, r: 5,
        transform: "matrix(1 0 0 1 571.4286 661.8)", name: "Спортивная",
        text: "Это Спортивная. И тут будет наш текст:)"
      },
      {
        id: "s0115", class: "st19 unactive_station", cx: 542.7, cy: 675.9, r: 5,
        transform: "matrix(1 0 0 1 446.3333 678.0339)", name: "Воробьёвы горы",
        text: "Это Воробьёвы горы. И тут будет наш текст:)"
      },
      {
        id: "s0116", class: "st19 unactive_station", cx: 523.3, cy: 695.4, r: 5,
        transform: "matrix(1 0 0 1 449.3332 696.667)", name: "Университет",
        text: "Это Университет. И тут будет наш текст:)"
      },
      {
        id: "s0117", class: "st19 unactive_station", cx: 508.8, cy: 709.9, r: 5,
        transform: "matrix(1 0 0 1 375.6665 713)", name: "Проспект Вернадского",
        text: "Это Проспект Вернадского. И тут будет наш текст:)"
      },
      {
        id: "s0118", class: "st19 unactive_station", cx: 508.8, cy: 734.3, r: 5,
        transform: "matrix(1 0 0 1 424.3332 737.5)", name: "Юго-Западная",
        text: "Это Юго-Западная. И тут будет наш текст:)"
      },
      {
        id: "s0119", class: "st19 unactive_station", cx: 508.8, cy: 752, r: 5,
        transform: "matrix(1 0 0 1 441.9998 755.5)", name: "Тропарёво",
        text: "Это Тропарёво. И тут будет наш текст:)"
      },
      {
        id: "s0120", class: "st19 unactive_station", cx: 508.8, cy: 769.7, r: 5,
        transform: "matrix(1 0 0 1 440.9998 773.2)", name: "Румянцево",
        text: "Это Румянцево. И тут будет наш текст:)"
      },
      {
        id: "s0121", class: "st19 unactive_station", cx: 508.8, cy: 787.3, r: 5,
        transform: "matrix(1 0 0 1 441.9998 792.3)", name: "Саларьево",
        text: "Это Саларьево. И тут будет наш текст:)"
      }]
  },
  {
    fill: "E5E544",
    name: "Калининско-Солнцевская",
    ways: [
      {id: "w0800", x: 1129.4, y:399,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 50.8777 925.1849)", class:"st7 unactive", width:25.7, height:4.4},
      {id: "w0801", x: 1111.3, y:417.1,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 32.7708 917.6877)", class:"st7 unactive", width:25.7, height:4.4},
      {id: "w0802", x: 1093, y:435.3,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 14.5077 910.0854)", class:"st7 unactive", width:25.7, height:4.4},
      {id: "w0803", x: 1060.5, y:459.4,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -9.5257 900.1909)", class:"st7 unactive", width:42.7, height:4.4},
      {id: "w0804", x: 1029.6, y:489.8,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -39.9276 887.5392)", class:"st7 unactive", width:43.6, height:4.4},
      {id: "w0805", x: 1004.2, y:504.6, class:"st7 unactive", width:33.3, height:4.4},
      {id: "w0806", x: 946.9, y:504.7, class:"st7 unactive", width:57.4, height:4.4},
      {id: "w0807", x: 838.3, y:504.6, class:"st7 unactive", width:108.5, height:4.4},
      {id: "w0808", x: 365.4, y:616.2, class:"st7 unactive", width:4.4, height:23.3},
      {id: "w0809", x: 365.4, y:593.8, class:"st7 unactive", width:4.4, height:22.3},
      {id: "w0810", x: 365.4, y:575.7, class:"st7 unactive", width:4.4, height:18.1},
      {id: "w0811", x: 359.9, y:558.1,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -283.7488 435.5641)", class:"st7 unactive", width:48, height:4.4},
      {id: "w0812", x: 365.8, y:456.7,  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -182.3267 477.6003)", class:"st7 unactive", width:239.1, height:4.4},
    ],
    stations: [
      {id: "s0800", class: "st22 unactive_station", cx: 1150.9, cy: 392.5, r: 5, transform: "matrix(1 0 0 1 1013.5004 510.4073)", name: "Площадь Ильича", text: "foxText"},
      {id: "s0801", class: "st22 unactive_station", cx: 1133.7, cy: 409.7, r: 5, transform: "matrix(1 0 0 1 1076.4712 480.8055)", name: "Автозаводская", text: "foxText"},
      {id: "s0802", class: "st22 unactive_station", cx: 1115.9, cy: 427.5, r: 5, transform: "matrix(1 0 0 1 1106.1666 456.1347)", name: "Шоссе Энтузиастов", text: "foxText"},
      {id: "s0803", class: "st22 unactive_station", cx: 1097, cy: 446.5, r: 5, transform: "matrix(1 0 0 1 1125.3336 431.4926)", name: "Перово", text: "foxText"},
      {id: "s0804", class: "st22 unactive_station", cx: 1066.6, cy: 476.8, r: 5, transform: "matrix(1 0 0 1 1143.1996 413.7115)", name: "Новогиреево", text: "foxText"},
      {id: "s0805", class: "st22 unactive_station", cx: 1004.2, cy: 506.9, r: 5, transform: "matrix(1 0 0 1 1160.3662 396.7115)", name: "Новокосино", text: "foxText"},
      {id: "s0806", class: "st22 unactive_station", cx: 946.5, cy: 506.9, r: 5, transform: "matrix(1 0 0 1 866.1 510.4073)", name: "Марксистская", text: "foxText"},
      {id: "s0807", class: "st22 unactive_station", cx: 837.6, cy: 506.8, r: 5, transform: "matrix(1 0 0 1 753.7365 503.4073)", name: "Третьяковская", text: "foxText"},
      {id: "s0808", class: "st22 unactive_station", cx: 367.6, cy: 639.4, r: 5, transform:"matrix(1 0 0 1 508.5717 373.9401)", name: "Деловой", text: "foxText"},
      {id: "s0809", class: "st22 unactive_station", cx: 367.6, cy: 616.2, r: 5, transform:"matrix(1 0 0 1 320.3849 538.6782)", name: "Парк Победы", text: "foxText"},
      {id: "s0810", class: "st22 unactive_station", cx: 367.7, cy: 593.8, r: 5, transform:"matrix(1 0 0 1 312.293 595)", name: "Минская", text: "foxText"},
      {id: "s0811", class: "st22 unactive_station", cx: 400.9, cy: 543.3, r: 5, transform:"matrix(1 0 0 1 223.4941 620)", name: "Ломоносовский проспект", text: "foxText"},
      {id: "s0812", class: "st22 unactive_station", cx: 568.4, cy: 375.2, r: 5, transform:"matrix(1 0 0 1 311.2046 643)", name: "Раменки", text: "foxText"}
    ]
  }
];

export default function login(state = JSON.parse(JSON.stringify(metro)), action) {
  // console.log("METRO");
  // console.log(metro);
  // console.log(state);

  let newState = JSON.parse(JSON.stringify(state));
  // console.log("AC");
  // console.log(action.type);
  switch (action.type) {
    case CHOOSE_STATION:
      newState = JSON.parse(JSON.stringify(unactive_metro));
      newState[action.info[0]].stations[action.info[1]].class = metro[action.info[0]].stations[action.info[1]].class;
      return newState;

    case CHOOSE_SET:
      newState = JSON.parse(JSON.stringify(unactive_metro));
      // console.log(sets)
      let toChange = sets[action.id].stations;
      toChange.forEach((el)=>{
        newState[el[0]].stations[el[1]].class = metro[el[0]].stations[el[1]].class;
      });
      toChange = sets[action.id].ways;
      toChange.forEach((el)=>{
        newState[el[0]].ways[el[1]].class = metro[el[0]].ways[el[1]].class;
      });
      return newState;
    default:
      return newState
  }
}
