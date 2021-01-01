# customNodeDataStore

A Node module that lets you store key-value pairs into a file. We can read, delete and create key-value pairs by custom functions provided.

```javascript
var store = require('./datastore');
var storeClass=store.customStore();

//Custom File Path
//var database=new storeClass('D:\\');

//Saving File in the current Folder
var database=new storeClass();

//Multiple stores can be instantiated
//var secondDatabase=new storeClass();

//Creating key-value pairs
database.create('key1',{demo1:'val1'});
database.create('key2',{demo1:'val1',demo2:'val2'});
database.create('key3',{demo1:'val1',demoArr:[1,2,3,4]});

//Read key-value pairs
database.read('key2');

//Delete key-value pairs
database.delete('key2');

//Saving everything int the file at the end
database.saveIntoFile();
```
> index.js
