# Interactive-Data-Visualization-Dale-2023

## Adding JavaScript libs
Use libraries either by Content Delivery Networks (CDN)
```html
<script
    src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.1.1/d3.min.js"
    charset="utf-8">
</script>
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
Start a development server in the project directory using Python’s http module:
```commandline
python -m http.server 8000
```
```commandline
python3 -m http.server 8000
```
Open the browser at:
```
http://localhost:8000/js-sandpit/
```
Press Ctrl+Shift+J to open the Console panel.

Press Ctrl+C to stop the server.

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
