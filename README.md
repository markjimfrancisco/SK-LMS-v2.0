This repo contains LMS that can host webXR contents

# Set-up a local copy


### Install NodeJS First

Head over to [NodeJS official website](https://nodejs.org).

### Clone this repo.
If you are running macOS or Ubuntu, you can clone this repository by opening terminal and run

    git clone https://github.com/Stock-Knowledge-Engineering/SK-LMS-v2.0.git
  
and if your on windows, open command prompt and run

    git clone https://github.com/Stock-Knowledge-Engineering/SK-LMS-v2.0.git
    
### Change directory!!
Don't forget to change directory to the cloned repository.
MacOS/Linus, use terminal and command prompt for windows.

    cd /to/cloned/repo    
    
### Install depedencies..
For this project, I am using NextJS a ReactJS framework, TailwindCSS, 
Redux, and Socket.IO.

Again, for MacOS and Linux user use your terminal and for Windows user use your command prompt,
then run.

    npm install
    
### Run your local development server
You want to test a development build or contribute to the project. Try opening your terminal if your on MacOS/Linux
and Command Prompt for Windows then run

    npm run dev
    
### Ready for deployment?
You want to deploy it, right? Ok, you need to build the project first. Run this command and wait until it finish to compile

    npm run build
 
Now, it is now ready for deployment, so hit

    npm run start
    
### **COPYRIGHTED CONTENTS**
Images(2D and 3D assets), videos, and text contents that are unique to Stock Knowledge are copyrighted. Please ask permission if you wish to use them.
