// See https://vizhub.com/ax-va/e3928e2dbb0e47e2b30a639f3a916430

d3.select("#silly-list")
  .insert("li", ":first-child")
  .text("Inserted at the beginning")
  .style("color", "red");

d3.select("#silly-list")
  .insert("li", "#item-2")
  .text("Inserted before '#item-2'")
  .style("color", "green");

d3.select("#silly-list")
  .insert("li")
  .text("Appended to the end")
  .style("color", "blue");