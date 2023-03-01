function calculate() {
  let amount = prompt("Enter amount");

  let rate = prompt("Enter interest rate (%)");

  let months = prompt("Enter months to pay");
  // Tính lái suất hàng tháng
  const interest = (amount * (rate * 0.01)) / months;
  // Tính tổng tiền phải trả một tháng
  const total = (amount / months + interest).toFixed(2);

  // Alert kết quả
  alert("EMI: " + total);
}
