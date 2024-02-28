import nbviz from './nbviz_core.mjs';

// ...

// Once this module is first imported, callbacks are updated
nbviz.callbacks.push(() => {
    let data = nbviz.getCountryData();
    updateBarChart(data);
});
