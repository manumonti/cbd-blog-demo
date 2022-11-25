import React from "react";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import {
  Cohort,
  Conditions,
  ConditionSet,
  Strategy,
} from "@nucypher/nucypher-ts";

function App() {
  useEffect(() => {
    const cohortCreate = async () => {
      const config = {
        threshold: 3,
        shares: 5,
        porterUri: "https://porter-tapir.nucypher.community",
      }

      Cohort.create(config).then((cohort) => console.log(cohort.toJSON()))
    }

    cohortCreate().catch(console.error);
  }, []);

  return (
    <div className="main-container">
      <h1 className="main-heading">Nucypher's CBD Blog Demo</h1>
      <Posts />
    </div>
  );
}

export default App;
