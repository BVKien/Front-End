import { useState, useEffect } from "react";
import Form from "./Form"; // components
import List from "./List";
import Table from "./Table";

function App() {
  //  https://localhost:7054/GetAllCourses
  //  https://jsonplaceholder.typicode.com/
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  // request 
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        console.log(data)
        setItems(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchItems()

  }, [reqType])

  return (
    <div>
      <Form
        reqType={reqType}
        setReqType={setReqType}
      />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
