import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-neu-900 font-outfit flex">
      <Sidebar />
      <main className="flex-1 p-2xl">{/* Main content will go here */}</main>
    </div>
  );
}

export default App;
