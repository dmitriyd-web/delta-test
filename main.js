document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container-1', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Выручка руб.'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Шкала выручки'
            },
            categories: ['440', '460', '480', '500', '520', '540', '560']
        },
        series: [{
            name: 'Кривая выручки',
            data: [446.521, 468.521, 480.521, 500.521, 522.521, 556.521, 568.521]
        }]
    });
    const chart2 = Highcharts.chart('container-2', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Наличные'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Шкала наличных'
            },
            categories: ['240', '260', '280', '300', '320', '340', '360']
        },
        series: [{
            name: 'Кривая наличных',
            data: [246.521, 268.521, 300.000, 300.000, 322.521, 356.521, 368.521]
        }]
    });
    const chart3 = Highcharts.chart('container-3', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Безналичный расчет'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Шкала расчета'
            },
            categories: ['40', '60', '80', '100', '120', '140', '160']
        },
        series: [{
            name: 'Кривая расчета',
            data: [146.521, 168.521, 100.000, 100.000, 122.521, 156.521, 168.521]
        }]
    });
    const chart4 = Highcharts.chart('container-4', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Кредитные карты'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Шкала расчета'
            },
            categories: ['40', '60', '80', '100', '120', '140', '160']
        },
        series: [{
            name: 'Кривая расчета',
            data: [146.521, 168.521, 100.521, 100.521, 22.521, 156.521, 68.521]
        }]
    });
    const chart5 = Highcharts.chart('container-5', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Средний чек руб.'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Шкала руб.'
            },
            categories: ['800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '1600']
        },
        series: [{
            name: 'Кривая расчета',
            data: [1270, 850, 900, 1300, 1370, 1400, 1220]
        }]
    });
    const chart6 = Highcharts.chart('container-6', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Средний гость руб.'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Шкала руб.'
            },
            categories: ['800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '1600']
        },
        series: [{
            name: 'Кривая расчета',
            data: [1270, 850, 800, 1200, 770, 1400, 1220]
        }]
    });
    const chart7 = Highcharts.chart('container-7', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Удаление из чека (после оплаты) руб.'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Шкала из чека руб.'
            },
            categories: ['800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '1600']
        },
        series: [{
            name: 'Кривая расчета',
            data: [1270, 850, 800, 1100, 1000, 1400, 1220]
        }]
    });
    const chart8 = Highcharts.chart('container-8', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Удаление из чека (до оплаты) руб.'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Шкала из чека руб.'
            },
            categories: ['800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '1600']
        },
        series: [{
            name: 'Кривая расчета',
            data: [1270, 850, 800, 1300, 1300, 1400, 1220]
        }]
    });
    const chart9 = Highcharts.chart('container-9', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Количество чеков'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Количество чеков'
            },
            categories: ['26', '28', '30', '32', '34', '36', '38', '40', '42']
        },
        series: [{
            name: 'Кривая чеков',
            data: [24, 25, 20, 34, 36, 40, 32]
        }]
    });
    const chart10 = Highcharts.chart('container-10', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Количество гостей'
        },
        xAxis: {
            title: {
                text: 'Дни недели'
            },
            categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        },
        yAxis: {
            title: {
                text: 'Количество гостей'
            },
            categories: ['26', '28', '30', '32', '34', '36', '38', '40', '42']
        },
        series: [{
            name: 'Кривая гостей',
            data: [24, 15, 20, 34, 36, 40, 32]
        }]
    });
});