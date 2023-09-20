// obsolete-modular pattern before the ECMAScript 6’s import system arrived
(function(nbviz) { // 1) Receives the global nbviz object
    'use strict';
    // ...
    // 2) Attaches the updateTimeChart method to the global nbviz object,
    // effectively exporting it
    nbviz.updateTimeChart = function(data) {/* ... */}
    // ...
// 3) If an nbviz object exists in the global (window) namespace,
// pass it into the module function;
// otherwise, add it to the global namespace
}(window.nbviz = window.nbviz || {}));