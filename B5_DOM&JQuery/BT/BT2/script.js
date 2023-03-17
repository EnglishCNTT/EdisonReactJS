const btnCal = $(".btn");

btnCal.click(function () {

    const loan = $("#loan").val();
    const interest = $("#interest").val() / 100 / 12;
    const time = $("#time").val() * 12;

    const x = Math.pow(1 + interest, time);
    const monthlyPayment = ((loan * x * interest) / (x - 1));
    const totalToPay = monthlyPayment * time;
    const totalInterest = totalToPay - loan;

    const output_MonthlyPayment = $("#output1");
    const output_TotalToPay = $("#output2");
    const output_TotalInterest = $("#output3");

    output_MonthlyPayment.text(monthlyPayment.toFixed(2))
    output_TotalToPay.text(totalToPay.toFixed(2))
    output_TotalInterest.text(totalInterest.toFixed(2))
})