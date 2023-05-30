import { useEffect, useRef, useState } from "react";
import "./App.css";
import Items from "./Items";
import HandleForm from "./component/HandleForm";
function App() {
  const [add, setAdd] = useState([]);
  const [btn, setbtn] = useState({
    disabled: true,
    backgroundColor: "transparent",
  });
  const [edit, setEdit] = useState({is:"Done",index:null});
  const Model = useRef();
  const Name = useRef();
  const Url = useRef();
  const BtnName = useRef();
  const Addshortcut = useRef();
  useEffect(() => {
    BtnName.current = edit;
  }, [edit]);
  const isURL = (text) => {
    return text.includes("https://") || text.includes("http://");
  };

  const Urlchange = (event) => {
    if (isURL(event.target.value)) {
      setbtn({
        disabled: false,
        backgroundColor: "blue",
        Color: "white",
      });
    } else {
      setbtn({
        disabled: true,
        backgroundColor: "transparent",
      });
    }
  };
  useEffect(()=>{
if(edit.is === "Edit"){
  setbtn({
    disabled: false,
    backgroundColor: "blue",
    Color: "white",
  });
}
  },[edit])
  const ShowModel = () => {
    setEdit({is:"Done",index:null});
    Model.current.style.display = "block";
  };
  const CloseModel = () => {
    Model.current.style.display = "none";
    Name.current.value = "";
    Url.current.value = "";
  };
  return (
    <>
      <div id="overlay" style={{ display: "none" }} ref={Model}>
        <div className="card">
          <h2>{edit === "Done" ? "Add" : "Edit"} shortcut</h2>
          <div className="first">
            <input type="text" id="name" name="name" ref={Name} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="first">
            <input
              type="url"
              id="url"
              name="url"
              onChange={Urlchange}
              ref={Url}
            />
            <label htmlFor="url">Url</label>
          </div>
          <div className="button">
            <input type="button" value={"Cancel"} onClick={CloseModel} />
            <input
              type="submit"
              value={edit.is}
              style={{ backgroundColor: btn.backgroundColor, color: btn.Color }}
              disabled={btn.disabled}
              onClick={()=>HandleForm(Name,Url,add, setAdd, setbtn, Addshortcut,Model,edit)}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="column">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search Goggle or type a URL" />
          <i class="fa-solid fa-microphone"></i>
        </div>
        <div className="column">
          <Items
            add={add}
            setAdd={setAdd}
            Model={Model}
            Input={{ Name, Url }}
            setEdit={setEdit}
          />
          <div className="row hov" onClick={ShowModel} ref={Addshortcut}>
            <div className="item">
              <i className="fa fa-plus"></i>
            </div>
            <span>Add shortcut</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
