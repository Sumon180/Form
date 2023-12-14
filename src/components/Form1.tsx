import { ChangeEventHandler, FC, useState } from "react";
// import "../pages/Location.css";
import { FormData } from "../types/type";

const Form: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="shadow-xl px-10 py-5 rounded-lg">
        <h4 className="text-[28.4px] font-mediummb-2">
          Enter your contact details
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-6">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
              <div className="flex flex-col gap-2">
                <label>First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border h-[44px] rounded outline-none px-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border h-[44px] rounded outline-none px-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>E-Mail*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border h-[44px] rounded outline-none px-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Phone*</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border h-[44px] rounded outline-none px-3"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="border h-[44px] rounded px-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Besondere Wünsche</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="border rounded outline-none px-3"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 w-full bg-black text-white py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
