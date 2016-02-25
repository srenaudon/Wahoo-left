/*=========================================================================
 *  THALES (R)  EC3
 *
 *  Copyright (c) THALES 2003-2016 All rights reserved
 *  This file and the information it contains are property of THALES
 *  and confidential. They shall not be reproduced nor disclosed to
 *  any person except to those having a need to know them without
 *  prior written consent of THALES.
 *=========================================================================*/
/* Activity KPI */
(function () {
    $(function () {
        var kpiAnchor = 'wa-kpi-activity';
        var data = new kendo.data.ObservableArray(dataScenario[0]);

        function createKPI(anchor) {
            $("#" + anchor).kendoChart({
                dataSource: {
                    data: data
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        color: waEC3.config.style.color
                    }

                },
                chartArea: {
                    background: ''
                },
                seriesDefaults: {
                    type: 'line',
                    style: 'smooth'
                },
                series: [{
                    name: 'Alarm',
                    field: 'alarm',
                    color: waEC3.config.kpi.activity.alarmColor
                }, {
                    name: 'Event',
                    field: 'event',
                    color: waEC3.config.kpi.activity.eventColor
                }, {
                    name: 'Crisis',
                    field: 'crisis',
                    color: waEC3.config.kpi.activity.crisisColor
                }],
                valueAxis: {
                    labels: {
                        format: '{0}',
                        color: waEC3.config.style.color
                    },
                    line: {
                        visible: false
                    },
                    plotBands: [{
                        from: 25,
                        to: 50,
                        color: waEC3.config.style.colorNOK,
                        opacity: 0.3
                    }]
                    ,
                    axisCrossingValue: 0
                },
                categoryAxis: {
                    title: {
                        text: 'last hour',
                        color: waEC3.config.style.color
                    },
                    categories: [-60,-55,-50,-45,-40,-35,-30,-25,-20,-15,-10,-5,0],
                    majorGridLines: {
                        visible: false
                    },
                    labels: {
                        rotation: 'auto',
                        color: waEC3.config.style.color
                    }
                },
                tooltip: {
                    visible: true,
                    format: '{0}',
                    template: '#= series.name #: #= value #'
                }
            });
        }

        function animateKPI(anchor,data){

            var count=0;
            setInterval(function(){
                count++;
                if(count>5){
                    count=1;
                }
                data.splice(0,1);
                data.push({
                    alarm: 10+count,
                    event: 3+count,
                    crisis:0
                });

            },(waEC3.config.kpi.animationStep*300));//change every 5 min

        }

        createKPI(kpiAnchor);
        //Do not animate
        //animateKPI(kpiAnchor,data);

    });

/* data for demo scenario */

    var dataScenario = [[
        {
            alarm: 10,
            event: 12,
            crisis: 1
        },
        {
            alarm: 11,
            event: 8,
            crisis: 1
        },
        {
            alarm: 12,
            event: 5,
            crisis: 0
        },
        {
            alarm: 15,
            event: 6,
            crisis: 0
        }
        ,
        {
            alarm: 20,
            event: 7,
            crisis: 0
        },
        {
            alarm: 30,
            event: 10,
            crisis: 1
        },
        {
            alarm: 40,
            event: 15,
            crisis: 2
        },
        {
            alarm: 15,
            event: 10,
            crisis: 1
        },
        {
            alarm: 10,
            event: 7,
            crisis: 1
        },
        {
            alarm: 7,
            event: 5,
            crisis: 1
        },
        {
            alarm: 10,
            event: 4,
            crisis: 1
        },
        {
            alarm: 6,
            event: 5,
            crisis: 0
        },
        {
            alarm: 10,
            event: 3,
            crisis: 0
        }
    ]
    ];

})();


