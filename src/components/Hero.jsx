const Hero = () => {
  return (
    <section
      id="home"
      className="relative top-0 left-0 w-full min-h-screen flex items-center px-6 md:px-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#cce7ff", // fallback light blue
      }}
    >
      {/* Full width text container with semi-transparent blue background */}
      <div className="w-full bg-blue-600 bg-opacity-60 p-8">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-6 drop-shadow-lg">
            About
          </h2>
          <p className="mb-6 drop-shadow-lg">
            Miracle Infosoft, a dedicated software development cell under the umbrella of Miracle IT, is committed to delivering cutting-edge software solutions tailored to meet the dynamic needs of modern businesses. As a part of the Miracle IT Group, we bring with us a legacy of excellence in IT services, education, and workforce solutions.
          </p>
          <p className="mb-6 drop-shadow-lg">
            At Miracle Infosoft, our core focus lies in designing, developing, and deploying robust, scalable, and user-centric software applications. Backed by a team of skilled professionals and the strategic guidance of our parent group, we ensure every solution we build aligns with industry standards and emerging technologies.
          </p>
          <p className="mb-6 drop-shadow-lg">
            In addition to our software development capabilities, we contribute to the group's mission of empowering young minds through practical training and upskilling programs. This dual focus on innovation and talent development enables us to serve a global clientele while nurturing the next generation of tech leaders.
          </p>
          <p className="mb-10 drop-shadow-lg">
            Driven by a passion for technology and a commitment to quality, Miracle Infosoft continues to be a reliable partner in transforming ideas into impactful digital solutions.
          </p>

          <h2 className="text-3xl font-bold mb-6 drop-shadow-lg">Mission</h2>
          <p className="mb-10 drop-shadow-lg">
            To deliver innovative, scalable, and high-quality software solutions that drive digital transformation for our clients, while nurturing future-ready talent through practical, industry-aligned training. As a core unit of Miracle IT, we are committed to blending technology with impact, empowering businesses and individuals in the evolving digital world.
          </p>

          <h2 className="text-3xl font-bold mb-6 drop-shadow-lg">Vision</h2>
          <p className="mb-10 drop-shadow-lg">
            To be a leading software development cell recognized for excellence in technology, innovation, and talent development — fostering a future where our solutions and people drive progress across industries globally.
          </p>

          <h2 className="text-3xl font-bold mb-6 drop-shadow-lg">About Miracle Group</h2>
          <p className="mb-2 drop-shadow-lg">
            Miracle Information Services (aka Miracle Infoserv) Private Limited is a leading EduTech/IT services company registered under the Companies Act 1956 and is in the field of IT Training and Placements.
          </p>
          <p className="mb-2 drop-shadow-lg">
            In the last decade, our organization - Miracle Infotech has expanded and incorporated Miracle Information Services, Miracle IT Career Academy, Miracle Infosoft, Miracle IT Foundation and Miracle IT Skills.
          </p>
          <p className="drop-shadow-lg">
            Miracle Group of Companies (From <a href="http://www.miracleitskills.com/" target="_blank" rel="noopener noreferrer" className="underline text-green-400">http://www.miracleitskills.com/</a>)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
