"use client";

import React, { useState, useEffect } from "react";

const BmiCalcImperial = ({ tabs, heightFt, weightLbs }) => {
  const [bmiResultImperial, setBmiResultImperial] = useState(null);
  const [headerTextImperial, setHeaderTextImperial] =
    useState("Hello, Welcome!");
  const [healthyWeightRangeImperial, setHealthyWeightRangeImperial] =
    useState(null);

  const validateNumber = (value) => {
    if (typeof value !== "string") return null;
    const trimmedValue = value.trim();
    if (trimmedValue === "") return null;

    const regex = /^\d*\.?\d*$/;
    if (!regex.test(trimmedValue)) return null;

    return parseFloat(trimmedValue);
  };

  const calculateBMI = () => {
    const validatedHeight = validateNumber(heightFt);
    const validatedWeight = validateNumber(weightLbs);

    if (!validatedHeight || !validatedWeight) {
      setBmiResultImperial("Hello, Welcome!");
      setHeaderTextImperial(
        "Enter your height and weight and you will see your BMI result here"
      );
      setHealthyWeightRangeImperial(null);
      return;
    }

    // Convert height to feet
    const heightInFt = tabs === "Imperial" && validatedHeight * 0.3048;

    // Convert weight to pounds
    const weightInLbs = tabs === "Imperial" && validatedWeight * 0.453592;

    // Calculate BMI
    const bmi = weightInLbs / (heightInFt * heightInFt);

    setBmiResultImperial(`Your BMI is... (${bmi.toFixed(1)})`);

    const weightStatus = () => {
      if (bmi < 18.5) return "Underweight";
      else if (bmi < 25) return "Healthy Weight";
      else if (bmi < 30) return "Overweight";
      else return "Obesity";
    };
    setHeaderTextImperial(`Your BMI suggests you are ${weightStatus()}.`);

    const minWeight = (2.20462 * 18.5 * heightInFt * heightInFt).toFixed(1);
    const maxWeight = (2.20462 * 24.9 * heightInFt * heightInFt).toFixed(1);
    setHealthyWeightRangeImperial(
      `Your ideal weight is between ${minWeight} - ${maxWeight} lbs.`
    );
  };

  useEffect(() => {
    calculateBMI();
  }, [tabs, heightFt, weightLbs]);

  return { bmiResultImperial, headerTextImperial, healthyWeightRangeImperial };
};

export default BmiCalcImperial;
