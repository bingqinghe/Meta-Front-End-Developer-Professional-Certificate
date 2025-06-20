# Connecting to GitHub via HTTPS

When using Github via the Coursera platform, it is required to authenticate using a Personal Access Token over HTTPS. A Personal Access Token is a special password that you use instead of your actual account password. When you're finished using the token, you can revoke it so that it can no longer be used. It is also possible to set an expiry time for the token. This helps to keep your account secure.

## Software images

This reading contains software screengrab images. While the software's appearance often evolves with continual updates, the core functionalities and techniques covered in this reading should remain applicable.

## Generate a Personal Access Token

We now need to set up our Personal Access Token.

Step 1: Log in to Github

Step 2: Click on the profile icon in the top right of the screen and select Settings.

![Click on settings. ](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/qBM9wZ2zQJeTPcGds_CXzA_82389fbb7ed140b78c68ea0807d9aae1_settings.png?expiry=1750032000000&hmac=NzKBlxsa8_WT3MmKAKDjxfkV3QHHTueDxhwsTJuT_VA)

Step 3: On the Settings screen, on the left-hand side, click Developer Settings.

![Click on Developers Settings. ](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/E8rQIJaSR22K0CCWkodtag_68403478224348cf85959d06166959e1_developer_settings.png?expiry=1750032000000&hmac=NbrLFwdx7jQN20JeJT_j3rCAZUxEaHj6kCT2lpvZdN8)

Step 4: On the Developer Settings screen, click Personal access tokens. Under that, click on Tokens (classic). Then, click the Generate new token button and select Generate new token (classic).

![Click on Personal Access Token and then Generate Token.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/7yjnBbP9Sq6720E1o4db4g_a30c095b065f441883f9f3cc38f39ba1_github-step-4.png?expiry=1750032000000&hmac=KkwFD7iUVHbO6y6ajEjT7nKFgRrf-iLpqOChg5oF-yE)

Step 5: On the New Personal Access Token page, enter a token name and an expiry time. If you wish to manually revoke the token, set the expiry time to No Expiration.

![Enter token name and expiry time.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/R9TElIp0T1-f_TIgP38chg_3ccccdc08e864bd3af7f806c84b0afa1_github-step-6.png?expiry=1750032000000&hmac=oiP36AK-so5jeElfFULQKFlST09YDOXKw00nFHwJ6to)

Step 6: Under scopes, select repo.

![Select repo.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/x1sqTXfgS-GMSyyggPjq4w_a037150ffb124081b5eee851072f42a1_github-step-6.png?expiry=1750032000000&hmac=YrkTE5qK79dLVP1QqqcdM5BRXv2mfqfG7k7aOpc4N3A)

Step 7: Scroll to the end of the page and click Generate token.

![Click on generate token.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/tTPwrTDoR-mYfYV-mC2Q_g_c44e4f11aa1b49b5adb532e70363d8a1_git-step-7.png?expiry=1750032000000&hmac=0czKkMXBUR0OhQfp-NZ_Te8XvDzst-PXezcyL05uVMs)

Step 8: The token is now generated. Make sure to copy and keep note of the token as it will be hidden when you leave the page. This token can now be used when connecting to a repository over HTTPS.

![Copy and save the token. ](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/U9si9-WaQg6bIvflmhIOVQ_9a383fa1755d44728f2d290551151fe1_personal_access_tokens_done.png?expiry=1750032000000&hmac=XxfCTcS_i5WGFD70I8wrcnpjEs3zHBxe6xEcuzTy7dI)

*Note: If you lose the token, you can delete the old token and create a new one.*

## Accessing Repositories

When accessing a repository and using HTTPS authentication, make sure you have access/permission to connect, and then just use the HTTPS address for the Git repository itself.

![Use the HTTPS address of the repository.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/FSEI9QpeS7ezIChNO82TsA_198d9ca6b5b64abea8ee9d4c36d601a1_gitub-https.png?expiry=1750032000000&hmac=RcLlpK62bjDWRIL1ntzRj5IoyFkl0BGscKl7vow9jYo)
