const responses = {
  hr: {
    text: "建议先看「代表项目」：每个案例都按问题、方法、我的贡献与结果组织，方便快速判断匹配度。",
    label: "进入项目案例",
    link: "#projects",
  },
  student: {
    text: "从「教学」开始：先建立问题框架，再完成可验证的原型，最后把它打磨成真正能交付的作品。",
    label: "了解学习路径",
    link: "#teaching",
  },
  partner: {
    text: "从「实验室」开始：我关注如何把模型能力、领域数据和用户体验组合成可被真实使用的产品。",
    label: "查看实验室",
    link: "#lab",
  },
};

const answer = document.querySelector("#lab-answer");
const answerLink = document.querySelector("#lab-link");
const buttons = document.querySelectorAll(".prompt-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const response = responses[button.dataset.answer];
    buttons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    answer.style.opacity = "0";
    window.setTimeout(() => {
      answer.textContent = response.text;
      answerLink.textContent = response.label + " →";
      answerLink.href = response.link;
      answer.style.opacity = "1";
    }, 120);
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
