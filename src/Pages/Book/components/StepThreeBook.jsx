const StepThreeBook = ({ state, setState, setStep }) => {
  return (
    <>
      <h2 className="text-4xl   mb-6 capitalize">add your information</h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 reguler-text">
        <div className="flex flex-col gap-1 flex-1">
          <span>your full name</span>
          <input
            type="text"
            className="px-4 py-2 border border-brownColor outline-none bg-[#e8e6e3]"
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                userData: { ...prev.userData, name: e.target.value },
              }))
            }
            value={state.userData.name}
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <span>your phone number</span>
          <input
            type="text"
            className="px-4 py-2 border border-brownColor outline-none bg-[#e8e6e3]"
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                userData: { ...prev.userData, phonenumber: e.target.value },
              }))
            }
            value={state.userData.phonenumber}
          />
        </div>
        <div className="flex flex-col gap-1 flex-1 sm:col-span-2">
          <span>additional information</span>
          <textarea
            type="text"
            className="px-4 py-2 border border-brownColor outline-none bg-[#e8e6e3] "
            rows={7}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                userData: { ...prev.userData, information: e.target.value },
              }))
            }
            value={state.userData.information}
          />
        </div>
      </div>
    </>
  );
};

export default StepThreeBook;
