window.onload = function () {
    var img = document.getElementById("popdog1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio('pop.mp3');

    // mouseclick 
    img.addEventListener('mousedown', function () {
        increaseScore();
        img.src = 'popdog2-removebg.png';
        audio.play();
    });

    img.addEventListener('mouseup', function () {
        img.src = 'popdog1-removebg.png';
        audio.play();
    });

    function increaseScore() {
        score++;
        count.innerHTML = score;
    }

    // touch
    img.addEventListener("touchstart", function () {
        increaseScore();
        img.src = 'popdog2-removebg.png';
        audio.play();
    });

    img.addEventListener("touchmove", function () {
        img.src = 'popdog1-removebg.png';
        audio.play();
    });
}
