const days = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日"];
const subjects = [
    ["変身術", "数占い"],
    ["魔法生物飼育学", "魔法薬学", "天文学"],
    ["魔法史", "薬草学"],
    ["闇の魔術に対する防衛術", "占い学"],
    ["古代ルーン語", "薬草学"]
];

console.log("===== 魔法学校 授業時間割 =====");
for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < subjects[i].length; j++) {
        console.log(`[${days[i]} ${j + 1}限] ${subjects[i][j]}`);
    }
}