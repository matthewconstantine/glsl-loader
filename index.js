var quoteLine = function(line) {
  return "'" + line + "'";
}

var sourceAsString = function(source) {
  var lines = source.replace(/'/g, "\\'").split(/\n+/).map(quoteLine);
  return "[" +lines.join(',')+ "].join('\\n')";
}

module.exports = function(source) {
  this.callback(null, "module.exports = function(){return("+ sourceAsString(source) +")}")
  return "";
};
