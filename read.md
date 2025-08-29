1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#getElementById: it only gives the element searched by the specified ID name. it always returns a single element or null if none is found. we can use id for only one element.

#getElementsByClassName: we can find mutiple elecments by their class name. it ca return more than one element as we can use same class name with multiple element.

#querySelector / querySelectorAll: querySelector return the 1st element that matches with given Css selector. it doesn't look for the next elements but querySelectorAll returns all elements matching the selector. querySelector / querySelectorAll aren't restricted to IDs and Classes. one can select almost anything to a CSS file.


2. How do you create and insert a new element into the DOM?

We can create new element by using - documnet.createElement(). then you have to set the content or attribute to the new element. next you have to use appendChild() or append().

for example:

let newExample = document.createElement("newfile");
document.body.appendChild(newExample);


3. What is Event Bubbling and how does it work?

Event bubbling means when an event occurs or a click happen then it first triggers its parentsown event handler then to its parents and the grandparents to till the root.


4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means adding a event listener to a parent element. so you don't have to add multiple listener to every child elements.

its helpful because it's helps in performencing and have to add less listener. and when you add new element it works with the new child also.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() helps to prevent the default system to one element like reloading one page when you submit the form.

stopPropagation() helps to prevent event bubbling or capturing. 



