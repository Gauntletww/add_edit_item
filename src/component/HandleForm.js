export default async function HandleForm(
  Name,
  Url,
  add,
  setAdd,
  setbtn,
  Addshortcut,
  Model,
  edit
) {
  
  if (edit.is !== "Edit") {
    setAdd([
      ...add,
      {
        name: Name.current.value,
        url: Url.current.value,
        display: "none",
        class: "hov",
      },
    ]);
    Name.current.value = "";
    Url.current.value = "";
  } else {

    await setAdd((prev) =>
      prev.map((item, index) => {
        if (index === parseInt(edit.index)) {
          return { ...item, name: Name.current.value, url: Url.current.value };
        }
        return item;
      })
    );
    Name.current.value = "";
    Url.current.value = "";
  }
 
  setbtn({
    disabled: true,
    backgroundColor: "transparent",
  });
  if (add.length > 6) {
    Addshortcut.current.style.display = "none";
  } else {
    Addshortcut.current.style.display = "flex";
  }
  Model.current.style.display = "none";
}
