import { motion, type Variants } from "framer-motion";
import { useEffect } from "react";
import { experience } from "./experiences";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // cubic-bezier for "easeOut"
    },
  }),
} as Variants;

export const App = () => {
  useEffect(() => {
    window.scrollY = 0;
  }, []);

  return (
    <main className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center space-y-2"
        >
          <h1 className="text-5xl font-extrabold tracking-tight">
            Juri Parladore
          </h1>
          <h2 className="text-xl text-blue-600 dark:text-blue-400 font-medium">
            Front-End Developer
          </h2>
          <div className="text-sm mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <p>
              📧{" "}
              <a href="mailto:juriparladore@gmail.com" className="underline">
                juriparladore@gmail.com
              </a>
            </p>
            <p>📞 +31 644803541</p>
            <p>📍 Based in the Netherlands</p>
            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/juri-parladore-49071414b/"
                target="_blank"
                className="underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-3">🚀 Career Objective</h3>
          <p className="leading-relaxed text-lg bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            Front-end developer with over 2 years of experience building modern,
            user-focused web applications using React, TypeScript, Node, and
            Angular. I’m working toward becoming a full-stack developer and
            actively expanding my backend and DevOps skills. Passionate about
            emerging technologies like AI and Web3, I aim to build scalable,
            high-impact solutions. I thrive in collaborative environments, value
            continuous learning, and aspire to be one of the best in my field.
          </p>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">💼 Work Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow"
                variants={fadeUp}
                custom={i + 1}
              >
                <h4 className="text-xl font-semibold">
                  {exp.title}
                  <span className="text-blue-600 dark:text-blue-300">
                    {exp.company || ""}
                  </span>
                </h4>
                <p className="text-sm text-gray-500">{exp.time}</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {exp.description.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-3">🎓 Education</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <h4 className="font-semibold">Codaisseur Bootcamp</h4>
              <p className="text-sm">2022 – Amsterdam</p>
              <p>12-week full-stack coding bootcamp.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <h4 className="font-semibold">Immagina Cinema School</h4>
              <p className="text-sm">2016–2018 – Florence</p>
              <p>Direction of photography, storytelling, media production.</p>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-3">🛠️ Skills & Tools</h3>
          <ul className="flex flex-wrap gap-2 text-sm">
            {[
              "React",
              "Angular",
              "TypeScript",
              "Node.js",
              "Jest",
              "Git",
              "CouchDB",
              "SmartEdit",
              "SAP",
              "CI/CD",
              "Redux",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-3 py-1 rounded-full"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Languages */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-2">🌍 Languages</h3>
          <p className="text-lg">
            🇮🇹 Italian (Native), 🇬🇧 English (Pro), 🇪🇸 Spanish, 🇵🇹 Portuguese, 🇫🇷
            French, 🇳🇱 Dutch
          </p>
        </motion.section>

        {/* Freelance */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-2">
            🧑‍💻 Freelance / Side Projects
          </h3>
          <p>
            Supporting an automotive platform for my brother's business in
            Australia — building scalable tools for garage, rental, and
            dealership systems.
          </p>
        </motion.section>
      </div>
    </main>
  );
};
