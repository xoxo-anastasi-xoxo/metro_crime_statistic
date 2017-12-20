import {sets} from './page'

const CHOOSE_STATION = "CHOOSE_STATION";
const CHOOSE_SET = "CHOOSE_SET";

export const treks = [
  {cx: "641.3", cy: "149.3", rx: "5.5", ry: "10.9"},
  {cx: 753.1, cy: 113.4, rx: 6.2, ry: 12.4},
  {cx: 761, cy: 142.8, rx: 12.9, ry: 6.1},
  {cx: 753.1, cy: 235.4, rx: 5, ry: 10.9},
  {cx: 804.2, cy: 299.3, rx: 12.1, ry: 4.9},
  {cx: 977.2, cy: 894.4, rx: 11.7, ry: 5},
  {cx: 1003.1, cy: 199.7, rx: 11.7, ry: 5}, {cx: 1006.7, cy: 218.3, rx: 13.6, ry: 5.2}, {cx: 543.7, cy: 243.8, rx: 10.7, ry: 5}
  , {cx: 523.4, cy: 275.6, rx: 11.3, ry: 5}, {cx: 693.4, cy: 270.3, rx: 5, ry: 12.2}, {cx: 633.6, cy: 322.1, rx: 5, ry: 11}
  , {cx: 568.4, cy: 367.8, rx: 5, ry: 12.5}
  , {transform: "matrix(6.156361e-02 -0.9981 0.9981 6.156361e-02 85.8382 824.8987)", cx: 481.6, cy: 366.8, rx: 11.4, ry: 5}
  , {cx: 481.5, cy: 487.6, rx: 5.6, ry: 10.7}
  , {cx: 400.4, cy: 535.6, rx: 5.1, ry: 12.6}
  , {cx: 345.8, cy: 364.9, rx: 5.2, ry: 12.2}
  , {cx: 561.7, cy: 650.9, rx: 5.1, ry: 10.9}
  , {cx: 826.3, cy: 746.4, rx: 4.9, ry: 12.3}
  , {cx: 712.3, cy: 739.3, rx: 5, ry: 11.8}
  , {cx: 712.3, cy: 612.6, rx: 5, ry: 12}
  , {cx: 826.5, cy: 623.5, rx: 5, ry: 11.5}
  , {cx: 645.7, cy: 565.2, rx: 5, ry: 11.7}
  , {cx: 908.4, cy: 584.3, rx: 5, ry: 11.8}
  , {cx: 1004.2, cy: 570.7, rx: 5, ry: 11.8}
  , {cx: 1004.1, cy: 499.4, rx: 5.1, ry: 12.4}
  , {cx: 1097.1, cy: 453.1, rx: 4.9, ry: 11.7}
  , {cx: 928.9, cy: 295.2, rx: 5, ry: 11.5}
  , {cx: 870.9, cy: 252.1, rx: 5, ry: 10.7}
  , {cx: 871.1, cy: 124.2, rx: 5.8, ry: 10.8}
  , {cx: 983.9, cy: 665, rx: 5, ry: 11.9}
  , {cx: 950.9, cy: 687.8, rx: 5, ry: 11.7}
  , {cx: 950.9, cy: 781.5, rx: 5, ry: 11.9}
  , {cx: 826.3, cy: 830.1, rx: 5, ry: 11.4}
  , {cx: 746.3, cy: 938.9, rx: 5, ry: 11.2}

  , {transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -460.4321 844.5923)", cx: 789.3, cy: 978.1, rx: 11.9, ry: 4.9}
  , {cx: 693.4, cy: 388.8, rx: 5, ry: 18}
  , {cx: 693.4, cy: 504.1, rx: 5, ry: 25.2}
  , {cx: 774.5, cy: 456.8, rx: 5, ry: 18.8}
  , {cx: 837.6, cy: 507.3, rx: 5, ry: 18}
  , {cx: 977.3, cy: 452.1, rx: 5, ry: 18.3}
  , {cx: 946.5, cy: 519.8, rx: 5, ry: 17.9}
  , {cx: 815.5, cy: 395.5, rx: 5, ry: 11.7}
  , {cx: 871.1, cy: 451.5, rx: 5, ry: 12.1}
  , {cx: 1079.7, cy: 328.8, rx: 5, ry: 12.8}
  , {cx: 597.8, cy: 401.9, rx: 5, ry: 18.1}
  , {cx: 871.2, cy: 346.1, rx: 5, ry: 18}

];

const metro = [
  {
    name: "Кольцо",
    ways: [{ is_circle:true, class:"st10", d:"M712,605.6c22.9,9.7,48.1,15.1,74.5,15.1c13.6,0,26.9-1.4,39.7-4.2"},
      { is_circle:true, class:"st10", d:"M597.8,401.1c-1.4,9.4-2.2,19-2.2,28.7c0,49.4,18.8,94.4,49.6,128.3"},
      { is_circle:true, class:"st10", d:"M645.3,558.2c18.4,20.3,41.1,36.5,66.7,47.4"},
      { is_circle:true, class:"st10", d:"M826.2,616.5c31-6.6,59.2-20.6,82.6-40.2"},
      { is_circle:true, class:"st10", d:"M908.8,576.3c14.4-12,27-26.1,37.3-41.9"},
      { is_circle:true, class:"st10", d:"M946.1,534.4c15.8-24.1,26.3-52,29.9-82"},
      { is_circle:true, class:"st10", d:"M976,452.4c0.9-7.4,1.3-15,1.3-22.6c0-48.8-18.3-93.4-48.5-127.1"},
      { is_circle:true, class:"st10", d:"M633.8,315.4c-18.5,24.6-31.2,53.9-36,85.8"},
      { is_circle:true, class:"st10", d:"M928.8,302.7c-16.3-18.2-36-33.3-58.1-44.2"},
      { is_circle:true, class:"st10", d:"M870.7,258.6c-25.4-12.5-54-19.6-84.2-19.6c-11.4,0-22.5,1-33.3,2.9"},
      { is_circle:true, class:"st10", d:"M692.9,263.5c-23.1,13-43.2,30.7-59.1,51.9"},
      { is_circle:true, class:"st10", d:"M753.2,241.9c-21.5,3.8-41.8,11.2-60.2,21.6"}
    ],
    stations: [
      {id: "s0300", class: "st30", cx: 753.4, cy: 241.2, r: 5, transform: "matrix(1,0 0 1 938.5 301.0061)", name: "Комсомольская", text: "FoxText"},
      {id: "s0301", class: "st30", cx: 871.1, cy: 257.9, r: 5, transform: "matrix(1,0 0 1 988.9 448)", name: "Курская", text: "FoxText"},
      {id: "s0302", class: "st30", cx: 929.2, cy: 301.6, r: 5, transform: "matrix(1,0 0 1 887.5 529.3)", name: "Таганская", text: "FoxText"},
      {id: "s0303", class: "st30", cx: 977.3, cy: 451.2, r: 5, transform: "matrix(1,0 0 1 917.5 588.6674)", name: "Павелецкая", text: "FoxText"},
      {id: "s0304", class: "st30", cx: 946.8, cy: 532.7, r: 5, transform: "matrix(1,0 0 1 836.6297 620.7003)", name: "Добрынинская", text: "FoxText"},
      {id: "s0305", class: "st30", cx: 908.4, cy: 577.5, r: 5, transform: "matrix(1,0 0 1 637.42 614.15)", name: "Октябрьская", text: "FoxText"},
      {id: "s0306", class: "st30", cx: 826.5, cy: 617, r: 5, transform: "matrix(1,0 0 1 556.7998 568.8002)", name: "Парк культуры", text: "FoxText"},
      {id: "s0307", class: "st30", cx: 712.3, cy: 605.6, r: 5, transform: "matrix(1,0 0 1 540.5203 405.3842)", name: "Киевская", text: "FoxText"},
      {id: "s0308", class: "st30", cx: 645.7, cy: 558.5, r: 5, transform: "matrix(1,0 0 1 644 320)", name: "Краснопресненская", text: "FoxText"},
      {id: "s0309", class: "st30", cx: 597.8, cy: 401.9, r: 5, transform: "matrix(1,0 0 1 702.5 273.4501)", name: "Белорусская", text: "FoxText"},
      {id: "s0310", class: "st30", cx: 633.6, cy: 316.1, r: 5, transform: "matrix(1,0 0 1 656.9998 245.3)", name: "Новослободская", text: "FoxText"},
      {id: "s0311", class: "st30", cx: 693.5, cy: 263.1, r: 5, transform: "matrix(1,0 0 1 877.6042 258.1002)", name: "Проспект мира", text: "FoxText"},
    ]
  },
  {
    name: "МЦК",
    ways:[		{is_circle: true, class: "st13", d: "M727.8,124.7c-7.8,1.5-15.6,3.3-23.2,5.4"},
      {is_circle: true, class: "st13", d: "M753.1,120.9c-8.5,0.9-16.9,2.2-25.3,3.8"},
      {is_circle: true, class: "st13", d: "M704.7,130.1c-8.4,2.3-16.7,5-24.8,7.9"},
      {is_circle: true, class: "st13", d: "M568.2,209.2c-10.9,10.8-21,22.3-30.1,34.6"},
      {is_circle: true, class: "st13", d: "M870,130.1c-26.4-7.2-54.1-11.1-82.7-11.1c-11.5,0-22.9,0.6-34.2,1.9"},
      {is_circle: true, class: "st13", d: "M679.8,138c-13.2,4.9-26.1,10.6-38.4,17.2"},
      {is_circle: true, class: "st13", d: "M538,243.8c-3.8,5.1-7.4,10.3-10.9,15.6"},
      {is_circle: true, class: "st13", d: "M641.4,155.2c-27,14.4-51.7,32.6-73.3,54"},
      {is_circle: true, class: "st13", d: "M1078.8,321c-14.1-37.5-35.1-71.5-61.6-100.6"},
      {is_circle: true, class: "st13", d: "M1017.1,220.4c-6.6-7.2-13.5-14.1-20.8-20.7"},
      {is_circle: true, class: "st13", d: "M1092.9,371.5c-3.3-17.4-8.1-34.3-14.2-50.5"},
      {is_circle: true, class: "st13", d: "M996.3,199.7c-8.9-8.1-18.3-15.6-28.1-22.7"},
      {is_circle: true, class: "st13", d: "M968.3,177c-9-6.5-18.4-12.5-28.2-18"},
      {is_circle: true, class: "st13", d: "M940.1,159.1c-21.9-12.3-45.4-22.1-70.1-28.9"},
      {is_circle: true, class: "st13", d: "M1092.4,492c4-20,6.1-40.6,6.1-61.7c0-20.1-1.9-39.7-5.6-58.7"},
      {is_circle: true, class: "st13", d: "M527.1,259.4c-3.5,5.3-6.8,10.7-10,16.2"},
      {is_circle: true, class: "st13", d: "M952.7,693.9c10.6-6.7,20.7-13.9,30.4-21.8"},
      {is_circle: true, class: "st13", d: "M903.9,718.9c17.1-6.9,33.4-15.3,48.8-25"},
      {is_circle: true, class: "st13", d: "M983.2,672.1c16-13,30.8-27.6,44-43.5"},
      {is_circle: true, class: "st13", d: "M1084.5,522.8c3.1-10.1,5.8-20.4,7.9-30.9"},
      {is_circle: true, class: "st13", d: "M1075.5,547.9c3.3-8.2,6.4-16.5,9-25.1"},
      {is_circle: true, class: "st13", d: "M1027.1,628.6c20-24.1,36.3-51.3,48.4-80.7"},
      {is_circle: true, class: "st13", d: "M826.4,739.1c27.1-3.4,53.1-10.3,77.5-20.2"},
      {is_circle: true, class: "st13", d: "M480.8,375.7c-3.1,17.7-4.8,35.9-4.8,54.5c0,22.7,2.4,44.7,7,66"},
      {is_circle: true, class: "st13", d: "M784,741.5c1.1,0,2.2,0,3.2,0c13.3,0,26.4-0.8,39.2-2.4"},
      {is_circle: true, class: "st13", d: "M517.1,275.6c-8.3,14.5-15.5,29.8-21.5,45.7"},
      {is_circle: true, class: "st13", d: "M495.6,321.2c-6.5,17.5-11.6,35.7-14.9,54.5"},
      {is_circle: true, class: "st13", d: "M712.6,732.5c22.9,5.6,46.8,8.7,71.4,9"},
      {is_circle: true, class: "st13", d: "M562.5,645.5c40.2,41.9,91.9,72.6,150.2,87"},
      {is_circle: true, class: "st13", d: "M483,496.3c12.4,57.2,40.4,108.5,79.4,149.2"},
    ],
    stations: [
      {id: "s0300", class: "st31", cx: 727.8, cy: 124.7, r: 5, transform: "matrix(1,0 0 1 948.5489 159)", name: "Росткино", text: "FoxText"},
      {id: "s0301", class: "st31", cx: 753.1, cy: 120.9, r: 5, transform: "matrix(1,0 0 1 978.5 180.3)", name: "Белокаменская", text: "FoxText"},
      {id: "s0302", class: "st31", cx: 871.1, cy: 130.1, r: 5, transform: "matrix(1,0 0 1 1025.724 220.7)", name: "Локомотив", text: "FoxText"},
      {id: "s0303", class: "st31", cx: 940.1, cy: 159.1, r: 5, transform: "matrix(1,0 0 1 1091.1798 326)", name: "Измайлово", text: "FoxText"},
      {id: "s0304", class: "st31", cx: 969.2, cy: 177, r: 5, transform: "matrix(1,0 0 1 1103.3837 377.55)", name: "Соколиная гора", text: "FoxText"},
      {id: "s0305", class: "st31", cx: 996.3, cy: 199.7, r: 5, transform: "matrix(1,0 0 1 1105.8833 457.3674)", name: "Шоссе Энтузиастов", text: "FoxText"},
      {id: "s0306", class: "st31", cx: 1015.3, cy: 218.3, r: 5, transform: "matrix(1,0 0 1 1103.3837 496.8992)", name: "Андроновка", text: "FoxText"},
      {id: "s0307", class: "st31", cx: 1079.7, cy: 321, r: 5, transform: "matrix(1,0 0 1 1092.7571 527.8327)", name: "Нижегородская", text: "FoxText"},
      {id: "s0308", class: "st31", cx: 1097, cy: 459.8, r: 5, transform: "matrix(1,0 0 1 1085.3167 552.0327)", name: "Новохохловская", text: "FoxText"},
      {id: "s0309", class: "st31", cx: 1084.5, cy: 521.6, r: 5, transform: "matrix(1,0 0 1 1037.5 633.1)", name: "Угрешская", text: "FoxText"},
      {id: "s0310", class: "st31", cx: 1092.4, cy: 492, r: 5, transform: "matrix(1,0 0 1 994.0969 668.9002)", name: "Дубровка", text: "FoxText"},
      {id: "s0311", class: "st31", cx: 1074.7, cy: 547.9, r: 5, transform: "matrix(1,0 0 1 1076.4712 480.8055)", name: "Автозаводская ", text: "FoxText"},
      {id: "s0312", class: "st31", cx: 1027.1, cy: 628.6, r: 5, transform: "matrix(1,0 0 1 914.3335 723.333)", name: "ЗИЛ", text: "FoxText"},
      {id: "s0313", class: "st31", cx: 984, cy: 671.9, r: 5, transform: "matrix(1,0 0 1 832.6 734.5)", name: "Верхние котлы", text: "FoxText"},
      {id: "s0314", class: "st31", cx: 950.9, cy: 694.5, r: 5, transform: "matrix(1,0 0 1 759.6667 734.1)", name: "Крымская", text: "FoxText"},
      {id: "s0315", class: "st31", cx: 903.9, cy: 718.9, r: 5, transform: "matrix(1,0 0 1 606.8372 734.3)", name: "Площадь Гагарина", text: "FoxText"},
      {id: "s0316", class: "st31", cx: 826.4, cy: 739.1, r: 5, transform: "matrix(1,0 0 1 506.7399 647.6094)", name: "Лужники", text: "FoxText"},
      {id: "s0317", class: "st31", cx: 784, cy: 741.5, r: 5, transform: "matrix(1,0 0 1 491.3335 491.3335)", name: "Кутузовская", text: "FoxText"},
      {id: "s0318", class: "st31", cx: 712.3, cy: 732.5, r: 5, transform: "matrix(1,0 0 1 392.6667 376.0002)", name: "Деловой центр", text: "FoxText"},
      {id: "s0319", class: "st31", cx: 561.8, cy: 645, r: 5, transform: "matrix(1,0 0 1 432.3332 326.6665)", name: "Шелепиха", text: "FoxText"},
      {id: "s0320", class: "st31", cx: 481.5, cy: 493.5, r: 5, transform: "matrix(1,0 0 1 450.3332 279.111)", name: "Хорошёво", text: "FoxText"},
      {id: "s0321", class: "st31", cx: 481.6, cy: 373.1, r: 5, transform: "matrix(1,0 0 1 488.15 261.4098)", name: "Зорге", text: "FoxText"},
      {id: "s0322", class: "st31", cx: 495.6, cy: 322.6, r: 5, transform: "matrix(1,0 0 1 452.333 246.0001)", name: "Панфиловская", text: "FoxText"},
      {id: "s0323", class: "st31", cx: 517.1, cy: 275.6, r: 5, transform: "matrix(1,0 0 1 501.6 212.9)", name: "Стрешнево", text: "FoxText"},
      {id: "s0324", class: "st31", cx: 527.1, cy: 259.4, r: 5, transform: "matrix(1,0 0 1 572.2 159)", name: "Балтийская", text: "FoxText"},
      {id: "s0325", class: "st31", cx: 538, cy: 243.8, r: 5, transform: "matrix(1,0 0 1 679.8 157.1424)", name: "Коптево", text: "FoxText"},
      {id: "s0326", class: "st31", cx: 568.2, cy: 209.2, r: 5, transform: "matrix(1,0 0 1 651.5 127.4001)", name: "Лихборы", text: "FoxText"},
      {id: "s0327", class: "st31", cx: 641.4, cy: 155.2, r: 5, transform: "matrix(1,0 0 1 691.1561 115.9001)", name: "Окружная", text: "FoxText"},
      {id: "s0328", class: "st31", cx: 679.8, cy: 138, r: 5, transform: "matrix(1,0 0 1 764 118.4002)", name: "Владыкино", text: "FoxText"},
      {id: "s0329", class: "st31", cx: 704.7, cy: 130.1, r: 5, transform: "matrix(1,0 0 1 880.6041 129.6998)", name: "Ботанический сад", text: "FoxText"},
    ]
  },
  {
    name: "Салатовая",
    ways: [
      {
        id: "w0300",
        x: 773.1,
        y: 138.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 122.008 591.7263)",
        class: "st15",
        width: 4.4,
        height: 19.8
      },
      {
        id: "w0301",
        x: 824.2,
        y: 250.2,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 19.7242 676.4316)",
        class: "st15",
        width: 4.4,
        height: 128.4
      },
      {
        id: "w0302",
        x: 922.3,
        y: 338,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -20.9662 774.5541)",
        class: "st15",
        width: 4.4,
        height: 149.2
      },
      {
        id: "w0303",
        x: 988.8,
        y: 459.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -48.4828 841.0389)",
        class: "st15",
        width: 4.4,
        height: 39.3
      },
      {id: "w0304", x: 779.4, y: 154, class: "st15", width: 4.4, height: 11.1},
      {id: "w0305", x: 779.4, y: 165.1, class: "st15", width: 4.4, height: 20.6},
      {id: "w0306", x: 779.4, y: 185.7, class: "st15", width: 4.4, height: 20.6},
      {id: "w0307", x: 779.4, y: 206.3, class: "st15", width: 4.4, height: 22.5},
      {id: "w0308", x: 779.4, y: 228.8, class: "st15", width: 4.4, height: 41.7},
      {id: "w0309", x: 1002, y: 491.3, class: "st15", width: 4.4, height: 72.7},
      {id: "w0310", x: 1002, y: 563.8, class: "st15", width: 4.4, height: 50.8},
      {id: "w0311", x: 981.7, y: 633.1, class: "st15", width: 4.4, height: 26.4},
      {id: "w0312", x: 981.7, y: 659.5, class: "st15", width: 4.4, height: 91.9},
      {id: "w0313", x: 981.7, y: 751.4, class: "st15", width: 4.4, height: 18.1},
      {id: "w0314", x: 981.7, y: 769.6, class: "st15", width: 4.4, height: 18},
      {id: "w0315", x: 981.7, y: 787.6, class: "st15", width: 4.4, height: 18},
      {id: "w0316", x: 981.7, y: 805.6, class: "st15", width: 4.4, height: 17.8},
      {id: "w0317", x: 981.7, y: 823.4, class: "st15", width: 4.4, height: 18.1},
      {id: "w0318", x: 981.6, y: 841.4, class: "st15", width: 4.4, height: 16.7},
      {id: "w0319", x: 981.6, y: 857.9, class: "st15", width: 4.4, height: 19.3},
      {id: "w0320", x: 981.6, y: 877.2, class: "st15", width: 4.4, height: 17.7},
      {
        id: "w0321",
        x: 978.8,
        y: 621.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -150.0053 885.671)",
        class: "st15",
        width: 30.6,
        height: 4.4
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st23",
        cx: 769,
        cy: 142.7,
        r: 5,
        transform: "matrix(1,0 0 1 779 145)",
        name: "Петровско-Разумовская",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st23",
        cx: 781.6,
        cy: 165.1,
        r: 5,
        transform: "matrix(1,0 0 1 793 170.1)",
        name: "Фонвизинская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st23",
        cx: 781.4,
        cy: 185.7,
        r: 5,
        transform: "matrix(1,0 0 1 793 190.3)",
        name: "Бутырская",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st23",
        cx: 781.6,
        cy: 207.2,
        r: 5,
        transform: "matrix(1,0 0 1 793 209.05)",
        name: "Марьина Роща",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st23",
        cx: 781.4,
        cy: 228.7,
        r: 5,
        transform: "matrix(1,0 0 1 793 230)",
        name: "Достоевская",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st23",
        cx: 811.3,
        cy: 299.3,
        r: 5,
        transform: "matrix(1,0 0 1 820.5001 302.199)",
        name: "Трубная",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st23",
        cx: 871.1,
        cy: 359.2,
        r: 5,
        transform: "matrix(1,0 0 1 883.0873 363.9)",
        name: "Сретенский бульвар",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st23",
        cx: 977.3,
        cy: 465.4,
        r: 5,
        transform: "matrix(1,0 0 1 986.0996 470.5999)",
        name: "Чкаловская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st23",
        cx: 1004,
        cy: 492,
        r: 5,
        transform: "matrix(1,0 0 1 1016.1015 494.9921)",
        name: "Римская",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st23",
        cx: 1004.2,
        cy: 563.8,
        r: 5,
        transform: "matrix(1,0 0 1 1014 568.8)",
        name: "Крестьянская застава",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st23",
        cx: 983.9,
        cy: 658.1,
        r: 5,
        transform: "matrix(1,0 0 1 994.0969 668.9002)",
        name: "Дубровка",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st23",
        cx: 983.9,
        cy: 751.9,
        r: 5,
        transform: "matrix(1,0 0 1 997 755)",
        name: "Кожуховская",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st23",
        cx: 983.9,
        cy: 769.2,
        r: 5,
        transform: "matrix(1,0 0 1 997 774.1)",
        name: "Печатники",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st23",
        cx: 983.9,
        cy: 787.6,
        r: 5,
        transform: "matrix(1,0 0 1 997 792.1)",
        name: "Волжская",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st23",
        cx: 983.9,
        cy: 804.3,
        r: 5,
        transform: "matrix(1,0 0 1 997 808.5)",
        name: "Люблино",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st23",
        cx: 983.8,
        cy: 823.4,
        r: 5,
        transform: "matrix(1,0 0 1 997.0002 826.2996)",
        name: "Братиславская",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st23",
        cx: 983.8,
        cy: 840.6,
        r: 5,
        transform: "matrix(1,0 0 1 997 844.5)",
        name: "Марьино",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st23",
        cx: 983.9,
        cy: 857.9,
        r: 5,
        transform: "matrix(1,0 0 1 997 861.9)",
        name: "Борисово",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st23",
        cx: 983.8,
        cy: 876.1,
        r: 5,
        transform: "matrix(1,0 0 1 997 880.1)",
        name: "Шипиловская",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st23",
        cx: 983.9,
        cy: 894.4,
        r: 5,
        transform: "matrix(1,0 0 1 997 897.6)",
        name: "Зябликово",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Желтая",
    ways: [
      {
        id: "w0300",
        x: 1129.4,
        y: 399,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 50.8637 925.2008)",
        class: "st7",
        width: 25.7,
        height: 4.4
      },
      {
        id: "w0301",
        x: 1111.3,
        y: 417.1,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 32.7668 917.7007)",
        class: "st7",
        width: 25.7,
        height: 4.4
      },
      {
        id: "w0302",
        x: 1093,
        y: 435.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 14.5488 910.0743)",
        class: "st7",
        width: 25.7,
        height: 4.4
      },
      {
        id: "w0303",
        x: 1060.5,
        y: 459.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -9.5441 900.1708)",
        class: "st7",
        width: 42.7,
        height: 4.4
      },
      {
        id: "w0304",
        x: 1029.6,
        y: 489.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -39.9536 887.5587)",
        class: "st7",
        width: 43.6,
        height: 4.4
      },
      {id: "w0305", x: 1004.2, y: 504.6, class: "st7", width: 33.3, height: 4.4},
      {id: "w0306", x: 946.9, y: 504.7, class: "st7", width: 57.4, height: 4.4},
      {id: "w0307", x: 838.3, y: 504.6, class: "st7", width: 108.5, height: 4.4},
      {id: "w0308", x: 365.4, y: 616.2, class: "st7", width: 4.4, height: 23.3},
      {id: "w0309", x: 365.4, y: 593.8, class: "st7", width: 4.4, height: 22.3},
      {id: "w0310", x: 365.4, y: 575.7, class: "st7", width: 4.4, height: 18.1},
      {
        id: "w0311",
        x: 359.9,
        y: 558.1,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -283.7477 435.5609)",
        class: "st7",
        width: 48,
        height: 4.4
      },
      {
        id: "w0312",
        x: 365.8,
        y: 456.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -182.3376 477.6006)",
        class: "st7",
        width: 239.1,
        height: 4.4
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st22",
        cx: 1150.9,
        cy: 392.5,
        r: 5,
        transform: "matrix(1,0 0 1 1016.1019 510.4073)",
        name: "Площадь Ильича",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st22",
        cx: 1133.7,
        cy: 409.7,
        r: 5,
        transform: "matrix(1,0 0 1 1076.4712 480.8055)",
        name: "Автозаводская ",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st22",
        cx: 1115.9,
        cy: 427.5,
        r: 5,
        transform: "matrix(1,0 0 1 1125.3336 431.4926)",
        name: "Перово",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st22",
        cx: 1097,
        cy: 446.5,
        r: 5,
        transform: "matrix(1,0 0 1 1105.8833 457.3674)",
        name: "Шоссе Энтузиастов",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st22",
        cx: 1066.6,
        cy: 476.8,
        r: 5,
        transform: "matrix(1,0 0 1 1143.1996 413.7115)",
        name: "Новогиреево",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st22",
        cx: 1004.2,
        cy: 506.9,
        r: 5,
        transform: "matrix(1,0 0 1 1160.3662 396.7115)",
        name: "Новокосино",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st22",
        cx: 946.5,
        cy: 506.9,
        r: 5,
        transform: "matrix(1,0 0 1 903.8998 499.4001)",
        name: "Марксистская",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st22",
        cx: 837.6,
        cy: 506.8,
        r: 5,
        transform: "matrix(1,0 0 1 748.4002 504.6001)",
        name: "Третьяковская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st22",
        cx: 367.6,
        cy: 639.4,
        r: 5,
        transform: "matrix(1,0 0 1 508.5717 373.9401)",
        name: "Деловой центр",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st22",
        cx: 367.6,
        cy: 616.2,
        r: 5,
        transform: "matrix(1,0 0 1 320.3849 538.6782)",
        name: "Парк Победы",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st22",
        cx: 367.7,
        cy: 593.8,
        r: 5,
        transform: "matrix(1,0 0 1 312.293 595)",
        name: "Минская",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st22",
        cx: 400.9,
        cy: 543.3,
        r: 5,
        transform: "matrix(1,0 0 1 223.4941 620)",
        name: "Ломоносовский проспект",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st22",
        cx: 568.4,
        cy: 375.2,
        r: 5,
        transform: "matrix(1,0 0 1 311.2046 643)",
        name: "Раменки",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Cиняя",
    ways: [
      {id: "w0300", x: 343.8, y: 234, class: "st2", width: 4.4, height: 17.8},
      {id: "w0301", x: 343.8, y: 251.8, class: "st3", width: 4.4, height: 17.8},
      {id: "w0302", x: 343.8, y: 269.6, class: "st3", width: 4.4, height: 17.8},
      {id: "w0303", x: 343.8, y: 287.3, class: "st3", width: 4.4, height: 19.5},
      {id: "w0304", x: 343.8, y: 305.7, class: "st3", width: 4.4, height: 17.8},
      {id: "w0305", x: 343.8, y: 323.5, class: "st3", width: 4.4, height: 17.8},
      {id: "w0306", x: 343.8, y: 341.3, class: "st3", width: 4.4, height: 17.8},
      {id: "w0307", x: 343.8, y: 359.1, class: "st3", width: 4.4, height: 42.9},
      {
        id: "w0308",
        x: 360.5,
        y: 491,
        transform: "matrix(0.6458 -0.7635 0.7635 0.6458 -263.9244 458.9495)",
        class: "st3",
        width: 4.4,
        height: 45.9
      },
      {id: "w0309", x: 343.8, y: 402, class: "st3", width: 4.4, height: 98.8},
      {id: "w0310", x: 378.9, y: 526.1, class: "st3", width: 22, height: 4.4},
      {
        id: "w0311",
        x: 438.7,
        y: 469.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -181.2467 505.6503)",
        class: "st3",
        width: 162.1,
        height: 4.4
      },
      {id: "w0312", x: 400.9, y: 526.1, class: "st3", width: 63, height: 4.4},
      {id: "w0313", x: 575.4, y: 412.7, class: "st3", width: 22.8, height: 4.4},
      {
        id: "w0314",
        x: 616.1,
        y: 405.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -127.1297 564.8688)",
        class: "st3",
        width: 4.4,
        height: 61
      },
      {
        id: "w0315",
        x: 664.7,
        y: 446.2,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -147.2501 613.4614)",
        class: "st3",
        width: 4.4,
        height: 76.6
      },
      {
        id: "w0316",
        x: 710.3,
        y: 488.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -130.0313 667.0617)",
        class: "st3",
        width: 59.8,
        height: 4.4
      },
      {id: "w0317", x: 692.5, y: 508.8, class: "st3", width: 28.1, height: 4.4},
      {id: "w0318", x: 759.8, y: 467.8, class: "st3", width: 16.3, height: 4.4},
      {
        id: "w0319",
        x: 1057.8,
        y: 343.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 68.8828 858.0978)",
        class: "st3",
        width: 24.9,
        height: 4.4
      },
      {
        id: "w0320",
        x: 1020.2,
        y: 369.6,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 42.9846 847.3681)",
        class: "st3",
        width: 48.3,
        height: 4.4
      },
      {
        id: "w0321",
        x: 1000.3,
        y: 397.9,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 14.7066 835.6744)",
        class: "st3",
        width: 31.6,
        height: 4.4
      },
      {
        id: "w0322",
        x: 972.8,
        y: 422.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -9.783 825.5518)",
        class: "st3",
        width: 37.7,
        height: 4.4
      },
      {id: "w0323", x: 776.1, y: 467.8, class: "st3", width: 171, height: 4.4},
      {
        id: "w0324",
        x: 938.8,
        y: 452.1,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -39.4845 813.2657)",
        class: "st3",
        width: 46.3,
        height: 4.4
      },
      {
        id: "w0325",
        x: 1076.9,
        y: 329.6,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 82.9835 863.9373)",
        class: "st3",
        width: 14.9,
        height: 4.4
      },
      {id: "w0326", x: 1086.8, y: 299.6, class: "st3", width: 4.4, height: 28.5},
      {id: "w0327", x: 1086.8, y: 280.9, class: "st3", width: 4.4, height: 18.7},
      {id: "w0328", x: 1086.8, y: 262.1, class: "st3", width: 4.4, height: 18.7},
    ],
    stations: [
      {
        id: "s0300",
        class: "st18",
        cx: 346,
        cy: 234,
        r: 5,
        transform: "matrix(1,0 0 1 240 236.9501)",
        name: "Пятницкое шоссе",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st18",
        cx: 345.7,
        cy: 250,
        r: 5,
        transform: "matrix(1,0 0 1 291 255.1501)",
        name: "Митино",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st18",
        cx: 345.7,
        cy: 269.3,
        r: 5,
        transform: "matrix(1,0 0 1 250 273.4501)",
        name: "Волоколамская",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st18",
        cx: 345.7,
        cy: 287,
        r: 5,
        transform: "matrix(1,0 0 1 277 290.8046)",
        name: "Мякинино",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st18",
        cx: 345.7,
        cy: 304.7,
        r: 5,
        transform: "matrix(1,0 0 1 282 308.5501)",
        name: "Строгино",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st18",
        cx: 346,
        cy: 322.3,
        r: 5,
        transform: "matrix(1,0 0 1 270 326.7501)",
        name: "Крылатское",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st18",
        cx: 346,
        cy: 340,
        r: 5,
        transform: "matrix(1,0 0 1 266 344.0501)",
        name: "Молодёжная",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st18",
        cx: 345.7,
        cy: 357.7,
        r: 5,
        transform: "matrix(1,0 0 1 274 368.1002)",
        name: "Кунцевская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st18",
        cx: 345.7,
        cy: 401.3,
        r: 5,
        transform: "matrix(1,0 0 1 229.5203 403.8342)",
        name: "Славянский бульвар",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st18",
        cx: 400.3,
        cy: 528,
        r: 5,
        transform: "matrix(1,0 0 1 320.3849 538.6782)",
        name: "Парк Победы",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st19",
        cx: 597.8,
        cy: 415,
        r: 5,
        transform: "matrix(1,0 0 1 540.5203 405.3842)",
        name: "Киевская",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st19",
        cx: 640.3,
        cy: 458.3,
        r: 5,
        transform: "matrix(1,0 0 1 569.9203 461.7342)",
        name: "Смоленская",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st19",
        cx: 693.7,
        cy: 511,
        r: 5,
        transform: "matrix(1,0 0 1 630.1202 513.3657)",
        name: "Арбатская",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st19",
        cx: 774.5,
        cy: 470.6,
        r: 5,
        transform: "matrix(1,0 0 1 769.5 486.8999)",
        name: "Площадь революции",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st19",
        cx: 977.3,
        cy: 438.9,
        r: 5,
        transform: "matrix(1,0 0 1 988.9 448)",
        name: "Курская",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st19",
        cx: 1005,
        cy: 411.7,
        r: 5,
        transform: "matrix(1,0 0 1 1017 417)",
        name: "Бауманская",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st19",
        cx: 1026.3,
        cy: 390,
        r: 5,
        transform: "matrix(1,0 0 1 1038 395)",
        name: "Электрозаводская",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st19",
        cx: 1061,
        cy: 354.7,
        r: 5,
        transform: "matrix(1,0 0 1 1073 360.3)",
        name: "Семёновская",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st19",
        cx: 1079.7,
        cy: 336.6,
        r: 5,
        transform: "matrix(1,0 0 1 1090 342)",
        name: "Партизанская",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st19",
        cx: 1089,
        cy: 263.7,
        r: 5,
        transform: "matrix(1,0 0 1 1102 303)",
        name: "Измайловская",
        text: "FoxText"
      },
      {
        id: "s0320",
        class: "st19",
        cx: 1089,
        cy: 281.3,
        r: 5,
        transform: "matrix(1,0 0 1 1103 285)",
        name: "Первомайская",
        text: "FoxText"
      },
      {
        id: "s0321",
        class: "st19",
        cx: 1089,
        cy: 299.7,
        r: 5,
        transform: "matrix(1,0 0 1 1103 268)",
        name: "Щёлковская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Оранжевая",
    ways: [
      {
        id: "w0300",
        x: 831.5,
        y: 474.6,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -86.6984 744.2601)",
        class: "st14",
        width: 47.1,
        height: 4.4
      },
      {
        id: "w0301",
        x: 685.3,
        y: 554.6,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -166.6857 711.1561)",
        class: "st14",
        width: 179.6,
        height: 4.4
      },
      {
        id: "w0302",
        x: 717.2,
        y: 894.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -429.7914 773.9983)",
        class: "st14",
        width: 4.4,
        height: 22
      },
      {
        id: "w0303",
        x: 734.9,
        y: 909.5,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -437.1229 791.6823)",
        class: "st14",
        width: 4.4,
        height: 28
      },
      {id: "w0304", x: 710.1, y: 876.9, class: "st14", width: 4.4, height: 22.7},
      {id: "w0305", x: 710.1, y: 854.6, class: "st14", width: 4.4, height: 22.3},
      {id: "w0306", x: 710.1, y: 832.9, class: "st14", width: 4.4, height: 21.7},
      {id: "w0307", x: 710.1, y: 810.1, class: "st14", width: 4.4, height: 22.8},
      {id: "w0308", x: 710.1, y: 788.6, class: "st14", width: 4.4, height: 21.5},
      {id: "w0309", x: 710.1, y: 766.2, class: "st14", width: 4.4, height: 22.4},
      {id: "w0310", x: 710.1, y: 746.8, class: "st14", width: 4.4, height: 19.4},
      {id: "w0311", x: 710.1, y: 670.3, class: "st14", width: 4.4, height: 76.4},
      {id: "w0312", x: 710.1, y: 618.8, class: "st14", width: 4.4, height: 51.5},
      {id: "w0313", x: 868.9, y: 333, class: "st14", width: 4.4, height: 128.7},
      {id: "w0314", x: 868.9, y: 279.6, class: "st14", width: 4.4, height: 53.4},
      {id: "w0315", x: 868.9, y: 246, class: "st14", width: 4.4, height: 33.6},
      {id: "w0316", x: 868.9, y: 194.7, class: "st14", width: 4.4, height: 51.3},
      {id: "w0317", x: 868.9, y: 174.8, class: "st14", width: 4.4, height: 19.9},
      {id: "w0318", x: 868.9, y: 154.8, class: "st14", width: 4.4, height: 19.9},
      {id: "w0319", x: 868.7, y: 117.9, class: "st14", width: 4.4, height: 36.9},
      {id: "w0320", x: 868.7, y: 89.8, class: "st14", width: 4.4, height: 28.2},
      {id: "w0321", x: 868.7, y: 71.8, class: "st14", width: 4.4, height: 18},
      {id: "w0322", x: 868.7, y: 54.1, class: "st14", width: 4.4, height: 17.7},
    ],
    stations: [
      {
        id: "s0300",
        class: "st24",
        cx: 871.1,
        cy: 54.1,
        r: 5,
        transform: "matrix(1.0907,0 0 1 881.5709 57.82)",
        name: "Медведково",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st24",
        cx: 870.9,
        cy: 71.8,
        r: 5,
        transform: "matrix(1.0907,0 0 1 880.6041 76.78)",
        name: "Бабушкинская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st24",
        cx: 871.1,
        cy: 88.5,
        r: 5,
        transform: "matrix(1,0 0 1 882.0873 93.5)",
        name: "Свиблово",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st24",
        cx: 871.1,
        cy: 118.4,
        r: 5,
        transform: "matrix(1,0 0 1 880.6041 129.6998)",
        name: "Ботанический сад",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st24",
        cx: 870.9,
        cy: 154.8,
        r: 5,
        transform: "matrix(1,0 0 1 880.6041 159)",
        name: "ВДНХ",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st24",
        cx: 871.1,
        cy: 173.9,
        r: 5,
        transform: "matrix(1,0 0 1 879.6041 178.9)",
        name: "Алексеевская",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st24",
        cx: 871.1,
        cy: 194.7,
        r: 5,
        transform: "matrix(1,0 0 1 881.5709 198.5001)",
        name: "Рижская",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st24",
        cx: 870.9,
        cy: 246.4,
        r: 5,
        transform: "matrix(1,0 0 1 877.6042 258.1002)",
        name: "Проспект мира",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st24",
        cx: 870.9,
        cy: 279.6,
        r: 5,
        transform: "matrix(1,0 0 1 796.2061 283.7)",
        name: "Сухаревская",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st24",
        cx: 871.1,
        cy: 333,
        r: 5,
        transform: "matrix(1,0 0 1 793 335.541)",
        name: "Тургеневская",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st24",
        cx: 871.1,
        cy: 458.6,
        r: 5,
        transform: "matrix(1,0 0 1 881.0875 456.8001)",
        name: "Китай-город",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st24",
        cx: 837.6,
        cy: 494.3,
        r: 5,
        transform: "matrix(1,0 0 1 748.4002 504.6001)",
        name: "Третьяковская",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st24",
        cx: 712.3,
        cy: 619.7,
        r: 5,
        transform: "matrix(1,0 0 1 637.42 614.15)",
        name: "Октябрьская",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st24",
        cx: 712.3,
        cy: 670.3,
        r: 5,
        transform: "matrix(1,0 0 1 633.0867 673.3002)",
        name: "Шаболовская",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st24",
        cx: 712.3,
        cy: 746.1,
        r: 5,
        transform: "matrix(1,0 0 1 593.9998 748.5)",
        name: "Ленинский проспект",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st24",
        cx: 712.3,
        cy: 766,
        r: 5,
        transform: "matrix(1,0 0 1 621.6665 769.333)",
        name: "Академическая",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st24",
        cx: 712.3,
        cy: 788.1,
        r: 5,
        transform: "matrix(1,0 0 1 630.1202 791.1)",
        name: "Профсоюзная",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st24",
        cx: 712.3,
        cy: 810.1,
        r: 5,
        transform: "matrix(1,0 0 1 605.6665 813.5)",
        name: "Новые Черёмушки",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st24",
        cx: 712.3,
        cy: 832.3,
        r: 5,
        transform: "matrix(1,0 0 1 646.5 835.55)",
        name: "Калужская",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st24",
        cx: 712.3,
        cy: 854.9,
        r: 5,
        transform: "matrix(1,0 0 1 660 857.9)",
        name: "Беляево",
        text: "FoxText"
      },
      {
        id: "s0320",
        class: "st24",
        cx: 712.3,
        cy: 876.9,
        r: 5,
        transform: "matrix(1,0 0 1 651.5 880.1)",
        name: "Коньково",
        text: "FoxText"
      },
      {
        id: "s0321",
        class: "st24",
        cx: 713.2,
        cy: 899.6,
        r: 5,
        transform: "matrix(1,0 0 1 640 902.65)",
        name: "Тёплый стан",
        text: "FoxText"
      },
      {
        id: "s0322",
        class: "st24",
        cx: 728.5,
        cy: 914.9,
        r: 5,
        transform: "matrix(1,0 0 1 677.8 919.9)",
        name: "Ясенево",
        text: "FoxText"
      },
      {
        id: "s0323",
        class: "st24",
        cx: 746.3,
        cy: 932.7,
        r: 5,
        transform: "matrix(1,0 0 1 650.5 937.7)",
        name: "Новоясеневская",
        text: "FoxText"
      },
      {
        id: "s0324",
        class: "st31",
        cx: 1094,
        cy: 373.9,
        r: 5,
        transform: "matrix(1,0 0 1 1037.5 633.1)",
        name: "Угрешская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Красная",
    ways: [
      {id: "w0300", x: 1007.6, y: 199.8, class: "st5", width: 4.4, height: 7.6},
      {
        id: "w0301",
        x: 995.6,
        y: 209.9,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 145.5436 774.4078)",
        class: "st5",
        width: 17.6,
        height: 4.4
      },
      {
        id: "w0302",
        x: 974.1,
        y: 226.1,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 129.3133 767.6923)",
        class: "st5",
        width: 28.2,
        height: 4.4
      },
      {
        id: "w0303",
        x: 960.4,
        y: 243.5,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 111.8532 760.523)",
        class: "st5",
        width: 20.9,
        height: 4.4
      },
      {
        id: "w0304",
        x: 943.6,
        y: 259.2,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 96.1347 754.1224)",
        class: "st5",
        width: 23.4,
        height: 4.4
      },
      {
        id: "w0305",
        x: 924.4,
        y: 276.9,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 78.39 746.8306)",
        class: "st5",
        width: 26.5,
        height: 4.4
      },
      {
        id: "w0306",
        x: 887.5,
        y: 303.1,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 52.1592 736.0795)",
        class: "st5",
        width: 48.2,
        height: 4.4
      },
      {
        id: "w0307",
        x: 866.8,
        y: 331.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 23.4926 724.2981)",
        class: "st5",
        width: 32.6,
        height: 4.4
      },
      {
        id: "w0308",
        x: 806.6,
        y: 370.2,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -15.0955 708.4741)",
        class: "st5",
        width: 76.3,
        height: 4.4
      },
      {
        id: "w0309",
        x: 765.4,
        y: 419.1,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -64.0693 688.4712)",
        class: "st5",
        width: 61.6,
        height: 4.4
      },
      {
        id: "w0310",
        x: 677.5,
        y: 481.2,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -126.3061 662.8729)",
        class: "st5",
        width: 113.6,
        height: 4.4
      },
      {
        id: "w0311",
        x: 667.6,
        y: 532.5,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -177.7136 641.8209)",
        class: "st5",
        width: 31.3,
        height: 4.4
      },
      {
        id: "w0312",
        x: 640.7,
        y: 556.8,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -202.0301 631.8729)",
        class: "st5",
        width: 36.9,
        height: 4.4
      },
      {
        id: "w0313",
        x: 596.6,
        y: 590.2,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -235.5259 618.0795)",
        class: "st5",
        width: 58.4,
        height: 4.4
      },
      {
        id: "w0314",
        x: 553.1,
        y: 632.5,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -277.9128 600.6985)",
        class: "st5",
        width: 61.2,
        height: 4.4
      },
      {
        id: "w0315",
        x: 539.2,
        y: 663.6,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -309.0492 587.9861)",
        class: "st5",
        width: 27.3,
        height: 4.4
      },
      {
        id: "w0316",
        x: 520.1,
        y: 682.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -328.2057 580.1346)",
        class: "st5",
        width: 27.4,
        height: 4.4
      },
      {
        id: "w0317",
        x: 505,
        y: 700.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -345.9434 572.8705)",
        class: "st5",
        width: 22.4,
        height: 4.4
      },
      {id: "w0318", x: 506.6, y: 709, class: "st5", width: 4.4, height: 24},
      {id: "w0319", x: 506.6, y: 733, class: "st5", width: 4.4, height: 18.3},
      {id: "w0320", x: 506.6, y: 751.3, class: "st5", width: 4.4, height: 18.3},
      {id: "w0321", x: 506.6, y: 769.7, class: "st5", width: 4.4, height: 18.3},
    ],
    stations: [
      {
        id: "s0300",
        class: "st20",
        cx: 1009.8,
        cy: 199.8,
        r: 5,
        transform: "matrix(1,0 0 1 1021.3 203.6)",
        name: "Бульвар Рокоссовского",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st20",
        cx: 998.1,
        cy: 218.3,
        r: 5,
        transform: "matrix(1,0 0 1 912.6668 220.7)",
        name: "Черкизовская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st20",
        cx: 978.5,
        cy: 238,
        r: 5,
        transform: "matrix(1,0 0 1 990.1915 243.6962)",
        name: "Преображенская площадь",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st20",
        cx: 962.3,
        cy: 254.3,
        r: 5,
        transform: "matrix(1,0 0 1 974.2 261.3694)",
        name: "Сокольники",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st20",
        cx: 943.5,
        cy: 273.2,
        r: 5,
        transform: "matrix(1,0 0 1 954.2 279.6)",
        name: "Красносельская",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st20",
        cx: 929,
        cy: 288.7,
        r: 5,
        transform: "matrix(1,0 0 1 938.5 301.0061)",
        name: "Комсомольская",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st20",
        cx: 892.9,
        cy: 324,
        r: 5,
        transform: "matrix(1,0 0 1 905.05 328.8)",
        name: "Красные Ворота",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st20",
        cx: 871.1,
        cy: 345.9,
        r: 5,
        transform: "matrix(1,0 0 1 781.5999 349.7)",
        name: "Чистые пруды",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st20",
        cx: 815.5,
        cy: 402.2,
        r: 5,
        transform: "matrix(1,0 0 1 762.8803 407.2)",
        name: "Лубянка",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st20",
        cx: 774.5,
        cy: 443,
        r: 5,
        transform: "matrix(1,0 0 1 783.8831 446.2)",
        name: "Охотный ряд",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st20",
        cx: 693.7,
        cy: 524.2,
        r: 5,
        transform: "matrix(1,0 0 1 535.7 527.4002)",
        name: "Библиотека имени Ленина",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st20",
        cx: 672.2,
        cy: 545.8,
        r: 5,
        transform: "matrix(1,0 0 1 556.7998 568.8002)",
        name: "Парк культуры",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st20",
        cx: 645.7,
        cy: 571.8,
        r: 5,
        transform: "matrix(1,0 0 1 683.2045 550.8)",
        name: "Кропоткинская",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st20",
        cx: 605.2,
        cy: 613.1,
        r: 5,
        transform: "matrix(1,0 0 1 527.6 616.5)",
        name: "Фрунзенская",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st20",
        cx: 561.8,
        cy: 656.8,
        r: 5,
        transform: "matrix(1,0 0 1 571.4286 661.8)",
        name: "Спортивная",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st20",
        cx: 542.7,
        cy: 675.9,
        r: 5,
        transform: "matrix(1,0 0 1 446.3333 678.0339)",
        name: "Воробьёвы горы",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st20",
        cx: 523.3,
        cy: 695.4,
        r: 5,
        transform: "matrix(1,0 0 1 449.3332 696.667)",
        name: "Университет",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st20",
        cx: 508.8,
        cy: 709.9,
        r: 5,
        transform: "matrix(1,0 0 1 380.6665 712.667)",
        name: "Проспект Вернадского",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st20",
        cx: 508.8,
        cy: 734.3,
        r: 5,
        transform: "matrix(1,0 0 1 424.3332 737.5)",
        name: "Юго-Западная",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st20",
        cx: 508.8,
        cy: 752,
        r: 5,
        transform: "matrix(1,0 0 1 441.9998 755.5)",
        name: "Тропарёво",
        text: "FoxText"
      },
      {
        id: "s0320",
        class: "st20",
        cx: 508.8,
        cy: 769.7,
        r: 5,
        transform: "matrix(1,0 0 1 440.9998 773.2)",
        name: "Румянцево",
        text: "FoxText"
      },
      {
        id: "s0321",
        class: "st20",
        cx: 508.8,
        cy: 787.3,
        r: 5,
        transform: "matrix(1,0 0 1 441.9998 792.3)",
        name: "Саларьево",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Зелёная",
    ways: [
      {id: "w0200", x: 639.1, y: 53.8, class: "st6", width: 4.4, height: 18.5},
      {id: "w0201", x: 639.1, y: 72.3, class: "st6", width: 4.4, height: 71.4},
      {id: "w0202", x: 639.1, y: 143.7, class: "st6", width: 4.4, height: 34.3},
      {id: "w0203", x: 639.1, y: 178, class: "st6", width: 4.4, height: 18},
      {id: "w0204", x: 639.1, y: 196, class: "st6", width: 4.4, height: 18},
      {id: "w0205", x: 691.2, y: 276.4, class: "st6", width: 4.4, height: 78.6},
      {id: "w0206", x: 691.2, y: 355, class: "st6", width: 4.4, height: 21.7},
      {id: "w0207", x: 948.7, y: 680.3, class: "st6", width: 4.4, height: 61.1},
      {id: "w0208", x: 948.7, y: 741.4, class: "st6", width: 4.4, height: 21},
      {id: "w0209", x: 948.7, y: 762.3, class: "st6", width: 4.4, height: 13.8},
      {id: "w0210", x: 948.7, y: 776.1, class: "st6", width: 4.4, height: 51.3},
      {id: "w0211", x: 948.7, y: 827.5, class: "st6", width: 4.4, height: 18.1},
      {id: "w0212", x: 948.7, y: 845.6, class: "st6", width: 4.4, height: 15.8},
      {id: "w0213", x: 948.7, y: 861.4, class: "st6", width: 4.4, height: 17.7},
      {id: "w0214", x: 967.8, y: 894.9, class: "st6", width: 4.4, height: 17},
      {id: "w0215", x: 639.1, y: 213.9, class: "st6", width: 4.4, height: 12.2},
      {
        id: "w0216",
        x: 665.2,
        y: 213.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 17.8108 545.5062)",
        class: "st6",
        width: 4.4,
        height: 75.7
      },
      {
        id: "w0217",
        x: 731.2,
        y: 358.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -79.2395 640.3948)",
        class: "st6",
        width: 4.4,
        height: 115.1
      },
      {
        id: "w0218",
        x: 803.8,
        y: 442.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -109.3011 712.9813)",
        class: "st6",
        width: 4.4,
        height: 91.3
      },
      {
        id: "w0219",
        x: 871.1,
        y: 506.1,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -137.1773 780.2803)",
        class: "st6",
        width: 4.4,
        height: 99.3
      },
      {id: "w0220", x: 948.7, y: 632.4, class: "st6", width: 4.4, height: 47.9},
      {
        id: "w0221",
        x: 927.9,
        y: 582.2,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -160.7145 837.0781)",
        class: "st6",
        width: 4.4,
        height: 60.7
      },
      {
        id: "w0222",
        x: 957.7,
        y: 873.9,
        transform: "matrix(0.6293 -0.7772 0.7772 0.6293 -333.5953 1074.8521)",
        class: "st6",
        width: 4.4,
        height: 26.4
      },
    ],
    stations: [
      {
        id: "s0200",
        class: "st21",
        cx: 641.3,
        cy: 54.2,
        r: 5,
        transform: "matrix(1,0 0 1 650.5 58)",
        name: "Речной вокзал",
        text: "FoxText"
      },
      {
        id: "s0201",
        class: "st21",
        cx: 641.3,
        cy: 72.3,
        r: 5,
        transform: "matrix(1,0 0 1 650.5 76.8)",
        name: "Водный стадион",
        text: "FoxText"
      },
      {
        id: "s0202",
        class: "st21",
        cx: 641.3,
        cy: 143.4,
        r: 5,
        transform: "matrix(1,0 0 1 570.9203 145.9)",
        name: "Войковская",
        text: "FoxText"
      },
      {
        id: "s0203",
        class: "st21",
        cx: 641.3,
        cy: 177.8,
        r: 5,
        transform: "matrix(1,0 0 1 601 182)",
        name: "Сокол",
        text: "FoxText"
      },
      {
        id: "s0204",
        class: "st21",
        cx: 641.3,
        cy: 196.5,
        r: 5,
        transform: "matrix(1,0 0 1 581.2 198.5001)",
        name: "Аэропорт",
        text: "FoxText"
      },
      {
        id: "s0205",
        class: "st21",
        cx: 641.3,
        cy: 214.8,
        r: 5,
        transform: "matrix(1,0 0 1 591.5 218.3002)",
        name: "Динамо",
        text: "FoxText"
      },
      {
        id: "s0206",
        class: "st21",
        cx: 693.4,
        cy: 277.5,
        r: 5,
        transform: "matrix(1,0 0 1 702.5 273.4501)",
        name: "Белорусская",
        text: "FoxText"
      },
      {
        id: "s0207",
        class: "st21",
        cx: 693.4,
        cy: 353.8,
        r: 5,
        transform: "matrix(1,0 0 1 702.5 358.3)",
        name: "Маяковская",
        text: "FoxText"
      },
      {
        id: "s0208",
        class: "st21",
        cx: 693.4,
        cy: 375.9,
        r: 5,
        transform: "matrix(1,0 0 1 637.42 378.55)",
        name: "Тверская",
        text: "FoxText"
      },
      {
        id: "s0209",
        class: "st21",
        cx: 774.5,
        cy: 457,
        r: 5,
        transform: "matrix(1,0 0 1 789 461)",
        name: "Театральная",
        text: "FoxText"
      },
      {
        id: "s0210",
        class: "st21",
        cx: 837.6,
        cy: 520.4,
        r: 5,
        transform: "matrix(1,0 0 1 748.4004 525)",
        name: "Новокузнецкая",
        text: "FoxText"
      },
      {
        id: "s0211",
        class: "st21",
        cx: 908.3,
        cy: 591.2,
        r: 5,
        transform: "matrix(1,0 0 1 917.5 588.6674)",
        name: "Павелецкая",
        text: "FoxText"
      },
      {
        id: "s0212",
        class: "st21",
        cx: 950.9,
        cy: 681,
        r: 5,
        transform: "matrix(1,0 0 1 865.15 691.9036)",
        name: "Автозаводская",
        text: "FoxText"
      },
      {
        id: "s0213",
        class: "st21",
        cx: 950.9,
        cy: 743,
        r: 5,
        transform: "matrix(1,0 0 1 887.5 746.1003)",
        name: "Технопарк",
        text: "FoxText"
      },
      {
        id: "s0214",
        class: "st21",
        cx: 950.9,
        cy: 758.3,
        r: 5,
        transform: "matrix(1,0 0 1 873.6998 761.9996)",
        name: "Коломенская",
        text: "FoxText"
      },
      {
        id: "s0215",
        class: "st21",
        cx: 950.9,
        cy: 774.6,
        r: 5,
        transform: "matrix(1,0 0 1 883.5 784.3)",
        name: "Каширская",
        text: "FoxText"
      },
      {
        id: "s0216",
        class: "st21",
        cx: 950.9,
        cy: 830.5,
        r: 5,
        transform: "matrix(1,0 0 1 856 832.9)",
        name: "Кантемировская",
        text: "FoxText"
      },
      {
        id: "s0217",
        class: "st21",
        cx: 950.9,
        cy: 847.3,
        r: 5,
        transform: "matrix(1,0 0 1 887.5 849.9)",
        name: "Царицыно",
        text: "FoxText"
      },
      {
        id: "s0218",
        class: "st21",
        cx: 951.1,
        cy: 865.3,
        r: 5,
        transform: "matrix(1,0 0 1 897 867.55)",
        name: "Орехово",
        text: "FoxText"
      },
      {
        id: "s0219",
        class: "st21",
        cx: 951.7,
        cy: 879.1,
        r: 5,
        transform: "matrix(1,0 0 1 861 884.1)",
        name: "Домодедовская",
        text: "FoxText"
      },
      {
        id: "s0220",
        class: "st21",
        cx: 970.5,
        cy: 894.4,
        r: 5,
        transform: "matrix(1,0 0 1 858.5 899.6)",
        name: "Красногвардейская",
        text: "FoxText"
      },
      {
        id: "s0221",
        class: "st21",
        cx: 970,
        cy: 912.7,
        r: 5,
        transform: "matrix(1,0 0 1 883.0873 915.8)",
        name: "Алма-Атинская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Голубая",
    ways: [
      {
        id: "w0300",
        x: 677.6,
        y: 451.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -133.412 618.4282)",
        class: "st9",
        width: 4.4,
        height: 37.9
      },
      {
        id: "w0301",
        x: 651,
        y: 424.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -122.3941 591.8094)",
        class: "st9",
        width: 4.4,
        height: 37.9
      },
      {
        id: "w0302",
        x: 616.5,
        y: 379.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -108.1603 557.3431)",
        class: "st9",
        width: 4.4,
        height: 59.9
      },
      {
        id: "w0303",
        x: 581.2,
        y: 353.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -93.5387 522.0445)",
        class: "st9",
        width: 4.4,
        height: 40.3
      },
      {id: "w0304", x: 481.7, y: 358.1, class: "st9", width: 89.1, height: 4.4},
      {id: "w0305", x: 572.2, y: 386.6, class: "st9", width: 25.5, height: 4.4},
      {
        id: "w0306",
        x: 517.4,
        y: 409.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -129.5652 511.4452)",
        class: "st9",
        width: 66.2,
        height: 4.4
      },
      {
        id: "w0307",
        x: 472.8,
        y: 455.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -175.6506 492.5417)",
        class: "st9",
        width: 63.8,
        height: 4.4
      },
      {
        id: "w0308",
        x: 451.8,
        y: 490.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -211.0172 478.0845)",
        class: "st9",
        width: 35.7,
        height: 4.4
      },
      {id: "w0309", x: 386.3, y: 502.7, class: "st9", width: 72.2, height: 4.4},
      {id: "w0310", x: 365.7, y: 454.6, class: "st9", width: 4.4, height: 31.8},
      {id: "w0311", x: 365.7, y: 436.7, class: "st9", width: 4.4, height: 18},
      {id: "w0312", x: 365.7, y: 418.7, class: "st9", width: 4.4, height: 18},
      {id: "w0313", x: 365.7, y: 393.1, class: "st9", width: 4.4, height: 25.7},
      {
        id: "w0314",
        x: 375.3,
        y: 480.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -239.6481 411.9952)",
        class: "st9",
        width: 4.4,
        height: 29.2
      },
      {
        id: "w0315",
        x: 354.6,
        y: 366.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -166.2494 364.4396)",
        class: "st9",
        width: 4.4,
        height: 33.2
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st27",
        cx: 693.4,
        cy: 483.9,
        r: 5,
        transform: "matrix(1,0 0 1 570.9203 487.6)",
        name: "Александровский сад",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st27",
        cx: 667.2,
        cy: 457.6,
        r: 5,
        transform: "matrix(1,0 0 1 677.8 460.4)",
        name: "Арбатская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st27",
        cx: 640.2,
        cy: 430.7,
        r: 5,
        transform: "matrix(1,0 0 1 650 434.5)",
        name: "Смоленская",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st27",
        cx: 597.8,
        cy: 388.8,
        r: 5,
        transform: "matrix(1,0 0 1 540.5203 405.3842)",
        name: "Киевская",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st27",
        cx: 568.4,
        cy: 360.3,
        r: 5,
        transform: "matrix(1,0 0 1 566.8 349.7)",
        name: "Выстовочная",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st27",
        cx: 481.6,
        cy: 360.3,
        r: 5,
        transform: "matrix(1,0 0 1 385.3774 363.3379)",
        name: "Международная",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st27",
        cx: 527.6,
        cy: 434.5,
        r: 5,
        transform: "matrix(1,0 0 1 537.7 438)",
        name: "Студенческая",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st27",
        cx: 481.5,
        cy: 481.9,
        r: 5,
        transform: "matrix(1,0 0 1 491.3335 491.3335)",
        name: "Кутузовская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st27",
        cx: 367.9,
        cy: 454.7,
        r: 5,
        transform: "matrix(1,0 0 1 380.6665 458.3335)",
        name: "Фили",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st27",
        cx: 367.9,
        cy: 436.8,
        r: 5,
        transform: "matrix(1,0 0 1 378.9 441.6665)",
        name: "Багратионовская",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st27",
        cx: 367.9,
        cy: 418.8,
        r: 5,
        transform: "matrix(1,0 0 1 378.9 421.3118)",
        name: "Филёвский парк",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st27",
        cx: 367.9,
        cy: 402,
        r: 5,
        transform: "matrix(1,0 0 1 378.9 406.3)",
        name: "Пионерская",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st27",
        cx: 346,
        cy: 372.1,
        r: 5,
        transform: "matrix(1,0 0 1 274 368.1002)",
        name: "Кунцевская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Серая",
    ways: [
      {id: "w0300", x: 750.9, y: 52.7, class: "st16", width: 4.4, height: 19.1},
      {id: "w0301", x: 750.9, y: 71.2, class: "st16", width: 4.4, height: 19.1},
      {id: "w0302", x: 750.9, y: 89.8, class: "st16", width: 4.4, height: 16.3},
      {id: "w0303", x: 750.9, y: 106, class: "st16", width: 4.4, height: 36.7},
      {id: "w0304", x: 750.9, y: 142.7, class: "st16", width: 4.4, height: 22.1},
      {id: "w0305", x: 750.9, y: 164.8, class: "st16", width: 4.4, height: 20.9},
      {id: "w0306", x: 750.9, y: 185.7, class: "st16", width: 4.4, height: 21.6},
      {id: "w0307", x: 750.9, y: 207, class: "st16", width: 4.4, height: 22.5},
      {id: "w0308", x: 691.2, y: 402.4, class: "st16", width: 4.4, height: 95.5},
      {id: "w0309", x: 824.4, y: 629.3, class: "st16", width: 4.4, height: 41},
      {id: "w0310", x: 824.4, y: 670.3, class: "st16", width: 4.4, height: 83},
      {id: "w0311", x: 824.4, y: 753.3, class: "st16", width: 4.4, height: 25.2},
      {id: "w0312", x: 824.4, y: 776.6, class: "st16", width: 4.4, height: 25.2},
      {id: "w0313", x: 824.4, y: 801.8, class: "st16", width: 4.4, height: 34.7},
      {id: "w0314", x: 824.4, y: 835.5, class: "st16", width: 4.4, height: 18},
      {id: "w0315", x: 824.4, y: 853.1, class: "st16", width: 4.4, height: 18.8},
      {id: "w0316", x: 824.4, y: 871.5, class: "st16", width: 4.4, height: 18},
      {id: "w0317", x: 824.4, y: 889.5, class: "st16", width: 4.4, height: 26.3},
      {id: "w0318", x: 824.4, y: 915.8, class: "st16", width: 4.4, height: 25.7},
      {
        id: "w0319",
        x: 737.6,
        y: 476.9,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -167.4993 682.2386)",
        class: "st16",
        width: 4.4,
        height: 132.8
      },
      {
        id: "w0320",
        x: 804.8,
        y: 581.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -195.3624 749.4576)",
        class: "st16",
        width: 4.4,
        height: 57.5
      },
      {id: "w0321", x: 750.9, y: 229.5, class: "st16", width: 4.4, height: 26.5},
      {
        id: "w0322",
        x: 772.8,
        y: 245.2,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 31.1122 629.129)",
        class: "st16",
        width: 4.4,
        height: 63.6
      },
      {
        id: "w0323",
        x: 670.7,
        y: 348.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -29.031 631.953)",
        class: "st16",
        width: 150.1,
        height: 4.4
      },
      {
        id: "w0324",
        x: 786.8,
        y: 954.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -439.4655 856.4011)",
        class: "st16",
        width: 47.5,
        height: 4.4
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st25",
        cx: 794.3,
        cy: 973.2,
        r: 5,
        transform: "matrix(1,0 0 1 762.8803 59.1)",
        name: "Алтуфьево",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st25",
        cx: 826.6,
        cy: 941.6,
        r: 5,
        transform: "matrix(1,0 0 1 762.8803 76.8)",
        name: "Биберево",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st25",
        cx: 826.6,
        cy: 915.8,
        r: 5,
        transform: "matrix(1,0 0 1 764 93.5)",
        name: "Отрадное",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st25",
        cx: 826.6,
        cy: 890.2,
        r: 5,
        transform: "matrix(1,0 0 1 764 118.4002)",
        name: "Владыкино",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st25",
        cx: 826.6,
        cy: 871.5,
        r: 5,
        transform: "matrix(1,0 0 1 779 145)",
        name: "Петровско-Разумовская",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st25",
        cx: 826.3,
        cy: 853.2,
        r: 5,
        transform: "matrix(1,0 0 1 665.35 167.9)",
        name: "Тимирязевская",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st25",
        cx: 826.3,
        cy: 836.5,
        r: 5,
        transform: "matrix(1,0 0 1 674.8 188)",
        name: "Дмитровская",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st25",
        cx: 826.6,
        cy: 800.5,
        r: 5,
        transform: "matrix(1,0 0 1 677.8 210.05)",
        name: "Савёловская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st25",
        cx: 826.6,
        cy: 779.3,
        r: 5,
        transform: "matrix(1,0 0 1 664.6 232.7)",
        name: "Метделеевская",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st25",
        cx: 826.6,
        cy: 753.7,
        r: 5,
        transform: "matrix(1,0 0 1 698.5 302.7)",
        name: "Цветной бульвар",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st25",
        cx: 826.6,
        cy: 670.3,
        r: 5,
        transform: "matrix(1,0 0 1 630.1202 405.6486)",
        name: "Чеховская",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st25",
        cx: 826.5,
        cy: 630,
        r: 5,
        transform: "matrix(1,0 0 1 620.4 500.4001)",
        name: "Боровицкая",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st25",
        cx: 786.7,
        cy: 590.3,
        r: 5,
        transform: "matrix(1,0 0 1 796.5 592.391)",
        name: "Полянка",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st25",
        cx: 693.4,
        cy: 497,
        r: 5,
        transform: "matrix(1,0 0 1 744.212 633.6)",
        name: "Серпуховская",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st25",
        cx: 693.4,
        cy: 401.8,
        r: 5,
        transform: "matrix(1,0 0 1 771.5 675.3)",
        name: "Тульская",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st25",
        cx: 797.1,
        cy: 299.2,
        r: 5,
        transform: "matrix(1,0 0 1 752.3 756.45)",
        name: "Нагатинская",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st25",
        cx: 753.1,
        cy: 229.5,
        r: 5,
        transform: "matrix(1,0 0 1 768.7 781.5)",
        name: "Нагорная",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st25",
        cx: 753.1,
        cy: 207.2,
        r: 5,
        transform: "matrix(1,0 0 1 746.3 799.5)",
        name: "Нахимовский проспект",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st25",
        cx: 753.1,
        cy: 185.3,
        r: 5,
        transform: "matrix(1,0 0 1 728.5 840.5)",
        name: "Севастопольская",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st25",
        cx: 753.1,
        cy: 164.8,
        r: 5,
        transform: "matrix(1,0 0 1 744.212 857)",
        name: "Чертановская",
        text: "FoxText"
      },
      {
        id: "s0320",
        class: "st25",
        cx: 753.1,
        cy: 142.7,
        r: 5,
        transform: "matrix(1,0 0 1 780.7 874.1)",
        name: "Южная",
        text: "FoxText"
      },
      {
        id: "s0321",
        class: "st25",
        cx: 753.1,
        cy: 106,
        r: 5,
        transform: "matrix(1,0 0 1 765.7787 893.5)",
        name: "Пражская",
        text: "FoxText"
      },
      {
        id: "s0322",
        class: "st25",
        cx: 753.1,
        cy: 89.8,
        r: 5,
        transform: "matrix(1,0 0 1 765.7787 911.8004)",
        name: "Улица\nАкадемика\nЯнгеля",
        text: "FoxText"
      },
      {
        id: "s0323",
        class: "st25",
        cx: 753.1,
        cy: 71.8,
        r: 5,
        transform: "matrix(1,0 0 1 783.5 945.1)",
        name: "Анино",
        text: "FoxText"
      },
      {
        id: "s0324",
        class: "st25",
        cx: 753.1,
        cy: 54.1,
        r: 5,
        transform: "matrix(1,0 0 1 805.2 978.5)",
        name: "Бульвар Дмитрия Донского",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Небесная",
    ways: [
      {
        id: "w0300",
        x: 752.8,
        y: 940.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -453.3328 813.2352)",
        class: "st11",
        width: 4.4,
        height: 26.1
      },
      {
        id: "w0301",
        x: 773.1,
        y: 958.5,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -461.713 833.5281)",
        class: "st11",
        width: 4.4,
        height: 31.2
      },
      {id: "w0302", x: 783.5, y: 983.6, class: "st11", width: 4.4, height: 19.1},
      {id: "w0303", x: 783.5, y: 1002.8, class: "st11", width: 4.4, height: 17.5},
      {id: "w0304", x: 783.5, y: 1020.3, class: "st11", width: 4.4, height: 18.4},
      {id: "w0305", x: 783.5, y: 1038.7, class: "st11", width: 4.4, height: 19.1},
    ],
    stations: [
      {
        id: "s0300",
        class: "st28",
        cx: 784.3,
        cy: 983.2,
        r: 5,
        transform: "matrix(1,0 0 1 650 950.1)",
        name: "Битцевский парк",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st28",
        cx: 763.7,
        cy: 962.5,
        r: 5,
        transform: "matrix(1,0 0 1 677.8 964.6219)",
        name: "Лесопарковая",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st28",
        cx: 746.3,
        cy: 945.1,
        r: 5,
        transform: "matrix(1,0 0 1 646.5 986.6)",
        name: "Улица Старокачаловская",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st28",
        cx: 785.7,
        cy: 1002.8,
        r: 5,
        transform: "matrix(1,0 0 1 670 1004.7)",
        name: "Улица Скобелевская",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st28",
        cx: 785.7,
        cy: 1020.7,
        r: 5,
        transform: "matrix(1,0 0 1 631.1202 1024)",
        name: "Бульвар Адмирала Ушакова",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st28",
        cx: 785.7,
        cy: 1038,
        r: 5,
        transform: "matrix(1,0 0 1 690 1040.667)",
        name: "Улица Горчакова",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st28",
        cx: 785.7,
        cy: 1055.7,
        r: 5,
        transform: "matrix(1,0 0 1 690 1059.333)",
        name: "Бунинская аллея",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Бирюзовая",
    ways: [
      {
        id: "w0300",
        x: 826.1,
        y: 813.7,
        transform: "matrix(0.9622 -0.2722 0.2722 0.9622 -189.8571 263.1454)",
        class: "st12",
        width: 54.9,
        height: 4.4
      },
      {
        id: "w0301",
        x: 878.3,
        y: 796.3,
        transform: "matrix(0.9622 -0.2722 0.2722 0.9622 -182.7891 279.2967)",
        class: "st12",
        width: 74,
        height: 4.4
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st29",
        cx: 826.3,
        cy: 823.7,
        r: 5,
        transform: "matrix(1,0 0 1 763.7 825.5)",
        name: "Каховская",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st29",
        cx: 879.7,
        cy: 808.5,
        r: 5,
        transform: "matrix(1,0 0 1 887.5 818.4)",
        name: "Варшавская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st29",
        cx: 950.9,
        cy: 788.3,
        r: 5,
        transform: "matrix(1,0 0 1 883.5 784.3)",
        name: "Каширская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Фиолетовая",
    ways: [
      {id: "w0300", x: 546.6, y: 53.9, class: "st8", width: 4.4, height: 18.5},
      {id: "w0301", x: 546.6, y: 72.3, class: "st8", width: 4.4, height: 18.5},
      {id: "w0302", x: 546.6, y: 90.8, class: "st8", width: 4.4, height: 18.5},
      {id: "w0303", x: 546.6, y: 109.2, class: "st8", width: 4.4, height: 16.3},
      {id: "w0304", x: 546.6, y: 125.5, class: "st8", width: 4.4, height: 120},
      {id: "w0305", x: 662.7, y: 316.8, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -59.3513 575.389)",  class: "st8", width: 4.4, height: 85.1},
      {id: "w0306", x: 693.5, y: 386.6, class: "st8", width: 123.1, height: 4.4},
      {id: "w0306_1", x: 662.7, y: 240, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -59.3284 575.3622)",
        class: "st8", width: 4.4, height: 70},
      {id: "w0307", x: 878.7, y: 360.8, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -63.1273 755.91)",  class: "st8", width: 4.4, height: 186.7},
      {id: "w0308", x: 973.3, y: 507.8, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -102.3115 850.5038)",  class: "st8", width: 4.4, height: 81.9},
      {id: "w0309", x: 1014.8, y: 572.2, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -119.5576 892.0306)",  class: "st8", width: 4.4, height: 36.3},
      {id: "w0310", x: 1049, y: 594, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -133.6954 926.2051)",  class: "st8", width: 4.4, height: 61},
      {id: "w0311", x: 1079.9, y: 642, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -146.438 957.0814)",  class: "st8", width: 4.4, height: 26.6},
      {id: "w0312", x: 1097.4, y: 661.3, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -153.7714 974.6255)",  class: "st8", width: 4.4, height: 23.3},
      {id: "w0313", x: 528.4, y: 273.4, class: "st8", width: 53.8, height: 4.4},
      {id: "w0314", x: 519.9, y: 258.3, transform: "matrix(0.5301 -0.8479 0.8479 0.5301 32.317 579.3754)",  class: "st8", width: 38.1, height: 4.4},
      {id: "w0315", x: 1105, y: 679.6, class: "st8", width: 4.4, height: 21.6},
      {id: "w0316", x: 1105, y: 701.2, class: "st8", width: 4.4, height: 18.5},
      {id: "w0317", x: 1105, y: 719.6, class: "st8", width: 4.4, height: 18.5},
      {id: "w0318", x: 1105, y: 738, class: "st8", width: 4.4, height: 18.5},
    ],
    stations: [
      {id: "s0300", class: "st26", cx: 548.8, cy: 53, r: 5, transform: "matrix(1,0 0 1 468.9001 56.8002)", name: "Планетарная", text: "FoxText"},
      {id: "s0301", class: "st26", cx: 548.8, cy: 72.3, r: 5, transform: "matrix(1,0 0 1 469.9 74.8)", name: "Сходненская", text: "FoxText"},
      {id: "s0302", class: "st26", cx: 548.8, cy: 89.8, r: 5, transform: "matrix(1,0 0 1 479.9 93.8)", name: "Тушинская", text: "FoxText"},
      {id: "s0303", class: "st26", cx: 548.8, cy: 108, r: 5, transform: "matrix(1,0 0 1 492.5667 111.0002)", name: "Спартак", text: "FoxText"},
      {id: "s0304", class: "st26", cx: 548.8, cy: 125.5, r: 5, transform: "matrix(1,0 0 1 479.5 129.7)", name: "Щукинская", text: "FoxText"},
      {id: "s0305", class: "st26", cx: 549.3, cy: 243.8, r: 5, transform: "matrix(1,0 0 1 558.6665 248.8)", name: "Октябрьское поле", text: "FoxText"},
      {id: "s0306", class: "st26", cx: 529.6, cy: 275.7, r: 5, transform: "matrix(1,0 0 1 527.1 294.2)", name: "Полежаевская", text: "FoxText"},
      {id: "s0307", class: "st26", cx: 581.2, cy: 275.7, r: 5, transform: "matrix(1,0 0 1 578.6166 267.4551)", name: "Беговая", text: "FoxText"},
      {id: "s0308", class: "st26", cx: 633.6, cy: 328.1, r: 5, transform: "matrix(1,0 0 1 615.6924 306.8)", name: "Улица 1905 года", text: "FoxText"},
      {id: "s0309", class: "st26", cx: 693.4, cy: 388.8, r: 5, transform: "matrix(1,0 0 1 644.2 333)", name: "Баррикадная", text: "FoxText"},
      {id: "s0310", class: "st26", cx: 815.5, cy: 388.8, r: 5, transform: "matrix(1,0 0 1 620.4 391.5)", name: "Пушкинская", text: "FoxText"},
      {id: "s0311", class: "st26", cx: 871.1, cy: 444.4, r: 5, transform: "matrix(1,0 0 1 824.4 392.5)", name: "Кузнецкий мост", text: "FoxText"},
      {id: "s0312", class: "st26", cx: 946.5, cy: 519.8, r: 5, transform: "matrix(1,0 0 1 881.0875 456.8001)", name: "Китай-город", text: "FoxText"},
      {id: "s0313", class: "st26", cx: 1004.2, cy: 577.5, r: 5, transform: "matrix(1,0 0 1 887.5 529.3)", name: "Таганская", text: "FoxText"},
      {id: "s0314", class: "st26", cx: 1029.3, cy: 602.6, r: 5, transform: "matrix(1,0 0 1 1014 581.667)", name: "Пролетарская", text: "FoxText"},
      {id: "s0315", class: "st26", cx: 1073, cy: 646.3, r: 5, transform: "matrix(1,0 0 1 1040.6666 605.6005)", name: "Волгоградский проспект", text: "FoxText"},
      {id: "s0316", class: "st26", cx: 1090.6, cy: 663.9, r: 5, transform: "matrix(1,0 0 1 1084.5 649.8)", name: "Текстильщики", text: "FoxText"},
      {id: "s0317", class: "st26", cx: 1107.2, cy: 680.5, r: 5, transform: "matrix(1,0 0 1 1102 665.3002)", name: "Кузьмики", text: "FoxText"},
      {id: "s0318", class: "st26", cx: 1107.2, cy: 701.2, r: 5, transform: "matrix(1,0 0 1 1119.333 684.9035)", name: "Рязанский проспект", text: "FoxText"},
      {id: "s0319", class: "st26", cx: 1107.2, cy: 719.6, r: 5, transform: "matrix(1,0 0 1 1119.333 706.2)", name: "Выхино", text: "FoxText"},
      {id: "s0320", class: "st26", cx: 1107.2, cy: 737, r: 5, transform: "matrix(1,0 0 1 1119.333 723.9)", name: "Лермонтовский проспект", text: "FoxText"},
      {id: "s0321", class: "st26", cx: 1107.2, cy: 754.5, r: 5, transform: "matrix(1,0 0 1 1119.333 741.4)", name: "Жулебино", text: "FoxText"},
      {id: "s0322", class: "st26", cx: 607.8, cy: 303, r: 5, transform: "matrix(1,0 0 1 1119.333 759.5)", name: "Котельники", text: "FoxText"},
    ]
  }
];

const unactive_metro = [
  {
    name: "Кольцо",
    ways: [{ is_circle:true, class:"st10 unactive", d:"M712,605.6c22.9,9.7,48.1,15.1,74.5,15.1c13.6,0,26.9-1.4,39.7-4.2"},
      { is_circle:true, class:"st10 unactive", d:"M597.8,401.1c-1.4,9.4-2.2,19-2.2,28.7c0,49.4,18.8,94.4,49.6,128.3"},
      { is_circle:true, class:"st10 unactive", d:"M645.3,558.2c18.4,20.3,41.1,36.5,66.7,47.4"},
      { is_circle:true, class:"st10 unactive", d:"M826.2,616.5c31-6.6,59.2-20.6,82.6-40.2"},
      { is_circle:true, class:"st10 unactive", d:"M908.8,576.3c14.4-12,27-26.1,37.3-41.9"},
      { is_circle:true, class:"st10 unactive", d:"M946.1,534.4c15.8-24.1,26.3-52,29.9-82"},
      { is_circle:true, class:"st10 unactive", d:"M976,452.4c0.9-7.4,1.3-15,1.3-22.6c0-48.8-18.3-93.4-48.5-127.1"},
      { is_circle:true, class:"st10 unactive", d:"M633.8,315.4c-18.5,24.6-31.2,53.9-36,85.8"},
      { is_circle:true, class:"st10 unactive", d:"M928.8,302.7c-16.3-18.2-36-33.3-58.1-44.2"},
      { is_circle:true, class:"st10 unactive", d:"M870.7,258.6c-25.4-12.5-54-19.6-84.2-19.6c-11.4,0-22.5,1-33.3,2.9"},
      { is_circle:true, class:"st10 unactive", d:"M692.9,263.5c-23.1,13-43.2,30.7-59.1,51.9"},
      { is_circle:true, class:"st10 unactive", d:"M753.2,241.9c-21.5,3.8-41.8,11.2-60.2,21.6"}
    ],
    stations: [
      {id: "s0300", class: "st30 unactive_station", cx: 753.4, cy: 241.2, r: 5, transform: "matrix(1,0 0 1 938.5 301.0061)", name: "Комсомольская", text: "FoxText"},
      {id: "s0301", class: "st30 unactive_station", cx: 871.1, cy: 257.9, r: 5, transform: "matrix(1,0 0 1 988.9 448)", name: "Курская", text: "FoxText"},
      {id: "s0302", class: "st30 unactive_station", cx: 929.2, cy: 301.6, r: 5, transform: "matrix(1,0 0 1 887.5 529.3)", name: "Таганская", text: "FoxText"},
      {id: "s0303", class: "st30 unactive_station", cx: 977.3, cy: 451.2, r: 5, transform: "matrix(1,0 0 1 917.5 588.6674)", name: "Павелецкая", text: "FoxText"},
      {id: "s0304", class: "st30 unactive_station", cx: 946.8, cy: 532.7, r: 5, transform: "matrix(1,0 0 1 836.6297 620.7003)", name: "Добрынинская", text: "FoxText"},
      {id: "s0305", class: "st30 unactive_station", cx: 908.4, cy: 577.5, r: 5, transform: "matrix(1,0 0 1 637.42 614.15)", name: "Октябрьская", text: "FoxText"},
      {id: "s0306", class: "st30 unactive_station", cx: 826.5, cy: 617, r: 5, transform: "matrix(1,0 0 1 556.7998 568.8002)", name: "Парк культуры", text: "FoxText"},
      {id: "s0307", class: "st30 unactive_station", cx: 712.3, cy: 605.6, r: 5, transform: "matrix(1,0 0 1 540.5203 405.3842)", name: "Киевская", text: "FoxText"},
      {id: "s0308", class: "st30 unactive_station", cx: 645.7, cy: 558.5, r: 5, transform: "matrix(1,0 0 1 644 320)", name: "Краснопресненская", text: "FoxText"},
      {id: "s0309", class: "st30 unactive_station", cx: 597.8, cy: 401.9, r: 5, transform: "matrix(1,0 0 1 702.5 273.4501)", name: "Белорусская", text: "FoxText"},
      {id: "s0310", class: "st30 unactive_station", cx: 633.6, cy: 316.1, r: 5, transform: "matrix(1,0 0 1 656.9998 245.3)", name: "Новослободская", text: "FoxText"},
      {id: "s0311", class: "st30 unactive_station", cx: 693.5, cy: 263.1, r: 5, transform: "matrix(1,0 0 1 877.6042 258.1002)", name: "Проспект мира", text: "FoxText"},
    ]
  },
  {
    name: "МЦК",
    ways:[		{is_circle: true, class: "st13 unactive", d: "M727.8,124.7c-7.8,1.5-15.6,3.3-23.2,5.4"},
      {is_circle: true, class: "st13 unactive", d: "M753.1,120.9c-8.5,0.9-16.9,2.2-25.3,3.8"},
      {is_circle: true, class: "st13 unactive", d: "M704.7,130.1c-8.4,2.3-16.7,5-24.8,7.9"},
      {is_circle: true, class: "st13 unactive", d: "M568.2,209.2c-10.9,10.8-21,22.3-30.1,34.6"},
      {is_circle: true, class: "st13 unactive", d: "M870,130.1c-26.4-7.2-54.1-11.1-82.7-11.1c-11.5,0-22.9,0.6-34.2,1.9"},
      {is_circle: true, class: "st13 unactive", d: "M679.8,138c-13.2,4.9-26.1,10.6-38.4,17.2"},
      {is_circle: true, class: "st13 unactive", d: "M538,243.8c-3.8,5.1-7.4,10.3-10.9,15.6"},
      {is_circle: true, class: "st13 unactive", d: "M641.4,155.2c-27,14.4-51.7,32.6-73.3,54"},
      {is_circle: true, class: "st13 unactive", d: "M1078.8,321c-14.1-37.5-35.1-71.5-61.6-100.6"},
      {is_circle: true, class: "st13 unactive", d: "M1017.1,220.4c-6.6-7.2-13.5-14.1-20.8-20.7"},
      {is_circle: true, class: "st13 unactive", d: "M1092.9,371.5c-3.3-17.4-8.1-34.3-14.2-50.5"},
      {is_circle: true, class: "st13 unactive", d: "M996.3,199.7c-8.9-8.1-18.3-15.6-28.1-22.7"},
      {is_circle: true, class: "st13 unactive", d: "M968.3,177c-9-6.5-18.4-12.5-28.2-18"},
      {is_circle: true, class: "st13 unactive", d: "M940.1,159.1c-21.9-12.3-45.4-22.1-70.1-28.9"},
      {is_circle: true, class: "st13 unactive", d: "M1092.4,492c4-20,6.1-40.6,6.1-61.7c0-20.1-1.9-39.7-5.6-58.7"},
      {is_circle: true, class: "st13 unactive", d: "M527.1,259.4c-3.5,5.3-6.8,10.7-10,16.2"},
      {is_circle: true, class: "st13 unactive", d: "M952.7,693.9c10.6-6.7,20.7-13.9,30.4-21.8"},
      {is_circle: true, class: "st13 unactive", d: "M903.9,718.9c17.1-6.9,33.4-15.3,48.8-25"},
      {is_circle: true, class: "st13 unactive", d: "M983.2,672.1c16-13,30.8-27.6,44-43.5"},
      {is_circle: true, class: "st13 unactive", d: "M1084.5,522.8c3.1-10.1,5.8-20.4,7.9-30.9"},
      {is_circle: true, class: "st13 unactive", d: "M1075.5,547.9c3.3-8.2,6.4-16.5,9-25.1"},
      {is_circle: true, class: "st13 unactive", d: "M1027.1,628.6c20-24.1,36.3-51.3,48.4-80.7"},
      {is_circle: true, class: "st13 unactive", d: "M826.4,739.1c27.1-3.4,53.1-10.3,77.5-20.2"},
      {is_circle: true, class: "st13 unactive", d: "M480.8,375.7c-3.1,17.7-4.8,35.9-4.8,54.5c0,22.7,2.4,44.7,7,66"},
      {is_circle: true, class: "st13 unactive", d: "M784,741.5c1.1,0,2.2,0,3.2,0c13.3,0,26.4-0.8,39.2-2.4"},
      {is_circle: true, class: "st13 unactive", d: "M517.1,275.6c-8.3,14.5-15.5,29.8-21.5,45.7"},
      {is_circle: true, class: "st13 unactive", d: "M495.6,321.2c-6.5,17.5-11.6,35.7-14.9,54.5"},
      {is_circle: true, class: "st13 unactive", d: "M712.6,732.5c22.9,5.6,46.8,8.7,71.4,9"},
      {is_circle: true, class: "st13 unactive", d: "M562.5,645.5c40.2,41.9,91.9,72.6,150.2,87"},
      {is_circle: true, class: "st13 unactive", d: "M483,496.3c12.4,57.2,40.4,108.5,79.4,149.2"},
    ],
    stations: [
      {id: "s0300", class: "st31 unactive_station", cx: 727.8, cy: 124.7, r: 5, transform: "matrix(1,0 0 1 948.5489 159)", name: "Росткино", text: "FoxText"},
      {id: "s0301", class: "st31 unactive_station", cx: 753.1, cy: 120.9, r: 5, transform: "matrix(1,0 0 1 978.5 180.3)", name: "Белокаменская", text: "FoxText"},
      {id: "s0302", class: "st31 unactive_station", cx: 871.1, cy: 130.1, r: 5, transform: "matrix(1,0 0 1 1025.724 220.7)", name: "Локомотив", text: "FoxText"},
      {id: "s0303", class: "st31 unactive_station", cx: 940.1, cy: 159.1, r: 5, transform: "matrix(1,0 0 1 1091.1798 326)", name: "Измайлово", text: "FoxText"},
      {id: "s0304", class: "st31 unactive_station", cx: 969.2, cy: 177, r: 5, transform: "matrix(1,0 0 1 1103.3837 377.55)", name: "Соколиная гора", text: "FoxText"},
      {id: "s0305", class: "st31 unactive_station", cx: 996.3, cy: 199.7, r: 5, transform: "matrix(1,0 0 1 1105.8833 457.3674)", name: "Шоссе Энтузиастов", text: "FoxText"},
      {id: "s0306", class: "st31 unactive_station", cx: 1015.3, cy: 218.3, r: 5, transform: "matrix(1,0 0 1 1103.3837 496.8992)", name: "Андроновка", text: "FoxText"},
      {id: "s0307", class: "st31 unactive_station", cx: 1079.7, cy: 321, r: 5, transform: "matrix(1,0 0 1 1092.7571 527.8327)", name: "Нижегородская", text: "FoxText"},
      {id: "s0308", class: "st31 unactive_station", cx: 1097, cy: 459.8, r: 5, transform: "matrix(1,0 0 1 1085.3167 552.0327)", name: "Новохохловская", text: "FoxText"},
      {id: "s0309", class: "st31 unactive_station", cx: 1084.5, cy: 521.6, r: 5, transform: "matrix(1,0 0 1 1037.5 633.1)", name: "Угрешская", text: "FoxText"},
      {id: "s0310", class: "st31 unactive_station", cx: 1092.4, cy: 492, r: 5, transform: "matrix(1,0 0 1 994.0969 668.9002)", name: "Дубровка", text: "FoxText"},
      {id: "s0311", class: "st31 unactive_station", cx: 1074.7, cy: 547.9, r: 5, transform: "matrix(1,0 0 1 1076.4712 480.8055)", name: "Автозаводская ", text: "FoxText"},
      {id: "s0312", class: "st31 unactive_station", cx: 1027.1, cy: 628.6, r: 5, transform: "matrix(1,0 0 1 914.3335 723.333)", name: "ЗИЛ", text: "FoxText"},
      {id: "s0313", class: "st31 unactive_station", cx: 984, cy: 671.9, r: 5, transform: "matrix(1,0 0 1 832.6 734.5)", name: "Верхние котлы", text: "FoxText"},
      {id: "s0314", class: "st31 unactive_station", cx: 950.9, cy: 694.5, r: 5, transform: "matrix(1,0 0 1 759.6667 734.1)", name: "Крымская", text: "FoxText"},
      {id: "s0315", class: "st31 unactive_station", cx: 903.9, cy: 718.9, r: 5, transform: "matrix(1,0 0 1 606.8372 734.3)", name: "Площадь Гагарина", text: "FoxText"},
      {id: "s0316", class: "st31 unactive_station", cx: 826.4, cy: 739.1, r: 5, transform: "matrix(1,0 0 1 506.7399 647.6094)", name: "Лужники", text: "FoxText"},
      {id: "s0317", class: "st31 unactive_station", cx: 784, cy: 741.5, r: 5, transform: "matrix(1,0 0 1 491.3335 491.3335)", name: "Кутузовская", text: "FoxText"},
      {id: "s0318", class: "st31 unactive_station", cx: 712.3, cy: 732.5, r: 5, transform: "matrix(1,0 0 1 392.6667 376.0002)", name: "Деловой центр", text: "FoxText"},
      {id: "s0319", class: "st31 unactive_station", cx: 561.8, cy: 645, r: 5, transform: "matrix(1,0 0 1 432.3332 326.6665)", name: "Шелепиха", text: "FoxText"},
      {id: "s0320", class: "st31 unactive_station", cx: 481.5, cy: 493.5, r: 5, transform: "matrix(1,0 0 1 450.3332 279.111)", name: "Хорошёво", text: "FoxText"},
      {id: "s0321", class: "st31 unactive_station", cx: 481.6, cy: 373.1, r: 5, transform: "matrix(1,0 0 1 488.15 261.4098)", name: "Зорге", text: "FoxText"},
      {id: "s0322", class: "st31 unactive_station", cx: 495.6, cy: 322.6, r: 5, transform: "matrix(1,0 0 1 452.333 246.0001)", name: "Панфиловская", text: "FoxText"},
      {id: "s0323", class: "st31 unactive_station", cx: 517.1, cy: 275.6, r: 5, transform: "matrix(1,0 0 1 501.6 212.9)", name: "Стрешнево", text: "FoxText"},
      {id: "s0324", class: "st31 unactive_station", cx: 527.1, cy: 259.4, r: 5, transform: "matrix(1,0 0 1 572.2 159)", name: "Балтийская", text: "FoxText"},
      {id: "s0325", class: "st31 unactive_station", cx: 538, cy: 243.8, r: 5, transform: "matrix(1,0 0 1 679.8 157.1424)", name: "Коптево", text: "FoxText"},
      {id: "s0326", class: "st31 unactive_station", cx: 568.2, cy: 209.2, r: 5, transform: "matrix(1,0 0 1 651.5 127.4001)", name: "Лихборы", text: "FoxText"},
      {id: "s0327", class: "st31 unactive_station", cx: 641.4, cy: 155.2, r: 5, transform: "matrix(1,0 0 1 691.1561 115.9001)", name: "Окружная", text: "FoxText"},
      {id: "s0328", class: "st31 unactive_station", cx: 679.8, cy: 138, r: 5, transform: "matrix(1,0 0 1 764 118.4002)", name: "Владыкино", text: "FoxText"},
      {id: "s0329", class: "st31 unactive_station", cx: 704.7, cy: 130.1, r: 5, transform: "matrix(1,0 0 1 880.6041 129.6998)", name: "Ботанический сад", text: "FoxText"},
    ]
  },
  {
    name: "Салатовая",
    ways: [
      {
        id: "w0300",
        x: 773.1,
        y: 138.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 122.008 591.7263)",
        class: "st15",
        width: 4.4,
        height: 19.8
      },
      {
        id: "w0301",
        x: 824.2,
        y: 250.2,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 19.7242 676.4316)",
        class: "st15",
        width: 4.4,
        height: 128.4
      },
      {
        id: "w0302",
        x: 922.3,
        y: 338,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -20.9662 774.5541)",
        class: "st15",
        width: 4.4,
        height: 149.2
      },
      {
        id: "w0303",
        x: 988.8,
        y: 459.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -48.4828 841.0389)",
        class: "st15",
        width: 4.4,
        height: 39.3
      },
      {id: "w0304", x: 779.4, y: 154, class: "st15", width: 4.4, height: 11.1},
      {id: "w0305", x: 779.4, y: 165.1, class: "st15", width: 4.4, height: 20.6},
      {id: "w0306", x: 779.4, y: 185.7, class: "st15", width: 4.4, height: 20.6},
      {id: "w0307", x: 779.4, y: 206.3, class: "st15", width: 4.4, height: 22.5},
      {id: "w0308", x: 779.4, y: 228.8, class: "st15", width: 4.4, height: 41.7},
      {id: "w0309", x: 1002, y: 491.3, class: "st15", width: 4.4, height: 72.7},
      {id: "w0310", x: 1002, y: 563.8, class: "st15", width: 4.4, height: 50.8},
      {id: "w0311", x: 981.7, y: 633.1, class: "st15", width: 4.4, height: 26.4},
      {id: "w0312", x: 981.7, y: 659.5, class: "st15", width: 4.4, height: 91.9},
      {id: "w0313", x: 981.7, y: 751.4, class: "st15", width: 4.4, height: 18.1},
      {id: "w0314", x: 981.7, y: 769.6, class: "st15", width: 4.4, height: 18},
      {id: "w0315", x: 981.7, y: 787.6, class: "st15", width: 4.4, height: 18},
      {id: "w0316", x: 981.7, y: 805.6, class: "st15", width: 4.4, height: 17.8},
      {id: "w0317", x: 981.7, y: 823.4, class: "st15", width: 4.4, height: 18.1},
      {id: "w0318", x: 981.6, y: 841.4, class: "st15", width: 4.4, height: 16.7},
      {id: "w0319", x: 981.6, y: 857.9, class: "st15", width: 4.4, height: 19.3},
      {id: "w0320", x: 981.6, y: 877.2, class: "st15", width: 4.4, height: 17.7},
      {
        id: "w0321",
        x: 978.8,
        y: 621.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -150.0053 885.671)",
        class: "st15",
        width: 30.6,
        height: 4.4
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st23",
        cx: 769,
        cy: 142.7,
        r: 5,
        transform: "matrix(1,0 0 1 779 145)",
        name: "Петровско-Разумовская",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st23",
        cx: 781.6,
        cy: 165.1,
        r: 5,
        transform: "matrix(1,0 0 1 793 170.1)",
        name: "Фонвизинская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st23",
        cx: 781.4,
        cy: 185.7,
        r: 5,
        transform: "matrix(1,0 0 1 793 190.3)",
        name: "Бутырская",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st23",
        cx: 781.6,
        cy: 207.2,
        r: 5,
        transform: "matrix(1,0 0 1 793 209.05)",
        name: "Марьина Роща",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st23",
        cx: 781.4,
        cy: 228.7,
        r: 5,
        transform: "matrix(1,0 0 1 793 230)",
        name: "Достоевская",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st23",
        cx: 811.3,
        cy: 299.3,
        r: 5,
        transform: "matrix(1,0 0 1 820.5001 302.199)",
        name: "Трубная",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st23",
        cx: 871.1,
        cy: 359.2,
        r: 5,
        transform: "matrix(1,0 0 1 883.0873 363.9)",
        name: "Сретенский бульвар",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st23",
        cx: 977.3,
        cy: 465.4,
        r: 5,
        transform: "matrix(1,0 0 1 986.0996 470.5999)",
        name: "Чкаловская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st23",
        cx: 1004,
        cy: 492,
        r: 5,
        transform: "matrix(1,0 0 1 1016.1015 494.9921)",
        name: "Римская",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st23",
        cx: 1004.2,
        cy: 563.8,
        r: 5,
        transform: "matrix(1,0 0 1 1014 568.8)",
        name: "Крестьянская застава",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st23",
        cx: 983.9,
        cy: 658.1,
        r: 5,
        transform: "matrix(1,0 0 1 994.0969 668.9002)",
        name: "Дубровка",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st23",
        cx: 983.9,
        cy: 751.9,
        r: 5,
        transform: "matrix(1,0 0 1 997 755)",
        name: "Кожуховская",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st23",
        cx: 983.9,
        cy: 769.2,
        r: 5,
        transform: "matrix(1,0 0 1 997 774.1)",
        name: "Печатники",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st23",
        cx: 983.9,
        cy: 787.6,
        r: 5,
        transform: "matrix(1,0 0 1 997 792.1)",
        name: "Волжская",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st23",
        cx: 983.9,
        cy: 804.3,
        r: 5,
        transform: "matrix(1,0 0 1 997 808.5)",
        name: "Люблино",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st23",
        cx: 983.8,
        cy: 823.4,
        r: 5,
        transform: "matrix(1,0 0 1 997.0002 826.2996)",
        name: "Братиславская",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st23",
        cx: 983.8,
        cy: 840.6,
        r: 5,
        transform: "matrix(1,0 0 1 997 844.5)",
        name: "Марьино",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st23",
        cx: 983.9,
        cy: 857.9,
        r: 5,
        transform: "matrix(1,0 0 1 997 861.9)",
        name: "Борисово",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st23",
        cx: 983.8,
        cy: 876.1,
        r: 5,
        transform: "matrix(1,0 0 1 997 880.1)",
        name: "Шипиловская",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st23",
        cx: 983.9,
        cy: 894.4,
        r: 5,
        transform: "matrix(1,0 0 1 997 897.6)",
        name: "Зябликово",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Желтая",
    ways: [
      {
        id: "w0300",
        x: 1129.4,
        y: 399,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 50.8637 925.2008)",
        class: "st7",
        width: 25.7,
        height: 4.4
      },
      {
        id: "w0301",
        x: 1111.3,
        y: 417.1,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 32.7668 917.7007)",
        class: "st7",
        width: 25.7,
        height: 4.4
      },
      {
        id: "w0302",
        x: 1093,
        y: 435.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 14.5488 910.0743)",
        class: "st7",
        width: 25.7,
        height: 4.4
      },
      {
        id: "w0303",
        x: 1060.5,
        y: 459.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -9.5441 900.1708)",
        class: "st7",
        width: 42.7,
        height: 4.4
      },
      {
        id: "w0304",
        x: 1029.6,
        y: 489.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -39.9536 887.5587)",
        class: "st7",
        width: 43.6,
        height: 4.4
      },
      {id: "w0305", x: 1004.2, y: 504.6, class: "st7", width: 33.3, height: 4.4},
      {id: "w0306", x: 946.9, y: 504.7, class: "st7", width: 57.4, height: 4.4},
      {id: "w0307", x: 838.3, y: 504.6, class: "st7", width: 108.5, height: 4.4},
      {id: "w0308", x: 365.4, y: 616.2, class: "st7", width: 4.4, height: 23.3},
      {id: "w0309", x: 365.4, y: 593.8, class: "st7", width: 4.4, height: 22.3},
      {id: "w0310", x: 365.4, y: 575.7, class: "st7", width: 4.4, height: 18.1},
      {
        id: "w0311",
        x: 359.9,
        y: 558.1,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -283.7477 435.5609)",
        class: "st7",
        width: 48,
        height: 4.4
      },
      {
        id: "w0312",
        x: 365.8,
        y: 456.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -182.3376 477.6006)",
        class: "st7",
        width: 239.1,
        height: 4.4
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st22",
        cx: 1150.9,
        cy: 392.5,
        r: 5,
        transform: "matrix(1,0 0 1 1016.1019 510.4073)",
        name: "Площадь Ильича",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st22",
        cx: 1133.7,
        cy: 409.7,
        r: 5,
        transform: "matrix(1,0 0 1 1076.4712 480.8055)",
        name: "Автозаводская ",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st22",
        cx: 1115.9,
        cy: 427.5,
        r: 5,
        transform: "matrix(1,0 0 1 1125.3336 431.4926)",
        name: "Перово",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st22",
        cx: 1097,
        cy: 446.5,
        r: 5,
        transform: "matrix(1,0 0 1 1105.8833 457.3674)",
        name: "Шоссе Энтузиастов",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st22",
        cx: 1066.6,
        cy: 476.8,
        r: 5,
        transform: "matrix(1,0 0 1 1143.1996 413.7115)",
        name: "Новогиреево",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st22",
        cx: 1004.2,
        cy: 506.9,
        r: 5,
        transform: "matrix(1,0 0 1 1160.3662 396.7115)",
        name: "Новокосино",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st22",
        cx: 946.5,
        cy: 506.9,
        r: 5,
        transform: "matrix(1,0 0 1 903.8998 499.4001)",
        name: "Марксистская",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st22",
        cx: 837.6,
        cy: 506.8,
        r: 5,
        transform: "matrix(1,0 0 1 748.4002 504.6001)",
        name: "Третьяковская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st22",
        cx: 367.6,
        cy: 639.4,
        r: 5,
        transform: "matrix(1,0 0 1 508.5717 373.9401)",
        name: "Деловой центр",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st22",
        cx: 367.6,
        cy: 616.2,
        r: 5,
        transform: "matrix(1,0 0 1 320.3849 538.6782)",
        name: "Парк Победы",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st22",
        cx: 367.7,
        cy: 593.8,
        r: 5,
        transform: "matrix(1,0 0 1 312.293 595)",
        name: "Минская",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st22",
        cx: 400.9,
        cy: 543.3,
        r: 5,
        transform: "matrix(1,0 0 1 223.4941 620)",
        name: "Ломоносовский проспект",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st22",
        cx: 568.4,
        cy: 375.2,
        r: 5,
        transform: "matrix(1,0 0 1 311.2046 643)",
        name: "Раменки",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Cиняя",
    ways: [
      {id: "w0300", x: 343.8, y: 234, class: "st2", width: 4.4, height: 17.8},
      {id: "w0301", x: 343.8, y: 251.8, class: "st3", width: 4.4, height: 17.8},
      {id: "w0302", x: 343.8, y: 269.6, class: "st3", width: 4.4, height: 17.8},
      {id: "w0303", x: 343.8, y: 287.3, class: "st3", width: 4.4, height: 19.5},
      {id: "w0304", x: 343.8, y: 305.7, class: "st3", width: 4.4, height: 17.8},
      {id: "w0305", x: 343.8, y: 323.5, class: "st3", width: 4.4, height: 17.8},
      {id: "w0306", x: 343.8, y: 341.3, class: "st3", width: 4.4, height: 17.8},
      {id: "w0307", x: 343.8, y: 359.1, class: "st3", width: 4.4, height: 42.9},
      {
        id: "w0308",
        x: 360.5,
        y: 491,
        transform: "matrix(0.6458 -0.7635 0.7635 0.6458 -263.9244 458.9495)",
        class: "st3",
        width: 4.4,
        height: 45.9
      },
      {id: "w0309", x: 343.8, y: 402, class: "st3", width: 4.4, height: 98.8},
      {id: "w0310", x: 378.9, y: 526.1, class: "st3", width: 22, height: 4.4},
      {
        id: "w0311",
        x: 438.7,
        y: 469.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -181.2467 505.6503)",
        class: "st3",
        width: 162.1,
        height: 4.4
      },
      {id: "w0312", x: 400.9, y: 526.1, class: "st3", width: 63, height: 4.4},
      {id: "w0313", x: 575.4, y: 412.7, class: "st3", width: 22.8, height: 4.4},
      {
        id: "w0314",
        x: 616.1,
        y: 405.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -127.1297 564.8688)",
        class: "st3",
        width: 4.4,
        height: 61
      },
      {
        id: "w0315",
        x: 664.7,
        y: 446.2,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -147.2501 613.4614)",
        class: "st3",
        width: 4.4,
        height: 76.6
      },
      {
        id: "w0316",
        x: 710.3,
        y: 488.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -130.0313 667.0617)",
        class: "st3",
        width: 59.8,
        height: 4.4
      },
      {id: "w0317", x: 692.5, y: 508.8, class: "st3", width: 28.1, height: 4.4},
      {id: "w0318", x: 759.8, y: 467.8, class: "st3", width: 16.3, height: 4.4},
      {
        id: "w0319",
        x: 1057.8,
        y: 343.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 68.8828 858.0978)",
        class: "st3",
        width: 24.9,
        height: 4.4
      },
      {
        id: "w0320",
        x: 1020.2,
        y: 369.6,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 42.9846 847.3681)",
        class: "st3",
        width: 48.3,
        height: 4.4
      },
      {
        id: "w0321",
        x: 1000.3,
        y: 397.9,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 14.7066 835.6744)",
        class: "st3",
        width: 31.6,
        height: 4.4
      },
      {
        id: "w0322",
        x: 972.8,
        y: 422.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -9.783 825.5518)",
        class: "st3",
        width: 37.7,
        height: 4.4
      },
      {id: "w0323", x: 776.1, y: 467.8, class: "st3", width: 171, height: 4.4},
      {
        id: "w0324",
        x: 938.8,
        y: 452.1,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -39.4845 813.2657)",
        class: "st3",
        width: 46.3,
        height: 4.4
      },
      {
        id: "w0325",
        x: 1076.9,
        y: 329.6,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 82.9835 863.9373)",
        class: "st3",
        width: 14.9,
        height: 4.4
      },
      {id: "w0326", x: 1086.8, y: 299.6, class: "st3", width: 4.4, height: 28.5},
      {id: "w0327", x: 1086.8, y: 280.9, class: "st3", width: 4.4, height: 18.7},
      {id: "w0328", x: 1086.8, y: 262.1, class: "st3", width: 4.4, height: 18.7},
    ],
    stations: [
      {
        id: "s0300",
        class: "st18",
        cx: 346,
        cy: 234,
        r: 5,
        transform: "matrix(1,0 0 1 240 236.9501)",
        name: "Пятницкое шоссе",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st18",
        cx: 345.7,
        cy: 250,
        r: 5,
        transform: "matrix(1,0 0 1 291 255.1501)",
        name: "Митино",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st18",
        cx: 345.7,
        cy: 269.3,
        r: 5,
        transform: "matrix(1,0 0 1 250 273.4501)",
        name: "Волоколамская",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st18",
        cx: 345.7,
        cy: 287,
        r: 5,
        transform: "matrix(1,0 0 1 277 290.8046)",
        name: "Мякинино",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st18",
        cx: 345.7,
        cy: 304.7,
        r: 5,
        transform: "matrix(1,0 0 1 282 308.5501)",
        name: "Строгино",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st18",
        cx: 346,
        cy: 322.3,
        r: 5,
        transform: "matrix(1,0 0 1 270 326.7501)",
        name: "Крылатское",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st18",
        cx: 346,
        cy: 340,
        r: 5,
        transform: "matrix(1,0 0 1 266 344.0501)",
        name: "Молодёжная",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st18",
        cx: 345.7,
        cy: 357.7,
        r: 5,
        transform: "matrix(1,0 0 1 274 368.1002)",
        name: "Кунцевская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st18",
        cx: 345.7,
        cy: 401.3,
        r: 5,
        transform: "matrix(1,0 0 1 229.5203 403.8342)",
        name: "Славянский бульвар",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st18",
        cx: 400.3,
        cy: 528,
        r: 5,
        transform: "matrix(1,0 0 1 320.3849 538.6782)",
        name: "Парк Победы",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st19",
        cx: 597.8,
        cy: 415,
        r: 5,
        transform: "matrix(1,0 0 1 540.5203 405.3842)",
        name: "Киевская",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st19",
        cx: 640.3,
        cy: 458.3,
        r: 5,
        transform: "matrix(1,0 0 1 569.9203 461.7342)",
        name: "Смоленская",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st19",
        cx: 693.7,
        cy: 511,
        r: 5,
        transform: "matrix(1,0 0 1 630.1202 513.3657)",
        name: "Арбатская",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st19",
        cx: 774.5,
        cy: 470.6,
        r: 5,
        transform: "matrix(1,0 0 1 769.5 486.8999)",
        name: "Площадь революции",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st19",
        cx: 977.3,
        cy: 438.9,
        r: 5,
        transform: "matrix(1,0 0 1 988.9 448)",
        name: "Курская",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st19",
        cx: 1005,
        cy: 411.7,
        r: 5,
        transform: "matrix(1,0 0 1 1017 417)",
        name: "Бауманская",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st19",
        cx: 1026.3,
        cy: 390,
        r: 5,
        transform: "matrix(1,0 0 1 1038 395)",
        name: "Электрозаводская",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st19",
        cx: 1061,
        cy: 354.7,
        r: 5,
        transform: "matrix(1,0 0 1 1073 360.3)",
        name: "Семёновская",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st19",
        cx: 1079.7,
        cy: 336.6,
        r: 5,
        transform: "matrix(1,0 0 1 1090 342)",
        name: "Партизанская",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st19",
        cx: 1089,
        cy: 263.7,
        r: 5,
        transform: "matrix(1,0 0 1 1102 303)",
        name: "Измайловская",
        text: "FoxText"
      },
      {
        id: "s0320",
        class: "st19",
        cx: 1089,
        cy: 281.3,
        r: 5,
        transform: "matrix(1,0 0 1 1103 285)",
        name: "Первомайская",
        text: "FoxText"
      },
      {
        id: "s0321",
        class: "st19",
        cx: 1089,
        cy: 299.7,
        r: 5,
        transform: "matrix(1,0 0 1 1103 268)",
        name: "Щёлковская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Оранжевая",
    ways: [
      {
        id: "w0300",
        x: 831.5,
        y: 474.6,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -86.6984 744.2601)",
        class: "st14",
        width: 47.1,
        height: 4.4
      },
      {
        id: "w0301",
        x: 685.3,
        y: 554.6,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -166.6857 711.1561)",
        class: "st14",
        width: 179.6,
        height: 4.4
      },
      {
        id: "w0302",
        x: 717.2,
        y: 894.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -429.7914 773.9983)",
        class: "st14",
        width: 4.4,
        height: 22
      },
      {
        id: "w0303",
        x: 734.9,
        y: 909.5,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -437.1229 791.6823)",
        class: "st14",
        width: 4.4,
        height: 28
      },
      {id: "w0304", x: 710.1, y: 876.9, class: "st14", width: 4.4, height: 22.7},
      {id: "w0305", x: 710.1, y: 854.6, class: "st14", width: 4.4, height: 22.3},
      {id: "w0306", x: 710.1, y: 832.9, class: "st14", width: 4.4, height: 21.7},
      {id: "w0307", x: 710.1, y: 810.1, class: "st14", width: 4.4, height: 22.8},
      {id: "w0308", x: 710.1, y: 788.6, class: "st14", width: 4.4, height: 21.5},
      {id: "w0309", x: 710.1, y: 766.2, class: "st14", width: 4.4, height: 22.4},
      {id: "w0310", x: 710.1, y: 746.8, class: "st14", width: 4.4, height: 19.4},
      {id: "w0311", x: 710.1, y: 670.3, class: "st14", width: 4.4, height: 76.4},
      {id: "w0312", x: 710.1, y: 618.8, class: "st14", width: 4.4, height: 51.5},
      {id: "w0313", x: 868.9, y: 333, class: "st14", width: 4.4, height: 128.7},
      {id: "w0314", x: 868.9, y: 279.6, class: "st14", width: 4.4, height: 53.4},
      {id: "w0315", x: 868.9, y: 246, class: "st14", width: 4.4, height: 33.6},
      {id: "w0316", x: 868.9, y: 194.7, class: "st14", width: 4.4, height: 51.3},
      {id: "w0317", x: 868.9, y: 174.8, class: "st14", width: 4.4, height: 19.9},
      {id: "w0318", x: 868.9, y: 154.8, class: "st14", width: 4.4, height: 19.9},
      {id: "w0319", x: 868.7, y: 117.9, class: "st14", width: 4.4, height: 36.9},
      {id: "w0320", x: 868.7, y: 89.8, class: "st14", width: 4.4, height: 28.2},
      {id: "w0321", x: 868.7, y: 71.8, class: "st14", width: 4.4, height: 18},
      {id: "w0322", x: 868.7, y: 54.1, class: "st14", width: 4.4, height: 17.7},
    ],
    stations: [
      {
        id: "s0300",
        class: "st24",
        cx: 871.1,
        cy: 54.1,
        r: 5,
        transform: "matrix(1.0907,0 0 1 881.5709 57.82)",
        name: "Медведково",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st24",
        cx: 870.9,
        cy: 71.8,
        r: 5,
        transform: "matrix(1.0907,0 0 1 880.6041 76.78)",
        name: "Бабушкинская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st24",
        cx: 871.1,
        cy: 88.5,
        r: 5,
        transform: "matrix(1,0 0 1 882.0873 93.5)",
        name: "Свиблово",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st24",
        cx: 871.1,
        cy: 118.4,
        r: 5,
        transform: "matrix(1,0 0 1 880.6041 129.6998)",
        name: "Ботанический сад",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st24",
        cx: 870.9,
        cy: 154.8,
        r: 5,
        transform: "matrix(1,0 0 1 880.6041 159)",
        name: "ВДНХ",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st24",
        cx: 871.1,
        cy: 173.9,
        r: 5,
        transform: "matrix(1,0 0 1 879.6041 178.9)",
        name: "Алексеевская",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st24",
        cx: 871.1,
        cy: 194.7,
        r: 5,
        transform: "matrix(1,0 0 1 881.5709 198.5001)",
        name: "Рижская",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st24",
        cx: 870.9,
        cy: 246.4,
        r: 5,
        transform: "matrix(1,0 0 1 877.6042 258.1002)",
        name: "Проспект мира",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st24",
        cx: 870.9,
        cy: 279.6,
        r: 5,
        transform: "matrix(1,0 0 1 796.2061 283.7)",
        name: "Сухаревская",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st24",
        cx: 871.1,
        cy: 333,
        r: 5,
        transform: "matrix(1,0 0 1 793 335.541)",
        name: "Тургеневская",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st24",
        cx: 871.1,
        cy: 458.6,
        r: 5,
        transform: "matrix(1,0 0 1 881.0875 456.8001)",
        name: "Китай-город",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st24",
        cx: 837.6,
        cy: 494.3,
        r: 5,
        transform: "matrix(1,0 0 1 748.4002 504.6001)",
        name: "Третьяковская",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st24",
        cx: 712.3,
        cy: 619.7,
        r: 5,
        transform: "matrix(1,0 0 1 637.42 614.15)",
        name: "Октябрьская",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st24",
        cx: 712.3,
        cy: 670.3,
        r: 5,
        transform: "matrix(1,0 0 1 633.0867 673.3002)",
        name: "Шаболовская",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st24",
        cx: 712.3,
        cy: 746.1,
        r: 5,
        transform: "matrix(1,0 0 1 593.9998 748.5)",
        name: "Ленинский проспект",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st24",
        cx: 712.3,
        cy: 766,
        r: 5,
        transform: "matrix(1,0 0 1 621.6665 769.333)",
        name: "Академическая",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st24",
        cx: 712.3,
        cy: 788.1,
        r: 5,
        transform: "matrix(1,0 0 1 630.1202 791.1)",
        name: "Профсоюзная",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st24",
        cx: 712.3,
        cy: 810.1,
        r: 5,
        transform: "matrix(1,0 0 1 605.6665 813.5)",
        name: "Новые Черёмушки",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st24",
        cx: 712.3,
        cy: 832.3,
        r: 5,
        transform: "matrix(1,0 0 1 646.5 835.55)",
        name: "Калужская",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st24",
        cx: 712.3,
        cy: 854.9,
        r: 5,
        transform: "matrix(1,0 0 1 660 857.9)",
        name: "Беляево",
        text: "FoxText"
      },
      {
        id: "s0320",
        class: "st24",
        cx: 712.3,
        cy: 876.9,
        r: 5,
        transform: "matrix(1,0 0 1 651.5 880.1)",
        name: "Коньково",
        text: "FoxText"
      },
      {
        id: "s0321",
        class: "st24",
        cx: 713.2,
        cy: 899.6,
        r: 5,
        transform: "matrix(1,0 0 1 640 902.65)",
        name: "Тёплый стан",
        text: "FoxText"
      },
      {
        id: "s0322",
        class: "st24",
        cx: 728.5,
        cy: 914.9,
        r: 5,
        transform: "matrix(1,0 0 1 677.8 919.9)",
        name: "Ясенево",
        text: "FoxText"
      },
      {
        id: "s0323",
        class: "st24",
        cx: 746.3,
        cy: 932.7,
        r: 5,
        transform: "matrix(1,0 0 1 650.5 937.7)",
        name: "Новоясеневская",
        text: "FoxText"
      },
      {
        id: "s0324",
        class: "st31",
        cx: 1094,
        cy: 373.9,
        r: 5,
        transform: "matrix(1,0 0 1 1037.5 633.1)",
        name: "Угрешская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Красная",
    ways: [
      {id: "w0300", x: 1007.6, y: 199.8, class: "st5", width: 4.4, height: 7.6},
      {
        id: "w0301",
        x: 995.6,
        y: 209.9,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 145.5436 774.4078)",
        class: "st5",
        width: 17.6,
        height: 4.4
      },
      {
        id: "w0302",
        x: 974.1,
        y: 226.1,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 129.3133 767.6923)",
        class: "st5",
        width: 28.2,
        height: 4.4
      },
      {
        id: "w0303",
        x: 960.4,
        y: 243.5,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 111.8532 760.523)",
        class: "st5",
        width: 20.9,
        height: 4.4
      },
      {
        id: "w0304",
        x: 943.6,
        y: 259.2,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 96.1347 754.1224)",
        class: "st5",
        width: 23.4,
        height: 4.4
      },
      {
        id: "w0305",
        x: 924.4,
        y: 276.9,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 78.39 746.8306)",
        class: "st5",
        width: 26.5,
        height: 4.4
      },
      {
        id: "w0306",
        x: 887.5,
        y: 303.1,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 52.1592 736.0795)",
        class: "st5",
        width: 48.2,
        height: 4.4
      },
      {
        id: "w0307",
        x: 866.8,
        y: 331.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 23.4926 724.2981)",
        class: "st5",
        width: 32.6,
        height: 4.4
      },
      {
        id: "w0308",
        x: 806.6,
        y: 370.2,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -15.0955 708.4741)",
        class: "st5",
        width: 76.3,
        height: 4.4
      },
      {
        id: "w0309",
        x: 765.4,
        y: 419.1,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -64.0693 688.4712)",
        class: "st5",
        width: 61.6,
        height: 4.4
      },
      {
        id: "w0310",
        x: 677.5,
        y: 481.2,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -126.3061 662.8729)",
        class: "st5",
        width: 113.6,
        height: 4.4
      },
      {
        id: "w0311",
        x: 667.6,
        y: 532.5,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -177.7136 641.8209)",
        class: "st5",
        width: 31.3,
        height: 4.4
      },
      {
        id: "w0312",
        x: 640.7,
        y: 556.8,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -202.0301 631.8729)",
        class: "st5",
        width: 36.9,
        height: 4.4
      },
      {
        id: "w0313",
        x: 596.6,
        y: 590.2,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -235.5259 618.0795)",
        class: "st5",
        width: 58.4,
        height: 4.4
      },
      {
        id: "w0314",
        x: 553.1,
        y: 632.5,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -277.9128 600.6985)",
        class: "st5",
        width: 61.2,
        height: 4.4
      },
      {
        id: "w0315",
        x: 539.2,
        y: 663.6,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -309.0492 587.9861)",
        class: "st5",
        width: 27.3,
        height: 4.4
      },
      {
        id: "w0316",
        x: 520.1,
        y: 682.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -328.2057 580.1346)",
        class: "st5",
        width: 27.4,
        height: 4.4
      },
      {
        id: "w0317",
        x: 505,
        y: 700.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -345.9434 572.8705)",
        class: "st5",
        width: 22.4,
        height: 4.4
      },
      {id: "w0318", x: 506.6, y: 709, class: "st5", width: 4.4, height: 24},
      {id: "w0319", x: 506.6, y: 733, class: "st5", width: 4.4, height: 18.3},
      {id: "w0320", x: 506.6, y: 751.3, class: "st5", width: 4.4, height: 18.3},
      {id: "w0321", x: 506.6, y: 769.7, class: "st5", width: 4.4, height: 18.3},
    ],
    stations: [
      {
        id: "s0300",
        class: "st20",
        cx: 1009.8,
        cy: 199.8,
        r: 5,
        transform: "matrix(1,0 0 1 1021.3 203.6)",
        name: "Бульвар Рокоссовского",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st20",
        cx: 998.1,
        cy: 218.3,
        r: 5,
        transform: "matrix(1,0 0 1 912.6668 220.7)",
        name: "Черкизовская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st20",
        cx: 978.5,
        cy: 238,
        r: 5,
        transform: "matrix(1,0 0 1 990.1915 243.6962)",
        name: "Преображенская площадь",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st20",
        cx: 962.3,
        cy: 254.3,
        r: 5,
        transform: "matrix(1,0 0 1 974.2 261.3694)",
        name: "Сокольники",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st20",
        cx: 943.5,
        cy: 273.2,
        r: 5,
        transform: "matrix(1,0 0 1 954.2 279.6)",
        name: "Красносельская",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st20",
        cx: 929,
        cy: 288.7,
        r: 5,
        transform: "matrix(1,0 0 1 938.5 301.0061)",
        name: "Комсомольская",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st20",
        cx: 892.9,
        cy: 324,
        r: 5,
        transform: "matrix(1,0 0 1 905.05 328.8)",
        name: "Красные Ворота",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st20",
        cx: 871.1,
        cy: 345.9,
        r: 5,
        transform: "matrix(1,0 0 1 781.5999 349.7)",
        name: "Чистые пруды",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st20",
        cx: 815.5,
        cy: 402.2,
        r: 5,
        transform: "matrix(1,0 0 1 762.8803 407.2)",
        name: "Лубянка",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st20",
        cx: 774.5,
        cy: 443,
        r: 5,
        transform: "matrix(1,0 0 1 783.8831 446.2)",
        name: "Охотный ряд",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st20",
        cx: 693.7,
        cy: 524.2,
        r: 5,
        transform: "matrix(1,0 0 1 535.7 527.4002)",
        name: "Библиотека имени Ленина",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st20",
        cx: 672.2,
        cy: 545.8,
        r: 5,
        transform: "matrix(1,0 0 1 556.7998 568.8002)",
        name: "Парк культуры",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st20",
        cx: 645.7,
        cy: 571.8,
        r: 5,
        transform: "matrix(1,0 0 1 683.2045 550.8)",
        name: "Кропоткинская",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st20",
        cx: 605.2,
        cy: 613.1,
        r: 5,
        transform: "matrix(1,0 0 1 527.6 616.5)",
        name: "Фрунзенская",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st20",
        cx: 561.8,
        cy: 656.8,
        r: 5,
        transform: "matrix(1,0 0 1 571.4286 661.8)",
        name: "Спортивная",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st20",
        cx: 542.7,
        cy: 675.9,
        r: 5,
        transform: "matrix(1,0 0 1 446.3333 678.0339)",
        name: "Воробьёвы горы",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st20",
        cx: 523.3,
        cy: 695.4,
        r: 5,
        transform: "matrix(1,0 0 1 449.3332 696.667)",
        name: "Университет",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st20",
        cx: 508.8,
        cy: 709.9,
        r: 5,
        transform: "matrix(1,0 0 1 380.6665 712.667)",
        name: "Проспект Вернадского",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st20",
        cx: 508.8,
        cy: 734.3,
        r: 5,
        transform: "matrix(1,0 0 1 424.3332 737.5)",
        name: "Юго-Западная",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st20",
        cx: 508.8,
        cy: 752,
        r: 5,
        transform: "matrix(1,0 0 1 441.9998 755.5)",
        name: "Тропарёво",
        text: "FoxText"
      },
      {
        id: "s0320",
        class: "st20",
        cx: 508.8,
        cy: 769.7,
        r: 5,
        transform: "matrix(1,0 0 1 440.9998 773.2)",
        name: "Румянцево",
        text: "FoxText"
      },
      {
        id: "s0321",
        class: "st20",
        cx: 508.8,
        cy: 787.3,
        r: 5,
        transform: "matrix(1,0 0 1 441.9998 792.3)",
        name: "Саларьево",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Зелёная",
    ways: [
      {id: "w0200", x: 639.1, y: 53.8, class: "st6", width: 4.4, height: 18.5},
      {id: "w0201", x: 639.1, y: 72.3, class: "st6", width: 4.4, height: 71.4},
      {id: "w0202", x: 639.1, y: 143.7, class: "st6", width: 4.4, height: 34.3},
      {id: "w0203", x: 639.1, y: 178, class: "st6", width: 4.4, height: 18},
      {id: "w0204", x: 639.1, y: 196, class: "st6", width: 4.4, height: 18},
      {id: "w0205", x: 691.2, y: 276.4, class: "st6", width: 4.4, height: 78.6},
      {id: "w0206", x: 691.2, y: 355, class: "st6", width: 4.4, height: 21.7},
      {id: "w0207", x: 948.7, y: 680.3, class: "st6", width: 4.4, height: 61.1},
      {id: "w0208", x: 948.7, y: 741.4, class: "st6", width: 4.4, height: 21},
      {id: "w0209", x: 948.7, y: 762.3, class: "st6", width: 4.4, height: 13.8},
      {id: "w0210", x: 948.7, y: 776.1, class: "st6", width: 4.4, height: 51.3},
      {id: "w0211", x: 948.7, y: 827.5, class: "st6", width: 4.4, height: 18.1},
      {id: "w0212", x: 948.7, y: 845.6, class: "st6", width: 4.4, height: 15.8},
      {id: "w0213", x: 948.7, y: 861.4, class: "st6", width: 4.4, height: 17.7},
      {id: "w0214", x: 967.8, y: 894.9, class: "st6", width: 4.4, height: 17},
      {id: "w0215", x: 639.1, y: 213.9, class: "st6", width: 4.4, height: 12.2},
      {
        id: "w0216",
        x: 665.2,
        y: 213.4,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 17.8108 545.5062)",
        class: "st6",
        width: 4.4,
        height: 75.7
      },
      {
        id: "w0217",
        x: 731.2,
        y: 358.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -79.2395 640.3948)",
        class: "st6",
        width: 4.4,
        height: 115.1
      },
      {
        id: "w0218",
        x: 803.8,
        y: 442.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -109.3011 712.9813)",
        class: "st6",
        width: 4.4,
        height: 91.3
      },
      {
        id: "w0219",
        x: 871.1,
        y: 506.1,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -137.1773 780.2803)",
        class: "st6",
        width: 4.4,
        height: 99.3
      },
      {id: "w0220", x: 948.7, y: 632.4, class: "st6", width: 4.4, height: 47.9},
      {
        id: "w0221",
        x: 927.9,
        y: 582.2,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -160.7145 837.0781)",
        class: "st6",
        width: 4.4,
        height: 60.7
      },
      {
        id: "w0222",
        x: 957.7,
        y: 873.9,
        transform: "matrix(0.6293 -0.7772 0.7772 0.6293 -333.5953 1074.8521)",
        class: "st6",
        width: 4.4,
        height: 26.4
      },
    ],
    stations: [
      {
        id: "s0200",
        class: "st21",
        cx: 641.3,
        cy: 54.2,
        r: 5,
        transform: "matrix(1,0 0 1 650.5 58)",
        name: "Речной вокзал",
        text: "FoxText"
      },
      {
        id: "s0201",
        class: "st21",
        cx: 641.3,
        cy: 72.3,
        r: 5,
        transform: "matrix(1,0 0 1 650.5 76.8)",
        name: "Водный стадион",
        text: "FoxText"
      },
      {
        id: "s0202",
        class: "st21",
        cx: 641.3,
        cy: 143.4,
        r: 5,
        transform: "matrix(1,0 0 1 570.9203 145.9)",
        name: "Войковская",
        text: "FoxText"
      },
      {
        id: "s0203",
        class: "st21",
        cx: 641.3,
        cy: 177.8,
        r: 5,
        transform: "matrix(1,0 0 1 601 182)",
        name: "Сокол",
        text: "FoxText"
      },
      {
        id: "s0204",
        class: "st21",
        cx: 641.3,
        cy: 196.5,
        r: 5,
        transform: "matrix(1,0 0 1 581.2 198.5001)",
        name: "Аэропорт",
        text: "FoxText"
      },
      {
        id: "s0205",
        class: "st21",
        cx: 641.3,
        cy: 214.8,
        r: 5,
        transform: "matrix(1,0 0 1 591.5 218.3002)",
        name: "Динамо",
        text: "FoxText"
      },
      {
        id: "s0206",
        class: "st21",
        cx: 693.4,
        cy: 277.5,
        r: 5,
        transform: "matrix(1,0 0 1 702.5 273.4501)",
        name: "Белорусская",
        text: "FoxText"
      },
      {
        id: "s0207",
        class: "st21",
        cx: 693.4,
        cy: 353.8,
        r: 5,
        transform: "matrix(1,0 0 1 702.5 358.3)",
        name: "Маяковская",
        text: "FoxText"
      },
      {
        id: "s0208",
        class: "st21",
        cx: 693.4,
        cy: 375.9,
        r: 5,
        transform: "matrix(1,0 0 1 637.42 378.55)",
        name: "Тверская",
        text: "FoxText"
      },
      {
        id: "s0209",
        class: "st21",
        cx: 774.5,
        cy: 457,
        r: 5,
        transform: "matrix(1,0 0 1 789 461)",
        name: "Театральная",
        text: "FoxText"
      },
      {
        id: "s0210",
        class: "st21",
        cx: 837.6,
        cy: 520.4,
        r: 5,
        transform: "matrix(1,0 0 1 748.4004 525)",
        name: "Новокузнецкая",
        text: "FoxText"
      },
      {
        id: "s0211",
        class: "st21",
        cx: 908.3,
        cy: 591.2,
        r: 5,
        transform: "matrix(1,0 0 1 917.5 588.6674)",
        name: "Павелецкая",
        text: "FoxText"
      },
      {
        id: "s0212",
        class: "st21",
        cx: 950.9,
        cy: 681,
        r: 5,
        transform: "matrix(1,0 0 1 865.15 691.9036)",
        name: "Автозаводская",
        text: "FoxText"
      },
      {
        id: "s0213",
        class: "st21",
        cx: 950.9,
        cy: 743,
        r: 5,
        transform: "matrix(1,0 0 1 887.5 746.1003)",
        name: "Технопарк",
        text: "FoxText"
      },
      {
        id: "s0214",
        class: "st21",
        cx: 950.9,
        cy: 758.3,
        r: 5,
        transform: "matrix(1,0 0 1 873.6998 761.9996)",
        name: "Коломенская",
        text: "FoxText"
      },
      {
        id: "s0215",
        class: "st21",
        cx: 950.9,
        cy: 774.6,
        r: 5,
        transform: "matrix(1,0 0 1 883.5 784.3)",
        name: "Каширская",
        text: "FoxText"
      },
      {
        id: "s0216",
        class: "st21",
        cx: 950.9,
        cy: 830.5,
        r: 5,
        transform: "matrix(1,0 0 1 856 832.9)",
        name: "Кантемировская",
        text: "FoxText"
      },
      {
        id: "s0217",
        class: "st21",
        cx: 950.9,
        cy: 847.3,
        r: 5,
        transform: "matrix(1,0 0 1 887.5 849.9)",
        name: "Царицыно",
        text: "FoxText"
      },
      {
        id: "s0218",
        class: "st21",
        cx: 951.1,
        cy: 865.3,
        r: 5,
        transform: "matrix(1,0 0 1 897 867.55)",
        name: "Орехово",
        text: "FoxText"
      },
      {
        id: "s0219",
        class: "st21",
        cx: 951.7,
        cy: 879.1,
        r: 5,
        transform: "matrix(1,0 0 1 861 884.1)",
        name: "Домодедовская",
        text: "FoxText"
      },
      {
        id: "s0220",
        class: "st21",
        cx: 970.5,
        cy: 894.4,
        r: 5,
        transform: "matrix(1,0 0 1 858.5 899.6)",
        name: "Красногвардейская",
        text: "FoxText"
      },
      {
        id: "s0221",
        class: "st21",
        cx: 970,
        cy: 912.7,
        r: 5,
        transform: "matrix(1,0 0 1 883.0873 915.8)",
        name: "Алма-Атинская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Голубая",
    ways: [
      {
        id: "w0300",
        x: 677.6,
        y: 451.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -133.412 618.4282)",
        class: "st9",
        width: 4.4,
        height: 37.9
      },
      {
        id: "w0301",
        x: 651,
        y: 424.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -122.3941 591.8094)",
        class: "st9",
        width: 4.4,
        height: 37.9
      },
      {
        id: "w0302",
        x: 616.5,
        y: 379.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -108.1603 557.3431)",
        class: "st9",
        width: 4.4,
        height: 59.9
      },
      {
        id: "w0303",
        x: 581.2,
        y: 353.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -93.5387 522.0445)",
        class: "st9",
        width: 4.4,
        height: 40.3
      },
      {id: "w0304", x: 481.7, y: 358.1, class: "st9", width: 89.1, height: 4.4},
      {id: "w0305", x: 572.2, y: 386.6, class: "st9", width: 25.5, height: 4.4},
      {
        id: "w0306",
        x: 517.4,
        y: 409.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -129.5652 511.4452)",
        class: "st9",
        width: 66.2,
        height: 4.4
      },
      {
        id: "w0307",
        x: 472.8,
        y: 455.4,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -175.6506 492.5417)",
        class: "st9",
        width: 63.8,
        height: 4.4
      },
      {
        id: "w0308",
        x: 451.8,
        y: 490.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -211.0172 478.0845)",
        class: "st9",
        width: 35.7,
        height: 4.4
      },
      {id: "w0309", x: 386.3, y: 502.7, class: "st9", width: 72.2, height: 4.4},
      {id: "w0310", x: 365.7, y: 454.6, class: "st9", width: 4.4, height: 31.8},
      {id: "w0311", x: 365.7, y: 436.7, class: "st9", width: 4.4, height: 18},
      {id: "w0312", x: 365.7, y: 418.7, class: "st9", width: 4.4, height: 18},
      {id: "w0313", x: 365.7, y: 393.1, class: "st9", width: 4.4, height: 25.7},
      {
        id: "w0314",
        x: 375.3,
        y: 480.7,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -239.6481 411.9952)",
        class: "st9",
        width: 4.4,
        height: 29.2
      },
      {
        id: "w0315",
        x: 354.6,
        y: 366.3,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -166.2494 364.4396)",
        class: "st9",
        width: 4.4,
        height: 33.2
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st27",
        cx: 693.4,
        cy: 483.9,
        r: 5,
        transform: "matrix(1,0 0 1 570.9203 487.6)",
        name: "Александровский сад",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st27",
        cx: 667.2,
        cy: 457.6,
        r: 5,
        transform: "matrix(1,0 0 1 677.8 460.4)",
        name: "Арбатская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st27",
        cx: 640.2,
        cy: 430.7,
        r: 5,
        transform: "matrix(1,0 0 1 650 434.5)",
        name: "Смоленская",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st27",
        cx: 597.8,
        cy: 388.8,
        r: 5,
        transform: "matrix(1,0 0 1 540.5203 405.3842)",
        name: "Киевская",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st27",
        cx: 568.4,
        cy: 360.3,
        r: 5,
        transform: "matrix(1,0 0 1 566.8 349.7)",
        name: "Выстовочная",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st27",
        cx: 481.6,
        cy: 360.3,
        r: 5,
        transform: "matrix(1,0 0 1 385.3774 363.3379)",
        name: "Международная",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st27",
        cx: 527.6,
        cy: 434.5,
        r: 5,
        transform: "matrix(1,0 0 1 537.7 438)",
        name: "Студенческая",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st27",
        cx: 481.5,
        cy: 481.9,
        r: 5,
        transform: "matrix(1,0 0 1 491.3335 491.3335)",
        name: "Кутузовская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st27",
        cx: 367.9,
        cy: 454.7,
        r: 5,
        transform: "matrix(1,0 0 1 380.6665 458.3335)",
        name: "Фили",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st27",
        cx: 367.9,
        cy: 436.8,
        r: 5,
        transform: "matrix(1,0 0 1 378.9 441.6665)",
        name: "Багратионовская",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st27",
        cx: 367.9,
        cy: 418.8,
        r: 5,
        transform: "matrix(1,0 0 1 378.9 421.3118)",
        name: "Филёвский парк",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st27",
        cx: 367.9,
        cy: 402,
        r: 5,
        transform: "matrix(1,0 0 1 378.9 406.3)",
        name: "Пионерская",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st27",
        cx: 346,
        cy: 372.1,
        r: 5,
        transform: "matrix(1,0 0 1 274 368.1002)",
        name: "Кунцевская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Серая",
    ways: [
      {id: "w0300", x: 750.9, y: 52.7, class: "st16", width: 4.4, height: 19.1},
      {id: "w0301", x: 750.9, y: 71.2, class: "st16", width: 4.4, height: 19.1},
      {id: "w0302", x: 750.9, y: 89.8, class: "st16", width: 4.4, height: 16.3},
      {id: "w0303", x: 750.9, y: 106, class: "st16", width: 4.4, height: 36.7},
      {id: "w0304", x: 750.9, y: 142.7, class: "st16", width: 4.4, height: 22.1},
      {id: "w0305", x: 750.9, y: 164.8, class: "st16", width: 4.4, height: 20.9},
      {id: "w0306", x: 750.9, y: 185.7, class: "st16", width: 4.4, height: 21.6},
      {id: "w0307", x: 750.9, y: 207, class: "st16", width: 4.4, height: 22.5},
      {id: "w0308", x: 691.2, y: 402.4, class: "st16", width: 4.4, height: 95.5},
      {id: "w0309", x: 824.4, y: 629.3, class: "st16", width: 4.4, height: 41},
      {id: "w0310", x: 824.4, y: 670.3, class: "st16", width: 4.4, height: 83},
      {id: "w0311", x: 824.4, y: 753.3, class: "st16", width: 4.4, height: 25.2},
      {id: "w0312", x: 824.4, y: 776.6, class: "st16", width: 4.4, height: 25.2},
      {id: "w0313", x: 824.4, y: 801.8, class: "st16", width: 4.4, height: 34.7},
      {id: "w0314", x: 824.4, y: 835.5, class: "st16", width: 4.4, height: 18},
      {id: "w0315", x: 824.4, y: 853.1, class: "st16", width: 4.4, height: 18.8},
      {id: "w0316", x: 824.4, y: 871.5, class: "st16", width: 4.4, height: 18},
      {id: "w0317", x: 824.4, y: 889.5, class: "st16", width: 4.4, height: 26.3},
      {id: "w0318", x: 824.4, y: 915.8, class: "st16", width: 4.4, height: 25.7},
      {
        id: "w0319",
        x: 737.6,
        y: 476.9,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -167.4993 682.2386)",
        class: "st16",
        width: 4.4,
        height: 132.8
      },
      {
        id: "w0320",
        x: 804.8,
        y: 581.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -195.3624 749.4576)",
        class: "st16",
        width: 4.4,
        height: 57.5
      },
      {id: "w0321", x: 750.9, y: 229.5, class: "st16", width: 4.4, height: 26.5},
      {
        id: "w0322",
        x: 772.8,
        y: 245.2,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 31.1122 629.129)",
        class: "st16",
        width: 4.4,
        height: 63.6
      },
      {
        id: "w0323",
        x: 670.7,
        y: 348.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -29.031 631.953)",
        class: "st16",
        width: 150.1,
        height: 4.4
      },
      {
        id: "w0324",
        x: 786.8,
        y: 954.7,
        transform: "matrix(0.7054 -0.7088 0.7088 0.7054 -439.4655 856.4011)",
        class: "st16",
        width: 47.5,
        height: 4.4
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st25",
        cx: 794.3,
        cy: 973.2,
        r: 5,
        transform: "matrix(1,0 0 1 762.8803 59.1)",
        name: "Алтуфьево",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st25",
        cx: 826.6,
        cy: 941.6,
        r: 5,
        transform: "matrix(1,0 0 1 762.8803 76.8)",
        name: "Биберево",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st25",
        cx: 826.6,
        cy: 915.8,
        r: 5,
        transform: "matrix(1,0 0 1 764 93.5)",
        name: "Отрадное",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st25",
        cx: 826.6,
        cy: 890.2,
        r: 5,
        transform: "matrix(1,0 0 1 764 118.4002)",
        name: "Владыкино",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st25",
        cx: 826.6,
        cy: 871.5,
        r: 5,
        transform: "matrix(1,0 0 1 779 145)",
        name: "Петровско-Разумовская",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st25",
        cx: 826.3,
        cy: 853.2,
        r: 5,
        transform: "matrix(1,0 0 1 665.35 167.9)",
        name: "Тимирязевская",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st25",
        cx: 826.3,
        cy: 836.5,
        r: 5,
        transform: "matrix(1,0 0 1 674.8 188)",
        name: "Дмитровская",
        text: "FoxText"
      },
      {
        id: "s0307",
        class: "st25",
        cx: 826.6,
        cy: 800.5,
        r: 5,
        transform: "matrix(1,0 0 1 677.8 210.05)",
        name: "Савёловская",
        text: "FoxText"
      },
      {
        id: "s0308",
        class: "st25",
        cx: 826.6,
        cy: 779.3,
        r: 5,
        transform: "matrix(1,0 0 1 664.6 232.7)",
        name: "Метделеевская",
        text: "FoxText"
      },
      {
        id: "s0309",
        class: "st25",
        cx: 826.6,
        cy: 753.7,
        r: 5,
        transform: "matrix(1,0 0 1 698.5 302.7)",
        name: "Цветной бульвар",
        text: "FoxText"
      },
      {
        id: "s0310",
        class: "st25",
        cx: 826.6,
        cy: 670.3,
        r: 5,
        transform: "matrix(1,0 0 1 630.1202 405.6486)",
        name: "Чеховская",
        text: "FoxText"
      },
      {
        id: "s0311",
        class: "st25",
        cx: 826.5,
        cy: 630,
        r: 5,
        transform: "matrix(1,0 0 1 620.4 500.4001)",
        name: "Боровицкая",
        text: "FoxText"
      },
      {
        id: "s0312",
        class: "st25",
        cx: 786.7,
        cy: 590.3,
        r: 5,
        transform: "matrix(1,0 0 1 796.5 592.391)",
        name: "Полянка",
        text: "FoxText"
      },
      {
        id: "s0313",
        class: "st25",
        cx: 693.4,
        cy: 497,
        r: 5,
        transform: "matrix(1,0 0 1 744.212 633.6)",
        name: "Серпуховская",
        text: "FoxText"
      },
      {
        id: "s0314",
        class: "st25",
        cx: 693.4,
        cy: 401.8,
        r: 5,
        transform: "matrix(1,0 0 1 771.5 675.3)",
        name: "Тульская",
        text: "FoxText"
      },
      {
        id: "s0315",
        class: "st25",
        cx: 797.1,
        cy: 299.2,
        r: 5,
        transform: "matrix(1,0 0 1 752.3 756.45)",
        name: "Нагатинская",
        text: "FoxText"
      },
      {
        id: "s0316",
        class: "st25",
        cx: 753.1,
        cy: 229.5,
        r: 5,
        transform: "matrix(1,0 0 1 768.7 781.5)",
        name: "Нагорная",
        text: "FoxText"
      },
      {
        id: "s0317",
        class: "st25",
        cx: 753.1,
        cy: 207.2,
        r: 5,
        transform: "matrix(1,0 0 1 746.3 799.5)",
        name: "Нахимовский проспект",
        text: "FoxText"
      },
      {
        id: "s0318",
        class: "st25",
        cx: 753.1,
        cy: 185.3,
        r: 5,
        transform: "matrix(1,0 0 1 728.5 840.5)",
        name: "Севастопольская",
        text: "FoxText"
      },
      {
        id: "s0319",
        class: "st25",
        cx: 753.1,
        cy: 164.8,
        r: 5,
        transform: "matrix(1,0 0 1 744.212 857)",
        name: "Чертановская",
        text: "FoxText"
      },
      {
        id: "s0320",
        class: "st25",
        cx: 753.1,
        cy: 142.7,
        r: 5,
        transform: "matrix(1,0 0 1 780.7 874.1)",
        name: "Южная",
        text: "FoxText"
      },
      {
        id: "s0321",
        class: "st25",
        cx: 753.1,
        cy: 106,
        r: 5,
        transform: "matrix(1,0 0 1 765.7787 893.5)",
        name: "Пражская",
        text: "FoxText"
      },
      {
        id: "s0322",
        class: "st25",
        cx: 753.1,
        cy: 89.8,
        r: 5,
        transform: "matrix(1,0 0 1 765.7787 911.8004)",
        name: "Улица\nАкадемика\nЯнгеля",
        text: "FoxText"
      },
      {
        id: "s0323",
        class: "st25",
        cx: 753.1,
        cy: 71.8,
        r: 5,
        transform: "matrix(1,0 0 1 783.5 945.1)",
        name: "Анино",
        text: "FoxText"
      },
      {
        id: "s0324",
        class: "st25",
        cx: 753.1,
        cy: 54.1,
        r: 5,
        transform: "matrix(1,0 0 1 805.2 978.5)",
        name: "Бульвар Дмитрия Донского",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Небесная",
    ways: [
      {
        id: "w0300",
        x: 752.8,
        y: 940.8,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -453.3328 813.2352)",
        class: "st11",
        width: 4.4,
        height: 26.1
      },
      {
        id: "w0301",
        x: 773.1,
        y: 958.5,
        transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -461.713 833.5281)",
        class: "st11",
        width: 4.4,
        height: 31.2
      },
      {id: "w0302", x: 783.5, y: 983.6, class: "st11", width: 4.4, height: 19.1},
      {id: "w0303", x: 783.5, y: 1002.8, class: "st11", width: 4.4, height: 17.5},
      {id: "w0304", x: 783.5, y: 1020.3, class: "st11", width: 4.4, height: 18.4},
      {id: "w0305", x: 783.5, y: 1038.7, class: "st11", width: 4.4, height: 19.1},
    ],
    stations: [
      {
        id: "s0300",
        class: "st28",
        cx: 784.3,
        cy: 983.2,
        r: 5,
        transform: "matrix(1,0 0 1 650 950.1)",
        name: "Битцевский парк",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st28",
        cx: 763.7,
        cy: 962.5,
        r: 5,
        transform: "matrix(1,0 0 1 677.8 964.6219)",
        name: "Лесопарковая",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st28",
        cx: 746.3,
        cy: 945.1,
        r: 5,
        transform: "matrix(1,0 0 1 646.5 986.6)",
        name: "Улица Старокачаловская",
        text: "FoxText"
      },
      {
        id: "s0303",
        class: "st28",
        cx: 785.7,
        cy: 1002.8,
        r: 5,
        transform: "matrix(1,0 0 1 670 1004.7)",
        name: "Улица Скобелевская",
        text: "FoxText"
      },
      {
        id: "s0304",
        class: "st28",
        cx: 785.7,
        cy: 1020.7,
        r: 5,
        transform: "matrix(1,0 0 1 631.1202 1024)",
        name: "Бульвар Адмирала Ушакова",
        text: "FoxText"
      },
      {
        id: "s0305",
        class: "st28",
        cx: 785.7,
        cy: 1038,
        r: 5,
        transform: "matrix(1,0 0 1 690 1040.667)",
        name: "Улица Горчакова",
        text: "FoxText"
      },
      {
        id: "s0306",
        class: "st28",
        cx: 785.7,
        cy: 1055.7,
        r: 5,
        transform: "matrix(1,0 0 1 690 1059.333)",
        name: "Бунинская аллея",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Бирюзовая",
    ways: [
      {
        id: "w0300",
        x: 826.1,
        y: 813.7,
        transform: "matrix(0.9622 -0.2722 0.2722 0.9622 -189.8571 263.1454)",
        class: "st12",
        width: 54.9,
        height: 4.4
      },
      {
        id: "w0301",
        x: 878.3,
        y: 796.3,
        transform: "matrix(0.9622 -0.2722 0.2722 0.9622 -182.7891 279.2967)",
        class: "st12",
        width: 74,
        height: 4.4
      },
    ],
    stations: [
      {
        id: "s0300",
        class: "st29",
        cx: 826.3,
        cy: 823.7,
        r: 5,
        transform: "matrix(1,0 0 1 763.7 825.5)",
        name: "Каховская",
        text: "FoxText"
      },
      {
        id: "s0301",
        class: "st29",
        cx: 879.7,
        cy: 808.5,
        r: 5,
        transform: "matrix(1,0 0 1 887.5 818.4)",
        name: "Варшавская",
        text: "FoxText"
      },
      {
        id: "s0302",
        class: "st29",
        cx: 950.9,
        cy: 788.3,
        r: 5,
        transform: "matrix(1,0 0 1 883.5 784.3)",
        name: "Каширская",
        text: "FoxText"
      },
    ]
  },
  {
    name: "Фиолетовая",
    ways: [
      {id: "w0300", x: 546.6, y: 53.9, class: "st8", width: 4.4, height: 18.5},
      {id: "w0301", x: 546.6, y: 72.3, class: "st8", width: 4.4, height: 18.5},
      {id: "w0302", x: 546.6, y: 90.8, class: "st8", width: 4.4, height: 18.5},
      {id: "w0303", x: 546.6, y: 109.2, class: "st8", width: 4.4, height: 16.3},
      {id: "w0304", x: 546.6, y: 125.5, class: "st8", width: 4.4, height: 120},
      {id: "w0305", x: 662.7, y: 316.8, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -59.3513 575.389)",  class: "st8", width: 4.4, height: 85.1},
      {id: "w0306", x: 693.5, y: 386.6, class: "st8", width: 123.1, height: 4.4},
      {id: "w0306_1", x: 662.7, y: 240, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -59.3284 575.3622)",
        class: "st8", width: 4.4, height: 70},
      {id: "w0307", x: 878.7, y: 360.8, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -63.1273 755.91)",  class: "st8", width: 4.4, height: 186.7},
      {id: "w0308", x: 973.3, y: 507.8, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -102.3115 850.5038)",  class: "st8", width: 4.4, height: 81.9},
      {id: "w0309", x: 1014.8, y: 572.2, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -119.5576 892.0306)",  class: "st8", width: 4.4, height: 36.3},
      {id: "w0310", x: 1049, y: 594, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -133.6954 926.2051)",  class: "st8", width: 4.4, height: 61},
      {id: "w0311", x: 1079.9, y: 642, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -146.438 957.0814)",  class: "st8", width: 4.4, height: 26.6},
      {id: "w0312", x: 1097.4, y: 661.3, transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -153.7714 974.6255)",  class: "st8", width: 4.4, height: 23.3},
      {id: "w0313", x: 528.4, y: 273.4, class: "st8", width: 53.8, height: 4.4},
      {id: "w0314", x: 519.9, y: 258.3, transform: "matrix(0.5301 -0.8479 0.8479 0.5301 32.317 579.3754)",  class: "st8", width: 38.1, height: 4.4},
      {id: "w0315", x: 1105, y: 679.6, class: "st8", width: 4.4, height: 21.6},
      {id: "w0316", x: 1105, y: 701.2, class: "st8", width: 4.4, height: 18.5},
      {id: "w0317", x: 1105, y: 719.6, class: "st8", width: 4.4, height: 18.5},
      {id: "w0318", x: 1105, y: 738, class: "st8", width: 4.4, height: 18.5},
    ],
    stations: [
      {id: "s0300", class: "st26", cx: 548.8, cy: 53, r: 5, transform: "matrix(1,0 0 1 468.9001 56.8002)", name: "Планетарная", text: "FoxText"},
      {id: "s0301", class: "st26", cx: 548.8, cy: 72.3, r: 5, transform: "matrix(1,0 0 1 469.9 74.8)", name: "Сходненская", text: "FoxText"},
      {id: "s0302", class: "st26", cx: 548.8, cy: 89.8, r: 5, transform: "matrix(1,0 0 1 479.9 93.8)", name: "Тушинская", text: "FoxText"},
      {id: "s0303", class: "st26", cx: 548.8, cy: 108, r: 5, transform: "matrix(1,0 0 1 492.5667 111.0002)", name: "Спартак", text: "FoxText"},
      {id: "s0304", class: "st26", cx: 548.8, cy: 125.5, r: 5, transform: "matrix(1,0 0 1 479.5 129.7)", name: "Щукинская", text: "FoxText"},
      {id: "s0305", class: "st26", cx: 549.3, cy: 243.8, r: 5, transform: "matrix(1,0 0 1 558.6665 248.8)", name: "Октябрьское поле", text: "FoxText"},
      {id: "s0306", class: "st26", cx: 529.6, cy: 275.7, r: 5, transform: "matrix(1,0 0 1 527.1 294.2)", name: "Полежаевская", text: "FoxText"},
      {id: "s0307", class: "st26", cx: 581.2, cy: 275.7, r: 5, transform: "matrix(1,0 0 1 578.6166 267.4551)", name: "Беговая", text: "FoxText"},
      {id: "s0308", class: "st26", cx: 633.6, cy: 328.1, r: 5, transform: "matrix(1,0 0 1 615.6924 306.8)", name: "Улица 1905 года", text: "FoxText"},
      {id: "s0309", class: "st26", cx: 693.4, cy: 388.8, r: 5, transform: "matrix(1,0 0 1 644.2 333)", name: "Баррикадная", text: "FoxText"},
      {id: "s0310", class: "st26", cx: 815.5, cy: 388.8, r: 5, transform: "matrix(1,0 0 1 620.4 391.5)", name: "Пушкинская", text: "FoxText"},
      {id: "s0311", class: "st26", cx: 871.1, cy: 444.4, r: 5, transform: "matrix(1,0 0 1 824.4 392.5)", name: "Кузнецкий мост", text: "FoxText"},
      {id: "s0312", class: "st26", cx: 946.5, cy: 519.8, r: 5, transform: "matrix(1,0 0 1 881.0875 456.8001)", name: "Китай-город", text: "FoxText"},
      {id: "s0313", class: "st26", cx: 1004.2, cy: 577.5, r: 5, transform: "matrix(1,0 0 1 887.5 529.3)", name: "Таганская", text: "FoxText"},
      {id: "s0314", class: "st26", cx: 1029.3, cy: 602.6, r: 5, transform: "matrix(1,0 0 1 1014 581.667)", name: "Пролетарская", text: "FoxText"},
      {id: "s0315", class: "st26", cx: 1073, cy: 646.3, r: 5, transform: "matrix(1,0 0 1 1040.6666 605.6005)", name: "Волгоградский проспект", text: "FoxText"},
      {id: "s0316", class: "st26", cx: 1090.6, cy: 663.9, r: 5, transform: "matrix(1,0 0 1 1084.5 649.8)", name: "Текстильщики", text: "FoxText"},
      {id: "s0317", class: "st26", cx: 1107.2, cy: 680.5, r: 5, transform: "matrix(1,0 0 1 1102 665.3002)", name: "Кузьмики", text: "FoxText"},
      {id: "s0318", class: "st26", cx: 1107.2, cy: 701.2, r: 5, transform: "matrix(1,0 0 1 1119.333 684.9035)", name: "Рязанский проспект", text: "FoxText"},
      {id: "s0319", class: "st26", cx: 1107.2, cy: 719.6, r: 5, transform: "matrix(1,0 0 1 1119.333 706.2)", name: "Выхино", text: "FoxText"},
      {id: "s0320", class: "st26", cx: 1107.2, cy: 737, r: 5, transform: "matrix(1,0 0 1 1119.333 723.9)", name: "Лермонтовский проспект", text: "FoxText"},
      {id: "s0321", class: "st26", cx: 1107.2, cy: 754.5, r: 5, transform: "matrix(1,0 0 1 1119.333 741.4)", name: "Жулебино", text: "FoxText"},
      {id: "s0322", class: "st26", cx: 607.8, cy: 303, r: 5, transform: "matrix(1,0 0 1 1119.333 759.5)", name: "Котельники", text: "FoxText"},
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
      toChange.forEach((el) => {
        newState[el[0]].stations[el[1]].class = metro[el[0]].stations[el[1]].class;
      });
      toChange = sets[action.id].ways;
      toChange.forEach((el) => {
        newState[el[0]].ways[el[1]].class = metro[el[0]].ways[el[1]].class;
      });
      return newState;
    default:
      return newState
  }
}
