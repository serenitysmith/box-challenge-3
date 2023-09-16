



import React, {useState} from "react"
// To achieve below challenge, you can add an event listener to the div element in the Box component.
export default function Box(props) {
    // added content here 
    // using the props.on to to dertimine that the inial state is on
    // we do that by adding the code below that consists of a const 


    //ADDED CONTENT 
    const [isOn, setIsOn] = useState(props.on);



// Define a function to toggle the state between "on" and "off" when clicked.
const toggleBox = () => {
    setIsOn(!isOn);
};



    //ORIGANIAL CODE
    // Dynamically set the background color based on the state.
    // changed it from pops.on which automattically set each array item that was on to on but addinng the function isOn? toggles between on and off
    const styles = {
        backgroundColor: isOn ? "#222222" : "transparent"
    }
    
    return (
       <main>
<div style={styles} className="box"
        onClick={toggleBox} // Add an event listener to toggle the state on click
      
        ></div >
        

      
       </main> 
       
    );
} 
/**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */



//ANSWER
///In this modified Box component:

// We use the useState hook to create a state variable called isOn, which represents whether the box is "on" or "off." We initialize it with the value of props.on received from the parent component.

// We define a toggleBox function that toggles the isOn state variable between true and false when the box is clicked. This function is called when the div element is clicked, effectively toggling the state between "on" and "off."

// The styles object is updated to dynamically set the background color based on the value of isOn. If isOn is true, the background color is set to "#222222" (indicating "on"), and if isOn is false, the background color is set to "transparent" (indicating "off").

// An onClick event listener is added to the div element, which calls the toggleBox function when the box is clicked. This enables the toggling functionality, and clicking each box should toggle it between "on" and "off."




// ### **Local State**
// This code is for a simple React function component named "MyComponent" which uses the React Hook "useState". Let's break it down:
// In React, local state refers to the state that is managed and used within a specific component. It is distinct from global state managed by state management libraries like React Context. Local state is typically used when the state data is relevant only to a specific component and does not need to be shared with other components.

// To manage local state in a functional component, you can use the **`useState`** hook provided by React. The **`useState`** hook allows you to declare state variables and their corresponding update functions. Here's an example:
// ```
// This line imports the React library and one of its Hooks called 'useState'. 'useState' allows the component to have state variables
// // ```jsx
// import React, { useState } from 'react';
// This line is declaring a functional component called MyComponent.
// function MyComponent() {
// const [count, setCount] = useState(0);
// Using the useState hook, a new state variable 'count' is being declared which is initially set to 0. The function 'setCount' is used to update the state variable 'count'.





// Here an arrow function named 'increment' is declared. This function's job is to increase the 'count' state variable by 1 every time it gets called.

// const increment = () => {
// setCount(count + 1);
// };



// The 'return' keyword is used to specify what the component should render. Here it renders a 'div' containing a paragraph tag 'p' and a button. This block says to display the current state of 'count', and a button that when clicked on, will call the 'increment' function and increase the count by 1.

// return (
// <div>
// <p>Count: {count}</p>
// <button onClick={increment}>Increment</button>
// </div>
// );
// }
// ```
// Finally, the definition of the 'MyComponent' function is closed using the '}' character.

// So in simple terms, this is a React component that displays a count and a button. Every time we click on the button, the count increases by 1.
// In this example, the **`useState`** hook is used to declare a local state variable called **`count`** with an initial value of **`0`**. The hook returns an array with two elements: the current value of the state variable (**`count`**) and a function (**`setCount`**) to update the state.

// The **`increment`** function is an event handler that calls **`setCount`** with the updated value of **`count + 1`** when the button is clicked. This triggers a re-render of the component with the updated state, causing the count value to be displayed in the UI.

// Local state is scoped to the component in which it is defined. Changes to local state will cause a re-render of the component and any child components that use the state value.

// It's important to note that local state is not shared between different instances of the same component. Each instance of the component will have its own separate state.

// Local state is useful for managing component-specific data and behavior. It keeps the state encapsulated within the component, making it self-contained and easier to reason about.