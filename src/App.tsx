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
  /*********************************************************************************/
  /********************************* CONEXION API **********************************/
  /*********************************************************************************/

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
  /*********************************************************************************/
  /*********************************************************************************/

  const handleClick = () => {
    window.location.reload();
  };

  let pivotObj: PivotView | null;
  const setTarget = () => {
    (
      pivotObj as PivotView
    ).pivotFieldListModule.dialogRenderer.fieldListDialog.target =
      document.body;
  };
  if (!pivotData) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div>
          <span
            className="e-icons e-large e-download"
            style={{
              display: "flex",
            }}
          ></span>
          <h1>Cargando...</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div id="wrapper">
        <h1 className="centered">Cubo facturación medical ERP</h1>
        <PivotViewComponent
          ref={(pv) => (pivotObj = pv)}
          width={"100%"}
          height={700}
          displayOption={{ view: "Both" }}
          showFieldList={true}
          showToolbar={true}
          toolbar={["Grid", "Chart", "FieldList", "Export"]}
          allowExcelExport={true}
          allowPdfExport={true}
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
          dataBound={setTarget}
          dataSourceSettings={{
            dataSource: pivotData,
            rows: [{ name: "IpsPrimariaMED" }],
            columns: [{ name: "CentroCostoDERP" }],
            values: [{ name: "ValorSaldoHoyERP", caption: "ValorSaldoHoyERP" }],
            //expandAll: true,
          }}
        >
          <Inject services={[FieldList, Toolbar]}></Inject>
        </PivotViewComponent>

        <button className="button" type="button" onClick={handleClick}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
