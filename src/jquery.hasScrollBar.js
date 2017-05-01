/*----------------------------------------------------------------------------*\
 # Copyright 2017, BuzzingPixel, LLC

 # This program is free software: you can redistribute it and/or modify
 # it under the terms of the Apache License 2.0.
 # http://www.apache.org/licenses/LICENSE-2.0
 \*----------------------------------------------------------------------------*/

function runFabJqueryHasScrollBar() {
    'use strict';

    if (window.jQuery === undefined) {
        setTimeout(function() {
            runFabJqueryHasScrollBar();
        }, 10);
        return;
    }

    window.jQuery.fn.hasScrollBar = function() {
        if (! this.get(0)) {
            return false;
        }

        return this.get(0).scrollHeight > this.height();
    };
}

runFabJqueryHasScrollBar();
