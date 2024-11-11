const { BloomFilter } = require("./bloom-filter");

const bloom = new BloomFilter(1000, 3);

bloom.add("gajanan");
bloom.add("sarat");

console.log(bloom.isExists("gajanan"));
console.log(bloom.isExists("rahul"));
