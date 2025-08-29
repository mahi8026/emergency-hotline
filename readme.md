
### 6. Answer the following questions clearly:

1. 
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

1.Question:What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?<br>
Answer: <br> a. getElementByID is one unique . <br>
        b. getElementsByClassName is a group.<br>
        c. querySelector Only one person comes, even if in a    hall where 50 others are wearing red. <br>
        d. All matches, but fixed list. Everyone wearing a red shirt, line up!<br>
2. How do you **create and insert a new element into the DOM**?
answer: <br>
Step 1: Create New Element - document.createElement() <br>
Step 2: Give It Some Personality <br>
Step 3: Find the Right Spot on the Page <br>
Step 4: Place It on the Page - appendChild()

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation in JavaScript is a way to listen for events on a parent element instead of putting separate listeners on every child element. When something happens on a child—like a click—the event “bubbles up” to the parent, and the parent can respond accordingly.<br>

Performance: Fewer event listeners, better memory usage.<br>

Dynamic elements: Works for elements added to the DOM after the listener is set.<br>

Cleaner code: Easier to manage one listener than many.<br>

5. What is the difference between **preventDefault() and stopPropagation()** methods?<br>
Answer:<br> *preventDefault() → Think of it as stopping the browser from doing its usual thing.<br>


*stopPropagation() → Think of it as stopping the event from spreading to parent elements


