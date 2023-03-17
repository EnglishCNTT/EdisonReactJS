const btnBMI = $("#calculator")

btnBMI.click(function () {
    var height = $("#height").val();
    var weight = $("#weight").val();
    var status = "";
    var result = (weight / (height * height)).toFixed(2);
    if (getGender() == 'Nam') {
        status += result < 20.7 ? "Gầy" :
            result >= 20.7 && result < 26.4 ? "Bình thường" :
                result >= 26.4 && result < 27.8 ? "Thừa cân nhẹ" :
                    result >= 26.4 && result < 31.1 ? "Thừa cân nhẹ" : "Béo phì"
    }
    else {
        status += result < 19.1 ? "Gầy" :
            result >= 19.1 && result < 25.8 ? "Bình thường" :
                result >= 25.8 && result < 27.3 ? "Thừa cân nhẹ" :
                    result >= 27.3 && result < 32.3 ? "Thừa cân nhẹ" : "Béo phì"
    }
    $("#resultBmi").text(result + " | " + status)
})

function getGender() {
    var gender = document.getElementsByName('gender');
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            return gender[i].value
    }
}


