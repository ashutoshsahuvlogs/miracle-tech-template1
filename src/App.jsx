import Header from "./components/Header";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Extra scrollable content */}
        <section className="bg-gray-100 text-gray-800 px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="mb-6">
            At Miracle Tech, we offer a wide range of services including Web Development, Mobile App Solutions,
            Cloud Migration, and Tech Consulting. Our mission is to make businesses future-ready.
          </p>

          {[...Array(10)].map((_, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-2xl font-semibold mb-2">Service #{i + 1}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis saepe minima, temporibus
                sapiente assumenda amet praesentium perspiciatis architecto velit doloribus ullam porro
                reiciendis. Adipisci pariatur maxime, beatae facilis modi numquam?
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
