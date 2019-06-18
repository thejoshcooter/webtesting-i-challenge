module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function repair(item) {
  if(item.durability != 100) {
    item = {
      ...item,
      durability: 100
    };
  } else {
    return { ...item }
  }
  
  return { ...item };
}

function succeed(item) {
  item = {
    ...item,
    enhancement: item.enhancement + 1
  };
  
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
