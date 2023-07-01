import React from "react";
import { useContext } from "react";

import TestiAffter from "./TestiAffter";
import TestiBefore from "./TestiBefore";
import { AppContext } from "../../Components/AppContext/AppContext";
const Testimonials = () => {
  const { isTes } = useContext(AppContext);
  return isTes ? <TestiBefore /> : <TestiAffter />;
};

export default Testimonials;
