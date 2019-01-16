function moduleName(mdName) {
  console.log(`- Content of the ${mdName} section`);
}

moduleName("Maps");

let cardAce = {
  name: 'Ace of Spades'
}

let cardKing = {
  name: 'King of Clubs'
}

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck.size);
console.log(deck.get('as'));

// deck.delete('as');
// deck.clear();
// deck.key();

for (key of deck.keys()) {
  console.log(key);
}

for (value of deck.values()) {
  console.log(value);
}

for (entry of deck.entries()) {
  console.log(entry);
}

moduleName("WeakMaps");

let wdeck = new WeakMap();
let key1 = {
  a: 1
};
let key2 = {
  b: 2
};
wdeck.set(key1, cardAce);
wdeck.set(key2, cardKing);

console.log(wdeck.get(key1));

moduleName("Sets");
//Array of unique values
let set = new Set([1, 1, 1]);
set.add(2);
set.delete(2);
set.has(1)
for (v of set) {
  console.log(v);
}