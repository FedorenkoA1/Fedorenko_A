const item = document.getElementById("item");
const box = document.getElementById("box");

item.addEventListener("dragstart", () => {
    console.log("dragstart")
});
item.addEventListener("drag", () => {
    console.log("drag")
});
item.addEventListener("dragend", () => {
    console.log("dragend")
});


box.addEventListener("dragenter", () => {
    console.log("dragenter")
    box.style.backgroundColor = "black"
});
box.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("dragover")
});
box.addEventListener("dragleave", () => {
    console.log("dragleave")
});
box.addEventListener("drop", () => {
    console.log("drop")
    box.append(item)

});
