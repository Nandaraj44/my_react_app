//import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  /*  let items = ["Nanda", "Sinduja", "Monickya", "Ankayarkannai", "Tamil kodi"];

  const handleSelectItems = (items: string) => {
    console.log(items); 
  };*/
  return (
    <div>
      {/*       <ListGroup
        items={items}
        heading="Names"
        onSelectItem={handleSelectItems}
      />  */}
      <Alert>
        Hello <span>World </span>
      </Alert>
      <Button onClickfunction={() => console.log("Clicked")}>Love You</Button>
    </div>
  );
}

export default App;
