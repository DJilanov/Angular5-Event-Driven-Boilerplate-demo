## Description

![Under development](https://img.shields.io/badge/under-development-orange.svg?style=for-the-badge)

## Known issues

1. If you are using Windows and don't have Visual Studio, you are most likely receiving:

```MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe"```

This error is coming from the SASS module and it is easy fixable by doing this using administrator rights:

```npm install --global --production windows-build-tools```
