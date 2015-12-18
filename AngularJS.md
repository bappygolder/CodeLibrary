<!--
GitHub Markdown System:
https://help.github.com/articles/markdown-basics/
https://guides.github.com/features/mastering-markdown/
-->

# Angular Templeting

### Preparation
- Include AngularJS to the projectt. To include through CDN: add the following code at the end of the ```body``` tag (just before the </body>):
```HTML
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0-beta.2/angular.min.js"></script> 
```

- Make ```scripts``` folder, if there not one already within the project.
- Create an ```app.js``` file. 
- Link the ```app.js``` file to appropriate HTML file. (i.e: index.html). Make sure this link goes directly after the ```angularJS link```. Like the following example:
```HTML
<script src="scripts/app.js" type="text/javascript"></script>
```

- Create the application by declaring Angular's module method within the ```app.js``` file, like shown below:
```javascript
angular.module("appName", []);
```

- Now tell the app where to bootstrap (start running), for example in the ```body``` tag. 
```javascript
<body ng-app="appName">
```

### Create New Directive
To create a new directive in a new file:
- Create a new file within the ```source``` folder name it the same name as the directive. i.e: ```directive-name.js```.<br>

*Note: Take caution for naming convention in AngularJS. Use ```dash-seperated.file```  name.*

- Connect the directive to the relavant HTML file, i.e: ```index.html```. Make sure the link is added at the bottom of the file after the other source links:

```JavaScript
  <!--Angular Directive/s-->
		<script src="diretive-location.js" type="text/javascript"></script> 
```

- Then use the following tempate within the new file to create a new directive

```JavaScript
angular.module('appName')
.directive('directiveName', function(){
	return{
		template: "This is the Hello World directive"
	};           
});
```

- Then introduce/call the directive within the app's HTML in one of the following 2 ways:

Introduce as a HTML ```attribute```:
```JavaScript
<div directive-name></div>
``` 

or

Introduce as a HTML ```tag```:
```JavaScript
<directive-name></directive-name>
```

**Note**: Directives names are given in ```CamelCase``` when it is initialized and ```dash-seperated``` when used within HTML. So a direcitve named ```testDirective``` becomes ```test-directive```*

### Create a new app with an initial controller and a simple function

Step 1: Create the basic app
```JavaScript
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){

});
```

Step 2: Introduce a new function
```JavaScript
angular.module("todoListApp", [])
.controller('mainCtrl', function($scope){
  $scope.helloworld = function(){
    console.log("Hello there this is the helloworld controller function in the main Ctrl!");
  };
});
```

### Introducing Controllers With Best Practices
Best practice is to introduce the controller inside a function like bilow:

```JavaScript
(function() {
    'use strict';

    angular.module('oTask', [
        'ui.router'
    ])
    
		.controller. . .


})();
```


<!--
New sections:
###Start New File
```JavaScript
```
-->