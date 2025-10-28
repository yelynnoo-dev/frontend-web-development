const storeNames = ["中崎町本店", "梅田店", "天神橋筋六丁目店", "天満橋店"];

function getShiftJudgement(storeIndex, staffCount) {
    const storeName = storeNames[storeIndex];

    console.log(`ECC Pizza ${storeName}`);
    console.log(`出勤人数: ${staffCount}名`);

    let message = "";
    if (staffCount < 0) {
        message = "エラー：出勤人数を確認してください。";
    } else if (staffCount <= 2) {
        message = "最小人数で営業中。店長！他の店舗からヘルプを呼んでください！";
    } else if (staffCount <= 4) {
        message = "通常通り営業中。ホール、キッチン・ドリンクを分担できます。";
    } else if (staffCount <= 7) {
        message = "ピークタイム対応可。マルゲリータとクワトロフォルマッジも回せます。";
    } else { 
        message = "多すぎです。何もしないバイトが続出中。";
    }

    console.log(`シフト判断:${message}`);
}

getShiftJudgement(0, 3);
getShiftJudgement(1, 1);
getShiftJudgement(2, 5);
getShiftJudgement(3, 10);