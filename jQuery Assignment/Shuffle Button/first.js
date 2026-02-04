document.addEventListener("DOMContentLoaded", function () {
 
let tiles = document.querySelectorAll(".tile");
 
// Shuffle
window.shuffleCard = function () {
 
    let arr = [];
    tiles.forEach(t => arr.push(t.value));
 
    arr.sort(() => Math.random() - 0.5);
 
    tiles.forEach((t, i) => t.value = arr[i]);
};
 
// Move Tile
tiles.forEach((tile, index) => {
 
    tile.addEventListener("click", function () {
 
        let blankIndex;
 
        tiles.forEach((t, i) => {
            if (t.value === "") {
                blankIndex = i;
            }
        });
 
        // index difference
        let diff = Math.abs(index - blankIndex);
 
        // Adjacent rule (3x3 grid)
        if (diff === 1 || diff === 3) {
 
            let temp = tiles[index].value;
            tiles[index].value = tiles[blankIndex].value;
            tiles[blankIndex].value = temp;
 
            checkWin();
        }
 
    });
 
});
 
// Win Check
function checkWin() {
 
    let win = ["1","2","3","4","5","6","7","8",""];
 
    let cur = [];
    tiles.forEach(t => cur.push(t.value));
 
    if (win.join("") === cur.join("")) {
        alert("🎉 YOU WIN!");
    }
}
 
});