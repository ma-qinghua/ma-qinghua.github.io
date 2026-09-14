# 马清华个人网站 v2

定位：

> Computer Vision × Edge AI × Embedded Systems  
> 让视觉算法真正运行在设备上。

## 主要模块

- Hero：个人技术定位与求职 / 合作入口
- About：算法 → 部署 → 设备 → 产品链路
- Featured Projects：
  - 智能人脸识别考勤终端
  - 边缘 AI 目标检测与分割
  - 制冷 / 非制冷红外机芯
  - ZYNQ 人脸检测硬件加速
- Capabilities：CV / Edge AI / Embedded Linux / Hardware / Infrared
- Experience：真实项目与工作经历时间线
- Research & Output：论文、专利、样机、竞赛
- Writing：技术文章入口
- Contact：邮箱 / GitHub / Resume

## 本地运行

不要直接双击 `index.html`，因为项目使用 ES Module。

在工程根目录运行：

```bash
python -m http.server 8000
```

浏览器打开：

```text
http://localhost:8000
```

Windows PowerShell 也可以：

```powershell
py -m http.server 8000
```

## 日常维护

### 修改项目

`assets/js/data/projects.js`

### 修改能力

`assets/js/data/capabilities.js`

### 修改经历

`assets/js/data/experience.js`

### 修改文章入口

`assets/js/data/articles.js`

### 修改某个模块样式

`assets/styles/sections/`

### 项目详情页

`projects/`

### 技术文章

`articles/`

## 简历

将你的公开版简历复制到工程根目录并命名：

```text
resume.pdf
```

当前压缩包不会自动复制上传的原始简历，以避免把电话等个人信息无意公开到网站仓库中。

## 部署

该项目为纯静态站，可部署到：

- GitHub Pages
- Cloudflare Pages
- Vercel
- Netlify
- 任意 Nginx / Apache 静态服务器
