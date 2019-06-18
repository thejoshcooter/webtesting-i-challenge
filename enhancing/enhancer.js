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
  if (item.enhancement < 20) {
    item = {
      ...item,
      enhancement: item.enhancement + 1,
      durability: item.durability
    };
  } else {
    return { ...item };
  }
  
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability = item.durability - 5;
  } else if (item.enhancement >= 15) {
    item.durability = item.durability - 10;
  }
  
  return { ...item };
}

function get(item) {
  return { ...item };
}
