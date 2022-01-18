const DayOfWeek = (stringDate) => {
  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const date = stringDate.split(" ")[0].split("-");
  const year = date[0];
  const month = date[1];
  const day = date[2];

  return days[new Date(year, month - 1, day).getDay()];
};

export default DayOfWeek;
