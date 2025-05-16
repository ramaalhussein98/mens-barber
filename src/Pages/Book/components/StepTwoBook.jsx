import moment from "moment";
import { useEffect, useState } from "react";

function formatDate(inputDate) {
  // Parse the input date using Moment.js
  const parsedDate = moment(inputDate, "ddd MMM DD YYYY");

  // Get the day name for the input date
  const dayName = parsedDate.format("ddd");

  // Format the output string
  const formattedString = `${parsedDate.format("DD")} ${dayName}`;

  return formattedString;
}
function formatTime(timeString) {
  // Parse the time string using Moment.js
  const time = moment(timeString, "ddd MMM DD YYYY HH:mm:ss [GMT]Z");

  // Format the time with 'h' for 12-hour format, 'a' for AM/PM
  return time.format("hh:mm a");
}
function addDurationToTime(timeString, duration) {
  // Parse the time string using Moment.js
  const time = moment(timeString, "ddd MMM DD YYYY HH:mm [GMT]Z");

  // Add the duration to the time
  const updatedTime = time.add(duration);

  // Format the updated time with 'h' for 12-hour format, 'a' for AM/PM
  return updatedTime.format("hh:mm a");
}

const StepTwoBook = ({ availableTimes, state, setState }) => {
  // Get the current date
  const currentDate = moment();

  // Format the current date to "MMMM YYYY" (e.g., "February 2024")
  const formattedDate = currentDate.format("MMMM YYYY");
  const [selectedDate, setSelectedDate] = useState(availableTimes?.results[0]);
  const [selectedTime, setSelectedTime] = useState();
  const onClickDate = (date) => {
    setSelectedDate(date);
  };

  console.log(selectedTime);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      times: `${selectedDate?.date}, ${formatTime(selectedTime)}`,
    }));
  }, [selectedDate, selectedTime]);
  console.log(availableTimes);

  return (
    <div className="reguler-text capitalize">
      <h2 className="text-4xl   mb-6 ">select a date and time</h2>
      <span className="mb-4 block semi-bold-text">{formattedDate}</span>
      {availableTimes ? (
        <>
          <div className="flex items-center gap-4">
            {availableTimes?.results.map((ele, i) => {
              const formattedDate = formatDate(ele.date);
              return (
                <div
                  key={i}
                  className="flex justify-center items-center flex-col cursor-pointer "
                >
                  <div
                    onClick={() => onClickDate(ele)}
                    className={`w-[50px] h-[50px] rounded-full ${
                      ele.dayNumber === selectedDate.dayNumber
                        ? "bg-brownColor text-white"
                        : " bg-[#e8e6e3] text-brownColor"
                    } flex justify-center items-center border border-brownColor `}
                  >
                    <span>{formattedDate.split(" ")[0]}</span>
                  </div>
                  <span>{formattedDate.split(" ")[1]}</span>
                </div>
              );
            })}
          </div>
          <div className="max-h-[230px] flex flex-col gap-2 overflow-y-auto w-full my-4">
            {selectedDate?.times?.map((ele, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setSelectedTime(ele.startTime)}
                  className={`cursor-pointer w-full ${
                    selectedTime === ele.startTime
                      ? "text-white bg-brownColor border border-transparent"
                      : "bg-[#e8e6e3] border border-brownColor"
                  }  p-2 flex items-center`}
                >
                  <span className="">{formatTime(ele.startTime)}</span>
                  <span>-</span>
                  <span className="">
                    {addDurationToTime(ele.startTime, availableTimes.duration)}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="p-4 bg-brownColor text-white text-lg font-medium">
          {" "}
          please select services first
        </div>
      )}
    </div>
  );
};

export default StepTwoBook;
