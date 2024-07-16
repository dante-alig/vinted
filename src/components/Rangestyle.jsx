import { Range, getTrackBackground } from "react-range";
import { useState } from "react";

const Rangestyle = ({ priceMin, setPriceMin, priceMax, setPriceMax }) => {
  const [values, setValues] = useState([20, 80]);
  const STEP = 1;
  const MIN = 0;
  const MAX = 300;

  return (
    <>
      <div className="range">
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => {
            setValues(values);
            setPriceMin(values[0]);
            setPriceMax(values[1]);
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "15px",
                display: "flex",
                width: "300px",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "220px",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values,
                    colors: ["#808080", "#09b0ba", "#808080"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "50px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  height: "0px",
                  width: "2px",
                  backgroundColor: isDragged ? "#000000" : "#CCC",
                }}
              />
            </div>
          )}
        />
      </div>
      <button className="filtre-value">
        <p>{values[0]}€</p>
      </button>
      <button className="filtre-value">
        <p>{values[1]}€</p>
      </button>
    </>
  );
};

export default Rangestyle;
