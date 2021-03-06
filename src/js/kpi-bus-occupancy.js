/*=========================================================================
 *  THALES (R)  EC3
 *
 *  Copyright (c) THALES 2003-2016 All rights reserved
 *  This file and the information it contains are property of THALES
 *  and confidential. They shall not be reproduced nor disclosed to
 *  any person except to those having a need to know them without
 *  prior written consent of THALES.
 *=========================================================================*/
/* KPI Bus occupancy  */
(function () {
    $(function () {

        var kpiAnchor = 'wa-kpi-bus-occupancy';

        function createKPI(anchor) {

            $("#" + anchor).kendoChart({
                legend: {
                    visible: false
                },
                series: [{
                    type: "bullet",
                    data: [[1450, 1300]],
                    color: waEC3.config.style.colorEc3Blue
                }],
                categoryAxis: {
                    majorGridLines: {
                        visible: false
                    },
                    majorTicks: {
                        visible: false
                    },
                    labels: {
                        color: waEC3.config.style.color
                    }
                },
                valueAxis: [{
                    plotBands: [{
                        from: 0, to: 500, color: waEC3.config.style.colorOK, opacity: .7
                    }, {
                        from: 500, to: 1500, color: waEC3.config.style.colorWatch, opacity: .7
                    }, {
                        from: 1500, to: 2000, color: waEC3.config.style.colorNOK, opacity: .7
                    }],
                    majorGridLines: {
                        visible: false
                    },
                    min: 0,
                    max: 2000,
                    minorTicks: {
                        visible: false
                    },
                    labels: {
                        color: waEC3.config.style.color
                    },
                }],
                chartArea: {
                    background: ""
                },
                tooltip: {
                    visible: true,
                    template: "Average: #= value.target # <br /> Current: #= value.current #"
                }
            });
        }

        createKPI(kpiAnchor);

    });


})();


