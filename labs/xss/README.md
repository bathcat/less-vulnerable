# Xss Vulnerabilities

## Overview

Your marketing department runs the company blog. It's nothing original, just product announcements, but they 
developed the application themselves, rather than wait for someone in IT to do it for them. 

Recently, they heard about something called 'XSS' which, being from marketing, they don't understand. Still, 
it sounds ominous, so they want you to check out their application for vulnerabilities. If you find one, see if 
you can fix the problem.








































## Cheats
* For the red team, something like this often does the trick:
```html
<img src="assets/duck.png" onload="alert('Sn8ked')" />
```
* Consider using `element.innerText` to sanitize on the client side.
* Consider using `HtmlEncoder` in your API controller.
* Read up on experimental features:
  - [Sanitizer api](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API)
  - [Element.setHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML)
