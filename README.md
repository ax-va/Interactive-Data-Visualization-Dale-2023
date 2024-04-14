# Interactive-Data-Visualization-Dale-2023

These examples on Interactive Data Visualization in the browser using `Flask` and `D3.js` are compiled with some modifications from the book "Data Visualization with Python and JavaScript: Cleaning, Cleaning, Exploring, and Transforming Your Data" by Kyran Dale, published by O'Reilly Media in 2023. Some of them with `D3.js` are also duplicated on my [VizHub](https://vizhub.com/ax-va). The examples related to `Flask`, `SQLAlchemy`, `marshmallow`, and also `MongoDB` were moved to [another repository](https://github.com/ax-va/Python-Topics/tree/main/topics).

<p align="center">
  <img src="https://github.com/ax-va/Interactive-Data-Visualization-Dale-2023/blob/main/data_viz.png" width="700" />
</p>

The content consists of two parts: an introduction into `JavaScript`, `HTML`, `CSS`, `Flex`, `SVG`, `Plotly`, and `D3.js` in the `sandbox` folder and a final visualization project in the `final_viz` folder.
The `final_viz` project with local data running on the web server is shown in the image below.

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
Start a development server in the `project` directory using Python’s http module:
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

## PEP8 Online
http://pep8online.com/

## Fetch API
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## OOP, JavaScript, and so-called Classes, Reginald Braithwaite
"The difference between a prototype and a class is similar to the difference between a model home and a blueprint for a home"
https://raganwald.com/2015/05/11/javascript-classes.html

## SQLAlchemy
https://www.sqlalchemy.org/library.html#reference

## SQLAlchemy 1.4 documentation
https://docs.sqlalchemy.org/en/14/index.html

## SQLAlchemy 2.0 documentation
https://docs.sqlalchemy.org/en/20/index.html

## SQLAlchemy 1.4 engine configuration
https://docs.sqlalchemy.org/en/14/core/engines.html

## SQLAlchemy 2.0 engine configuration
https://docs.sqlalchemy.org/en/20/core/engines.html

## SQLAlchemy 1.4 declarative mapping
https://docs.sqlalchemy.org/en/14/orm/mapping_styles.html#declarative-mapping

## SQLAlchemy 2.0 declarative mapping
https://docs.sqlalchemy.org/en/20/orm/mapping_styles.html#declarative-mapping

## SQLAlchemy querying methods
https://docs.sqlalchemy.org/en/20/orm/queryguide/query.html

## Dataset website
https://dataset.readthedocs.io/en/latest/

## MongoDB: explaining BSON with examples
https://www.mongodb.com/basics/bson

## MongoDB: query documentations
https://www.mongodb.com/docs/manual/tutorial/query-documents/

## International Standard Organization (ISO) 8601 time format
https://en.wikipedia.org/wiki/ISO_8601

## Coordinated Universal Time (UTC)
https://en.wikipedia.org/wiki/Coordinated_Universal_Time

## Chrome DevTools
https://developer.chrome.com/docs/devtools/

## CSS grid layout
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

## A Complete Guide to Flexbox 
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## CSS Flexbox Cheatsheet
https://flexboxsheet.com

## Paths, arcs
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#arcs

## A Closer Look at SVG Path Data
https://www.sitepoint.com/closer-look-svg-path-data/

## Paths
https://www.w3.org/TR/SVG/paths.html

## SVG path element 
https://jenkov.com/tutorials/svg/path-element.html

## Python requests
https://requests.readthedocs.io/en/latest/

## Python requests quickstart
https://requests.readthedocs.io/en/latest/user/quickstart/

## Python guide gotchas
https://docs.python-guide.org/writing/gotchas/

## pandaSDMX
https://pypi.org/project/pandaSDMX/

## Beautiful Soup filters
https://www.crummy.com/software/BeautifulSoup/bs4/doc/#kinds-of-filters

## Beautiful Soup: find_parents and find_parent
https://www.crummy.com/software/BeautifulSoup/bs4/doc/#find-parents-and-find-parent

## Xpath
https://devhints.io/xpath

## Scrapy
https://doc.scrapy.org/en/latest/topics

## The N-dimensional array (ndarray)
https://numpy.org/doc/stable/reference/arrays.ndarray.html

## Mathematical functions in NumPy
https://numpy.org/doc/stable/reference/routines.math.html

## Flask
https://flask.palletsprojects.com/en/3.0.x/

## Jinja
https://jinja.palletsprojects.com/en/latest/

## Flask-SQLAlchemy
https://flask-sqlalchemy.palletsprojects.com/en/3.1.x/

## marshmallow: simplified object serialization
https://marshmallow.readthedocs.io/en/stable/

## Flask-Marshmallow
https://flask-marshmallow.readthedocs.io/en/latest/

## marshmallow-sqlalchemy
https://marshmallow-sqlalchemy.readthedocs.io/en/latest/

## Heroku (not free for deployment)
https://www.heroku.com/

## Plotly Express
https://plotly.com/python/plotly-express/

## Plotly lines
https://plotly.com/python/reference/layout/shapes/#layout-shapes-items-shape-line

## Plotly Mapbox Layers
https://plotly.com/python/mapbox-layers/

## Plotly.js functions
https://plotly.com/javascript/plotlyjs-function-reference/

## Mapbox Access Tokens
https://plotly.com/python/mapbox-layers/#mapbox-access-tokens-and-when-you-need-them

## Custom Controls in Plotly
https://plotly.com/python/#controls

## Geopy
https://geopy.readthedocs.io/en/latest/

## D3.js d3.rollup
https://observablehq.com/@d3/d3-group

## Bootstrap (CSS lib)
https://getbootstrap.com/

## Crossfilter
http://crossfilter.github.io/crossfilter/

## TopoJSON
https://github.com/topojson/topojson/blob/master/README.md

## TopoJSON Latest Release
https://github.com/topojson/topojson/releases/tag/v3.0.2

## JavaScript's const
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

## Codepen: online editor for frontend code
https://codepen.io/

## VizHub with an online editor
https://vizhub.com/

## Simple example of reusable D3 plugin
https://gist.github.com/cpbotha/5073718

## D3 data() and join()
https://d3js.org/d3-selection/joining

## D3 data()'s key function
https://bost.ocks.org/mike/selection/#key

## D3 transition's demonstration by Mike Bostock
https://bost.ocks.org/mike/constancy/

## D3 ease
https://github.com/d3/d3-ease#easeCubic

https://easings.net/

https://observablehq.com/@d3/easing

## JavaScript: destructuring assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

## TopoJSON
https://github.com/topojson/topojson-server/tree/master

## topojson.py
https://github.com/mattijn/topojson

## Projection extensions for D3
https://github.com/d3/d3-geo-projection

## D3 examples gallery
https://observablehq.com/@d3/gallery

## Numeric and Scientific Python Packages+ collection
https://wiki.python.org/moin/NumericAndScientific

## Jupyter Notebook collection
https://github.com/jupyter/jupyter/wiki
