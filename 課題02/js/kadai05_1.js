const reviews = [
    { stars: 5, text: "マルゲリータが最高に美味しかった！また来ます！", name: "（30代・男性）" },
    { stars: 4, text: "雰囲気もサービスも良かった。", name: "（20代・女性）" },
    { stars: 5, text: "家族みんな大満足です。また行きたいです！", name: "（40代・主婦）" }
];

const voiceFor = document.getElementById("voiceFor");
const voiceForOf = document.getElementById("voiceForOf");
const voiceForEach = document.getElementById("voiceForEach");

function createReviewElements(review) {
    const div = document.createElement("div");
    div.className = "voice";

    const stars = document.createElement("h4");
    stars.textContent = "☆".repeat(review.stars);

    const text = document.createElement("p");
    text.textContent = review.text;

    const name = document.createElement("p");
    name.textContent = review.name;

    div.appendChild(stars);
    div.appendChild(text);
    div.appendChild(name);

    return div;
}

for (let i = 0; i < reviews.length; i++) {
    const reviewElement = createReviewElements(reviews[i]);
    voiceFor.appendChild(reviewElement);
}

for (const review of reviews) {
    const reviewElement = createReviewElements(review);
    voiceForOf.appendChild(reviewElement);
}

reviews.forEach((review) => {
    const reviewElement = createReviewElements(review);
    voiceForEach.appendChild(reviewElement);
});
