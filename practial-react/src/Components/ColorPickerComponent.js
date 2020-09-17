import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ColorPickerComponent() {
  const [selectedColor, setSelectedColor] = useState("#F01313");
  const [canShowColorPallet, setCanShowColorPallet] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setCanShowColorPallet(!canShowColorPallet);
          console.log(`Pallet flag: ${canShowColorPallet}`);
        }}
      >
        {canShowColorPallet ? "Close Color Pallet" : "Show Color Pallet"}
      </button>
      <div>
        <span style={{ backgroundColor: `${selectedColor}` }}>
          Selected Color
        </span>
        <span> {selectedColor}</span>
      </div>

      <div>
        {canShowColorPallet && (
          <ChromePicker
            color={selectedColor}
            onChange={(newColor) => setSelectedColor(newColor.hex)}
          />
        )}
      </div>
    </div>
  );
}

export default ColorPickerComponent;
