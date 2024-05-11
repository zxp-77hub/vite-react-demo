# React + TypeScript + Vite

## 项目 demo 需求

## Todo list

1. 基本要求及相关项

   1. [X]  使用 React +TS + Redux
   2. [X]  展示todo list
   3. [X]  显示所有，未完成数（筛选功能）
   4. [X]  input 框输入 todo项
   5. [X]  刷新页面所有数据要保留不变（数据持久化 redux-persist）
2. 功能项

   1. [X]  添加 todo
   2. [X]  删除 todo
   3. [X]  所有/未完成切换
   4. [X]  （可有可无）一键完成
   5. [X]  （可有可无） 一键删除所有已完成
   6. [ ]  （附加项）编辑todo 任务（未处理）
3. 附加要求 10000条数据如何处理渲染性能

   处理方案：1.虚拟列表 2.分页显示3.懒加载

## 项目启用

yarn dev

## todo项目使用的三方库

* nanoid // 轻量级 随机字符串生器
* redux
* sass
* antd
* vite
* redux-persist // 数据 redux 持久化
* nanoid // 随机生成字符串

## 其它功能使用库

* react-router
* sort-by // 排序使用库
* localforage  // Web Storage API
* match-sorter // 前端数组处理库
