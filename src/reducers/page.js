const CHOOSE_STATION = "CHOOSE_STATION";
const OPEN_SET = "OPEN_SET";
const CHOOSE_SET = "CHOOSE_SET";

export const sets = [
    {
        name: "О проекте",
        text: "\tВ среднем московское метро перевозит 8 миллионов пассажиров в день. " +
        "Заполняемость в вагонах метро в \"часы пик\" составляет от 9,5 человек на 1 кв. м, " +
        "хотя такое расстояние рассчитано на 4,4 человека. Это свидетельствует о перегруженности " +
        "вагонов в \"часы пик\". Именно в это время в метро чаще всего происходят кражи: карманникам " +
        "легче незаметно достать у жертвы ценные вещи, деньги или телефон." +
        "\n\n Проект реализован студентами Высшей Школы Экономики\n\n" +
        "Для увеличения масштаба карты пользуйтесь регулировкой масштаба в браузере. " +
        "\nДля поучения информации - щелкните по станции или на меню в левом верхнем углу для открытия подборок."
    },
    {
        name: "Самые опасные переходы",
        text: "\tСреди перегонов самый опасный – «Парк Культуры» – «Таганская» на Кольцевой линии (60 краж).\n" +
        "\tТакже велик риск лишиться кошелька между станциями «Савеловская» и «Чеховская» Серпуховско-Тимирязевской линии (36 краж)" +
        "\n\t«Театральная» и «Павелецкая» Замоскворецкой линии (26 краж)" +
        "\n\t«Третьяковская» – «Новые Черемушки» Калужско-Рижской ветки (26 краж)" +
        "\n\tА замыкает рейтинг «плохих» перегонов отрезок «Китай-город» – «Таганская» Таганско-Краснопресненской линии с 16 кражами за 11 месяцев прошлого года.\n",
        stations: [
            [3, 8], [3, 7], [3, 6], [3, 5], [3, 4],
            [1, 17], [1, 14], [1, 16], [1, 15],
            [4, 9], [4, 10], [4, 11],
            [2, 11], [2, 12], [2, 13], [2, 14], [2, 16], [2, 15], [2, 17]
        ],
        ways: [
            [3, 4], [3, 2], [3, 0], [3, 3],
            [1, 23], [1, 22], [1, 21], [1, 7],
            [4, 18], [4, 19],
            [2, 1], [2, 8], [2, 9], [2, 10], [2, 11], [2, 12]
        ]
    },
    {
        name: "Самые безопасные ветки",
        text: "\tФилёвская и Люблинская",
        stations: [
            [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15], [0, 16], [0, 17], [0, 18], [0, 19],
            [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10], [7, 11], [7, 12], [7, 13], [7, 14], [7, 15], [7, 16], [7, 17], [7, 18], [7, 19], [7, 20], [7, 21],
        ],
        ways: [
            [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15], [0, 16], [0, 17], [0, 18], [0, 19], [0, 20], [0, 21],
            [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10], [7, 11], [7, 12], [7, 13], [7, 14], [7, 15], [7, 16], [7, 17], [7, 18], [7, 19], [7, 20], [7, 21], [7, 22], [7, 23], [7, 24], [7, 25], [7, 26], [7, 27], [7, 28]
        ]
    },
    {
        name: "Топ-3 по кражам",
        text: "\tТАГАНСКО-КРАСНОПРЕСНЕНСКАЯ, КОЛЬЦЕВАЯ, СЕРПУХОВСКО-ТИМИРЯЗЕВСКАЯ\n\n" +
        "\tКарманные кражи составляют 60% всей преступности в метро.\n\n" +
        "\tПики активности карманников приходятся на канун 1 сентября и Нового года. Во втором случае речь идет о периоде с 17 по 31 декабря, когда горожане берут с собой больше денег, чтобы купить подарки. В особенности это касается гостей столицы.\n\n" +
        "\t+ после 20-х чисел каждого месяца, когда москвичам в большинстве организаций выдают зарплату.\n" +
        "\t40 процентов карманников в метро — наркоманы-рецидивисты. В этом году большинство воров в подземке — приезжие из регионов России. В прошлом году лидирующие позиции занимали выходцы из Средней Азии\n\n" +
        "\tНужно быть особенно осторожным на «вокзальных» станциях: «Киевской», «Комсомольской», «Павелецкой», «Белорусской», «Савёловской». Карманники также появляются на «Чеховской», «Цветном бульваре», «Петровско-Разумовской» и «Тимирязевской».\n\n",
        stations: [
            [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11],

            [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10],
            [1, 11], [1, 12], [1, 13], [1, 14], [1, 15], [1, 16], [1, 17], [1, 18],
            [1, 19], [1, 20], [1, 21], [1, 22], [1, 23],
            // [1,24]

            [12, 0], [12, 1], [12, 2], [12, 3], [12, 4], [12, 5], [12, 6], [12, 7], [12, 8], [12, 9], [12, 10],
            [12, 11], [12, 12], [12, 13], [12, 14], [12, 15],
            [12, 16], [12, 17], [12, 18], [12, 19], [12, 20], [12, 21], [12, 22]
        ],
        ways: [
            [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11],

            [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10],
            [1, 11], [1, 12], [1, 13], [1, 14], [1, 15], [1, 16], [1, 17], [1, 18], [1, 19], [1, 20],
            [1, 21], [1, 22],
            [1, 23], [1, 24],

            [12, 0], [12, 1], [12, 2], [12, 3], [12, 4], [12, 5], [12, 6], [12, 7], [12, 8], [12, 9], [12, 10],
            [12, 11], [12, 12], [12, 13], [12, 14], [12, 15], [12, 16], [12, 17], [12, 18],
            [12, 19],
            // [12,20],[12,21],[12,22]
        ]
    }
];

export default function login(state = {current_info: { amount: 2, id: 0}, set: false, sets: sets}, action) {
    let newState = {...state};
    switch (action.type) {
        case CHOOSE_SET:
            newState.set = false;
            newState.current_info = {
                amount: 2,
                id: action.id,
                stationInStore: sets[action.id].stations,
                waysInStore: sets[action.id].ways
            };
            return newState;
        case OPEN_SET:
            newState.set = !(state.set);
            return newState;
        case CHOOSE_STATION:
            newState.set = false;
            newState.current_info = {
                amount: 1,
                stationInStore: action.info
            };
            return newState;

        default:
            return newState
    }
}
