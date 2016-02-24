/* Operators load factor KPI */

(function () {
    $(function () {


        var dataSupervisor = new kendo.data.ObservableArray(dataScenarioSupervisor[0]);
        var dataCaller = new kendo.data.ObservableArray(dataScenarioCaller[0]);
        var dataLiaison = new kendo.data.ObservableArray(dataScenarioLiaison[0]);


        function createKPI(anchor) {
            //for each pie
            function createSmallPie(anchor, data, title) {
                $("#" + anchor).kendoChart({
                    dataSource: {
                        data: data
                    },
                    chartArea: {
                        background: ''
                    },
                    title: {
                        text: title,
                        color: waEC3.config.style.color
                    },
                    seriesDefaults: {
                        type: "pie"
                    },
                    series: [{
                        type: "pie",
                        field: "percentage",
                        categoryField: "source",
                        explodeField: "explode",
                    }],
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: waEC3.config.style.color
                        }

                    },
                    tooltip: {
                        visible: true,
                        format: "N0",
                        template: "#= category # - #= kendo.format('{0:P}', percentage)#"
                    }
                });
            }


            createSmallPie("wa-kpi-supervisor-load-factor", dataSupervisor, "Supervisor");
            createSmallPie("wa-kpi-liaison-officer-load-factor", dataLiaison, "Liaison Officer");
            createSmallPie("wa-kpi-call-taker-load-factor", dataCaller, "Data Caller");


        }

        function animateKPI(anchor, indata, inscenario) {

            var data = indata;
            var scenario = inscenario;
            var intervalID;

            var clos = function (data, scenario) {
                var count = 0;
                setInterval(function () {
                    count++;
                    if (count > 2) {
                        count = 0;
                    }
                    data.splice(0, 2);
                    data.push(scenario[count][0]);
                    data.push(scenario[count][1]);

                    if (count === 1) {
                        intervalID = alertKPI('wa-kpi-operators-load-factor', true);
                    } else {
                        alertKPI('wa-kpi-operators-load-factor', false, intervalID);
                    }

                }, (waEC3.config.kpi.animationStep * 60));//change every min

            }
            clos(data, scenario);
        }

        createKPI(null);


        animateKPI("wa-kpi-supervisor-load-factor", dataSupervisor, dataScenarioSupervisor);
        animateKPI("wa-kpi-liaison-officer-load-factor", dataLiaison, dataScenarioLiaison);
        animateKPI("wa-kpi-call-taker-load-factor", dataCaller, dataScenarioCaller);

    });


    /* data for demo scenario */

    var dataScenarioSupervisor = [
        [{
            "source": "free",
            "percentage": 30,
            "explode": true,
            color: waEC3.config.style.colorOKAlt

        },
            {
                "source": "occupied",
                "percentage": 70,
                color: waEC3.config.style.colorWatch
            }
        ],
        [{
            "source": "free",
            "percentage": 20,
            "explode": true,
            color: waEC3.config.style.colorOKAlt

        },
            {
                "source": "occupied",
                "percentage": 80,
                color: waEC3.config.style.colorNOK
            }],
        [{
            "source": "free",
            "percentage": 50,
            "explode": true,
            color: waEC3.config.style.colorOKAlt

        },
            {
                "source": "occupied",
                "percentage": 50,
                color: waEC3.config.style.colorOK
            }
        ]

    ];
    var dataScenarioLiaison = [
        [{
            "source": "free",
            "percentage": 40,
            "explode": true,
            color: waEC3.config.style.colorOKAlt

        },
            {
                "source": "occupied",
                "percentage": 60,
                color: waEC3.config.style.colorOK
            }
        ],
        [{
            "source": "free",
            "percentage": 10,
            "explode": true,
            color: waEC3.config.style.colorOKAlt

        },
            {
                "source": "occupied",
                "percentage": 90,
                color: waEC3.config.style.colorNOK
            }],
        [{
            "source": "free",
            "percentage": 70,
            "explode": true,
            color: waEC3.config.style.colorOKAlt

        },
            {
                "source": "occupied",
                "percentage": 30,
                color: waEC3.config.style.colorOK
            }
        ]

    ];

    var dataScenarioCaller = [
        [{
            "source": "free",
            "percentage": 40,
            "explode": true,
            color: waEC3.config.style.colorOKAlt

        },
            {
                "source": "occupied",
                "percentage": 60,
                color: waEC3.config.style.colorOK
            }
        ],
        [{
            "source": "free",
            "percentage": 10,
            "explode": true,
            color: waEC3.config.style.colorOKAlt

        },
            {
                "source": "occupied",
                "percentage": 90,
                color: waEC3.config.style.colorNOK
            }],
        [{
            "source": "free",
            "percentage": 80,
            "explode": true,
            color: waEC3.config.style.colorOKAlt

        },
            {
                "source": "occupied",
                "percentage": 20,
                color: waEC3.config.style.colorOK
            }
        ]

    ];

})();


