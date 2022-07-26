# React 

[Website Link for Detail Explaination](https://www.interviewbit.com/react-interview-questions/#freshers)
### Introduction
- React is an `open-source JavaScript framework` library that allows developers to the creation of simple, fast, and scalable web applications.
- `Jordan Walke`, a software engineer who was working for Facebook created React. 
- It was first deployed on the news feed of Facebook in `2011` and on Instagram in `2012`.

### 1) What is React?
React is a `front-end and open-source JavaScript library` which is useful in developing applications with a `single page`.
 It is helpful in building complex and reusable user interface(UI) components of `mobile and web applications` as it follows the `component-based approach`.


_The important features of React are:_  
-It supports `server-side rendering`.  
-It will make use of the `virtual DOM` rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.  
-It follows `unidirectional` data binding or data flow.  
-It uses `reusable UI components` for developing the view.  

### 2) What are the advantages of using React?

***1) Use of Virtual DOM to improve efficiency:***  
 Each time the `data changes` in a react app, a new virtual DOM gets created.  
 `Creating a virtual DOM is much faster` than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.  
  ***2) Gentle learning curve:*** Compare to other framework like Angular its easy to learn  
 ***3) SEO friendly:***(Search Engine Optimization) It also allows server-side rendering, which boosts the SEO of an app.  
***4) Reusable components:***  
***5) Huge ecosystem of libraries to choose from:***  
 React provides you with the `freedom to choose the tools, libraries, and architecture` for developing an application based on your requirement.  

### 3) What are the limitations of React?  
React is `not a framework` as it is only a library.  
The components of React are numerous and will `take time to fully grasp` the benefits of all. 
It might be `difficult for beginner programmers` to understand React.  
`Coding might become complex as we use inline templating and JSX`.    

 ### 4) What is useState() in React?
The useState() is a `built-in React Hook`   
It `allows us to track state variable in a function component`.  
It should be used when the DOM has something that is `dynamically manipulating/controlling`.
State generally refers to data or properties that need to be tracking in an application.
    
### 5) What are keys in React?  
A key is a `special string attribute` that needs to be included when using `lists of elements`.

_Importance of keys_ -    

- Keys help react `identify` which elements were added, changed or removed.  
- Keys should be given to array elements for providing a `unique identity` for each element.  
- With keys, React has an idea of which `particular element was deleted, edited, and added`.  
- Keys are generally used for `displaying a list of data coming from an API`.

### 6) What is JSX?
JSX stands for `JavaScript XML`.  
JSX allows us to write `HTML inside JavaScript` without using functions like appendChild( ) or createElement( ).  
_Note_ - We can create react applications without using JSX as well.

### 6.1) Without using JSX create element  
we would have to create an element by the following process:  
```
const text = React.createElement('p', {}, 'This is a text');
const container = React.createElement('div','{}',text );
ReactDOM.render(container,rootElement); 
```


### 7) What are the differences between functional and class components?   


|  Functional Component (stateLess)   | Class Component  (stateFul) |
| ----------------------------------  | --------------------------- |
| A functional component is just a plain `JS function` that `accepts props` as an argument and `returns (jsx)` a React element(JSX).  |  A class component requires you to `extend from` React Component and create a `render function` which `returns a React element`. |
| There is `no render` method used in functional components. | It must have the render() method returning JSX  |
|  `run from` top to bottom and once the function is returned it `cant be kept alive`. |  Class component is instantiated and different life cycle method is `kept alive` and being run and `invoked depending on phase` of class component.  || Also known as `Stateless components`. they are mainly responsible for `rendering UI`. | Also known as Stateful components because they implement logic and state. ||  `React lifecycle methods` (for example, componentDidMount) `cannot` be used in functional components. |  React lifecycle methods can be used inside class components (for example, componentDidMount). || `Hooks can be easily used` in functional components to make them Stateful. | It `requires different syntax` inside a class component to implement hooks. || ``` example: const [name,SetName]= React.useState(‘ ‘) ``` | ```
 example: constructor(props) {

   super(props);

   this.state = {name: ‘ ‘}

} ``` || `Constructors` are not used. | Constructor are used as it needs to store state. |

_Note_ : `Hooks can only be used in functional components, not in-class components.`