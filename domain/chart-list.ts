export const chartList =[
    {
        id:1,
        chartName:"AreaChart",
        chartData:[
            ['Year', 'Sales', 'Expenses'],
            ['2013', 1000, 400],
            ['2014', 1170, 460],
            ['2015', 660, 1120],
            ['2016', 1030, 540],
        ],
        chartOptions:{
            title: 'Company Performance',
            hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 },
            chartArea: { width: '50%', height: '70%' },
            width: 800,
            height: 600,
        },
        sett:{}
    },
    {
        id:2,
        chartName:"ColumnChart",
        chartData: [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2019', 1000, 400, 200],
            ['2020', 1170, 460, 250],
            ['2021', 660, 1120, 300],
            ['2022', 1030, 540, 350]
        ],
        chartOptions: {
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2019-2022',
            
            },
            height: 600,
        },
        sett:{}
    },
    {
        id:3,
        chartName:"GeoChart",
        chartData: [
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700],
        ],
        chartOptions: {  
            title:"Geo chart example",
            width: 800,
            height: 600,
        },
        sett:{ packages: ['geochart'] }
    },
    {
        id:4,
        chartName:"PieChart",
        chartData:[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
        ],
        chartOptions:{
            title: 'My Daily Activities',
            width: 800,
            height: 600,
        },
        sett:{}
    },
    {
        id:5,
        chartName:"BarChart",
        chartData: [
            ['City', '2010 Population', '2000 Population'],
            ['New York City, NY', 8175000, 8008000],
            ['Los Angeles, CA', 3792000, 3694000],
            ['Chicago, IL', 2695000, 2896000],
            ['Houston, TX', 2099000, 1953000],
            ['Philadelphia, PA', 1526000, 1517000],
        ],
        chartOptions: {  
            title: 'Population of Largest U.S. Cities',
            chartArea: { width: '50%' },
            hAxis: {
                title: 'Total Population',
                minValue: 0,
            },
            vAxis: {
                title: 'City',
            },
            width: 800,
            height: 600,
        },
        sett:{ }
    },
    {
        id:6,
        chartName:"BubbleChart",
        chartData: [
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
            ['CAN', 80.66, 1.67, 'North America', 33739900],
            ['DEU', 79.84, 1.36, 'Europe', 81902307],
            ['DNK', 78.6, 1.84, 'Europe', 5523095],
            ['EGY', 72.73, 2.78, 'Middle East', 79716203],
            ['GBR', 80.05, 2, 'Europe', 61801570],
            ['IRN', 72.49, 1.7, 'Middle East', 73137148],
            ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
            ['ISR', 81.55, 2.96, 'Middle East', 7485600],
            ['RUS', 68.6, 1.54, 'Europe', 141850000],
            ['USA', 78.09, 2.05, 'North America', 307007000],
        ],
        chartOptions: {  
            title:
                'Correlation between life expectancy, fertility rate ' +
                'and population of some world countries (2010)',
            hAxis: { title: 'Life Expectancy' },
            vAxis: { title: 'Fertility Rate' },
            bubble: { textStyle: { fontSize: 11 } },
            width: 800,
            height: 600,
        },
        sett:{ }
    },
    {
        id:7,
        chartName:"Calendar",
        chartData: [
            [
                {type: 'date',id: 'Date',},
                {type: 'number',id: 'Won/Loss',},
            ],
            [new Date(2012, 3, 13), 37032],
            [new Date(2012, 3, 14), 38024],
            [new Date(2012, 3, 15), 38024],
            [new Date(2012, 3, 16), 38108],
            [new Date(2012, 3, 17), 38229],
            // Many rows omitted for brevity.
            [new Date(2013, 9, 4), 38177],
            [new Date(2013, 9, 5), 38705],
            [new Date(2013, 9, 12), 38210],
            [new Date(2013, 9, 13), 38029],
            [new Date(2013, 9, 19), 38823],
            [new Date(2013, 9, 23), 38345],
            [new Date(2013, 9, 24), 38436],
            [new Date(2013, 9, 30), 38447],
        ],
        chartOptions: {  
            title: 'Red Sox Attendance',
            width: 800,
            height: 600,
        },
        sett:{ packages: ['calendar'] }
    },
    {
        id:8,
        chartName:"CandlestickChart",
        chartData: [
            ['day', 'a', 'b', 'c', 'd'],
            ['Mon', 20, 28, 38, 45],
            ['Tue', 31, 38, 55, 66],
            ['Wed', 50, 55, 77, 80],
            ['Thu', 50, 77, 66, 77],
            ['Fri', 15, 66, 22, 68],
        ],
        chartOptions: {  
            legend: 'none',
            width: 800,
            height: 600,
        },
        sett:{  }
    },
]