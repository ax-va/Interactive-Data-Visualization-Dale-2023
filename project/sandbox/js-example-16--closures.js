function Counter(inc) {
    let count = 0;
    let add = function() {
        count += inc;
        console.log('Current count: ' + count);
    }
    return add;
}

let inc2 = Counter(2);
inc2();
// Current count: 2
inc2();
// Current count: 4
inc2();
// Current count: 6

// API example
function CounterAPI(inc) {
    let count = 0;
    let api = {};
    api.add = function() {
        count += inc;
    }
    api.sub = function() {
        count -= inc;
    }
    api.reset = function() {
        count = 0;
    }
    return api;
}

cntr = CounterAPI(3);
cntr.add(); // count = 3
cntr.add(); // count = 6
cntr.sub(); // count = 3
cntr.reset(); // count = 0