import Header from "./components/Header";
import Hero from "./components/Hero"; // ✅ Import the new component
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero /> {/* ✅ Use the new component */}
      </main>
    </>
  );
}

export default App;
