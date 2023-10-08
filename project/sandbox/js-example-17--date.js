let d = new Date('2021-11-16T22:55:48.738105');
console.log('Date: ' + d);
// Date: Tue Nov 16 2021 22:55:48 GMT+0100 (Mitteleuropäische Normalzeit)

// Return the datetime to ISO 8601 string
console.log('d.toISOString: ' + d.toISOString());
// d.toISOString: 2021-11-16T21:55:48.738Z
// Microseconds are lost.