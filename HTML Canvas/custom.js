window.onload = function() {
    canvasApp();
};

var canvasApp = function() {
   theCanvas = document.getElementById("canvasOne");
   var context = theCanvas.getContext("2d");

   (function drawScreen() {
        // context.strokeStyle = "blue";
        // context.lineWidth = 10;
        // context.lineCap = 'square';
        // context.beginPath();
        // context.moveTo(20,500);
        // context.lineTo(1000,300);
        // context.stroke();
        // context.closePath();

        context.setTransform(1,0,0,1,0,0);
        var angleInRadians = 45 * (Math.PI/180);
        context.translate(625, 625);
        context.rotate(angleInRadians);
        context.fillStyle = "red";
        context.fillRect(-100,-100,200,200);
    })();


};