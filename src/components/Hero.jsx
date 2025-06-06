const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1650&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-30 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Miracle Group</h2>
        <p className="mb-4">
          Miracle Infosoft, a dedicated software development cell under the umbrella of Miracle IT, is committed to delivering cutting-edge software solutions tailored to meet the dynamic needs of modern businesses...
        </p>
        <p className="mb-4">
          At Miracle Infosoft, our core focus lies in designing, developing, and deploying robust, scalable, and user-centric software applications...
        </p>
        <p className="mb-4">
          In addition to our software development capabilities, we contribute to the group's mission of empowering young minds...
        </p>
        <p className="mb-4">
          Driven by a passion for technology and a commitment to quality, Miracle Infosoft continues to be a reliable partner in transforming ideas...
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Mission</h3>
        <p className="mb-4">
          To deliver innovative, scalable, and high-quality software solutions that drive digital transformation...
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Vision</h3>
        <p className="mb-4">
          To be a leading software development cell recognized for excellence in technology, innovation, and talent development...
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">About Miracle Group</h3>
        <p>
          Miracle Information Services (aka Miracle Infoserv) Private Limited is a leading EduTech/IT services company...
        </p>
      </div>
    </section>
  );
};

export default Hero;
