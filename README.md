<h1 style='font-size:250%;'>Securing the Whole Stack: .NET and SPAs</h1>

Securing the Whole Stack is an introduction to attack vectors, defensive
programming, and security features of modern .NET and JavaScript development.
The course begins with students exploring the ways that modern, network applications may be attacked. Next,
students will gain an understanding how attacks work, the foundation to defending against them. In addition
students will learn best-practices and programming techniques that help defend against malicious attacks. The
course concludes with a lesson on how .NET Core offers security features for authentication, role-based access,
and data cryptography to protect against the unauthorized use of applications and data.

Modern script-heavy client applications are vulnerable to a class of attacks such as XSS and token hijacking. All web-based applications present additional risk of exposure when data is transported to the client for presentation. This course will
identify techniques to help mitigate the risk, techniques that become extremely important when single-page
applications delegate processing to the client computer.

&nbsp;




# Contents
* [Overview](#overview)
* [Outline](#outline)
* [Setup](#setup)


&nbsp;





# Overview

## Duration 
2 Days

## Objectives
Upon completion of this course, students will be able to:
* Leverage .NET authentication and authorization schemes
* Mitigate client-side injection attacks
* Implement modern development practices around security and quality

&nbsp;




# Outline


### Guiding Principles
* Landscape
* Mindset
* Black-Hat Attack Goals
    - Data mining (theft)
    - Data manipulation
    - Denial of service
* Resources

### SQL Injection
* Scary stories
* Vulnerabilities
* Best practices

### Script Injection: XSS
* Server-Side XSS
* DOM-Based XSS
* Mitigation strategies
  - Sanitization
  - CORS

### Quality and Security
* Culture
* Unit Tests
* Static Analysis
* Development Workflow
* Exotic Beasts

### Aunthentication + Authorization
* Classic .NET Authentication
  - Windows / SQL Server
* Tokens and JWT
* Authorization
  - Roles
  - Claims
* OpenID and OAuth

### Grab Bag
* Open redirect
* Cross-site request forgery
* UI Redress attacks (clickjacking)
* Poisioned dependencies

&nbsp;






# Setup

### .NET
By far, the most important thing you'll need is the **.NET 6 SDK**. If you use Visual Studio, it might already be installed. It's also available [here](https://dotnet.microsoft.com/en-us/download).

To test whether everything's set up, open a terminal and type:
```shell
dotnet sdk check
```

Make sure the results include the sdk. Here's the first few lines from mine:
```shell
.NET SDKs:
Version      Status
------------------------
6.0.300      Up to date.
```

### NodeJS
You can get by without NodeJS, but it's very nice to have for things like testing, linting, and serving JavaScript applications. We're not using any cutting-edge features, so the version doesn't matter as long as it's fairly recent. You get Node [here](https://nodejs.dev/).
 

To test whether everything's set up, open a terminal and type:
```shell
node -v
```

Make sure the results include something fairly recent. Here's mine:
```shell
v18.2.0
```

### Git
You can get by without git, but it's very nice for making sure you have the latest version of the workshop repository. You get git [here](https://git-scm.com/downloads).
 

To test whether everything's set up, open a terminal and type:
```shell
git --version
```

Make sure the results include something fairly recent. Here's mine:
```shell
git version 2.36.0.windows.1
```

### SQL Server
This is necessary, but only for the discussion on SQL Injection-- a fairly small fraction of the workshop-- everything else can use the in-memory database. Which version you have doesn't matter; Anything in the past decade will do nicely.

Sql Server Express is free and available [here](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).
 

### Nice to Have
Use whatever editor you like-- VI, Emacs, Notepad, whatever. I use both of these:
* [VS Code](https://code.visualstudio.com/).
* [Visual Studio (Community Edition)](https://visualstudio.microsoft.com/vs/community/)


