(() => {
  const translations = {
    en: {
      invocation:'॥ श्री गणेशाय नमः ॥',heroKicker:'WITH THE BLESSINGS OF THE ALMIGHTY',heroSubtitle:'CORDIALLY INVITES YOU TO CELEBRATE',heroTitle:'गृह प्रवेश<br> & अखंड रामायण पाठ',heroDate:'10 & 11 MARCH 2027 · LUCKNOW',heroCta:'VIEW YOUR INVITATION',cardKicker:'A NEW HOME · A NEW BEGINNING',cardIntro:'With immense joy and gratitude,',cardHosts:'Ajeet Kumar Singh<br><small>& Nirmala Singh</small>',cardCopy:'request the pleasure of your gracious presence with family on the auspicious occasion of our',cardEvent:'GRIHA PRAVESH',cardSubEvent:'AND SHRI AKHAND RAMAYAN PATH',blessingsLabel:'WITH THE BLESSINGS OF',blessingsNames:'Shri Hriday Narayan Singh & Smt. Usha Devi',cardFamily:'Ayush Kumar Singh · Shivansh Singh',eventsEyebrow:'AUSPICIOUS GATHERING · 10—11 MARCH 2027',eventsTitle:'TWO DAYS OF JOY & DEVOTION',dayOne:'DAY ONE',dateOne:'WEDNESDAY · 10 MARCH',dayOneTitle:'A Sacred Beginning',dayOneA:'Auspicious Griha Pravesh Puja',dayOneB:'Shri Akhand Ramayan Path Aarambh',dayOneFoot:'A NEW CHAPTER BEGINS',dayTwo:'DAY TWO',dateTwo:'THURSDAY · 11 MARCH',dayTwoTitle:'Blessings & Celebration',dayTwoA:'Ramayan Path Samapan & Havan',dayTwoB:'Grand Priti Bhoj',dayTwoFoot:'A DAY OF TOGETHERNESS',birthdayKicker:'A LITTLE MORE JOY IN OUR CELEBRATION',birthdayTitle:"Shivansh Singh's Birthday",birthdayCopy:"11 March is also Shivansh's special day. We would be delighted to celebrate this beautiful occasion with your love and blessings.",divineEyebrow:'DIVINE GRACE · ETERNAL BLESSINGS',divineTitle:'DIVINE BLESSINGS FOR OUR NEW SANCTUARY',divineCopy:'May the grace of Shri Ram bring peace, prosperity and happiness to our home, and may His blessings remain with our family and all who enter it.',mantra:'॥ श्री राम जय राम जय जय राम ॥',venueEyebrow:'WE WOULD BE HONOURED BY YOUR PRESENCE',venueTitle:'YOUR PRESENCE WILL MAKE OUR<br>CELEBRATION COMPLETE',venueLabel:'THE PLACE OF CELEBRATION',venueName:'CHANDEL RESIDENCE',address:'Kha-103, 593/KN/103-A, Village Shakurpur,<br>Lucknow, Uttar Pradesh – 226002',call:'CALL THE FAMILY',countdownEyebrow:'THE AUSPICIOUS DAY APPROACHES',countdownTitle:'COUNTING DOWN TO THE SACRED<br>MUHURAT',days:'DAYS',hours:'HOURS',minutes:'MINUTES',seconds:'SECONDS',active:'The auspicious celebrations are underway.',complete:'Thank you for your love and blessings.',memoriesEyebrow:'ROOTED IN LOVE · UNITED IN BLESSINGS',memoriesTitle:'CHERISHED FAMILY MEMORIES',memoriesIntro:'A home is made beautiful by the love and blessings it holds.',memoryOne:'OUR ELDERS',memoryOneSub:'Wisdom & blessings',memoryTwo:'OUR FAMILY',memoryTwoSub:'Love & togetherness',memoryThree:'OUR FAITH',memoryThreeSub:'A home of devotion',memoryFour:'NEW BEGINNINGS',memoryFourSub:'Hope & happiness',footerTitle:'YOUR PRESENCE,<br>YOUR BLESSINGS,<br>AND YOUR LOVE',footerCopy:'will make this new beginning even more special. We look forward to welcoming you.',footerHindi:'आपका स्नेह और आशीर्वाद ही हमारी सबसे बड़ी पूँजी है।',signoff:'WITH WARM REGARDS, THE CHANDEL FAMILY',backTop:'BACK TO TOP ↑',footerCall:'GET IN TOUCH',musicPlay:'Play devotional music',musicPause:'Pause devotional music'
    },
    hi: {
      invocation:'॥ श्री गणेशाय नमः ॥',heroKicker:'ईश्वर के शुभाशीर्वाद सहित',heroSubtitle:'सादर आमंत्रित करता है',heroTitle:'गृह प्रवेश<br> एवं अखंड रामायण पाठ',heroDate:'10 एवं 11 मार्च 2027 · लखनऊ',heroCta:'निमंत्रण देखें',cardKicker:'नया घर · नई शुरुआत',cardIntro:'अत्यंत हर्ष एवं कृतज्ञता के साथ,',cardHosts:'अजीत कुमार सिंह<br><small>एवं निर्मला सिंह</small>',cardCopy:'अपने नए निवास के पावन अवसर पर आप सपरिवार सादर आमंत्रित हैं। कृपया पधारकर हमें अनुगृहीत करें।',cardEvent:'गृह प्रवेश',cardSubEvent:'एवं श्री अखंड रामायण पाठ',blessingsLabel:'शुभाशीर्वाद',blessingsNames:'श्री हृदय नारायण सिंह एवं श्रीमती उषा देवी',cardFamily:'आयुष कुमार सिंह · शिवांश सिंह',eventsEyebrow:'पावन आयोजन · 10—11 मार्च 2027',eventsTitle:'भक्ति एवं आनंद के दो दिन',dayOne:'प्रथम दिवस',dateOne:'बुधवार · 10 मार्च',dayOneTitle:'मंगलमय शुभारंभ',dayOneA:'शुभ गृह प्रवेश पूजन',dayOneB:'श्री अखंड रामायण पाठ आरंभ',dayOneFoot:'एक नए अध्याय का आरंभ',dayTwo:'द्वितीय दिवस',dateTwo:'गुरुवार · 11 मार्च',dayTwoTitle:'आशीर्वाद एवं उत्सव',dayTwoA:'रामायण पाठ समापन एवं हवन',dayTwoB:'भव्य प्रीति भोज',dayTwoFoot:'अपनों के साथ का दिन',birthdayKicker:'हमारे उत्सव में एक और खुशी',birthdayTitle:'शिवांश सिंह का जन्मदिन',birthdayCopy:'11 मार्च को शिवांश का जन्मदिन भी है। आपके स्नेह और आशीर्वाद के साथ यह सुंदर अवसर मनाकर हमें अत्यंत प्रसन्नता होगी।',divineEyebrow:'ईश्वरीय कृपा · अनंत आशीर्वाद',divineTitle:'हमारे नए निवास पर प्रभु की कृपा बनी रहे',divineCopy:'प्रभु श्री राम की कृपा हमारे घर में सुख, शांति एवं समृद्धि लाए। उनके आशीर्वाद से हमारा परिवार और यहाँ आने वाला प्रत्येक अतिथि धन्य हो।',mantra:'॥ श्री राम जय राम जय जय राम ॥',venueEyebrow:'आपकी उपस्थिति हमारे लिए सम्मान की बात होगी',venueTitle:'आपका आगमन हमारे<br>उत्सव को पूर्ण करेगा',venueLabel:'कार्यक्रम स्थल',venueName:'चंदेल निवास',address:'ख-103, 593/केएन/103-ए, ग्राम शकुरपुर,<br>लखनऊ, उत्तर प्रदेश – 226002',call:'परिवार को कॉल करें',countdownEyebrow:'शुभ दिवस का आगमन',countdownTitle:'शुभ मुहूर्त की<br>उलटी गिनती',days:'दिन',hours:'घंटे',minutes:'मिनट',seconds:'सेकंड',active:'शुभ उत्सव प्रारंभ हो चुका है।',complete:'आपके स्नेह एवं आशीर्वाद के लिए धन्यवाद।',memoriesEyebrow:'प्रेम की जड़ें · आशीर्वाद का साथ',memoriesTitle:'परिवार की अनमोल यादें',memoriesIntro:'अपनों के प्रेम और आशीर्वाद से ही घर सुंदर बनता है।',memoryOne:'हमारे बड़े',memoryOneSub:'अनुभव एवं आशीर्वाद',memoryTwo:'हमारा परिवार',memoryTwoSub:'प्रेम एवं अपनापन',memoryThree:'हमारी आस्था',memoryThreeSub:'भक्ति से भरा घर',memoryFour:'नई शुरुआत',memoryFourSub:'आशा एवं खुशियाँ',footerTitle:'आपका आगमन,<br>आपका आशीर्वाद,<br>और आपका स्नेह',footerCopy:'हमारी इस नई शुरुआत को और भी विशेष बनाएगा। हम आपके स्वागत की प्रतीक्षा करेंगे।',footerHindi:'आपका स्नेह और आशीर्वाद ही हमारी सबसे बड़ी पूँजी है।',signoff:'सादर, चंदेल परिवार',backTop:'ऊपर जाएँ ↑',footerCall:'संपर्क करें',musicPlay:'भक्ति संगीत चलाएँ',musicPause:'भक्ति संगीत रोकें'
    }
  };
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  let language = 'en';
  function setLanguage(next) {
    language = translations[next] ? next : 'en';
    document.documentElement.lang = language;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[language][key] !== undefined) el.innerHTML = translations[language][key];
    });
    $$('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === language));
    $('#musicToggle').setAttribute('aria-label', translations[language][audio.paused ? 'musicPlay' : 'musicPause']);
    try { localStorage.setItem('chandel-language', language); } catch (_) {}
    updateCountdown();
  }
  $$('[data-lang]').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
  try { const saved = localStorage.getItem('chandel-language'); if (saved) language = saved; } catch (_) {}

  const audio = $('#fluteAudio');
  const musicButton = $('#musicToggle');
  musicButton.addEventListener('click', async () => {
    if (audio.paused) {
      try { await audio.play(); musicButton.classList.add('playing'); musicButton.setAttribute('aria-label', translations[language].musicPause); }
      catch (_) { musicButton.classList.remove('playing'); }
    } else {
      audio.pause(); musicButton.classList.remove('playing'); musicButton.setAttribute('aria-label', translations[language].musicPlay);
    }
  });
  audio.addEventListener('ended', () => musicButton.classList.remove('playing'));
  audio.addEventListener('pause', () => musicButton.classList.remove('playing'));
  audio.addEventListener('play', () => musicButton.classList.add('playing'));
  document.addEventListener('visibilitychange', () => { if (document.hidden && !audio.paused) audio.pause(); });

  const start = new Date('2027-03-10T00:00:00+05:30').getTime();
  const end = new Date('2027-03-12T00:00:00+05:30').getTime();
  function updateCountdown() {
    const now = Date.now();
    if (now >= end) { $('#countdown').hidden = true; $('#countdownMessage').textContent = translations[language].complete; return; }
    if (now >= start) { $('#countdown').hidden = true; $('#countdownMessage').textContent = translations[language].active; return; }
    $('#countdown').hidden = false; $('#countdownMessage').textContent = '';
    let remaining = start - now;
    const values = {days:Math.floor(remaining/86400000),hours:Math.floor(remaining%86400000/3600000),minutes:Math.floor(remaining%3600000/60000),seconds:Math.floor(remaining%60000/1000)};
    Object.entries(values).forEach(([key,value]) => $('#'+key).textContent = String(value).padStart(key === 'days' ? 3 : 2,'0'));
  }
  setLanguage(language); updateCountdown(); window.setInterval(updateCountdown,1000);
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }),{threshold:.12});
    $$('.reveal').forEach(el => observer.observe(el));
  } else $$('.reveal').forEach(el => el.classList.add('visible'));
})();
