const questions=[

{q:"Barqaror turizmda chiqindilarni kamaytirishning birinchi bosqichi nima?",opts:["Ishlatiladigan materiallarni kamaytirish va qayta foydalanish imkoniyatlarini oshirish","Chiqindilarni yig‘ish va samarali utilizatsiya qilish","Qayta ishlashni yo‘lga qo‘yish","Chiqindilarni yondirish va maxsus yo‘qotish usullaridan foydalanish"],a:"A"},
{q:"Barqaror turizmda transportni rivojlantirish qaysi usullar orqali amalga oshiriladi?",opts:["Jamoat transporti va ekologik toza vositalarni rag‘batlantirish orqali","Shaxsiy avtomobillar sonini nazorat qilish orqali","Sayyohlarga mo‘ljallangan yangi yo‘llar qurish orqali","Aeroportlarni kengaytirish va ekologik toza vositalarni rag‘batlantirish orqali"],a:"A"},
{q:"Barqaror turizmda mahalliy iqtisodiyotga qanday ta’sirlar ko‘rsatiladi?",opts:["Mahalliy ish o‘rinlari yaratish va daromadlarni oshirish","Milliy va xalqaro kompaniyalar foydasini oshirish","Tashqi investitsiyalarga to‘liq bog‘liq bo‘lish","Iqtisodiy ahamiyati yuqori bo‘lgan loyihalarni jalb qilish"],a:"A"},
{q:"Sayyohlik faoliyatida suv resurslarini muhofaza qilish qanday usullar bilan amalga oshiriladi?",opts:["Suvni tejash, ifloslanishni kamaytirish va tabiiy manbalarni tiklash orqali","Suvdan cheksiz foydalanish, ifloslanishni kamaytirish va tabiiy manbalarni tiklash orqali","Suvni faqat sanoatda ishlatish,  ifloslanishni kamaytirish va tabiiy manbalarni tiklash orqali","Suv manbalarini chetlab o‘tish, ifloslanishni kamaytirish va tabiiy manbalarni tiklash orqali"],a:"A"},
{q:"Barqaror turizmni rivojlantirishda ta’lim va xabardorlikning roli nimadan iborat?",opts:["Turizmda barqarorlik haqida ma’lumot berish va mas’uliyatni oshirish","Reklama qilish orqali turistlar ongiga ta’sir o‘tkazish","Sayyohlarni cheklash va kam rivojlangan hududlarni rivojlantirish","Joylashtiruv vositalarini qurish va iqtisodiy foyda olish"],a:"A"},
{q:"Barqaror turizmda ekologik monitoringning vazifasi nima?",opts:["Atrof-muhit holatini doimiy nazorat qilish va zararli ta’sirlarni oldini olish","Kiruvchi va chiquvchi turistlar oqimini hisobga olish","Monitoring jarayonlarini samarali va muntazam olib borish","Moliyaviy ko‘rsatkichlarni kuzatib borish va tegishli qarorlar qabul qilish"],a:"A"},
{q:"Barqaror turizmda energiya samaradorligini oshirish uchun qaysi chora samarali hisoblanadi?",opts:["Qayta tiklanadigan energiya manbalaridan foydalanish va energiyani tejash texnologiyalarini joriy etish","Elektr energiyasi iste’molini kamaytirish","Energiyani tejash texnologiyalari va an’anaviy yoqilg‘ilarni ishlatish","Energiya iste’molini doimiy nazorat qilib borish"],a:"A"},
{q:"Barqaror turizmda ijtimoiy barqarorlik qanday ta’minlanadi?",opts:["Mahalliy hamjamiyatlar manfaatlarini hisobga olish, ularning madaniy va iqtisodiy huquqlarini himoya qilish","Mahalliy hamjamiyatlar manfaatlarini hisobga olish va turistlarning qulayligini ta’minlash","Mahalliy aholini turizmdan chetlab qo‘yish va turistlarning qulayligini ta’minlash","Turistlarning qulayligini ta’minlash va iqtisodiy foyda ko‘zlash"],a:"A"},
{q:"Ekoturizmda tabiatni muhofaza qilishga qaratilgan asosiy prinsip nima?",opts:["Tabiatga zarar yetkazmaslik, biologik xilma-xillikni saqlash va ekotizimlarni muhofaza qilish","Tabiatni ko‘rgazma maydoniga aylantirish va ekotizimlarni muhofaza qilish","Tabiatni turistlar ehtiyojiga mos ravishda moslashtirish va unga bo‘lgan salbiy munosabatni o‘zgartirish","Faqat tabiat manzaralarini suratga olish va unga zarar yetkazmaslik kabi prinsiplar"],a:"A"},
{q:"Barqaror turizmda ekologik ta’sirlarni baholashda qaysi usullar qo‘llaniladi?",opts:["Atrof-muhit monitoringi, so‘rovnomalar, ilmiy tadqiqotlar va GIS texnologiyalari","Iqtisodiy hisob-kitoblar, turistlarning fikrini so‘rash, hukumat hisobotlari","Turistlarning fikrini so‘rash va atrof-muhit monitoringi","Hukumat hisobotlari, qarorlari va rejasiga mos siyosat"],a:"A"},


]

let idx = 0;
let correct = 0;
let wrong = 0;
const qnumEl = document.getElementById('qnum');
const qtextEl = document.getElementById('qtext');
const optionsEl = document.getElementById('options');
const form = document.getElementById('quizForm');
const typed = document.getElementById('typedAnswer');
const progress = document.getElementById('progress');
const resultBox = document.getElementById('resultBox');
const submitBtn = document.getElementById('submitBtn');

function renderQuestion() {
  if (idx >= questions.length) return;
  const q = questions[idx];
  qnumEl.textContent = `Savol ${idx + 1} / ${questions.length}`;
  qtextEl.textContent = q.q;
  optionsEl.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const id = `opt${i}`;
    const div = document.createElement('label');
    div.className = 'option';
    div.innerHTML = `<input name='choice' type='radio' value='${letters[i]}' id='${id}' /><span>${letters[i]}. ${opt}</span>`;
    optionsEl.appendChild(div);
  });
  progress.textContent = `${idx + 1} / ${questions.length}`;
  typed.value = '';
}

function showResults() {
  resultBox.style.display = 'block';
  resultBox.innerHTML = `<strong>Test yakunlandi</strong><div class='small' style='margin-top:8px'>To'g'ri javoblar: ${correct}<br> Noto'g'ri javoblar: ${wrong}<br> Umumiy: ${questions.length}</div>`;
  submitBtn.disabled = true;
  form.style.display = 'none';
  progress.textContent = `${questions.length} / ${questions.length}`;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const chosenRadio = document.querySelector("input[name='choice']:checked");
  let answer = chosenRadio ? chosenRadio.value : typed.value.trim().toUpperCase();
  if (!answer || !['A', 'B', 'C', 'D'].includes(answer)) {
    alert('Iltimos A, B, C yoki D variantidan birini tanlang yoki yozing');
    return;
  }
  const correctAnswer = questions[idx].a;
  if (answer === correctAnswer) correct++; else wrong++;
  idx++;

  if (idx >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

typed.addEventListener('input', e => {
  const v = e.target.value.trim().toUpperCase();
  if (['A', 'B', 'C', 'D'].includes(v)) {
    const radio = document.querySelector(`input[value='${v}']`);
    if (radio) radio.checked = true;
  }
});

optionsEl.addEventListener('click', e => {
  const input = e.target.closest('label')?.querySelector('input');
  if (input) {
    typed.value = input.value;
  }
});

renderQuestion();
