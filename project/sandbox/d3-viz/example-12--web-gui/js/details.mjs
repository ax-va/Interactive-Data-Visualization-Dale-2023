import core from "./core.mjs";

let updateList = function (data) {
  let tableBody, rows, cells;
  // Sort the winners' data by year
  data = data.sort(function (a, b) {
    return +b.year - +a.year;
  });

  // Bind winners' data to the table rows

  tableBody = d3.select("#nobel-list tbody");
  rows = tableBody.selectAll("tr").data(data);

  // Fade out excess rows over 2 seconds

  rows.join(
    (enter) => {
      return enter
        .append("tr")
        .on("click", function (event, d) {
          // click-handler function
          console.log("You clicked a row " + JSON.stringify(d));
          // Update the biography box
          displayWinner(d);
        });
    },
    (update) => update,
    (exit) => {
      return exit
        .transition()
        .duration(core.TRANSITION_DURATION)
        .style("opacity", 0)
        .remove();
    }
  );

  cells = tableBody
    .selectAll("tr")
    .selectAll("td")
    .data(function (d) {
      return [d.year, d.category, d.name];
    });

  // Append data cells, then set their text
  cells
    .join("td")
    .text((d) => d);

  // Display a random winner if data is available
  if (data.length) {
    displayWinner(
      data[Math.floor(Math.random() * data.length)]
    );
  }
};

let displayWinner = function (wData) {
  let nw = d3.select("#nobel-winner");
  if (core.COLORED_TEXT_BY_CATEGORIES == "yes") {
    nw.style("color", core.categoryFill(wData.category));
  }
  else {
    nw.style("color", "black");
  }

  nw.select("#winner-title").text(wData.name);

  nw.selectAll(".property span").text(function (d) {
    var property = d3.select(this).attr("name");
    return wData[property];
  });

  nw.select("#biography-box").html("<p>SOME BIOGRAPHY WILL BE GIVEN HERE</p>");

  // Add a picture if available, otherwise remove the old one
  if (wData.image_urls) {
    // A picture is available
    nw.select("#picture-box img")
      .attr("src", wData.image_urls[0])
      .style("display", "inline");
  }
  else {
    // No picture is available
    nw.select("#picture-box img")
      .style("display", "none");
  }

  nw.select("#readmore a")
    .attr("href", "http://en.wikipedia.org/wiki/" + wData.name);
};

core.callbacks.push(() => {
  // This function is called in the "core" module when data is updated
  let data = core.countryDim.top(Infinity);
  updateList(data);
});
