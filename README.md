# 马清华个人网站 v3（简约版）

## 这一版的目标

- 简约
- 直接
- 精准展示个人能力与项目
- 项目后面直接给“项目说明 / 演示视频”链接
- 论文改为图片卡片展示

## 页面结构

1. About / Hero
2. Skills
3. Projects
4. Papers
5. Contact

## 需要你后续替换的内容

### 1）简历
将公开版简历放到根目录并命名为：

```text
resume.pdf
```

### 2）演示视频链接
在：

```text
assets/js/data/projects.js
```

替换 `videoLink`。

### 3）论文图片
当前使用的是 SVG 占位封面。
后续可以直接替换为真实论文截图或封面图：

```text
assets/images/papers/
```

### 4）GitHub 链接
如果仓库地址不同，请修改：

- `index.html`
- `contact` 区域

## 本地运行

由于用了 ES Module，不建议直接双击 `index.html`。

在根目录运行：

```bash
python -m http.server 8000
```

打开：

```text
http://localhost:8000
```
