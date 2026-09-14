export const projects = [
  {
    id: "infrared-core",
    number: "01",
    title: "红外成像与机芯控制系统",
    summary: "围绕红外机芯成像链路、探测器控制、标定、NUC、ISP 与通信协议进行完整工程开发，将底层硬件能力整理为可调试、可验证的控制链路。",
    image: "./assets/images/project-infrared.svg",
    technologies: ["C/C++", "Infrared", "ISP", "FPGA", "Embedded"],
    highlights: ["探测器与底层硬件控制", "NUC / 标定链路", "串口控制协议", "ISP 图像算法调试"],
    link: "./projects/infrared-core.html"
  },
  {
    id: "edge-ai",
    number: "02",
    title: "边缘 AI 视觉系统",
    summary: "将视觉模型从 PC Demo 部署至实际嵌入式平台，完成模型推理、摄像头输入、后处理和 UI 的完整集成，重点解决“模型能跑”和“产品能用”之间的差距。",
    image: "./assets/images/project-edge-ai.svg",
    technologies: ["Computer Vision", "Linux", "Qt", "RKNN", "Edge AI"],
    highlights: ["模型边缘部署", "实时视频链路", "推理与后处理", "Qt 应用集成"],
    link: "./projects/edge-ai.html"
  },
  {
    id: "local-code-ai",
    number: "03",
    title: "本地代码 AI 工作台",
    summary: "围绕 C/C++ 与嵌入式开发场景搭建本地代码模型环境，探索代码理解、知识管理、GPU 推理与后续 Agent 化开发工具。",
    image: "./assets/images/project-llm.svg",
    technologies: ["LLM", "Qwen", "PyTorch", "CUDA", "Developer Tools"],
    highlights: ["本地模型部署", "GPU 推理", "代码上下文管理", "AI 开发工具"],
    link: "./projects/code-ai.html"
  }
];
