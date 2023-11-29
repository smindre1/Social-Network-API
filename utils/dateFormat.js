// function to format a timestamp
module.exports = (timestamp) => {
  let months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  const dayOfMonth = dateObj.getDate();

  const year = dateObj.getFullYear();

  let hour;
  // checks if the timestamp is running on 24-hr time and adjusts it
  if (dateObj.getHours > 12) {
    hour = Math.floor(dateObj.getHours() / 2);
  } else {
    hour = dateObj.getHours();
  }
  if (hour === 0) {
    hour = 12;
  }

  const minutes = dateObj.getMinutes();

  // sets the hour to either `am` or `pm`
  let periodOfDay;

  if (dateObj.getHours() >= 12) {
    periodOfDay = "pm";
  } else {
    periodOfDay = "am";
  }

  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
};
