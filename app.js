const lessons = [
  {id:1,module:"MODULE 01 · FOUNDATIONS",title:"Present Simple",duration:"18 min",intro:"Learn the most useful English tense for routines, facts and everyday life.",pdf:"pdf/lesson-01.pdf",video:"dQw4w9WgXcQ"},
  {id:2,module:"MODULE 01 · FOUNDATIONS",title:"Present Continuous",duration:"21 min",intro:"Talk about what is happening now and around the present moment.",pdf:"pdf/lesson-02.pdf",video:"dQw4w9WgXcQ"},
  {id:3,module:"MODULE 01 · FOUNDATIONS",title:"Past Simple",duration:"19 min",intro:"Talk clearly about completed actions and experiences in the past.",pdf:"pdf/lesson-03.pdf",video:"dQw4w9WgXcQ"},
  {id:4,module:"MODULE 01 · FOUNDATIONS",title:"Review: Time & Tenses",duration:"15 min",intro:"Bring the first three lessons together with practical review.",pdf:"pdf/lesson-04.pdf",video:"dQw4w9WgXcQ"},
  {id:5,module:"MODULE 02 · SPEAKING",title:"Introducing Yourself",duration:"16 min",intro:"Introduce yourself confidently in everyday conversations.",pdf:"pdf/lesson-05.pdf",video:"dQw4w9WgXcQ"},
  {id:6,module:"MODULE 02 · SPEAKING",title:"Small Talk",duration:"20 min",intro:"Keep simple conversations moving naturally.",pdf:"pdf/lesson-06.pdf",video:"dQw4w9WgXcQ"},
  {id:7,module:"MODULE 02 · SPEAKING",title:"Asking Better Questions",duration:"22 min",intro:"Ask useful questions that create better conversations.",pdf:"pdf/lesson-07.pdf",video:"dQw4w9WgXcQ"},
  {id:8,module:"MODULE 03 · ENGLISH FOR WORK",title:"Professional Introductions",duration:"19 min",intro:"Introduce yourself clearly in a professional setting.",pdf:"pdf/lesson-08.pdf",video:"dQw4w9WgXcQ"},
  {id:9,module:"MODULE 03 · ENGLISH FOR WORK",title:"Meetings & Opinions",duration:"24 min",intro:"Share opinions, agree and disagree professionally.",pdf:"pdf/lesson-09.pdf",video:"dQw4w9WgXcQ"},
  {id:10,module:"MODULE 03 · ENGLISH FOR WORK",title:"Clear Work Emails",duration:"23 min",intro:"Write concise, natural emails that get a response.",pdf:"pdf/lesson-10.pdf",video:"dQw4w9WgXcQ"}
];

const params = new URLSearchParams(location.search);
const currentId = Number(params.get("id")) || 1;
const current = lessons.find(x => x.id === currentId) || lessons[0];
const prev = lessons.find(x => x.id === current.id - 1);
const next = lessons.find(x => x.id === current.id + 1);

const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
set("crumb", `Lesson ${String(current.id).padStart(2,"0")}`);
set("lessonModule", current.module);
set("lessonTitle", current.title);
set("lessonIntro", current.intro);
set("lessonDuration", current.duration);
document.title = `${current.title} — English for Real Life`;

const video = document.getElementById("video");
if (video) video.src = `https://www.youtube.com/embed/${current.video}`;

const pdf = document.getElementById("pdfLink");
if (pdf) pdf.href = current.pdf;

if (prev) {
  const p = document.getElementById("prev");
  p.href = `lesson.html?id=${prev.id}`;
  set("prevTitle", prev.title);
} else {
  const p = document.getElementById("prev");
  p.href = "index.html#curriculum";
  set("prevTitle", "Course curriculum");
}
if (next) {
  const n = document.getElementById("next");
  n.href = `lesson.html?id=${next.id}`;
  set("nextTitle", next.title);
  set("nextSide", next.title);
  document.getElementById("nextSideLink").href = `lesson.html?id=${next.id}`;
} else {
  document.getElementById("next").href = "index.html#curriculum";
  set("nextTitle", "Back to curriculum");
  set("nextSide", "Course complete");
  document.getElementById("nextSideLink").href = "index.html#curriculum";
}