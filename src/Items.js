
export default function Items({ add, setAdd, Model,Input ,setEdit}) {
  const EditMenu = (event) => {
    BackMenu(event);
    Model.current.style.display =
    Model.current.style.display === "none" ? "block" : "none";
    const num = parseInt(event.target.parentNode.getAttribute("index"));
    let arr1 = [...add];
    arr1 = arr1.find((item, index) => index === num);
    Input.Name.current.value = arr1.name
    Input.Url.current.value = arr1.url
    setEdit({is:"Edit",index:event.target.parentNode.getAttribute("index")})
  };
  const RemoveMenu = (event) => {
    const num = parseInt(event.target.parentNode.getAttribute("index"));
    let arr = [...add];
    arr = arr.filter((item, index) => index !== num);
    setAdd([...arr]);
  };
  const BackMenu = (event) => {
    const num = parseInt(event.target.parentNode.getAttribute("index"));
    setAdd((prev) =>
      prev.map((items, index) => {
        if (index === num) {
          return { ...items, display: "none", class: "hov" };
        }
        return items;
      })
    );
  };
  const openMenu = (event) => {
    const num = parseInt(event.target.parentNode.getAttribute("index"));
    setAdd((prev) =>
      prev.map((items, index) => {
        if (index === num) {
          return { ...items, display: "flex", class: "" };
        }
        return items;
      })
    );
  };
  return (
    <>
      {add.map((item, index) => {
        return (
          <div className={`row ${item.class}`} key={index}>
            <button className="menu_btn" onClick={openMenu} index={index}>
              <i className="fas fa-ellipsis-vertical"></i>
            </button>

            <div className="item">
              {" "}
              <i>{item.name.charAt(0).toUpperCase()}</i>
            </div>
            <a href={item.url}>
              {item.name.charAt(0).toUpperCase() +
                item.name.split("").slice(1).join("")}
            </a>
            <div
              className="item_edit_model"
              style={{ display: item.display }}
              index={index}
            >
              <button onClick={EditMenu}>Edit</button>
              <button onClick={RemoveMenu}>Delete</button>
              <button onClick={BackMenu}>Back</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
