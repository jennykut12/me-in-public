export const convertHeight = (value, unit) => {
    let cm = value;
    let ft = value;
    let inches = value;

    if (value === "") return { cm, ft, inches };

    if (unit === "cm") {
        ft = value * 0.032808;
        inches = value * 0.39370;
    } else if (unit === "ft") {
        cm = value / 0.032808;
        inches = value * 12;
    } else {
        cm = value / 0.39370;
        ft = value * 0.083333;
    }

    return {
        cm: cm.toFixed(2),
        ft: ft.toFixed(2),
        inches: inches.toFixed(2)
    };
};

export const convertWeight = (value, unit) => {
    let kg = value;
    let st = value;
    let lbs = value;

    if (value === "") return { kg, st, lbs };

    if (unit === "kg") {
        lbs = value * 2.2046;
        st = value * 0.1574;
    } else if (unit === "st") {
        lbs = value * 14;
        kg = value / 0.15747;
    } else {
        kg = value / 2.2046;
        st = value * 0.071429;
    }

    return {
        kg: kg.toFixed(2),
        st: st.toFixed(2),
        lbs: lbs.toFixed(2)
    };
};