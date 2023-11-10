import { useState } from "react";
import { useFetchDeserts } from "./hooks/useFetchDeserts";
import Dropdown from "./UI/Dropdown";
import Desert from "./components/Desert";
import Modal from "./UI/Modal";
import RegisterOasis from "./components/RegisterOasis";

const App = () => {
  const [selectedElement, setSelectedElement] = useState();
  const { deserts } = useFetchDeserts();
  const handleElementSelect = (element) => {
    setSelectedElement(element);
  };
  return (
    <>
    <div>
      <h1 className="p-2">Oasis Finder</h1>
      <hr />
      <div className="p-5">
        <div className="text-center">
          <Dropdown
            list={deserts}
            onSelect={handleElementSelect}
            dropdownName={"Select Desert"}
          />
        </div>
        {selectedElement && (
          <Desert id={selectedElement.id} desertName={selectedElement.name} />
        )}
      </div>
    </div>
    <div>
      <h1 className="p-2">Register Oasis</h1>
      <hr />
      <div className="p-5">
        <div className="text-center">
          <Modal modalBody={<RegisterOasis desertList={deserts} />} modalName={"Register Oasis"} />
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
