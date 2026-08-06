interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  assignedTo: string;
}

// Partial = make all properties optional
type PartialTodo = Partial<Todo>
let updateTodo:PartialTodo = {
completed : true
}


// required = make all properties required
type RequiredTodo = Required<Todo>


// readonly = make all properties readonly so we cannor reassign or update any value
type ReadOnlyTodo = Readonly<Todo>
let myTodo:ReadOnlyTodo = {
 title: "Learn TypeScript",
  description: "Complete tutorial",
  completed: false,
  createdAt: new Date(),
  assignedTo: "karan",
}
// myTodo.title="abc" //error


// Pick= pick specific properties <name, properties | properties>
type specificTodo = Pick<Todo, "title"| "description">
let myTodo1:specificTodo = {
      title: "My Todo",
      description: "cooking",
}

// omit = not want any properties
type omitTodo = Omit<Todo, "createdAt" | "assignedTo">


// Record = construct object type with specific keys and value type, merged two types which one has key and other has value
type PageInfo = {
    title:string,
    url:string
}

type Pages = "home" | "about" | "contact"

let merged:Record<Pages, PageInfo> ={
    home: {
        title:"Home",
        url:"/"
    },
    about: { 
        title: "About", 
        url: "/about"
    },
    contact: { 
        title: "Contact", 
        url: "/contact"
    },
}

// returntype = get the return type of function
// 👉 ReturnType = "Take a function and give me the type of whatever it returns."
// If getUser() changes later, you'll also need to manually update User. With ReturnType, the type updates automatically.
function createUser() {
 return {
    id:1,
    name:"karan",
    email:"abc@gmail.com"
}}

type UserType = ReturnType<typeof createUser>
// gives like
// type User = {
//   name: string;
//   age: number;
// };