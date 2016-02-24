// global settings
window.waEC3 = {};
window.waEC3.config = {
    style: {
        color: '#fff'//characters color
    },
    layout: { //layout settings
        screenWidth: 620, // available screen width for dashboard (px)
        screenHeight: 280,// available screen height for dashboard (px)
        margin: 10,// margin between kpi (px)
        hoverZoomFactor: 1.05,//kpi zoom emphasis on hover
    },
    kpi: {
        animationStep:1000,
        activity: {
            //chart lines color by type
            alarmColor: 'GoldenRod',
            eventColor: 'DarkOrange',
            crisisColor: 'DarkRed'
        }
    }
};

/* emphasis on KPI threshold alert */
function alertKPI(anchor, start, alertInterval) {
    var interval;
    if (start) {
        interval = setInterval(function () {
                var elem = $("#" + anchor);
                elem.addClass("wa-kpi-alert");
                kendo.fx(elem).fade('out').startValue(1).endValue(0.1).duration(1500).play();

                setTimeout(function () {

                    kendo.fx(elem).fade('in').startValue(0.2).endValue(1).duration(500).play();
                    elem.removeClass("wa-kpi-alert");

                }, 1500);
            }
            , 3000);
    } else {

        clearInterval(alertInterval);
        $("#" + anchor).removeClass("wa-kpi-alert");
    }
    return interval;
}
