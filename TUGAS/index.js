// Map
const nama = ["Yusfa", "Julian"];
const map = nama.map(function(a) {
    return 1 + a;
});
console.log(map);

// Filter
const filter = map.filter((saring) => saring.includes("a"));

console.log(filter);

// Find
const mynikename = filter.find((nam) => nam.includes("J"))
console.log(mynikename);

function welcome(callback) {
    console.log("Selamat Datang");
    callback();
}

welcome(function() {
    console.log(mynikename);
});