"use client";

import { useState } from "react";
import AccommodationCountryHero from "./AccommodationCountryHero";
import AccommodationCountryQuickFacts from "./AccommodationCountryQuickFacts";
import AccommodationCountryCosts from "./AccommodationCountryCosts";
import AccommodationCountryListings from "./AccommodationCountryListings";
import AccommodationCountryBoundaries from "./AccommodationCountryBoundaries";
import AccommodationCountryFormCTA from "./AccommodationCountryFormCTA";
import type { AccommodationCountryDataSet } from "./types";

interface Props {
  dataSet: AccommodationCountryDataSet;
}

const AccommodationCountryPage = ({ dataSet }: Props) => {
  const [activeCity, setActiveCity] = useState("All");

  return (
    <main>
      <AccommodationCountryHero dataSet={dataSet} />
      <AccommodationCountryQuickFacts dataSet={dataSet} />
      <AccommodationCountryCosts dataSet={dataSet} />
      <AccommodationCountryListings
        dataSet={dataSet}
        activeCity={activeCity}
        onCityChange={setActiveCity}
      />
      <AccommodationCountryBoundaries dataSet={dataSet} />
      <AccommodationCountryFormCTA dataSet={dataSet} />
    </main>
  );
};

export default AccommodationCountryPage;
