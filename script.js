(() => {
  "use strict";
  const translations = {
    en: {
      pageTitle:"Chandel Family — Griha Pravesh & Akhand Ramayan Invitation",
      splashSubtitle:"Chandel Family Cordially Invites You", openButton:"Open Invitation",
      musicLabel:"Music", musicPlay:"Play devotional flute music", musicPause:"Pause devotional flute music",
      eyebrow:"A NEW BEGINNING · A SACRED GATHERING", heroTitle:"Griha Pravesh & Akhand Ramayan",
      heroMessage:"With the blessings of the Almighty and our elders, the Chandel Family joyfully invites you and your family to grace the auspicious occasion of our new home.",
      dateRibbon:"10 & 11 March 2027 • Wednesday & Thursday", countdownHeading:"THE CELEBRATION BEGINS IN",
      days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds", activeMessage:"Celebrations Are Underway!",
      completedMessage:"Thank You for Your Blessings!", scroll:"SCROLL TO EXPLORE",
      familyKicker:"OUR FAMILY · OUR JOY",familyTitle:"An Invitation from the Heart",
      blessingsHeading:"With the Blessings of",blessingsNames:"Shri Hriday Narayan Singh & Smt. Usha Devi",
      hostsHeading:"Cordially Invited By",hostsNames:"Shri Ajeet Kumar Singh & Smt. Nirmala Singh",
      sonsHeading:"Awaiting Your Warm Presence",sonsNames:"Ayush Kumar Singh & Shivansh Singh",
      sacredKicker:"THE DIVINE GRACE",ramaCaption:"॥ Jai Shri Ram ॥",ramaSubcaption:"May His blessings illuminate our home and hearts.",
      eventsKicker:"TWO DAYS OF DEVOTION & TOGETHERNESS",scheduleHeading:"Auspicious Celebrations",
      scheduleIntro:"We would be honoured to have you with us for these sacred and joyful moments.",
      day1Badge:"Day 1",day1Date:"Wednesday, 10 March 2027",day1Event1:"Auspicious Griha Pravesh Puja",day1Event2:"Shri Akhand Ramayan Path Aarambh",
      day2Badge:"Day 2",day2Date:"Thursday, 11 March 2027",day2Event1:"Ramayan Path Samapan & Havan",day2Event2:"Grand Priti Bhoj (Feast)",
      birthdayBadge:"A Double Celebration!",birthdayOverline:"A LITTLE MORE REASON TO CELEBRATE",
      birthdayHeading:"Shivansh Singh's Birthday",birthdayText:"11 March is also Shivansh Singh's Birthday. Join us to bless our new home and celebrate Shivansh's special day with joy and togetherness.",
      venueKicker:"WE LOOK FORWARD TO WELCOMING YOU",venueHeading:"Venue",venueTitle:"Chandel Residence",
      venueAddress:"Kha-103, 593/KN/103-A, Village Shakurpur, Lucknow, Uttar Pradesh – 226002",
      callButton:"Call +91 9235228454",footerQuote:"Your gracious presence and blessings are our greatest gift.",
      footerSignoff:"Warm Regards, Chandel Family",
      memoriesKicker:"ROOTED IN LOVE · UNITED IN BLESSINGS",memoriesTitle:"Cherished Family Moments",memoriesIntro:"A home is made beautiful by the people and blessings within it.",
      memory1Title:"Our Elders",memory1Text:"Wisdom, prayers & blessings",memory2Title:"Our Family",memory2Text:"Togetherness through every chapter",memory3Title:"Our Faith",memory3Text:"A home filled with devotion",memory4Title:"New Beginnings",memory4Text:"Love, laughter & new memories"
    },
    hi: {
      pageTitle:"चंदेल परिवार — गृह प्रवेश एवं अखंड रामायण निमंत्रण",
      splashSubtitle:"चंदेल परिवार की ओर से हार्दिक आमंत्रण",openButton:"निमंत्रण खोलें",
      musicLabel:"संगीत",musicPlay:"भक्ति संगीत चलाएँ",musicPause:"भक्ति संगीत रोकें",
      eyebrow:"नए आरंभ · पावन मंगल मिलन",heroTitle:"गृह प्रवेश एवं अखंड रामायण पाठ",
      heroMessage:"ईश्वर एवं बड़ों के आशीर्वाद से, चंदेल परिवार आपको सपरिवार हमारे नए घर के पावन गृह प्रवेश एवं अखंड रामायण पाठ के शुभ अवसर पर सादर आमंत्रित करता है।",
      dateRibbon:"10 एवं 11 मार्च 2027 • बुधवार एवं गुरुवार",countdownHeading:"शुभ अवसर के आगमन में शेष",
      days:"दिन",hours:"घंटे",minutes:"मिनट",seconds:"सेकंड",activeMessage:"शुभ उत्सव प्रारंभ हो चुका है!",
      completedMessage:"आपके स्नेह एवं आशीर्वाद के लिए धन्यवाद!",scroll:"आगे पढ़ने के लिए नीचे जाएँ",
      familyKicker:"हमारा परिवार · हमारी खुशियाँ",familyTitle:"हृदय से सादर आमंत्रण",
      blessingsHeading:"शुभाशीर्वाद",blessingsNames:"श्री हृदय नारायण सिंह एवं श्रीमती उषा देवी",
      hostsHeading:"विनीत / निमंत्रक",hostsNames:"श्री अजीत कुमार सिंह एवं श्रीमती निर्मला सिंह",
      sonsHeading:"स्वागताकांक्षी",sonsNames:"आयुष कुमार सिंह एवं शिवांश सिंह",
      sacredKicker:"ईश्वरीय कृपा",ramaCaption:"॥ श्री राम जय राम जय जय राम ॥",ramaSubcaption:"प्रभु श्री राम की कृपा हमारे घर और हृदय को आलोकित करे।",
      eventsKicker:"दो दिन · भक्ति और मंगल मिलन",scheduleHeading:"मांगलिक कार्यक्रम",
      scheduleIntro:"इन पावन एवं आनंदमय क्षणों में आपकी उपस्थिति हमारे लिए सौभाग्य की बात होगी।",
      day1Badge:"प्रथम दिवस",day1Date:"बुधवार, 10 मार्च 2027",day1Event1:"शुभ गृह प्रवेश पूजन",day1Event2:"श्री अखंड रामायण पाठ आरंभ",
      day2Badge:"द्वितीय दिवस",day2Date:"गुरुवार, 11 मार्च 2027",day2Event1:"रामायण पाठ समापन एवं हवन",day2Event2:"भव्य प्रीति भोज",
      birthdayBadge:"दोहरी खुशियों का संगम!",birthdayOverline:"खुशियाँ मनाने का एक और सुंदर अवसर",
      birthdayHeading:"शिवांश सिंह का जन्मोत्सव",birthdayText:"11 मार्च को हमारे लाड़ले शिवांश सिंह का जन्मदिन भी है। नए घर के शुभारंभ के साथ शिवांश के जन्मदिन के उत्सव में पधारकर हमें अनुगृहीत करें।",
      venueKicker:"आपके स्वागत की प्रतीक्षा रहेगी",venueHeading:"कार्यक्रम स्थल",venueTitle:"चंदेल निवास",
      venueAddress:"ख-103, 593/केएन/103-ए, ग्राम-शकुरपुर, लखनऊ, उत्तर प्रदेश – 226002",
      callButton:"संपर्क करें: +91 9235228454",footerQuote:"आपका स्नेहमयी आगमन एवं आशीर्वाद ही हमारा सबसे बड़ा उपहार है।",
      footerSignoff:"सादर, चंदेल परिवार",
      memoriesKicker:"प्रेम की जड़ें · आशीर्वाद का साथ",memoriesTitle:"परिवार की अनमोल यादें",memoriesIntro:"अपनों के प्रेम और बड़ों के आशीर्वाद से ही घर सुंदर बनता है।",
      memory1Title:"हमारे बड़े",memory1Text:"अनुभव, प्रार्थनाएँ और आशीर्वाद",memory2Title:"हमारा परिवार",memory2Text:"हर पल साथ और अपनापन",memory3Title:"हमारी आस्था",memory3Text:"भक्ति से आलोकित घर",memory4Title:"नई शुरुआत",memory4Text:"प्रेम, हँसी और नई यादें"
    }
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const splash = $("#splash");
  const controls = $("#controlBar");
  const audio = $("#fluteAudio");
  const musicButton = $("#musicToggle");
  let currentLanguage = "en";
  let userWantsMusic = false;
  let manuallyMuted = false;
  let rampFrame = null;
  let previousVolume = 0;

  function applyLanguage(language) {
    currentLanguage = translations[language] ? language : "en";
    const strings = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = strings.pageTitle;
    $$("[data-i18n]").forEach(node => {
      const key = node.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(strings, key)) node.textContent = strings[key];
    });
    $$("[data-i18n-aria]").forEach(node => {
      const key = node.dataset.i18nAria;
      if (Object.prototype.hasOwnProperty.call(strings, key)) node.setAttribute("aria-label", strings[key]);
    });
    $$("[data-language]").forEach(button => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem("chandel-invitation-language", currentLanguage); } catch (_) {}
    updateCountdown();
  }

  function setMusicButton(isPlaying) {
    musicButton.classList.toggle("playing", isPlaying);
    musicButton.setAttribute("aria-label", translations[currentLanguage][isPlaying ? "musicPause" : "musicPlay"]);
    musicButton.setAttribute("aria-pressed", String(isPlaying));
  }

  function stopRamp() {
    if (rampFrame !== null) cancelAnimationFrame(rampFrame);
    rampFrame = null;
  }

  function fadeAudioTo(target, duration = 1500) {
    stopRamp();
    const start = performance.now();
    const from = audio.volume;
    const tick = now => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      audio.volume = from + (target - from) * eased;
      if (progress < 1) rampFrame = requestAnimationFrame(tick);
      else rampFrame = null;
    };
    rampFrame = requestAnimationFrame(tick);
  }

  async function startMusic() {
    if (manuallyMuted || document.hidden) return;
    audio.volume = 0;
    try {
      await audio.play();
      userWantsMusic = true;
      setMusicButton(true);
      fadeAudioTo(0.45, 1500);
    } catch (_) {
      setMusicButton(false);
    }
  }

  function pauseMusicForVisibility() {
    if (document.hidden) {
      previousVolume = audio.volume;
      stopRamp();
      audio.pause();
      setMusicButton(false);
    } else if (userWantsMusic && !manuallyMuted) {
      audio.volume = 0;
      audio.play().then(() => {
        setMusicButton(true);
        fadeAudioTo(0.45, 1100);
      }).catch(() => setMusicButton(false));
    }
  }

  audio.loop = true;
  audio.preload = "metadata";
  audio.addEventListener("error", () => setMusicButton(false));
  document.addEventListener("visibilitychange", pauseMusicForVisibility);

  $("#openInvitation").addEventListener("click", () => {
    splash.classList.add("is-closing");
    document.body.classList.remove("locked");
    controls.classList.add("visible");
    window.setTimeout(() => { splash.hidden = true; }, 950);
    if (!manuallyMuted) {
      userWantsMusic = true;
      startMusic();
    }
  });

  musicButton.addEventListener("click", () => {
    if (audio.paused) {
      manuallyMuted = false;
      userWantsMusic = true;
      startMusic();
    } else {
      manuallyMuted = true;
      userWantsMusic = false;
      stopRamp();
      audio.pause();
      audio.volume = 0;
      setMusicButton(false);
    }
  });

  $$("[data-language]").forEach(button => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  const target = new Date("2027-03-10T00:00:00+05:30").getTime();
  const eventEnd = new Date("2027-03-12T00:00:00+05:30").getTime();
  const countdownMessage = $("#countdownMessage");
  function updateCountdown() {
    const now = Date.now();
    if (now >= eventEnd) {
      $("#countdown").hidden = true;
      countdownMessage.textContent = translations[currentLanguage].completedMessage;
      return;
    }
    if (now >= target) {
      $("#countdown").hidden = true;
      countdownMessage.textContent = translations[currentLanguage].activeMessage;
      return;
    }
    $("#countdown").hidden = false;
    countdownMessage.textContent = "";
    const remaining = target - now;
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    $("#days").textContent = String(days).padStart(3, "0");
    $("#hours").textContent = String(hours).padStart(2, "0");
    $("#minutes").textContent = String(minutes).padStart(2, "0");
    $("#seconds").textContent = String(seconds).padStart(2, "0");
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  try {
    const savedLanguage = localStorage.getItem("chandel-invitation-language");
    if (savedLanguage && translations[savedLanguage]) currentLanguage = savedLanguage;
  } catch (_) {}
  applyLanguage(currentLanguage);

  document.body.classList.add("locked");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    document.body.classList.add("js-ready");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    $$(".reveal").forEach(element => observer.observe(element));
  }
})();