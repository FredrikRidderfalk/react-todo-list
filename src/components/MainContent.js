import React from "react";

function MainContent() {
  return (
    <main>
      <input type="checkbox" className="checkbox" id="panties" name="panties" />
      <label for="panties">Panties</label>
      <input
        type="checkbox"
        className="checkbox"
        id="left-sock"
        name="left-sock"
      />
      <label for="left-sock">Left sock</label>
      <input
        type="checkbox"
        className="checkbox"
        id="right-sock"
        name="right-sock"
      />
      <label for="right-sock">Right sock</label>
      <input type="checkbox" className="checkbox" id="tshirt" name="tshirt" />
      <label for="tshirt">Tech T-shirt</label>
    </main>
  );
}

export default MainContent;
