let util = {};

util.CascaderData = function(arrays) {
  if (!arrays instanceof Array) {
    return null;
  }
  let buffer = util.CascaderArray(arrays);
  return buffer;
};

util.CascaderObject = function(ob) {
  let buffer = {};
  //对象进行遍历
  for (let key in ob) {
    if (key == "name") {
      buffer.label = ob[key];
    } else if (key == "id") {
      buffer.value = ob[key];
    } else if (ob[key] instanceof Array) {
      buffer.children = util.CascaderArray(ob[key]);
    }
  }
  return buffer;
};

util.CascaderArray = function(arrays) {
  let buffer = [];
  //遍历数组
  arrays.forEach(function(ob) {
    buffer.push(util.CascaderObject(ob));
  });
  return buffer;
};

export default util;
