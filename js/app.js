$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd")
        }
    })
})


$(document).ready(function(){

    var svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

  // Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(70)
  .center([0,20])
  .translate([width / 2, height / 2]);

  var files = ["data/districts.json"];
  var promises = [];
  files.forEach(function(url) {
    promises.push(d3.json(url))
    });

  console.log('stigo')

  Promise.all(promises).then(function(values) {
    svg.append("g")
    .selectAll("path")
    .data(values)
    .enter()
    .append("path")
      // draw each country
      .attr("d", d3.geoPath()(topojson.mesh(values.objects))
      )
    });

    console.log('stigo')
})


/*
$(document).ready(function(){
    var width = 1160,
    height = 960;

    const svg = d3.select("svg");
    const path = d3.geoPath();
    

    d3.json("data/districts.json")
  .then(barcelona => {
    svg
      .append('path')
      .attr('d', d3.geoPath()(topojson.mesh(barcelona)))
      .attr('fill', 'red')
      .attr('stroke', 'gray')
  })
  .catch(err => console.warn(err));
  
})
*/


