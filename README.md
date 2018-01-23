## Description
Get started with Angular 5 boilerplate that utilize service bus architecture, that helps you to build responsive, bulletproof projects on the web with the boilerplate that is great from the smallest to atomic projects

###Quick start
Looking to quickly use that boilerplate for your project? Just [clone the boilerplate from GitHub](https://github.com/DJilanov/Angular5-event-driven-boilerplate). All you need is NPM to install the modules and you are ready to go!

To start with the boilerplate, just follow the steps:

1. Install [node package manager](https://docs.npmjs.com/cli/install) or [Yarn](https://yarnpkg.com/en/)
2. If you have NPM go to the root of the project and type in the terminal'npm install' or if you are using Yarn just type 'yarn'
3. When it finish, if you are using NPM type in the terminal 'npm run start' or if you are using Yarn just type 'yarn start'
4. If the end of the build tells you 'webpack: Compiled successfully.' you are ready to go!


###Docs

You can read how everything works in the website of the boilerplate

## Known issues

1. If you are using windows and doesn't have Visual Studio, you are most likely recieving:
    MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe" 

This error is comning from the SASS module and it is easy fixable by doing this using administrator:
    npm install --global --production windows-build-tools