import { clock, info } from "../../../assets/SVGs";
import { IoMdAdd } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

const formatDuration = (durationString) => {
  const [hoursStr, minutesStr] = durationString.split(":");
  const hours = parseInt(hoursStr);
  const minutes = parseInt(minutesStr);

  if (hours === 0 && minutes === 0) {
    return "0 minutes";
  } else if (hours === 0) {
    return `${minutes} min${minutes !== 1 ? "s" : ""}`;
  } else if (minutes === 0) {
    return `${hours} h`;
  } else {
    return `${hours} h ${minutes} min`;
  }
};
const StepOneBook = ({ selectServiceFunc, services, state, setStep }) => {
  return (
    <div className="reguler-text">
      <h2 className="text-4xl   mb-4 capitalize">book an appointment</h2>
      <span className="mb-4 block reguler-text capitalize">
        select a service
      </span>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4">
        {services?.map((ele) => (
          <div
            key={ele.id}
            className="relative  sm:w-[225px] min-h-[130px] shrink-0 grow-0 flex flex-col gap-4 border  border-brownColor bg-[#e8e6e3] "
          >
            <div className="border-b border-brownColor p-2 px-4">
              <span className="semi-bold-text text-lg text-brownColor">
                {ele.name}
              </span>
            </div>
            <div className="flex  flex-col gap-2 px-4 ">
              <div className="flex-[40%]  flex gap-1 items-center">
                <span>
                  <img src={clock} alt="" />
                </span>
                <span>{formatDuration(ele.duration)}</span>
              </div>

              <div className="flex-[40%] flex gap-1 items-center">
                <span>
                  <img src={info} alt="" />
                </span>
                <span>{ele.cost}</span>
                <span>AED</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-4">
              <span
                onClick={() => selectServiceFunc(ele)}
                className={`border  border-brownColor p-2 block ${
                  state?.services?.find((ser) => ser.id === ele.id)
                    ? "text-white bg-brownColor"
                    : "text-brownColor"
                }`}
              >
                {state?.services?.find((ser) => ser.id === ele.id) ? (
                  <IoMdCheckmark />
                ) : (
                  <IoMdAdd />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepOneBook;
