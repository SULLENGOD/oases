/* eslint-disable react/prop-types */
import { createOasis } from "../helpers/fetchOases";
import { useForm } from "../hooks/useForm";

const RegisterOasis = ({ desertList }) => {
  const {name, water, desertId, onInputChange} = useForm({
    name: "",
    water: "",
    desertId: 0
  });

  const onSubmitForm = async( event ) => {
    event.preventDefault();
    if(name.length <= 1) return;

    const oasis = {
      name: name,
      water: water,
      desertId: desertId
    };

    const res = await createOasis(oasis);

    if(!res.ok) {
      alert('Something wrong please try again')
    }else {
      alert('Succefull')
    }
  };


  return (
    <div>
      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
        Register Oasis
      </h3>
      <form className="space-y-6" onSubmit={onSubmitForm}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Oasis name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            id="name"
            className="bg-purple-200 border border-purple-900 text-black-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 placeholder-purple-400"
            placeholder="Oasis 999"
            required
          />
        </div>
        <div>
          <label
            htmlFor="water"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Water
          </label>
          <input
            type="number"
            name="water"
            value={water}
            onChange={onInputChange}
            id="water"
            placeholder="10000"
            className="bg-purple-200 border border-purple-900 text-black-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 placeholder-purple-400"
            required
          />
        </div>
        <div>
          <label
            htmlFor="desert"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Desert
          </label>
          <select
            type="number"
            name="desertId"
            value={desertId}
            onChange={onInputChange}
            id="desert"
            placeholder="desert 666"
            className="bg-purple-200 border border-purple-900 text-black-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 placeholder-purple-400"
            required
          >
            <option disabled>
              Select desert...
            </option>
            {desertList &&
              desertList.map((desert) => (
                <option value={desert.id} key={desert.id}>
                  {desert.name}
                </option>
              ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Registrar tu oasis
        </button>
      </form>
    </div>
  );
};

export default RegisterOasis;
