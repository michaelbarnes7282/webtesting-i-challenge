module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20){
    return { ...item };
  } else {
    item.enhancement += 1;
    return { ...item };
  }
}

function fail(item) {
  if (item.enhancement >= 15) {
    item.durability -= 10
    if (item.enhancement > 16) {
      item.enhancement--;
      console.log('over 15 fail', item);
    }
    console.log('equal or over fail', item)
    return { ... item }
  } else if (item.enhancement < 15) {
    item.durability -= 5;
    if (item.durability < 0){
      item.durability = 0;
    }
    console.log('under fail', item)
    return { ...item };
  }
}

function repair(item) {
  item.durability = 100;
  return {
    ...item,
  };
}

function get(item) {
  return { ...item };
}
