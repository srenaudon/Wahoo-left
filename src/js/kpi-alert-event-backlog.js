/* KPI Backlog  */
(function () {
    $(function () {

        var kpiAnchor = 'wa-kpi-alert-event-backlog';

        function createKPI(anchor) {

            $("#" + anchor).kendoChart({

                legend: {
                    visible: false
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
                    notes: {
                        position: "bottom",
                        label: {
                            template: "#= series.stack.group #",
                            visible: true,
                            format: '{0}',
                            position: 'outside'
                        }
                    }
                },
                tooltip: {
                    visible: true,
                    template: "#= series.stack.group #,  #= series.name #"
                },
                chartArea: {
                    background: ''
                }
            });
        }

        createKPI(kpiAnchor);

    });


})();


