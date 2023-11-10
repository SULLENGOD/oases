/* eslint-disable react/prop-types */
const OasesList = ({ oases }) => {
  return (
    <>
      <dl className="max-w-md text-black-900 divide-y divide-gray-200">
      {oases && oases.length > 0 ? (
          oases.map((oasis, index) => (
            <div className="flex flex-col pb-3 " key={index}>
              <dt className="mb-1 text-black md:text-lg">{oasis.name}</dt>
              <dd className="text-lg font-semibold">
                Water: {oasis.water} Lts.
              </dd>
            </div>
          ))
        ) : oases && oases.length === 0 ? (
          <h1>Theres no Oases</h1>
        ) : (
          <h1>Please, select desert</h1>
        )}
      </dl>
    </>
  );
};

export default OasesList;
