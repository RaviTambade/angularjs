# ng Digest

When someone refer to the digest cycle of something refers about the way or how something works with data change.

In AngularJS data can change in several ways. Maybe a user do an event, maybe there's an external that fires something that changes data or other component that changes some data that affect other component. That's are the three common ways.

So, you must know how data binding in AngularJS can be and it can be in several ways (the three mentioned) but in all of three all relay in $watch property of the $scope element.

On the world of promises and observables, $watch is the way that you can add an "event listener" to a controller in order to know when something change. The $watch method tells a controller that must be take care (watch as his name says) of a variable (a data) and do something when it changes (or not).

But, by the way, you can no only add a $watch to a variable, you can add a $watch to a directive too, to an element or to an event. $watch is very useful.

AngularJS will run the function attached to the $watch method every time the attached changes and depends on what the $watch is situated.

AngularJS digest cycle is called by any scope object, that the resume of all previous. It will go through all the $watch element seen if there's or not a change. First on the parent and then into the child ones.

After go through all the $watch firing the functions if something have changed it will repeat the process because, maybe something can be changed again, so it do this process several times. How many times? 10 times. After that if it needs to run again it will show an error (justly) because think that if something need more than 10 cycles you are doing it wrong.

And that's the digest cycle, something very easy but that usually need to be talked to.

Some people wants and need some complex explanation about it something very simple. The digest cycle in angular is how it change the data and relay on the $watch that you can fire globally manually (using the $scope.$apply method) or automatically when there's an event that fire the $watch method. Very easy.


https://www.newline.co/ng-book/p/The-Digest-Loop-and-apply/