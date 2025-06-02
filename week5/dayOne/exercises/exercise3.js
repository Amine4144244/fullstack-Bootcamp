const resolvedPromise = Promise.resolve(3);
resolvedPromise.then(result => console.log('Resolved with:', result));

const rejectedPromise = Promise.reject('Boo!');
rejectedPromise.catch(error => console.log('Rejected with:', error));
