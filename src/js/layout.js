/*=========================================================================
 *  THALES (R)  EC3
 *
 *  Copyright (c) THALES 2003-2016 All rights reserved
 *  This file and the information it contains are property of THALES
 *  and confidential. They shall not be reproduced nor disclosed to
 *  any person except to those having a need to know them without
 *  prior written consent of THALES.
 *=========================================================================*/
(function () {
    $(function () {

        //layout init
        var gridster = $(".wa-grid ul").gridster({
            widget_base_dimensions: [waEC3.config.layout.cellWidth, waEC3.config.layout.cellHeight],
            widget_margins: [waEC3.config.layout.cellMargin, waEC3.config.layout.cellMargin],
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