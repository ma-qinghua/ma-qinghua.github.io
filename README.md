# 马清华个人网站

一个不依赖前端框架的模块化静态个人作品集网站，用于：

- 个人成果展示
- 求职与简历入口
- 技术项目合作 / 接单
- 技术文章与成长记录

## 目录职责

- `index.html`：只负责首页结构和模块顺序
- `assets/styles/`：基础样式、布局、公共组件、各 section 样式
- `assets/js/data/`：项目、经历、文章、能力的数据
- `assets/js/sections/`：把数据渲染为页面模块
- `projects/`：代表项目详情页
- `articles/`：技术文章详情页

## 推荐运行方式

由于页面使用 ES Module，不建议直接双击 `index.html` 用 `file://` 打开。

### Python

```bash
python -m http.server 8000
```

浏览器访问：`http://localhost:8000`

### VS Code

安装 Live Server 后，从 `index.html` 启动。

## 日常维护

新增项目：编辑 `assets/js/data/projects.js`。

新增经历：编辑 `assets/js/data/experience.js`。

新增文章：编辑 `assets/js/data/articles.js`，并在 `articles/` 创建正文页面。

调整全站主色：修改 `assets/styles/base.css` 的 `--primary`。

调整某模块样式：进入 `assets/styles/sections/` 对应 CSS 文件。

## 需要替换的占位内容

1. `hello@example.com` 换成真实邮箱
2. GitHub 地址确认是否为真实账号
3. 将真实简历命名为 `resume.pdf` 放在项目根目录
4. 替换 `assets/images/` 中的项目占位图
5. 补充项目详情页与文章正文
