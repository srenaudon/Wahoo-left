(function () {
    $(function () {

        //layout init
        var gridster = $(".wa-grid ul").gridster({
            widget_base_dimensions: [waEC3.config.layout.screenWidth, waEC3.config.layout.screenHeight],
            widget_margins: [waEC3.config.layout.margin, waEC3.config.layout.margin],
            extra_rows: 0,
            extra_rows: 0,
            extra_cols: 0,
            helper: 'clone'
        }).data('gridster');


        // resize widgets on hover
        gridster.$el
         .on('mouseenter', '> li', function() {
            kendo.fx($(this)).zoom('in').startValue(1).endValue(waEC3.config.layout.hoverZoomFactor).play();
         })
         .on('mouseleave', '> li', function() {
             kendo.fx($(this)).zoom('out').endValue(1).startValue(waEC3.config.layout.hoverZoomFactor).play();
         });
    });

})();