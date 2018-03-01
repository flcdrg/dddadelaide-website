import * as React from "react";
import { Conference } from "../config/types";
import isPast from "./utils/isPast";
import ImportantDatesList from "./importantDatesList";

export interface ImportantDatesProps {
  conference : Conference
};

export default ({conference} : ImportantDatesProps) =>
  <section className="important-dates">
    <div className="container">
      <h2>Important Dates:</h2>

      <ImportantDatesList conference={conference} />

      <div className="clear"></div>

      <div className="what-now">
        <h2>What now?</h2>

        {/*todo: Pull in logic from existing site*/}
        <a href="/agenda/" className="btn agenda">View Agenda</a>
        <a href="/tickets/" className="btn book">Purchase a Ticket</a>
      </div>
    </div>
  </section>;