import React, { useEffect, useState } from "react";
import {
  PivotViewComponent,
  FieldList,
  Inject,
  PivotView,
  Toolbar,
} from "@syncfusion/ej2-react-pivotview";
import { pivotData } from "./data";
import "./App.css";

function App() {
  ////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////// CONEXION API ///////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /*const [pivotData, setPivotData] = useState(null);

  useEffect(() => {
    fetch("http://10.109.9.193:8282/cubokbit/get_sample", {
      method: "POST",
      body: JSON.stringify({
        nombreArchivo: "santacruz_SeguimientoFacturacionMedicalERP",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setPivotData(response));
  }, []);*/

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  let pivotObj: PivotView | null;
  const setTarget = () => {
    (
      pivotObj as PivotView
    ).pivotFieldListModule.dialogRenderer.fieldListDialog.target =
      document.body;
  };
  if (!pivotData) {
    return (
      <div>
        <h5>Cargando</h5>
      </div>
    );
  } else {
    return (
      <div id="wrapper">
        <h1 className="centered">Cubo facturación medical ERP-</h1>
        <PivotViewComponent
          ref={(pv) => (pivotObj = pv)}
          width={"100%"}
          height={500}
          displayOption={{ view: "Both" }}
          showFieldList={true}
          showToolbar={true}
          toolbar={["Grid", "Chart", "FieldList"]}
          chartTypes={[
            "Line",
            "Column",
            "Area",
            "Bar",
            "Pie",
            "Doughnut",
            "Scatter",
            "Bubble",
            "Polar",
            "Radar",
            "Funnel",
            "Pyramid",
            "StackingColumn",
            "StackingArea",
            "StackingBar",
            "StepLine",
            "StepArea",
            "SplineArea",
            "Spline",
            "StackingColumn100",
            "StackingBar100",
            "StackingArea100",
          ]}
          showValuesButton={true}
          allowCalculatedField={true}
          allowDeferLayoutUpdate={true}
          dataBound={setTarget}
          dataSourceSettings={{
            dataSource: pivotData,
            rows: [{ name: "IpsPrimariaMED" }],
            columns: [{ name: "CentroCostoDERP" }],
            values: [{ name: "ValorSaldoHoyERP", caption: "ValorSaldoHoyERP" }],
            formatSettings: [{ name: "Amount" }],
          }}
        >
          <Inject services={[FieldList, Toolbar]}></Inject>
        </PivotViewComponent>
      </div>
    );
  }
}
export default App;
