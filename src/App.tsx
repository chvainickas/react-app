import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";



function App() {
const [alertVisible,setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisible(false)}>Test</Alert>}
      <Button color="warning" onClick={() => setAlertVisible(true)}>
        test
      </Button>
    </div>
  );
}

export default App;