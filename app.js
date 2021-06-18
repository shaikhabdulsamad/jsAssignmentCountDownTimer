
var setDate = new Date("21 july, 2021").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var diff = setDate - now
    var days = Math.floor(diff / (1000 * 60 * 60 * 24))
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var mints = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    var sec = Math.floor((diff % (1000 * 60)) / 1000)



    document.getElementById('show').innerHTML = days + " : " + hours + " : " + mints + " : " + sec 
    document.getElementById('show2').innerHTML = "Day | Hour | Mint | Sec"
     
    if (diff < 0) {
        clearInterval(x);
        document.getElementById('show').innerHTML = "EID MUBARAK!";
    }
}, 1000)



