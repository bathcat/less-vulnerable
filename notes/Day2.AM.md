# Day 2

*** Get Cracking: 900EST ***

## Game Plan
1. Housekeeping
2. Review
3. Non-fake Validation
  - seams 
  - bogus, toy
4. CORS 
  - Discussion
     * What's on by default?
  - Lab
5. Quality
  - Discussion
  - Demo
  - Lab
6. Authorization, Authentication
  - Discussion
  - CSRF
  - Demo, Lab, ?
7. Up-stream
8. Misc


## Housekeeping
* Poll
* New stuff
* Nag: Survey





## Review
5. What's 'blind injection'?
* Poking around to explore possible exploits
* 'blind' sleep() to exfiltrate	structural info via timing
* sql

1. What's the deal with SQL Injection?
* manipulating data in a relational store
* querying 
* input field not sanitized
* mixing user input with sql comman string

2. What's the deal with XSS?
* cross site scripting
* bad people inject javascript
  - talk to api with client credentials
  - hijack cookies tokens
  - turn on webcam
* flavors
  - reflected / dom-based - not stored in the database 
    * uri
  - persisted - social media stored in the database
    * infects everyone
  - self-xss - trick someone into pasting bad stuff

3. What do SQL Injection and XSS have in common?
* Both exploited via naively trusting user input
* Fix them both via sanitization
* injection
* command injection

9. What are some ways to mitigate SQL Injection?
* sprocs - force you to paramerized
* permission - non-admin accounts. least privilege
* validation - log or something
* parametrized querying
* no string-concatenation
* no trusting user input
* trust no one

6. Why do SQL Injection vulnerabilities still happen?
* progammer error
  - laziness 
  - unsophisticated
* ops error
  - permissions
* dot-net-nuke
  - don't upgrade
* dynamic sql
  - variadic parameters (tempting)
  - in a sproc 

8. What's the deal with 'defence in depth'?
* several layers
* even if one is compromised, not all is lost
* example
  - motte and baily 
  - inject sql 
    * permissions minimize mischief


4. What's the Same Origin Policy?
* script running in a browser can only access
stuff from its own origin 
* origin: 
  - domain - accounts.example.com v expample.com
  - protocol - http v https
  - port - port

7. What are some ways to mitigate XSS?
* don't trust user input
* html encode 
somecontrol.innerText = '<h...
somecontrol.innerhtml 
* use a library or framework 
  - angular
  - mustache.js
  - templating
* mdn 
  - sink - link
  
