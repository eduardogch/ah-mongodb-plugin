#!/usr/bin/env node

var fs = require('fs-extra');
var path = require('path');

var localFile   = path.normalize(__dirname + '/../config/mongo.js');
var projectPath = path.normalize(process.cwd() + '/../../config/plugins');
var projectFile = path.normalize(projectPath + '/ah-mongo-plugin.js');

if(!fs.existsSync(projectFile)){
  console.log("coppying " + localFile + " to " + projectFile);
  try{
    fs.mkdirSync(projectPath);
  }catch(e){ }
  fs.createReadStream(localFile).pipe(fs.createWriteStream(projectFile));
}