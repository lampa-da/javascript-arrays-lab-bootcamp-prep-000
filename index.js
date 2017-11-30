const app = "I don't do much."
function destructivelyAppendKitten(name) {
    kittens.push(name);
  return name
}
function destructivelyPrependKitten(name) {
    kittens.unshift(name);
  return name
}
function destructivelyRemoveLastKitten(name) {
    kittens.pop(name);
    return name
}
