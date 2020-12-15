
<p align="center"><b>一个炫酷的3D图片切割轮播图</b></p>

# 目录

- [目录](#目录)
  - [快速入门](#快速入门)
    - [安装](#安装)
    - [用法](#用法)
      - [main.js 文件：](#mainjs-文件)
      - [使用：](#使用)
  - [维护者](#维护者)

## 快速入门

### 安装

```bash
$ npm i duo-paper-cut --save             # install duo-paper-cut 
```

### 用法

#### main.js 文件：

```js

import duoPaperCut from 'duo-paper-cut'

Vue.use(duoPaperCut)

```
#### 使用：

```vue
<template>
  <div>
    <duo-paper-cut 
      :width="width"
      :height="height"
      :srcList="srcList"
      :autoPlay="autoPlay"
      :interval="interval"
      :transition="transition"
      :cutsNumber="cutsNumber"
      :paginationDirection="paginationDirection"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 1200, // 宽度
      height: 560, // 高度
      cutsNumber: 18, // 切割数
      interval: 8000, // 自动轮播间隔时间(单位ms)
      autoPlay: false, // 是否自动轮播
      transition: 1500, // 动画过渡时间(单位ms)
      paginationDirection: "left-bottom", // 分页位置
      srcList: [ // 图片资源
        "https://goss.cfp.cn/static/home/h2_5.png",
        "http://d300.paixin.com/thumbs/1739009/19194001/staff_1024.jpg",
        "https://goss.cfp.cn/static/home/h2_6.png",
        "http://d300.paixin.com/thumbs/1067920/20205975/staff_1024.jpg",
      ],
    };
  },
};
</script>
```

[→ simple demo](https://duofuni.github.io/duo-paper-cut/)

## 维护者

- [duofuni](https://github.com/duofuni)