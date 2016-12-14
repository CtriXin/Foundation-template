# Foundation模板 by foundation5 & thinkjs 



[TOC]



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

