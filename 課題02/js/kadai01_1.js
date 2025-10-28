const maxFloor = 10;

console.log("=====ECCビルディング フロアマップ=====");
for (let floor = 1; floor <= maxFloor; floor++) {
    let content = "";
    if (floor === 1) {
        content = "総合カウンター";
    } else if (floor % 2 === 0 && floor != 6) {
        content = "会議室A";
    } else if (floor % 3 === 0 && floor != 6) {
        content = "会議室B";
    }
    if (floor === 2 || floor === 3 || floor === 5 || floor === 7) {
            content += " ";
        content += "AED設置階";
    }
    console.log(`[${floor}階] ${content}`);
}