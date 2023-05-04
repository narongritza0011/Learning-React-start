import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";
import CountTest from "./components/CountTest";
import MyProfile from "./components/MyProfile";
import CountComponent from "./components/CountPage";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("dew narongrit");
  const [ifShow, setIfShow] = useState(true);

  const user = {
    firstname: "narongrit",
    lastname: "kumpakping",
    imageUrl:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    imageSize: 150,
  };

  const isLoggedIn = true;
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "green" }}
    >
      {product.title}
    </li>
  ));

  function handleClickUp() {
    setCount(count + 1);
  }

  function handleClickDown() {
    if (count <= 0) {
      setCount(0);
      alert("count < 0 !!!!");
    } else {
      setCount(count - 1);
    }
  }

  function handleClickReset() {
    setCount(0);
  }
  return (
    <>
      {/* วิธีการส่ง Prop ไปยังCompanent อื่น */}
      <h2>จาก Component ที่ส่ง Props เข้าไป</h2>
      <MyProfile data={user} />

      <hr />
      <h1> lernning *Displaying data</h1>
      <h1 style={{ color: "red", border: "1px solid" }}>Welcome to my app</h1>
      <p>{name}</p>
      <h1>{user.firstname}</h1>
      <img
        className="avatar"
        alt={"Photo of " + user.firstname}
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <p>{user.firstname + " " + user.lastname}</p>
      <hr />
      <br />

      <button onClick={handleClickUp}>+</button>
      <input type="number" value={count} name="" id="" />
      <button onClick={handleClickDown}>-</button>
      <br />
      <button onClick={handleClickReset}>Reset</button>
      <hr />
      <MyButton />
      {ifShow ? "true" : "false"}
      <br />
      <hr />
      <h1> lernning *Conditional rendering</h1>
      {/* หากคุณต้องการรหัสที่กระชับมากขึ้น คุณสามารถใช้ตัวดำเนินการเงื่อนไขได้ ?ไม่เหมือนกับifมันใช้งานได้ใน JSX:
       */}
      {/* {content} */}
      {/* เมื่อคุณไม่ต้องการelseสาขา คุณสามารถใช้ไวยากรณ์ตรรกะ&& ที่สั้นกว่านี้ได้ : */}
      {isLoggedIn && <AdminPanel />}
      <ul>{listItems}</ul>
      <hr />
      <h1>Count from component CountTest</h1>
      <CountTest />
      <CountTest />

      <hr />
      <h1>ลองทำฟังชันเพิ่มลบ reset ในคอมโพเเนน</h1>
      <CountComponent />
    </>
  );
}

export default App;
