命令：
	mkdir ：XX (创建一个空目录 XX指目录名);
	pwd ：显示当前目录的路径;
	git init :把这个目录变成git可以管理的仓库;
	cd :打开文件目录；
	git add 文件（夹）名 :添加文件暂存区；
	git commit( -m "注释内容") :提交文件到仓库（括号内为注释添加）；
	git status ：查看状态（是否还有文件未提交）；
	git diff 文件 ：查看修改内容；
	git log ：查看最近三次提交历史记录；
	git log –-pretty=oneline ：只含版本号和变更信息的简化历史记录；
	git reset --hard HEAD^ ：回退到上一个版本；
	git reset --hard HEAD~N ：回退到前N个版本；
	git reflog :查看版本号；
	git reset --hard 版本号 :恢复到指定版本；
	cat 文件名 ：查看文件内容；
	总结创建与合并分支命令如下：
		查看分支：git branch
		创建分支：git branch name
		切换分支：git checkout name
		创建+切换分支：git checkout –b name
		合并某分支到当前分支：git merge name
		删除分支：git branch –d name

	git remote add origin https://github.com/tugenhua0707/testgit 关联一个远程库

    git push –u(第一次要用-u 以后不需要) origin master 把当前master分支推送到远程库

    git clone https://github.com/tugenhua0707/testgit  从远程库中克隆

    git rm 文件 :删除文件
    git rm -rf .   :删除当前目录下的所有文件

    git checkout -b gh-pages origin/gh-pages :在本地新建一个由远程"orgin/gh-pages"分支下面分化出来的"gh-pages"

    git push origin gh-pages