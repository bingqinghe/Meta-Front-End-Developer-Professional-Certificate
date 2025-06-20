# Resolving conflicts

Conflicts will normally occur when you try to merge a branch that may have competing changes. Git will normally try to automatically merge (auto-merge), but in the case of a conflict, it will need some confirmation.  In such scenarios, user intervention is required to review and resolve the competing changes. This process is called merging or rebasing.

To resolve, the the developer must look at the changes on the server and their local repository and validate which changes should be resolved.

A merge conflict example is when two developers work on their dependent branches. We will be demonstrating this with the help of an example in this reading. Imagine that both developers are working on the same file called Feature.js. Consider a scenario where two developers are working on dependent branches. Each of their tasks is to add a new feature to an existing method. Developer 1 is working on a branch named feature1, and Developer 2 is working on a branch named feature2.

Developer 1 completes their changes and pushes them to the remote repository. Later, Developer 2 also attempts to push their changes. Since both have modified Feature.js, Git detects a conflict that requires resolution before the merge can proceed.

![Demonstration of the push pull method](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Bz5YfyUrQc--WH8lK0HPiw_d02204967097487387f76af89cc8c5e1_Push_Pull_img.png?expiry=1750550400000&hmac=-8aXUEvYNCkKVuRltx3WfLIxbRg3zad_UlXIldBT6Jw)

Let's walk through how this would happen in Git. Both Developer 1 and Developer 2 check out the main repository on Monday morning. At this point, they both have an identical copy of the code. Each developer then creates their own branch: feature1 and feature2.

```
git pull
git checkout -b feature1
```

Developer 1 makes their changes to a file called Feature.js and then commits the changes to the repository for approval via a PR (pull request)

```
git add Feature.js
git commit -m 'chore: added feature 1!!'
git pull origin main
git push -u origin feature1
```

The Pull Request (PR) is reviewed and then merged into the main branch. Meanwhile, Developer 2 is working on their feature. They follow a similar process to Developer 1.

Note:  If you look at the code, any reference for HEAD in Git refers to the current branch or commit you're working on.

```
git add Feature.js
git commit -m 'chore: added feature 2!!!'
git pull origin main

From github.com:demo/demo-repo
 * branch            main       -> FETCH_HEAD
   9012934..d3b3cc0  main       -> origin/main
Auto-merging Feature.js
CONFLICT (content): Merge conflict in Feature.js
Automatic merge failed; fix conflicts and then commit the result.
```

At this point, Developer 2 encounters a merge conflict. Git notifies that a merge conflict has occurred and requires resolution before changes can be pushed to the remote repository. Running git status provides additional details about the conflict:

```
git status

On branch feature2
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   Feature.js

no changes added to commit (use "git add" and/or "git commit -a")
```

To resolve the issue, Developer 2 must review and compare the changes made by Developer 1. It’s a good practice to first identify the conflicting branch by using the following command:

```
git log --merge

commit 79bca730b68e5045b38b96bec35ad374f44fe4e3 (HEAD -> feature2)
Author: Developer 2 
<developer2@demo.com>
Date:   Sat Jan 29 16:55:40 2022 +0000

    chore: add feature 2

commit 678b0648107b7c53e90682f2eb8103c59f3cb0c0
Author: Developer 1 
<developer1@demo.com>
Date:   Sat Jan 29 16:53:40 2022 +0000

    chore: add feature 1
```

From the log, we can see that conflicting changes occurred in feature1 and feature2. Developer 2 now examines the specific differences causing the conflict:

```
git diff

diff --cc Feature.js
index 1b1136f,c3be92f..0000000
--- a/Feature.js
+++ b/Feature.js
@@@ -1,4 -1,4 +1,8 @@@
  let add = (a, b) => {
++<<<<<<< HEAD
 +  if(a + b > 10) { return 'way too much'}
++=======
+   if(a + b > 10){ return 'too much' }
++>>>>>>> d3b3cc0d9b6b084eef3e0afe111adf9fe612898e
    return a + b;
  }
```

The only difference is in the wording of the return statement. Developer 1 used 'too much', while Developer 2 used 'way too much'. Git uses markers (<<<<<<<, =======, and >>>>>>>) to indicate the conflict. Developer 2 resolves the conflict by editing the file and removing the markers:

```
let add = (a, b) => {
  if(a + b > 10) { return 'way too much'}
  return a + b;
}
```

Developer 2 then stages and commits the resolved changes:

```
git add Feature.js
git commit -m 'fix merge conflicts'
git push -u origin feature2
```

Developer 2 has now resolved the merge conflict and can create a PR to merge their changes into the main branch.

This may seem bit complicated at the beginning, but merge conflicts are a normal occurrence in collaborative coding, and each developer gets better at handling them with practice. It will begin to feel more natural as you follow along and practice these methods yourself.
