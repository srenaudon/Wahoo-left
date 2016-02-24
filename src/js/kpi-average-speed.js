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
                    minorUnit: 5,
                    startAngle: -20,
                    endAngle: 200,
                    max: 160,
                    ranges: [{
                        from: 0,
                        to: 100,
                        color: waEC3.config.style.colorOK
                    },{
                        from: 100,
                        to: 120,
                        color: waEC3.config.style.colorWatch
                    },
                        {
                            from: 120,
                            to: 160,
                            color: waEC3.config.style.colorNOK
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
                if(dataScenario[count][0] >= 120){
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

    var dataScenario = [[100],[120],[100],[90],[80],[70],[80],[90],[95]];

})();

