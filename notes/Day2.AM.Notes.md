# Day 2

*** Get Cracking: 900EST ***

## Game Plan
1. Housekeeping

2. Review

3. CORS 
  - Discussion
     * What's on by default?
  - Lab
  
4. Quality
  - Discussion
  - Demo
  - Lab
  
5. Authorization, Authentication
  - Discussion
  - Demo, Lab, ?
  



## Housekeeping
* Poll
* New stuff
* Nag: Survey
* Thoughts on Vulnerability v Exploit




## Followup
* Table-valued-thing...sorry.
* Repl.it... sorry.
  - Github spaces
  - Beta
* Reflected xss 

Short answer: use an online url encoder like [this one](https://www.urlencoder.org/).

Here's the script I want to inject:
```
<img src="x.x" onerror="alert('sn8ked')" />
```

Same script encoded:
```
  %3Cimg+src%3D%22x.x%22+onerror%3D%22alert%28%27sn8ked%27%29%22+%2F%3E
```

Evil url:
  http://localhost:3000/latin-translator?english=%3Cimg+src%3D%22x.x%22+onerror%3D%22alert%28%27sn8ked%27%29%22+%2F%3E




## Review 

1. What's the deal with SQL Injection?
> Get it with bad sanitation, escaping, etc.
> Inject stuff into db. Recconoitering. 

9. What are some ways to mitigate SQL Injection?
> Lots of validations
> Use tools like EF
> Use sprocs
> DBCommand, parameterized.
> least priv user.
```
executeSqlRaw('exec dbo.spAddUser ...')
```


2. What's the deal with XSS?
* Cross-site-scripting
* Injecting maliscious scripts (javascript)
* XSS is a vulnerability. Exploit it in a bunch of ways.
* Ex: 2015 incident
  - Limited-time-sale
  - User-script
* Scanners, checklists, etc.
  - Experimental APIs 
```
   $('#submit').innerHTML = '<script....'
```
  - Angular - Warnings an Compile
  - Vanilla vulnerability scanning.. 
  - Ideal: build pipeline with SonarQube, light, etc.
  - How to find vulnerabilities when live...


3. What do SQL Injection and XSS have in common?
* Both vulnerabilities
* User injects code 
* Check input, don't trust users.
  - In js.
  - In api.
* Watch out building strings that you use programatically...


4. What's the Same Origin Policy?
* Script can access resources from its own origin
* Blocked (by default) from accessing other stuff
* Three things of an origin:
  - Domain
  - Port
  - Protocol
  
  

5. What's 'blind injection'?
* Assumption is that the end-user doesn't get detailed error messages
* Using `sleep` to exfiltrate
* Part of exploit development	(often)


6. Why do SQL Injection vulnerabilities still happen?
* Outdated technologies
  - Tools, people
* Rushed development
  - Interns
  - Security as a feature
  - Done is...
     unit tests
	 secure (definition of secur)
	 code reviews
* Tools - EF / Abstract
  - Tool makers are better than me
  - Abstraction means easy(ier) vendor swapping
* Variadic parameters
		```
		SELECT * from users 
		where 
		   surname = 'something'
		   OR givenName like 'something else'
		```

7. What are some ways to mitigate XSS?
* Sanitizing 
  - user input 
  - stuff from api
* process tools 
  - education
  - scanners
  - frameworks Angular 



8. What's the deal with 'motte and baily'?


---- 

## Lab thoughts
* Asp Core intro
