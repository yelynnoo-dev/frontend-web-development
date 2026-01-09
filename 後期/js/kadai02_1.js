const attributes = ["ジュラシック・パーク", "ウィザーディング・ワールド・オブ・ハリー・ポッター", "ハリウッド・エリア", "ミニオン・パーク", "ニューヨーク・エリア"];

function getUsjArea(name, index) {
    const attribute = attributes[index];

    console.log(`こんにちは、${name}さん。おすすめのエリアは「${attribute}」です!`);
}

getUsjArea("田中", 0);
getUsjArea("佐藤", 1);
getUsjArea("山田", 2);