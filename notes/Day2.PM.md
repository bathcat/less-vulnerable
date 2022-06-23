# Review

1. What is the fancy word for the motte and baily castle design?
* Related: Zero trust
  - Don't let barbarians in without authentication
* Layered security
* Defence in depth


2. What's it called if a hacker runs bad stuff through a sproc?
* sql injection
* trust users
* mix sss


3. If jwt's a standard, what are the other options?
* Jwt is a token standard 
  - token encodes claims
  - signed by issuer
* Alternatives:
  - Windows Auth
  - Session Cookie
  - OAuth 
    * ASP CORE ... external authenticators
  - API key... hand-rolled


4. What are some CORS limitations?
* Enforced by a browser
  - Modern browsers (past ~10 years)
  - Not hand-rolled browser
* Doesn't protect your api from non-browser clients
  - Postman exists
* Tough to troubleshoot 
  - postman should have a browser emulator


5. Name some practical password requirements v. theater?
* Everything's debatable
* Practical
  - length min/max
  - no personal info (email, birthday)
  - nothing obvious
  - lockout after ~5 failed attempts
* Theater
  - password change (bruce s says it's no good)



6. What's xss?
* cross-site-scripting
* vulnerability
* web apps
* bad guy puts javascript into something 
  - textbox
  - query string
* flavors
  - persisted
  - client-side
    * reflected url
	* dom 
	


7. On CORS, what's the difference between these two related methods?

```csharp
policy.WithOrigins('http://something.com')
policy.SetOriginAllowed(o => true)
```

* withorigins is an array. explicit.
* SetOriginAllowed is freestyle
```csharp
policy.SetOriginAllowed(o => new Uri(o).Port == 2342);
```

8. How do you avoid sql injection?
* sanitize
* paramaterized queries
* sproc 
* use an orm
* avoid string concatenation


11. What's the deal with CSRF?
* request forgery
* hijack cookie
* form post
  - validation form token
* mostly based on server-side-rendering
  - form posting
* spa (less of a big deal)
  - interact with apis based w/ REST an json 


9. What's the purpose of a pre-flight request?
* Initial request OPTIONS
   access-control-allow-whatever
* Made by browser
* State-changing requests


10. How do you avoid xss?
* Sanitize inputs
* html encoding
* use a templating toold: mustache.js, angular, etc.
* Quick an dirty:
```
element.innerText = '<script here';
```


