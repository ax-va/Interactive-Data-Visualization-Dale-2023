# Interactive Data Visualization with D3

These examples on Interactive Data Visualization in the web browser using **Flask** RESTful API and **D3.js** are compiled with some modifications from the book *"Data Visualization with Python and JavaScript: Scrape, Clean, Explore, and Transform Your Data"*, Second Edition, written by Kyran Dale and published by *O'Reilly Media* in 2023. Some of them with **D3.js** are also duplicated on my [VizHub](https://vizhub.com/ax-va). The examples related to **Flask**, **SQLAlchemy**, and **marshmallow**, and also **MongoDB**, **BeautifulSoup** (**bs4**), **Scrapy**, and **pandas** were moved to my other [repository](https://github.com/ax-va/Python-Example-Collection).

In the book, Kyran Dale presents two web applications. The first one is built on **Flask** and is a RESTful API for communication between the database and other web applications. The second one is responsible for fetching the data and their interactive visualization. Those represent the microservice architecture.

<p align="center">
  <img src="/dataviz-toolchain.png" width="700"/>
</p>

The content of this repository is mainly front-end oriented and consists of two parts: a short introduction to **JavaScript**, **HTML**, **CSS**, **Flex**, **SVG**, **Plotly**, and **D3.js** in the **sandbox** folder and a final visualization project in the **final_viz** folder.
The **final_viz** project with local data in JSON files (without using **Flask** and any database) running on a local HTTP server is shown in the image below.

```unix
.../project/final_viz$ python -m http.server 8080
```

<p align="center">
  <img src="https://github.com/ax-va/Interactive-Data-Visualization-Dale-2023/blob/main/final_viz.png" width="900" />
</p>

## Original code by Kyran Dale
https://github.com/Kyrand/dataviz-with-python-and-js-ed-2

## Add JavaScript libs
By using Cloudflare’s Content Delivery Network JS

https://cdnjs.com/libraries/d3

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js" charset="utf-8"></script>
```
or by using libraries placed locally
```
project/
|--static/
   |--libs/
      |--d3.v7.min.js
   |--js/
```
```html
<script src="/static/libs/d3.v7.min.js"></script>
```

## Use JavaScript scripts in Chrome
Start a development server in the **project** directory using Python’s http module:
```unix
python -m http.server 8080
```
Open the browser at:
```
http://localhost:8080/
```
Press `Ctrl+Shift+J` to open the Console tab in Chrome.

Press `Ctrl+C` to stop the web server.

## Chrome
Press `Ctrl+Shift+I` to open the Elements tab (or `More Tools -> Developer Tools / Weitere Tools -> Entwicklertools`).

## Jupyter
Start Jupyter notebooks:
```unix
$ jupyter notebook
```

## Install TopoJSON globally

preconditions:
```unix
$ sudo apt update
$ sudo apt install npm
```

source: https://github.com/topojson/topojson-server/tree/master
```unix
$ sudo npm install -g topojson-server
```

## Convert an input GeoJSON into an output TopoJSON
```unix
$ geo2topo geo_input.json > topo_output.json
```
You can also use the Python's `topojson` package.
