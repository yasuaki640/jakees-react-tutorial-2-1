import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("app");

  const [text, setText] = useState("");
  const onChangeText = (e) => setText(e.target.value);

  const [open, setOpen] = useState(false);
  const onClickOpen = () => setOpen(!open);

  const onClickClose = () => useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
