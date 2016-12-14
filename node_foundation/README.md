# Foundation模板 by foundation5 & thinkjs 



[TOC]

使用foundation5为基础创建的foundation后台管理模板



## first of first

因为业务需要，需要搭建一个后台管理页面，大家普遍使用的是bootstrap，而几乎没人使用foundation搭建，也许因为其比较新吧。。。对此我没有考究，但是，如果大家看过他的文档，会发现，foundation定制能力很强，尤其是响应式方面的设计，文档对于bootstrap而言更加详细



p.s 再做的时候 还么有更新foundation6，所以使用了foundation5，而最近（2016年）发现SemanticUI可能也不失为一种更好的解决方案。

## node

此项目为node.js项目，需要有node.js基础，而在此项目中 我使用了thinkjs （一款使用ES6/7 特性开发的node.js MVC框架，使用`async/await` 或者 `*/yield`的特性解决node.js异步嵌套的问题）



### 安装Thinkjs

> npm install thinkjs@2 -g --verbose

如果安装很慢的话，可以尝试使用 [taobao](http://npm.taobao.org/) 的源进行安装。具体如下：

> npm install thinkjs@2 -g --registry=https://registry.npm.taobao.org --verbose

### 使用命令创建项目

ThinkJS 安装完成后，就可以通过下面的命令创建项目:

> thinkjs new project_path; #project_path为项目存放的目录

### 安装依赖

项目安装后，进入项目目录，执行 `npm install` 安装依赖，可以使用 `taobao` 源进行安装。

> npm install --registry=https://registry.npm.taobao.org --verbose





### 页面

so far 已经制作了以下页面

1. `index` — 首页。。。。
2. `form` — 