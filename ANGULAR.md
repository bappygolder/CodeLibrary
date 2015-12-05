<!--
GitHub Markdown System:
https://help.github.com/articles/markdown-basics/
https://guides.github.com/features/mastering-markdown/
-->

# Angular Templeting

#### Preparation
1. Include AngularJS to the projectt. To include through CDN: add the following code at the end of the body tag (just before the </body>):
```HTML
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular.min.js"></script> 
```

2. Make ```scripts``` folder, if there not one already within the project.
3. Create an ```app.js``` file. 
4. Link the ```app.js``` file to appropriate HTML file. (i.e: index.html). Make sure this link goes directly after the ```angularJS link```. Like the following example:
```HTML
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular.min.js"></script> 
<script src="scripts/app.js" type="text/javascript"></script>
```

5. Create the application by declaring Angular's module method within the ```app.js``` file, like shown below:
```javascript
angular.module("appName", []);
```

6. Now tell the app where to bootstrap (start running), for example in the ```body``` tag. 
```javascript
<body ng-app="todoListApp">
```


 




<!--
New sections:
####Start New File
```HTML
```
-->