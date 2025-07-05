 # Docker & Node.js 常用命令速查

## 一、Docker 相关

### 1. 构建镜像
```
docker build -t 镜像名 .
# 示例：docker build -t my-nodejs-app .
```

### 2. 运行容器
```
docker run -it -p 主机端口:容器端口 -v "本地路径:容器路径" --name 容器名 镜像名
# 示例（PowerShell）：
docker run -it -p 3000:3000 -v "${PWD}:/app" --name my-nodejs-app my-nodejs-app
```

### 3. 查看正在运行的容器
```
docker ps
```

### 4. 停止容器
```
docker stop 容器名
# 示例：docker stop my-nodejs-app
```

### 5. 删除容器
```
docker rm 容器名
# 示例：docker rm my-nodejs-app
```

### 6. 进入容器
```
docker exec -it 容器名 sh
# 示例：docker exec -it my-nodejs-app sh
```

### 7. 查看镜像
```
docker images
```

### 8. 删除镜像
```
docker rmi 镜像名
# 示例：docker rmi my-nodejs-app
```

---

## 二、Node.js 相关

### 1. 安装依赖
```
npm install
```

### 2. 启动项目
```
npm start
# 或
node app.js
```

### 3. 使用 nodemon 热重载
```
npm run dev
# 或
nodemon app.js
```

### 4. 安装 nodemon（开发依赖）
```
npm install --save-dev nodemon
```

### 5. 查看包信息
```
npm list
```

### 6. 安装新包
```
npm install 包名
```

### 7. 卸载包
```
npm uninstall 包名
```

---

## 三、常见问题排查

- 容器内代码未更新：检查 -v 挂载参数，确认本地和容器内文件同步。
- nodemon 不重启：配置 nodemon.json，启用 legacyWatch。
- 端口冲突：确认没有多个进程占用同一端口。
- 中文乱码：设置 Content-Type 为 charset=utf-8。

---

> 建议将本文件保存到项目根目录，随时查阅！
