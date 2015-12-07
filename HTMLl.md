<!--
GitHub Markdown System:
https://help.github.com/articles/markdown-basics/
https://guides.github.com/features/mastering-markdown/
-->

# HTML Templete & Snippets

#### Start New File
```HTML
<!doctype html>
<html lang="en">
	<head>
	  <!-- Website Title -->
			<title></title>
		
	  <!-- Style sheet link/s -->
			<link rel='stylesheet' href='styles/main.css' type="text/css">

	  <!-- Fonts -->
			<link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
		
	  <!-- IE Fix -->	
			<!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
			<![endif]-->
	</head>
	
	<body>
		
	</body>
</html>
```

#### Include jQuery
Include at the end of the body before any other ```source``` links in either of the following way:

Directly include jQuery within the project:
- [Download](https://jquery.com/download/) the latest jQuery minified file.
- Add the file within the ```source``` folder of the project
- Linke the source file to the ```HTML``` file
```javascript
  <!--jQuery link-->
    <script <script src="Project-Source/scripts/jquery-1.11.3.min.js"></script>    
```

or

Include jQuery using a Content Delivary Netrowk (CDN)
```javascript
  <!--jQuery CDN link-->
  	<script <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>    
```
[More jQuery code help](https://github.com/bappygolder/HTML_Gold/blob/master/jquery.md) | 
[jQuery Website](https://jquery.com/download/)

#### Include AngularJS
Include at the end of the body tag (just before the ```</body>```)
```javascript
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular.min.js"></script>        
```
Update the ```src=""``` [from the angularJS websit >>](https://angularjs.org/)<br/>
[More angularJS code help >>](https://github.com/bappygolder/HTML_Gold/blob/master/ANGULAR.md)

<!--
New sections:
####Start New File
```HTML
```
-->