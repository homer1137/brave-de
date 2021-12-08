
import PayForm from "./pay-form/index";
import { useState } from "react";
export default function App() {
  const [selected, setSelected] = useState("");
  return (
    <div>
    
      <PayForm selected={selected} setSelected={setSelected} />

      <br />
      <br />
      <br />
      {selected}
    </div>
  );
}
