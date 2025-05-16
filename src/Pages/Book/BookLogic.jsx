import { useEffect, useState } from "react";
import myAxios from "../../api/myAxios";
import Book from "./Book";
import ModalContainer from "../../ui/ModalContainer";
import moment from "moment";

const getAvailableTimes = async (ids) => {
  console.log(ids);
  const ids2 = ids.map((el) => el.id);
  console.log(ids2);
  const res = await myAxios.get(
    `appointment/available` +
      ids2.map((ele, i) =>
        i === 0 ? `?servicesIds=${ele}` : `&servicesIds=${ele}`
      )
  );
  if (res.status === 200) {
    return res.data;
  }
};
const saveData = async (data) => {
  const res = await myAxios.post("/appointment", data);
  return res;
};
const BookLogic = () => {
  const [bookData, setBookData] = useState({
    services: [],
    times: "",
    selectedDate: "",
    selectedTime: "",
    userData: {
      name: "",
      phonenumber: "",
      information: "",
    },
  });

  const [services, setServices] = useState();
  const [availableTimes, setAvailableTimes] = useState();
  const [succcessModal, setSuccessModal] = useState(false);

  const selectService = (service) => {
    setBookData((prev) => {
      const serviceIds = prev.services.map((item) => item.id);
      const serviceIndex = serviceIds.indexOf(service.id);

      if (serviceIndex !== -1) {
        // If service with the same id exists, remove it
        const updatedServices = [...prev.services];
        updatedServices.splice(serviceIndex, 1);

        return {
          ...prev,
          services: updatedServices,
        };
      } else {
        // If service doesn't exist, add it
        return {
          ...prev,
          services: [...prev.services, service],
        };
      }
    });
  };

  useEffect(() => {
    const getServices = async () => {
      const res = await myAxios.get("service");
      console.log(res);
      if (res.status === 200) {
        setServices(res.data?.results);
      }
    };
    getServices();
  }, []);

  useEffect(() => {
    if (bookData.services.length > 0) {
      const getData = async () => {
        const res = await getAvailableTimes(bookData.services);
        setAvailableTimes(res);
      };
      getData();
    }
  }, [bookData.services]);

  console.log(bookData);

  const submitions = async () => {
    const dateString = bookData.times;
    const formatString = "DD/MM/YYYY, h:mm:ss a";
    const dateInstance = moment(dateString, formatString);
    const data = {
      startDate: dateString,
      additionalData: bookData.userData.information,
      customer: {
        firstName: bookData.userData.name,
        lastName: "",
        phone: bookData.userData.phonenumber,
      },
      servicesIds: bookData.services.map((ele) => ele.id),
    };
    console.log(data);
    const res = await saveData(data);
    if (res.status === 201) {
      setSuccessModal(true);
    }
  };

  return (
    <>
      <Book
        services={services}
        availableTimes={availableTimes}
        state={bookData}
        setState={setBookData}
        selectServiceFunc={selectService}
        submitions={submitions}
      />
      <ModalContainer
        setIsModalOpen={setSuccessModal}
        isModalOpen={succcessModal}
        component={
          <div className="bg-white sm:w-[550px] w-[380px] min-h-[325px] flex flex-col gap-8 py-12 px-6 text-center items-center">
            <h2 className="text-brownColor font-bold w-[70%] text-3xl">
              your appointment has been booked successfully
            </h2>
            <p className="text-lg text-brownColor reguler-text">
              here is our contact details in case you needed them
            </p>
            <div className="flex gap-2 items-center reguler-text flex-wrap  justify-center">
              <a href="#" className="bg-[#e5deda] text-brownColor p-2">
                instagram
              </a>
              {/* <a
                href="tel:097176371244"
                className="bg-[#e5deda] text-brownColor p-2"
              >
                0971 763 712 44
              </a>
              <a
                href="tel:097176371243"
                className="bg-[#e5deda] text-brownColor p-2"
              >
                0971 763 712 43
              </a> */}
              <a
                href="https://maps.app.goo.gl/aQGpUTfvE1cQUKwD7?g_st=iwb"
                target="_blank"
                className="bg-[#e5deda] text-brownColor p-2"
              >
                UAE, Dubai , business bay , bay square , building 8 , retail 6
              </a>
            </div>
            <button
              className="capitalize bg-brownColor text-white px-4 py-2"
              onClick={() => setSuccessModal(false)}
            >
              done
            </button>
          </div>
        }
      />
    </>
  );
};

export default BookLogic;
