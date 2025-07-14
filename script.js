const curriculum = [
  {
    semestre: "1er Semestre (21 créditos)",
    asignaturas: [
      { tipo: "Basica", nombre: "Biología" },
      { tipo: "Basica", nombre: "Biofísica" },
      { tipo: "Basica", nombre: "Química" },
      { tipo: "Humanistica", nombre: "Historia de la Medicina" },
      { tipo: "Humanistica", nombre: "Socioantropología" },
      { tipo: "Humanistica", nombre: "Expresión Oral y Escrita" },
      { tipo: "Humanistica", nombre: "Cátedra Unilibrista" },
      { tipo: "Electiva", nombre: "Inglés I" }
    ]
  },
  {
    semestre: "2do Semestre (22 créditos)",
    asignaturas: [
      { tipo: "Basica", nombre: "Bioquímica" },
      { tipo: "Basica", nombre: "Morfología I (Anatomía e Histología)" },
      { tipo: "Basica", nombre: "Bioestadística Descriptiva" },
      { tipo: "Basica", nombre: "Metodología de la Investigación I" },
      { tipo: "Electiva", nombre: "Inglés II" },
      { tipo: "Electiva", nombre: "Electiva Complementaria" }
    ]
  },
  {
    semestre: "3er Semestre (25 créditos)",
    asignaturas: [
      { tipo: "Basica", nombre: "Biología Molecular" },
      { tipo: "Basica", nombre: "Morfología II (Neuroanatomía y Embriología)" },
      { tipo: "Basica", nombre: "Fisiología" },
      { tipo: "Basica", nombre: "Epidemiología I" },
      { tipo: "Electiva", nombre: "Inglés III" },
      { tipo: "Electiva", nombre: "Electiva Complementaria" }
    ]
  },
  {
    semestre: "4to Semestre (24 créditos)",
    asignaturas: [
      { tipo: "Basica", nombre: "Microbiología" },
      { tipo: "Humanistica", nombre: "Psicología del Desarrollo" },
      { tipo: "Humanistica", nombre: "Constitución Política e Instrucción Cívica" },
      { tipo: "Basica", nombre: "Epidemiología II" },
      { tipo: "Basica", nombre: "Bioestadística Analítica" },
      { tipo: "Electiva", nombre: "Inglés IV" },
      { tipo: "Basica", nombre: "Metodología de la Investigación II" },
      { tipo: "Electiva", nombre: "Electiva Complementaria" }
    ]
  },
  {
    semestre: "5to Semestre (25 créditos)",
    asignaturas: [
      { tipo: "Basica", nombre: "Farmacología Básica" },
      { tipo: "Basica", nombre: "Inmunología" },
      { tipo: "Basica", nombre: "Patología" },
      { tipo: "Profesional", nombre: "Salud Comunitaria I" },
      { tipo: "Humanistica", nombre: "Ética Médica" },
      { tipo: "Electiva", nombre: "Inglés V" },
      { tipo: "Electiva", nombre: "Electiva Complementaria" }
    ]
  },
  {
    semestre: "6to Semestre (24 créditos)",
    asignaturas: [
      { tipo: "Basica", nombre: "Farmacología y Toxicología Clínica" },
      { tipo: "Basica", nombre: "Genética Clínica" },
      { tipo: "Profesional", nombre: "Salud Comunitaria II" },
      { tipo: "Humanistica", nombre: "Bioética I" },
      { tipo: "Profesional", nombre: "Semiología" },
      { tipo: "Profesional", nombre: "Psicopatología" }
    ]
  },
  {
    semestre: "7mo Semestre (24 créditos)",
    asignaturas: [
      { tipo: "Profesional", nombre: "Medicina Interna" },
      { tipo: "Profesional", nombre: "Psiquiatría" },
      { tipo: "Profesional", nombre: "Salud Comunitaria III" },
      { tipo: "Humanistica", nombre: "Bioética II" }
    ]
  },
  {
    semestre: "8vo Semestre (24 créditos)",
    asignaturas: [
      { tipo: "Profesional", nombre: "Pediatría" },
      { tipo: "Profesional", nombre: "Salud Comunitaria IV" },
      { tipo: "Electiva", nombre: "Electiva Profesional" }
    ]
  },
  {
    semestre: "9no Semestre (24 créditos)",
    asignaturas: [
      { tipo: "Profesional", nombre: "Ginecología y Obstetricia" },
      { tipo: "Profesional", nombre: "Salud Comunitaria V" },
      { tipo: "Profesional", nombre: "Medicina Legal" },
      { tipo: "Electiva", nombre: "Electiva Profesional" }
    ]
  },
  {
    semestre: "10mo Semestre (19 créditos)",
    asignaturas: [
      { tipo: "Profesional", nombre: "Cirugía" },
      { tipo: "Profesional", nombre: "Salud Comunitaria VI" }
    ]
  },
  {
    semestre: "11vo Semestre (15 créditos)",
    asignaturas: [
      { tipo: "Profesional", nombre: "Cirugía" },
      { tipo: "Electiva", nombre: "Electiva" },
      { tipo: "Profesional", nombre: "Pediatría" },
      { tipo: "Profesional", nombre: "Urgencias Adulto" }
    ]
  },
  {
    semestre: "12vo Semestre (15 créditos)",
    asignaturas: [
      { tipo: "Profesional", nombre: "Medicina Interna" },
      { tipo: "Profesional", nombre: "Ginecología y Obstetricia" },
      { tipo: "Profesional", nombre: "Medicina Legal" },
      { tipo: "Basica", nombre: "Salud Básica" }
    ]
  }
];

function renderCurriculum() {
  const container = document.getElementById("curriculum");
  container.innerHTML = "";

  const selectedTypes = [...document.querySelectorAll(".filter:checked")].map(f => f.value);

  curriculum.forEach(sem => {
    const box = document.createElement("div");
    box.className = "semester";
    const title = document.createElement("h2");
    title.textContent = sem.semestre;
    box.appendChild(title);

    sem.asignaturas.forEach(asig => {
      const div = document.createElement("div");
      div.className = `subject ${asig.tipo}`;
      div.textContent = asig.nombre;

      if (!selectedTypes.includes(asig.tipo)) {
        div.classList.add("hidden");
      }

      // 👇 Al hacer clic, se tacha o destacha
      div.addEventListener("click", () => {
        div.classList.toggle("tachado");
      });

      box.appendChild(div);
    });

    container.appendChild(box);
  });
}

document.querySelectorAll(".filter").forEach(chk => {
  chk.addEventListener("change", renderCurriculum);
});

renderCurriculum();