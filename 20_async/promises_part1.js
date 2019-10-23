const promise = new Promise((resolve, reject) => {
      if (true) {
        resolve('stuff worked');
      } else {
        reject('Error, it broke');
      }
    });
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'hiii');
    });
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 'Pookie');
    });
    const promise4 = new Promise((resolve, reject) => {
      setTimeout(resolve, 3000, 'Lets dance');
    });

    Promise.all([promise,promise2,promise3,promise4])
      .then(values => {
        console.log(values);
      })
    promise
      .then(result => {
        if (Date.now() % 2 !== 0) throw new Error('result one');
        return result + '!';
      })
      .then(result2 => {
        if (Date.now() % 2 !== 0) throw new Error('result two');
        return result2 + '?';
      })
      .then(result3 => {
        return result3 + '$';
      })
      .then(res => {
        console.log(res);
      })
      .then(result3 => {
        return result3 + '$';
      });
