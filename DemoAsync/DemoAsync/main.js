/**
 * 1. callback function
 * 2. promise
 * 3. async await
 */

// function TheFirst() {
//   setTimeout(() => {
//     console.log("The first");
//   }, 0);
// }

// function TheSecond() {
//   console.log("The second");
// }

// TheFirst();
// TheSecond();

let cong = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 4000);
};

// cong(1, 2, result => {
//   console.log(result);
// });

let nhan = (a, b, callback) => {
  setTimeout(() => {
    callback(a * b);
  }, 1000);
};

let chia = (a, b, callback) => {
  setTimeout(() => {
    callback(a / b);
  }, 1000);
};

let tinhDienTich = (a, b, h, callback) => {
  cong(a, b, result => {
    nhan(result, h, result => {
      chia(result, 2, result => {
        callback(result);
      });
    });
  });
};

tinhDienTich(2, 3, 2, result => {
  console.log("dien tich:", result);
});
