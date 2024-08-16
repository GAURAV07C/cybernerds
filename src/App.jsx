import "./App.css";
import { Button } from "@material-tailwind/react";
function App() {
  return (
    <>
      <div className="w-full h-full flex flex-col bg-white">
        <div className=" h-screen w-11/12  mx-auto flex flex-col justify-center items-center">
          <p className="text-blue-gray-500 text-2xl">
            This app use tech stack - react + talwind + MUi
          </p>
          <div>
          <Button className="text-2xl bg-blue-gray-500">Button </Button>
          <Button>hii</Button>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
