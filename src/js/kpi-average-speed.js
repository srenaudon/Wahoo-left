/*=========================================================================
 *  THALES (R)  EC3
 *
 *  Copyright (c) THALES 2003-2016 All rights reserved
 *  This file and the information it contains are property of THALES
 *  and confidential. They shall not be reproduced nor disclosed to
 *  any person except to those having a need to know them without
 *  prior written consent of THALES.
 *=========================================================================*/
/* Average speed KPI */
(function () {
    $(function () {

        var kpiAnchor = 'wa-kpi-average-speed';

        var data = new kendo.data.ObservableArray(dataScenario[0]);

        function createKPI(anchor) {

            $("#" + anchor).kendoRadialGauge({

                pointer: {
                    value: data[0]
                },

                scale: {
                    labels: {
                        color: waEC3.config.style.color
                    },
                    majorTicks:{
                        color: waEC3.config.style.color

                    },
                    minorTicks:{
                        color: waEC3.config.style.color

                    },
                    minorUnit: 5,
                    startAngle: -20,
                    endAngle: 200,
                    max: 60,
                    ranges: [{
                        from: 0,
                        to: 20,
                        color: waEC3.config.style.colorNOK
                    },{
                        from: 20,
                        to: 40,
                        color: waEC3.config.style.colorWatch
                    },
                        {
                            from: 40,
                            to: 60,
                            color: waEC3.config.style.colorOK
                        }],

                    labels: {
                        color: waEC3.config.style.color,
                        border: {
                            color: waEC3.config.style.color
                        }
                    }
                }

            });

        }

        function animateKPI(anchor,data){
            var intervalID;
            var count=0;
            setInterval(function(){
                count++;
                if(count>8){
                    count=0;
                }
                if(dataScenario[count][0] <= 20){
                    intervalID = alertKPI(anchor,true);
                }else{
                    alertKPI(anchor,false,intervalID);
                }
                $("#" + anchor).data('kendoRadialGauge').value(dataScenario[count][0]);

            },(waEC3.config.kpi.animationStep*60));//change every min


        }

        createKPI(kpiAnchor);
        animateKPI(kpiAnchor,data);

    });

/* data for demo scenario */

    var dataScenario = [[30],[20],[40],[50],[45],[35],[20],[15],[30]];

})();


