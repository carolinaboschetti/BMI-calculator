function bmi () {
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
    var result = weight / (height * height);
    var finalResult = Math.round(result*10)/10;
    document.getElementById("result").innerHTML = "Your BMI score is : " + finalResult;
}
