const questions = [
  { q: "JavaScript kaun si language hai?", a: "Scripting", opts: ["Programming", "Scripting", "Markup", "Style"] },
  { q: "HTML full form?", a: "HyperText Markup Language", opts: ["HyperText", "HyperTool", "HyperText Markup Language", "HomeTool"] },
  { q: "CSS ka use?", a: "Styling", opts: ["Logic", "Styling", "Structure", "Data"] },
  { q: "2 + 2?", a: "4", opts: ["22", "4", "5", "0"] },
  { q: "Best channel for JS?", a: "Coder Army", opts: ["CodeWithHarry", "Coder Army", "Thapa Technical", "WsCube"] }
];
let current = 0;
let score = 0;

function loadQ() {
  if (current >= questions.length) {
    document.querySelector('.quiz').innerHTML = `<h1>Quiz Over! Score: ${score}/${questions.length}</h1>`;
    return;
  }
  document.getElementById('question').textContent = questions[current].q;
  const optsDiv = document.getElementById('options');
  optsDiv.innerHTML = '';
  questions[current].opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => check(opt);
    optsDiv.appendChild(btn);
  });
}

function check(selected) {
  if (selected === questions[current].a) score++;
  nextQ();
}

function nextQ() {
  current++;
  loadQ();
}

loadQ();