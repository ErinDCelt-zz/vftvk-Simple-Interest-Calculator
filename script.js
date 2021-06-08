
const compute = () => {

    var p = document.getElementById("principal").value;

    var r = document.getElementById("rate").value;

    var y = document.getElementById("years").value;

    var dateobj = new Date();
    var B = dateobj.getFullYear();
    var year = B + y;

    var interest = (p * r * y) / 100;

    var amt = interest;
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit $" + p + "  at an interest rate of " + r + "%.  You will receive an amount of $" + amt + ",  in the year"+ year;

}

function num() {
    var v = document.getElementById("principal").value;

    if (v <= 0) {
        alert("Value should be a positive number");
    } else {
        var i = v;
        while (i <= 0) {
            text += "<br> The number is  " + i;
            i++;
            if (i >= 0) {
                break
            }
        }

    }
}

    function sliderChange(val) {
        document.getElementById("rate").value = val;
    }
