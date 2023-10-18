# Interactive-Data-Visualization-Dale-2023

## Original code by Kyran Dale
https://github.com/Kyrand/dataviz-with-python-and-js-ed-2

## Adding JavaScript libs
Use libraries either by Content Delivery Networks (CDN)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.1.1/d3.min.js" charset="utf-8"></script>
```
or by installing libraries locally
```javascript
// project/
// |--static/
//    |----css/
//    |----data/
//    |----libs/
//         |----d3.min.js
//    |--js/
```
```html
<script src="/static/libs/d3.v7.min.js"></script>
```

## Running JavaScript scripts in Chrome
Start a development server in the 'project' directory using Python’s http module:
```commandline
python -m http.server 8080
```
```commandline
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
```commandline
sudo mkdir /data
sudo mkdir /data/db
```
Set ownership to yourself
```commandline
sudo chown 'whoami' /data/db
```
Start a server instance
```commandline
mongod
```
Install manually on Windows:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition
```commandline
cd C:\
md "\data\db"
```
Start a server instance
```commandline
C:\mongodb\bin\mongod.exe
```
MongoDB with Docker: incompatible SSL libs: https://www.mongodb.com/community/forums/t/installing-mongodb-over-ubuntu-22-04/159931
```commandline
sudo docker run -dp 27017:27017 -v local-mongo:/data/db --name local-mongo --restart=always mongo
```

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