# Forking

In previous lessons, you have touched on workflows such as branching and how they can be used to simplify a process for a team. Forking is another type of workflow. The key difference between branching and forking is that the workflow for forking creates a new repository entirely. Branching cuts a new branch from the same repository each time and each member of the team works on the single repository.

Let's take a simple example of how forking works. In the diagram below the 'coolgame' repo has been forked by Joe. The entire contents and the history of the repository are now stored in Joe's account on GitHub. Joe is now free to make edits and changes to the repository at his own will. You, the owner of the 'coolgame' repository can continue to work as normal and not know about Joe's edits or changes.

![Demonstration of Fork](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/pRNgGcQwRbmTYBnEMAW5_Q_a37bd88a8c4d4d1589b6e04a2cf8b7e1_Fork.svg?expiry=1750550400000&hmac=sVI92ZIWS0ChxtPvmzrTu5JoWiFZWogbmS1_G-RiCvI)

Joe created a new branch on his repository and added a new cool feature that he felt was needed. In order for Joe to get his feature back into the original repository, he will need to create a PR as normal but instead of comparing it with the main branch, it needs to be compared with the original repository. Essentially, the two repositories are compared against each other. The owner of the original repository can then review the PR and choose to accept or decline the new feature.

## Software images

This reading contains software screengrab images. While the software's appearance often evolves with continual updates, the core functionalities and techniques covered in this reading should remain applicable.

## Forking

Let us take a look at how you can fork an existing repository that is available on GitHub.

Tip: For this example, we used a repository we can access on GitHub. You can treat this reading an informational overview of the forking process but if you wish, you can use a repository on GitHub, to help you follow the steps listed. The names used in commands are for illustration only.

Step 1: If you have access to your own repository on GitHub, you can access this now to follow along.

Step 2: Click on the Fork button on the top right of the page.

![Click on Fork.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/E_JeYKAtSceyXmCgLVnH0A_908d123ff31a4393ab7604d8469d49e1_fork_button.png?expiry=1750550400000&hmac=KqGRGRvof5ObFHDSMvBfNMo0ZN_Dcd4BixfGH8J-6YE)

Step 3: It will then prompt you to fork the repository to your desired account. Choose the account you wish to fork to.

![Create a new fork. ](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/q83cc-SXRl6N3HPkl5ZefQ_ee3747d0581e4567a90e2fecbb46bee1_fork_prompt.png?expiry=1750550400000&hmac=J8xcx4M0W-cAMQcjJosRavs8oqP1PYmcO9qmAvX0su0)

Step 4: Github will then clone the repository into your chosen GitHub account.

In a couple of steps, you have successfully forked a repository into your own GitHub account. The full repository is cloned and allows us to work directly in that repository as if it was our own.

On the landing page of the GitHub repository, it will show directly under the repository name that it was forked from Meta-Front-End-Developer-PC/forking-lesson.

![Forked repository visisble from GitHub landing page. ](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/sCrXyxILRAKq18sSC4QCrA_0a72435e790949fda409e4faf48a25e1_forked_repo.png?expiry=1750550400000&hmac=Mka57Z7QSauFLS36yni6qJ24WuzkjXAeByh1a8EJ0xs)

Other subtle differences in the GitHub UI on a forked branch are in the top information bar above the files.

It now shows that the branch is up to date with forking-lesson:main. It also adds a Fetch upstream drop-down to allow you to pull and merge the latest changes from the original repository.

![GitHub shows that the branch is up to date.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/1sRIWQskQ0uESFkLJJNLbQ_81f3ffa032904b2f998af86cc23174e1_forked_ui_changes.png?expiry=1750550400000&hmac=_YYGutXySWAmhOZQ3FIMOsw9GznKg55Zr37chOrh3Wg)

## Example

Let's run through a typical flow of creating a new branch and adding some new content.

Step 1: Clone the repository.

Step 2: Create a new branch.

```
git checkout -b test/forking-example 
```

Step 4: Create a new file and commit it to the repository.

```
touch text.txt
git add . 
git commit -m 'chore: testing' 
```

Step 5 Push the branch to your remote repository:

```
git push -u origin test/forking-example 
```

Step 6: Go to Github and click the Compare & pull request button. If it's not available, click on the branch dropdown menu and select the branch named test/forking-example:

![Test/forking example](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/DQDYhh9KS3OA2IYfSotzbw_57e060855c4c4e7cada03ac1cb4cb4e1_fork_create_pr.png?expiry=1750550400000&hmac=vTNxC4PQPk_iFVbVGxDlsYPTM3dMuF-ko-aq9g2Thpw)

After clicking the Compare & pull request button it will now redirect to the original repository in order to create the PR.

![Click on the Compare and pull request button. ](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/XzKVFxEOQxGylRcRDuMRGg_006a351f52db4f4ca133e74c1f105ee1_forked_pull_request.png?expiry=1750550400000&hmac=k9QTyOI7Dn46AJWM8CatFqOy_ksxVkD5Kc4AhAGFbno)

Each repository will have its own guidelines for submitting PRs and usually provide a how-to contribute guide. As you can see, in order to get the changes from our forked repository, you need to compare it against the original. This gives a lot of control to the repository owners of the original and they get to decide what makes the cut to be merged in.

In this lesson, you covered the basics of forking a repository, adding some changes, and then creating a PR to merge these changes into the original repository.
