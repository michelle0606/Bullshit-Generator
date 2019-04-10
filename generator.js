const task = {
  工程師: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
  設計師: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
  創業家: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
};

const phrase = ["很簡單", "很容易", "很快", "很正常"];

function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generatorTalk(option) {
  return option
    ? `身為一個${option}，${sample(task[option])}，${sample(phrase)}吧！`
    : `必須選擇一個職業喔！`;
}

module.exports = generatorTalk;
