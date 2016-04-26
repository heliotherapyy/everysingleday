// var dataset = [ 5, 10, 15, 20, 25 ];

// var globalSetting = {
// 	WIDTH: window.innerWidth,
// 	HEIGHT: window.innerHeight
// };

// var svg = d3.select("body")
//             .append("svg")
//             .attr("width", globalSetting.WIDTH)
//             .attr("height", globalSetting.HEIGHT)
//             .attr("fill", "pink");

// var circle = svg.selectAll("circle")
//                 .data(dataset)
//                 .enter()
//                 .append("circle");

// circle.attr("cx", function(d) {return d * 10;})
//       .attr("cy", function(d) {return d * 30;})
//       .attr("r", 10);

// svg.append("text").text("hello world").transition().duration(1000).attr("x", 10).attr("y",80);

// circle.attr("fill", "violet")
// 	  .transition().duration(1500).ease("bounce").attr("cy", 50)
//       .transition().ease("back").attr("r", 30).duration(600);

var dataset = [0, 1];

var globalSetting = {
	WIDTH: window.innerWidth,
	HEIGHT: window.innerHeight,
	DURATION: 1000
};



var body = d3.select("body");
body.transition().duration(globalSetting.DURATION).ease("ease-in-out")
    .style("background-color", "red");

var p = body.append("div")
			  .text("Welcome")
			  .style("opacity", "0").style("color", "red")
        .style("width", "200px")
        .style("height", "50px")
        .style("position" ,"absolute")
        .style("top", "50%")
        .style("margin-top", "-50px")
        .style("left", "50%")
        .style("margin-left", "-100px")
        .style("text-align", "center")
              .transition().duration(globalSetting.DURATION + 1000).ease("cubic")
        .style("color", "white")
        .style("opacity", 0.95);

var svg = d3.select("body").append("svg").attr("fill", "pink")
                                         .attr("width", globalSetting.WIDTH)
                                         .attr("height", globalSetting.HEIGHT);

var circle = svg.selectAll("circle").data(dataset)
                .enter( function(d) { return d[Math.floor(Math.random() * 1)]; })
                .append("circle")
                .attr("cx", "200").attr("cy", "200").attr("r", 30)
circle.transition().duration(1000).ease("bounce").attr("cx", 1500).attr("cy", 50)

