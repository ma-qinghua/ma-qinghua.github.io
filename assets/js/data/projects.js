export const projects = [
  {
    id: "face-attendance",
    number: "01",
    title: "智能人脸识别考勤终端",
    subtitle: "Face Recognition Attendance System",
    summary: "基于 FPGA + ARM 架构完成智能人脸识别考勤终端，从人脸检测、活体检测、人脸识别，到 Qt 终端、后台系统、微信小程序和数据可视化形成完整闭环。",
    image: "./assets/images/project-face.svg",
    badge: "AI + DEVICE",
    technologies: ["PyTorch", "Face Recognition", "Qt", "OpenCV", "Linux", "FPGA + ARM"],
    results: [
      ["99%+", "识别精度"],
      ["< 1s", "识别时间"],
      ["5 台", "实体样机"]
    ],
    link: "./projects/face-attendance.html"
  },
  {
    id: "edge-ai",
    number: "02",
    title: "边缘 AI 目标检测与分割系统",
    subtitle: "Detection · Segmentation · Tracking",
    summary: "面向嵌入式视觉设备完成目标检测、图像分割和目标跟踪算法的部署与优化，包括模型转换、推理接口、图像预处理/后处理、性能优化及 Linux 系统集成。",
    image: "./assets/images/project-edge-ai.svg",
    badge: "EDGE AI",
    technologies: ["YOLO", "Segmentation", "Tracking", "Linux", "RK Platform", "Model Deployment"],
    results: [
      ["20 FPS", "RK 平台推理"],
      ["3 类", "检测 / 分割 / 跟踪"],
      ["ARM", "边缘设备"]
    ],
    link: "./projects/edge-ai.html"
  },
  {
    id: "infrared-core",
    number: "03",
    title: "制冷 / 非制冷红外机芯嵌入式系统",
    subtitle: "Cooled & Uncooled Infrared Core",
    summary: "参与红外机芯的软件开发与系统联调，覆盖探测器控制、图像链路、通信协议、标定流程、底层接口以及红外场景下的 AI 算法部署。",
    image: "./assets/images/project-infrared.svg",
    badge: "INFRARED",
    technologies: ["C/C++", "Infrared", "ISP", "NUC", "Calibration", "UART / SPI / I²C"],
    results: [
      ["C / C++", "核心开发语言"],
      ["ISP", "图像链路"],
      ["AI", "红外视觉部署"]
    ],
    link: "./projects/infrared-core.html"
  },
  {
    id: "zynq-face",
    number: "04",
    title: "ZYNQ 人脸检测硬件加速系统",
    subtitle: "ZYNQ-7020 · PS/PL Co-design",
    summary: "基于 ZYNQ-7020 搭建图像采集、处理和显示系统，在 PL 侧实现 OV5640 图像采集与人脸检测硬件加速，并通过 PS/PL 协同完成实时显示。",
    image: "./assets/images/project-zynq.svg",
    badge: "FPGA + AI",
    technologies: ["ZYNQ-7020", "Verilog", "OV5640", "PS / PL", "Computer Vision", "FPGA"],
    results: [
      ["OV5640", "图像采集"],
      ["PL", "硬件加速"],
      ["PS/PL", "协同处理"]
    ],
    link: "./projects/zynq-face.html"
  }
];
