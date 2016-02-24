/* Operators load factor KPI */

(function () {
    $(function () {


       // var dataSupervisor = new kendo.data.ObservableArray(dataScenarioSupervisor[0]);
      //  var dataCaller = new kendo.data.ObservableArray(dataScenarioCaller[0]);
      //  var dataLiaison = new kendo.data.ObservableArray(dataScenarioLiaison[0]);
        var kpiAnchor = 'wa-kpi-alert-event-backlog';

        function createKPI(anchor) {
            /* Backlog  */
            $("#"+anchor).kendoChart({

                legend: {
                    visible: true
                },
                seriesDefaults: {
                    type: "column",
                    stack: {
                        type: "100%"
                    }
                },
                series: [{
                    name: "pending",
                    stack: {
                        group: "alerts"
                    },
                    data: [140]
                }, {
                    name: "red",
                    stack: {
                        group: "alerts"
                    },
                    data: [65]
                }, {
                    name: "pending",
                    stack: {
                        group: "events"
                    },
                    data: [67]
                }, {
                    name: "red",
                    stack: {
                        group: "events"
                    },
                    data: [50]
                }, {
                    name: "in progress",
                    stack: {
                        group: "events"
                    },
                    data: [37]
                }, {
                    name: "solved",
                    stack: {
                        group: "events"
                    },
                    data: [20]
                }],
                seriesColors: [waEC3.config.style.colorNOK,
                    waEC3.config.style.colorOK,
                    waEC3.config.style.colorNOK,
                    waEC3.config.style.colorWatch,
                    waEC3.config.style.colorInProgress
                    , waEC3.config.style.colorOK],
                valueAxis: {
                    line: {
                        visible: false
                    },
                    labels: {
                        color: waEC3.config.style.color
                    }
                },
                categoryAxis: {
                    line: {
                        visible: false
                    },
                    notes:{
                        position:"bottom",
                        label:{
                            template: "#= series.stack.group #",
                            visible:true,
                            format:'{0}',
                            position:'outside'
                        }
                    }

                },
                tooltip: {
                    visible: true,
                    template: "#= series.stack.group #,  #= series.name #"
                },
                chartArea: {
                    background: ''
                },
                legend: {
                    visible: false

                }
            });


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

        createKPI(kpiAnchor);


      //  animateKPI("wa-kpi-supervisor-load-factor", dataSupervisor, dataScenarioSupervisor);
      //  animateKPI("wa-kpi-liaison-officer-load-factor", dataLiaison, dataScenarioLiaison);
      //  animateKPI("wa-kpi-call-taker-load-factor", dataCaller, dataScenarioCaller);

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


