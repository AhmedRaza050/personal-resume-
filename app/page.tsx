export default function Home() {
  return (
    <div className="bg-gray-200">
      <header className="text-center p-8">
        <h1 className="text-5xl font-bold">AHMED RAZA</h1>
        <p className="text-xl mt-2">Excited GenAi Student</p>
      </header>

      <section id="contact" className="p-8">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <ul className="list-disc ml-5 mt-4">
          <li>
            Email:{" "}
            <a href="mailto:ahmedraza@gmail.com">ahmedraza@gmail.com</a>
          </li>
          <li>Phone: +92 321 1234567</li>
        </ul>
      </section>

      <section id="skills" className="p-8 ">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc ml-5 mt-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript</li>
        </ul>
      </section>

      <section id="education" className="p-8">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="mt-4"> Bechalor of Chemistry- FUUAST (2022 - Present)</p>
        <p className="mt-4"> Intermediate (Pre-Medical) (2020 - 2022)</p>
        <p className="mt-4"> Matriculation (Science) (2020)</p>
      </section>

      <section id="experience" className="p-8 ">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p className="mt-4">Not working or Fresher</p>
      </section>
    </div>
  );
}
