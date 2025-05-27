const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log(`Color ${index + 1}: ${color}`);
}
);

const cloneColors = colors.some(color => color === "Violet");
if (cloneColors) {
    console.log("Yeah");
} else {
    console.log("No...");
}

