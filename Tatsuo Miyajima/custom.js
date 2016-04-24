// function increment() {
//     var list = document.body.getElementsByTagName('div');
//     for (var i = 0 ; i < list.length ; i++) {
//         var number = list[i].innerHTML;
//         number = Number(number) + 1;

//         // Maintain single digit number
//         if (number === 10)
//             number = 0;

//         list[i].innerHTML = number;
//     }
// }

// function toggleView() {
//     var list = document.body.getElementsByTagName('div');

//     function createBoolean() {
//         // Increase the probability of true being picked
//         var options = ["inline-block", "inline-block", "none", "inline-block"];
//         return options[Math.round(3 * Math.random())];
//     }

//     var randomBoolean = createBoolean();
//     var randomNum = randomizer();

//     list.item(randomNum).style.display = createBoolean();

//     // creates a random number between
//     function randomizer() {
//         var number;
//         number = Math.round(9* Math.random());
//         return number;
//     }

//     console.log('done');
// }

// setInterval(increment, 100);
// setInterval(toggleView, 500);

var dataset = [ 5, 10, 15, 20, 25 ];
var svg = d3.select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500)
            .attr("fill", "pink");

var circle = svg.selectAll("circle")
                .data(dataset)
                .enter()
                .append("circle");

circle.attr("cx", function(d) {return d * 10;})
      .attr("cy", function(d) {return d * 5;})
      .attr("r", 10);

svg.append("text").text("hello world").attr("x", 10).attr("y",80);

circle.attr("fill", "violet").transition().duration(2000).ease("bounce").attr("cy", 50).transition().ease("back").attr("r", 30).duration(600);
















