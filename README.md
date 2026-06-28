
##  Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

### Answers 

### 1.Ans: 
### i) By using getElementById ,we can select a specific element though element "id".
### ii) "getElementsByClassName" is use for to get the all element that are in same "class".
### iii) By using "querySelector()"we can select element by ("id","class","tag") and it return only first matching. 
### iv) By using "querySelectorAll()" we can get all the element that are in same ("id","class","tag").

### 2.Ans:
### To create a new element we use "document.createElement('element name that i want to create')".
### And to insert an Element we use "appendChild(the new element that i want to add)"

### 3.Ans: Event Bubbling is a system that when an event happen in an element  like('click',mouseover) than it reaches by upward to  its parent or grandparent until to the document.

### 4.Ans: Event Delegation is a method where we can adding a single event listener to parent element instead of multiple child element and we can change or customize element dynamically. It useful because it saves time,keeping code cleaner,reduce memory use.

### 5.Ans: By using "preventDefault()" we can prevent browser default action for an event like (Link=>stop navigate,From => stop submit).And we use "stopPropagation()" when we want to prevent parent event handlers from executing when a child element is clicked,means that when we click an element and we don't want to execute its parent element to do that we use "stopPropagation()".