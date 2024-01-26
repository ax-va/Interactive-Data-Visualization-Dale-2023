# Interactive-Data-Visualization-Dale-2023

## Original code by Kyran Dale
https://github.com/Kyrand/dataviz-with-python-and-js-ed-2

## Adding JavaScript libs
By using Cloudflare’s Content Delivery Network JS

https://cdnjs.com/libraries/d3

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js" charset="utf-8"></script>
```
or by using libraries placed locally
```javascript
// project/
// |--static/
//    |----css/
//    |----data/
//    |----libs/
//         |----d3.v7.min.js
//    |--js/
```
```html
<script src="/static/libs/d3.v7.min.js"></script>
```

## Running JavaScript scripts in Chrome
Start a development server in the 'project' directory using Python’s http module:
```commandline
python -m http.server 8080
python3 -m http.server 8080
```
Open the browser at:
```
http://localhost:8080/sandbox/
```
Press Ctrl+Shift+J to open the Console tab.

Press Ctrl+C to stop the server.

## Chrome
Press Ctrl+Shift+I to open the Elements tab (or More Tools -> Developer Tools / Weitere Tools -> Entwicklertools).

## MongoDB
Install manually on Ubuntu:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

Install manually on Windows:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition

MongoDB with Docker: incompatible SSL libs: https://www.mongodb.com/community/forums/t/installing-mongodb-over-ubuntu-22-04/159931

## Jupyter
Start Jupyter notebooks:
```commandline
jupyter notebook
```

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

