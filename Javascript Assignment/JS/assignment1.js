function clickhere(){
    var message = document.getElementById("txtid").value;
    let x = document.getElementById("PrintMessage");
    x.innerHTML = message;

    var time = document.getElementById("dropdown").value;
    time = time * 1000;
    console.log(time);
    console.log(typeof(time));

    setInterval(() => {
        x.innerHTML = x.innerHTML + "<br>" + message;
    }, time);
}
