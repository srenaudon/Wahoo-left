/*=========================================================================
 *  THALES (R)  EC3
 *
 *  Copyright (c) THALES 2003-2016 All rights reserved
 *  This file and the information it contains are property of THALES
 *  and confidential. They shall not be reproduced nor disclosed to
 *  any person except to those having a need to know them without
 *  prior written consent of THALES.
 *=========================================================================*/
/* KPI Active taxis  */
(function () {
    $(function () {

        var kpiAnchor = 'wa-kpi-active-taxi';

        function createKPI(anchor) {

            $("#" + anchor).kendoChart({

                legend: {
                    position: "bottom",
                    labels: {
                        color: waEC3.config.style.color
                    }

                },
                chartArea: {
                    background: ""
                },
                seriesDefaults: {

                    style: "smooth"
                },
                series: [{
                    type: "line",
                    name: "actual taxi trips",
                    data: [700, 800, 700, 750, 900, 1000, 1700, 2100, 2000, 1900, 1800, 1319, 1450, 1800, 1900, 2000]//, 2300, 2000, 1900, 1300, 1100, 800, 700, 500]
                },
                    {
                        type: "column",
                        opacity: 0.3,
                        name: "average taxi trips",
                        data: [500, 500, 600, 600, 800, 1000, 2000, 2200, 2200, 1700, 1300, 1000, 1000, 1500, 2000, 2000, 2500, 2500, 1800, 1800, 900, 900, 500, 500]
                    }],
                valueAxis: {
                    labels: {
                        format: "{0}",
                        color: waEC3.config.style.color
                    },
                    line: {
                        visible: false
                    },
                    axisCrossingValue: 0
                },
                categoryAxis: {
                    categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                    majorGridLines: {
                        visible: false
                    },
                    labels: {
                        rotation: "auto",
                        color: waEC3.config.style.color
                    }
                },
                tooltip: {
                    visible: true,
                    format: "{0}",
                    template: "#= series.name #: #= value #"
                }

            });
        }

        createKPI(kpiAnchor);

    });


})();


