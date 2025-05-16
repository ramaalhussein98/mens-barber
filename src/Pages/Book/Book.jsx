import "../../assets/css/book.css";
import { AnimatePresence, motion } from "framer-motion";
import StepOneBook from "./components/StepOneBook";
import StepTwoBook from "./components/StepTwoBook";
import StepThreeBook from "./components/StepThreeBook";
import { useEffect, useState } from "react";
import { myAxios } from "./../../api/myAxios";
import moment from "moment";
function formatTime(timeString) {
  // Parse the time string using Moment.js
  const time = moment(timeString, "HH:mm");

  // Format the time with 'h' for 12-hour format, 'a' for AM/PM
  return time.format("hh:mm a");
}
const StepComponent = ({
  step,
  state,
  availableTimes,
  services,
  setStep,
  selectServiceFunc,
  setState,
}) => {
  return (
    <AnimatePresence>
      {step === 1 && (
        <motion.div
          key="step1"
          className="absolute w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "backInOut" }}
        >
          <StepOneBook
            selectServiceFunc={selectServiceFunc}
            setStep={setStep}
            state={state}
            services={services}
          />
        </motion.div>
      )}
      {step === 2 && (
        <motion.div
          className="absolute w-full"
          key="step2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "backInOut" }}
        >
          <StepTwoBook
            setStep={setStep}
            state={state}
            setState={setState}
            availableTimes={availableTimes}
          />
        </motion.div>
      )}
      {step === 3 && (
        <motion.div
          className="absolute w-full"
          key="step3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "backInOut" }}
        >
          <StepThreeBook setState={setState} setStep={setStep} state={state} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const Book = ({
  services,
  availableTimes,
  state,
  selectServiceFunc,
  setState,
  submitions,
}) => {
  const [step, setStep] = useState(1);

  const [worksDays, setWorksDays] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await myAxios.get(`work-day`);
      setWorksDays(res.data.results);
    };
    getData();
  }, []);

  return (
    <div className="flex justify-between md:flex-row flex-col text-brownColor">
      <div className="sm:w-[65%] p-4  md:pl-32">
        <div className="relative  h-[450px] sm:h-[450px] overflow-y-auto  w-full">
          <StepComponent
            services={services}
            availableTimes={availableTimes}
            step={step}
            setStep={setStep}
            state={state}
            setState={setState}
            selectServiceFunc={selectServiceFunc}
          />
        </div>
        <div className="flex gap-2 items-center my-4">
          {step > 1 && (
            <button
              className="bg-[#e8e6e3] text-brownColor px-4 py-2"
              onClick={() => setStep((prev) => prev - 1)}
            >
              back
            </button>
          )}
          {step !== 3 && (
            <button
              className="bg-brownColor text-white px-4 py-2"
              onClick={() => setStep((prev) => prev + 1)}
            >
              next
            </button>
          )}
          {step === 3 && (
            <button
              className="bg-brownColor text-white px-4 py-2"
              onClick={submitions}
            >
              save
            </button>
          )}
        </div>
      </div>

      <div className="sm:w-[35%] items-center w-full flex p-2 bg-[#e5deda]">
        <div className="sm:w-[75%] w-full  my-8 flex-grow-0 flex items-center justify-center flex-col gap-8">
          <h3 className="text-3xl font-bold capitalize ">opening hours</h3>
          {worksDays?.map((ele, i) => (
            <div
              key={ele.id}
              className="capitalize w-full border-b border-brownColor pb-6 flex flex-col gap-2 items-center justify-center"
            >
              <h4 className="text-2xl  semi-bold-text">{ele.dayName}</h4>
              <span className="text-lg reguler-text">
                {formatTime(ele.startTime)} - {formatTime(ele.endTime)}
              </span>
            </div>
          ))}
        </div>
        <div className="w-[25%] sm:block hidden"></div>
      </div>
    </div>
  );
};

export default Book;
