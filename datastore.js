var fs = require('fs');
exports.customStore = function () {
  var storeCount=0;

  class Store{
    constructor(customLocation){
      this.datastoreJSON={};
      //Total number of stores instantiated
      storeCount++;
      //Current store number
      this.storeNumber=storeCount;
      //Custom Location assigned by the user to save the file
      this.location=customLocation;
      this.createFile();
    }

    createFile(){
      //Generating custom file name
      this.fileName='customDataStore'+this.storeNumber+'.txt';
      if(this.location==null){
        this.location='';
      }

      //Generating File Path
      this.filePath=this.location+this.fileName;
      fs.appendFile(this.filePath, '', function (err) {
        if (err) throw err;
        console.log('File Created!');
      });
    }

    create(key,value){
      if(this.getBinarySize(value)<=16000 && key.length<=32){
        if (typeof value == 'object') {
          if(!this.datastoreJSON[key]){
            this.datastoreJSON[key]=value;
          }else{
            console.log("A key-value pair with this specified key already exists.")
          }
        }
        else{
          console.log("Value isn't a JSON Object. Please Try Again.")
        }
      }else{
        console.log("Either your key size or value size exceeds the limit. Key size can only be 32 chars and value should be less than 16 KB. Please Try Again.")
      }
    }

    read(key){
      if(this.datastoreJSON[key]){
        console.log(this.datastoreJSON[key]);
      }else{
        console.log("The specified key does not exist in the datastore. Please Try Again.")
      }
    }

    delete(key){
      delete this.datastoreJSON[key];
    }

    saveIntoFile(){
      var savedString=JSON.stringify(this.datastoreJSON);
      fs.appendFile(this.filePath, savedString, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    }

    //Internal Helper Methods
    getBinarySize(json) {
      return Buffer.byteLength(JSON.stringify(json), 'utf8');
    }
  }
  return Store;
};
