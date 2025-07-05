# Git 常用命令速查

## 1. 初始化仓库
```bash
git init
```

## 2. 克隆远程仓库
```bash
git clone 仓库地址
# 例如：git clone https://github.com/jevliu/my-nodejs-app.git
```

## 3. 查看仓库状态
```bash
git status
```

## 4. 添加文件到暂存区
```bash
git add 文件名
# 添加所有更改
git add .
```

## 5. 提交更改
```bash
git commit -m "提交说明"
```

## 6. 查看提交历史
```bash
git log
```

## 7. 关联远程仓库
```bash
git remote add origin 仓库地址
```

## 8. 推送到远程仓库
```bash
git push origin 分支名
# 第一次推送加 -u
git push -u origin master
```

## 9. 拉取远程更新
```bash
git pull origin 分支名
```

## 10. 分支管理
```bash
git branch                # 查看本地分支
git checkout -b 新分支名  # 新建并切换分支
git checkout 分支名       # 切换分支
git merge 分支名          # 合并分支
git branch -d 分支名      # 删除分支
```

## 11. 强制用远程覆盖本地（慎用）
```bash
git fetch origin
git reset --hard origin/master
```

## 12. 配置全局用户名和邮箱
```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

---

> 建议多用 `git status` 和 `git log` 观察仓库状态，养成良好习惯！ 