# Installing Git on Mac

Git works on all operating system platforms such as Windows, Mac, and Linux. On Mac or Linux, in some cases, it is installed by default. The majority of users will use Git via the command line as its syntax is very easy to understand and follow. Git also works well in development environments and integrates into IDEs and other GUI offerings.  

Macs tend to have Git installed by default, so before diving into the installation we can run a Git version command to check if Git is already installed. If the command returns a Git version, then Git is already installed. If it returns "command not found", Git needs to be installed.

## Install with Xcode

Install the latest version of Xcode for your Mac by downloading it from the Apple Store or going to the official website - [https://developer.apple.com/xcode/](https://developer.apple.com/xcode/)

As mentioned, Git is installed by default on Mac.  Xcode is an application that uses a lot of memory space,  so there are better alternatives for installing Git other than using Xcode. Nonetheless, there are two ways in which you can install Git using Xcode:

1. If you install the complete Xcode application, no further steps are required to install Git. You can simply verify the Git installation by opening the terminal and running the following command:

```
git --version
```

It should produce an output like this:

```
VC$ git --version 
git version 2.30.1 (Apple Git-130)
```

2. If you don’t plan on installing the complete Xcode application, you can simply install the lightweight alternative Xcode Command Line Tools directly inside your terminal by running the following command:

```
xcode-select --install
```

The command will either process the installation, or you will get a response that Git is already installed:

```
VC$ xcode-select --install
xcode-select: note: Command line tools are already installed. Use
"Software Update" in System Settings or the software update command
line interface to install updates
VC$
```

At this point, you can verify the  installation again by running the git --version command.  

Optionally, you can further customize your Git installation by configuring your user information with these commands:  

```
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Install Git from Homebrew

Homebrew is a popular package manager for Macs. It’s easy to use and makes it simple to install new packages such as Git. First, you will need to install Homebrew on your machine. Go to the Homebrew website at [https://brew.sh/](https://brew.sh/) and follow the install instructions for Mac. Once Homebrew is installed, open a terminal window and then type the command brew install git

Once installed, run the Git version command git --version to verify that the installation is complete.
