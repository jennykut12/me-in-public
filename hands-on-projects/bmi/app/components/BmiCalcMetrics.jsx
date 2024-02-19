"use client";

import React, { useState, useEffect } from "react";

const BmiCalcMetrics = ({ tabs, height, weight }) => {
  const [bmiResultMetrics, setBmiResultMetrics] = useState(null);
  const [headerTextMetrics, setHeaderTextMetrics] = useState("Hello, Welcome!");
  const [healthyWeightRangeMetrics, setHealthyWeightRangeMetrics] =
    useState(null);

  const validateNumber = (value) => {
    value = value.trim();
    const regex = /^\d+\.?\d*$/u;
    if (regex.test(value)) return parseFloat(value);
    return "";
  };

  const calculateBMI = () => {
    const validatedHeight = validateNumber(height);
    const validatedWeight = validateNumber(weight);

    if (!validatedHeight || !validatedWeight) {
      setBmiResultMetrics("Hello, Welcome!");
      setHeaderTextMetrics(
        "Enter your height and weight and you will see your BMI result here"
      );
      setHealthyWeightRangeMetrics(null);
      return;
    }

    const heightInMeters =
      tabs === "Metric" ? validatedHeight / 100 : validatedHeight * 0.0254;
    const weightInKg =
      tabs === "Metric" ? validatedWeight : validatedWeight * 0.453592;

    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
    setBmiResultMetrics(`Your BMI is... (${bmi})`);

    const weightStatus = () => {
      if (bmi < 18.5) return "Underweight";
      else if (bmi < 25) return "Healthy Weight";
      else if (bmi < 30) return "Overweight";
      else return "Obesity";
    };
    setHeaderTextMetrics(`Your BMI suggests you are ${weightStatus()}.`);

    const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
    const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
    setHealthyWeightRangeMetrics(
      `Your ideal weight is between ${minWeight} - ${maxWeight} kg.`
    );
  };

  useEffect(() => {
    calculateBMI();
  }, [tabs, height, weight]);

  return { bmiResultMetrics, headerTextMetrics, healthyWeightRangeMetrics };
};

export default BmiCalcMetrics;
