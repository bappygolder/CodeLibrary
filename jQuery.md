<!--
GitHub Markdown System:
https://help.github.com/articles/markdown-basics/
https://guides.github.com/features/mastering-markdown/
-->

# jQuery Templete & Snippets

#### Preparation - Include jQuery
Include at the end of the body before any other ```source``` links in either of the following way:

Directly include jQuery within the project:
- [Download](https://jquery.com/download/) the latest jQuery minified file.
- Add the file within the ```source``` folder of the project
- Linke the source file to the ```HTML``` file
```javascript
  <!--jQuery link-->
    <script src="Project-Source/scripts/jquery-1.11.3.min.js"></script>    
```

or

Include jQuery using a Content Delivary Netrowk (CDN)
```javascript
  <!--jQuery CDN link-->
  	<script <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>    
```
[More jQuery code help](https://github.com/bappygolder/HTML_Gold/blob/master/jquery.md) | 
[jQuery Website](https://jquery.com/download/)

#### General workflow for adding jQuery plugins
The following are general workflow for adding jQuery plugins for many plugins (but not all)

1. Attach the ```CSS file``` before the main ```CSS file```.

  ```html
  <link rel='stylesheet' href='styles/main.css' type="text/css">
  ```

2. Attach jQuery if not attached already prior any other ```script``` tags right before the ```</body>``` section.
3. Attach the plugin's JavaScript file. For example:

  ```javascript
    <!--jQuery link-->
      <script src="Project-Source/scripts/plugin/plugin-source.js"></script> 
  ```

4. Structure the ```html``` as required for the plugin's need. See documentation.
5. Add necessary custom javascript. (Best to use an external JavaScript file).
6. Select an HTML on the page using ```jQuery```.
7. Call the plugin function.



<!--
New sections:
####Start New File
```javascript
```
-->
