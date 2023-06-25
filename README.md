# Interactive-Data-Visualization-in-Browser-Dale-2023

## Using JavaScript libs
```javascript
// either by content delivery networks (CDN)
<script
    src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.1.1/d3.min.js"
    charset="utf-8">
</script>

// or by installing libraries locally
// my_project/
// |--static/
//    |----css/
//    |----data/
//    |----libs/
//         |----d3.mi.js
//    |--js/
<script src="/static/libs/d3.min.js"></script>
```

## MongoDB test
Installing manually on Ubuntu:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
```commandline
sudo mkdir /data
sudo mkdir /data/db
// set ownership to yourself
sudo chown 'whoami' /data/db
// start a server instance
mongod
```
Installing manually on Windows:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition
```commandline
cd C:\
md "\data\db"
// start a server instance
C:\mongodb\bin\mongod.exe
```
MongoDB with Docker: incompatible SSL libs: https://www.mongodb.com/community/forums/t/installing-mongodb-over-ubuntu-22-04/159931
```commandline
sudo docker run -dp 27017:27017 -v local-mongo:/data/db --name local-mongo --restart=always mongo
```