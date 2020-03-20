import React from "react";

function UCCount({ text, count }) {
  console.log(`Rendering Count - ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(UCCount);
