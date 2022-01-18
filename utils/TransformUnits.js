const TransformUnits = (t) => {
  const celsius = Math.round(t - 273.15);
  const fahrenheit = Math.round(((t - 273.15) * 9) / 5 + 32);
  return `${celsius}°C - ${fahrenheit}°F`;
};

export default TransformUnits;
