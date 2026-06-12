import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Application logic for The Refuge website

document.addEventListener('DOMContentLoaded', () => {
  initTopBanner();
  initSplitBannerForm();
  initHeader();
  initMobileMenu();
  initFAQ();
  initCounters();
  initTabs();
  initDonationForm();
  initForms();
  initHeroAnimations();
  initSubHeroAnimations();
  initScrollAnimations();
  initDonationEffects();
});

// Top Urgent Notification Banner
function initTopBanner() {
  const banner = document.getElementById('top-banner');
  const closeBtn = document.getElementById('close-banner');
  
  if (!banner || !closeBtn) return;
  
  // Apply pushing offset initially
  document.body.classList.add('has-banner');

  closeBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
    document.body.classList.remove('has-banner');
  });
}

// Sticky Header behavior
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

// Mobile hamburger navigation drawer
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent background scrolling when menu is open
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu on clicking any link
  const links = mobileMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// FAQ Accordion logic
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    
    if (!trigger || !content) return;
    
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-content').style.maxHeight = null;
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// Animated stats count-up using GSAP ScrollTrigger
function initCounters() {
  const counters = document.querySelectorAll('.count-up');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        counter.textContent = Math.floor(obj.val).toLocaleString('fr-FR');
      },
      onComplete: () => {
        counter.textContent = Math.floor(target).toLocaleString('fr-FR');
      }
    });
  });
}

// Tab navigation switcher (Dons, Bénévolat, Partenariats)
function initTabs() {
  const tabContainer = document.querySelector('.tab-container');
  if (!tabContainer) return;

  const tabButtons = tabContainer.querySelectorAll('.tab-btn');
  const tabPanes = tabContainer.querySelectorAll('.tab-pane');

  function switchTab(targetId) {
    const btn = Array.from(tabButtons).find(b => b.getAttribute('data-tab') === targetId);
    const pane = document.getElementById(targetId);
    if (!btn || !pane) return;

    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanes.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    pane.classList.add('active');
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      switchTab(targetId);
      
      // Update URL query parameter without full reload
      const url = new URL(window.location);
      url.searchParams.set('tab', targetId);
      window.history.pushState({}, '', url);
    });
  });

  // Check URL query parameters on load
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get('tab');
  if (tabParam) {
    switchTab(tabParam);
  }
}

// Donation form logic
function initDonationForm() {
  const form = document.getElementById('donation-form');
  if (!form) return;

  const presetBtns = form.querySelectorAll('.donation-preset-btn');
  const customInput = document.getElementById('donation-custom');
  const toggleBtns = form.querySelectorAll('.donation-toggle-btn');
  const typeInput = document.getElementById('donation-type'); // Hidden input
  
  // Step containers
  const step1 = form.querySelector('#donation-step-1');
  const step2 = form.querySelector('#donation-step-2');
  const step3 = form.querySelector('#donation-step-3');

  // Navigation buttons
  const btnGoToStep2 = form.querySelector('#btn-go-to-step-2');
  const btnBackToStep1 = form.querySelector('#btn-back-to-step-1');
  const btnGoToStep3 = form.querySelector('#btn-go-to-step-3');
  const btnBackToStep2 = form.querySelector('#btn-back-to-step-2');

  const finalSubmitBtn = form.querySelector('button[type="submit"]');

  let selectedAmount = '5000'; // Default preset value

  // Preset button clicking
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      customInput.value = ''; // clear custom amount
      selectedAmount = btn.getAttribute('data-amount');
      updateSubmitText();
    });
  });

  // Custom amount text typing
  customInput.addEventListener('input', () => {
    presetBtns.forEach(b => b.classList.remove('active'));
    selectedAmount = customInput.value;
    updateSubmitText();
  });

  // Toggle Single vs Monthly donation
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.getAttribute('data-type');
      if (typeInput) typeInput.value = type;
      updateSubmitText();
    });
  });

  function updateSubmitText() {
    const typeVal = typeInput ? typeInput.value : 'unique';
    const amountStr = selectedAmount ? (+selectedAmount).toLocaleString('fr-FR') + ' FCFA' : '';
    const frequencyStr = typeVal === 'mensuel' ? ' / mois' : '';
    
    // Update button in Step 2
    if (btnGoToStep3) {
      if (amountStr) {
        btnGoToStep3.textContent = `Faire un don de ${amountStr}${frequencyStr} →`;
      } else {
        btnGoToStep3.textContent = 'Continuer →';
      }
    }

    // Update instruction amount strings in Step 3
    const confirmAmountEls = form.querySelectorAll('.confirm-amount');
    confirmAmountEls.forEach(el => {
      el.textContent = amountStr || '0 FCFA';
    });

    // Update final submit button in Step 3
    if (finalSubmitBtn) {
      if (amountStr) {
        finalSubmitBtn.textContent = `Confirmer mon transfert de ${amountStr}${frequencyStr} →`;
      } else {
        finalSubmitBtn.textContent = 'Confirmer mon transfert →';
      }
    }
  }

  updateSubmitText();

  // Navigation Logic
  if (btnGoToStep2 && step1 && step2) {
    btnGoToStep2.addEventListener('click', () => {
      // Validate step 1 amount
      if (!selectedAmount || isNaN(selectedAmount) || +selectedAmount <= 0) {
        alert('Veuillez sélectionner ou saisir un montant de don valide.');
        return;
      }
      step1.classList.add('hidden');
      step2.classList.remove('hidden');
    });
  }

  if (btnBackToStep1 && step1 && step2) {
    btnBackToStep1.addEventListener('click', () => {
      step2.classList.add('hidden');
      step1.classList.remove('hidden');
    });
  }

  // Handle radio buttons select style
  const methodLabels = form.querySelectorAll('.payment-method-label');
  methodLabels.forEach(label => {
    const radio = label.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', () => {
        methodLabels.forEach(l => l.classList.remove('active'));
        if (radio.checked) {
          label.classList.add('active');
        }
      });
    }
  });

  if (btnGoToStep3 && step2 && step3) {
    btnGoToStep3.addEventListener('click', () => {
      // Validate coordinates in Step 2
      const nameInput = form.querySelector('#donation-name');
      const emailInput = form.querySelector('#donation-email');
      
      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        alert('Veuillez renseigner votre nom complet et votre adresse email.');
        return;
      }

      // Check selected payment method
      const selectedMethodRadio = form.querySelector('input[name="payment_method"]:checked');
      if (!selectedMethodRadio) {
        alert('Veuillez sélectionner un moyen de paiement.');
        return;
      }

      const method = selectedMethodRadio.value;

      // Show the matching instruction block in Step 3
      form.querySelectorAll('.payment-instruction').forEach(el => {
        el.classList.add('hidden');
      });

      const targetInstruction = form.querySelector(`#instruction-${method}`);
      if (targetInstruction) {
        targetInstruction.classList.remove('hidden');
      }

      step2.classList.add('hidden');
      step3.classList.remove('hidden');
    });
  }

  if (btnBackToStep2 && step2 && step3) {
    btnBackToStep2.addEventListener('click', () => {
      step3.classList.add('hidden');
      step2.classList.remove('hidden');
    });
  }

  // Check URL amount parameter on load
  const urlParams = new URLSearchParams(window.location.search);
  const amountParam = urlParams.get('amount');
  if (amountParam) {
    const matchedPreset = Array.from(presetBtns).find(b => b.getAttribute('data-amount') === amountParam);
    if (matchedPreset) {
      presetBtns.forEach(b => b.classList.remove('active'));
      matchedPreset.classList.add('active');
      selectedAmount = amountParam;
    } else {
      presetBtns.forEach(b => b.classList.remove('active'));
      customInput.value = amountParam;
      selectedAmount = amountParam;
    }
    updateSubmitText();
  }
}

// Feedback alerts on forms submission
function initForms() {
  const forms = document.querySelectorAll('.interactive-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Disable form buttons to prevent double click
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="ph ph-circle-notch animate-spin"></i> Traitement...';
      }

      // Simulate network request
      setTimeout(() => {
        // Reset form
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        // Handle preset highlight resets for donation form
        const presetBtns = form.querySelectorAll('.donation-preset-btn');
        presetBtns.forEach((b, idx) => {
          b.classList.remove('active');
          if (idx === 2) b.classList.add('active'); // reset to default 5000 FCFA
        });

        // Trigger custom donation form update if it exists
        const customInput = document.getElementById('donation-custom');
        if (customInput) {
          const typeInput = document.getElementById('donation-type');
          if (typeInput) typeInput.value = 'unique';
          const toggleBtns = form.querySelectorAll('.donation-toggle-btn');
          toggleBtns.forEach((b, idx) => {
            b.classList.remove('active');
            if (idx === 0) b.classList.add('active');
          });
          const submitBtnDonation = form.querySelector('button[type="submit"]');
          if (submitBtnDonation) submitBtnDonation.textContent = 'Confirmer mon transfert de 5 000 FCFA →';
        }

        // Reset multi-step form to step 1
        const step1 = form.querySelector('#donation-step-1');
        const step2 = form.querySelector('#donation-step-2');
        const step3 = form.querySelector('#donation-step-3');
        if (step1 && step2 && step3) {
          step1.classList.remove('hidden');
          step2.classList.add('hidden');
          step3.classList.add('hidden');
          
          // Reset payment method selection styling
          const methodLabels = form.querySelectorAll('.payment-method-label');
          methodLabels.forEach((l, idx) => {
            l.classList.remove('active');
            if (idx === 0) {
              l.classList.add('active');
              const radio = l.querySelector('input[type="radio"]');
              if (radio) radio.checked = true;
            }
          });
        }

        // Show Toast notification
        showToast('Votre demande a bien été envoyée. Merci pour votre engagement !');
      }, 1500);
    });
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `<i class="ph ph-check-circle" style="font-size: 20px;"></i> <span>${message}</span>`;
  
  // Show toast
  setTimeout(() => toast.classList.add('show'), 100);
  
  // Trigger celebratory confetti on donation/volunteer success!
  if (message.includes('Merci') || message.includes('don') || message.includes('engagement')) {
    triggerConfetti(0, 0, true);
  }
  
  // Hide toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Hero Animations on Load
function initHeroAnimations() {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Slide up and fade in header logo & links on load
  gsap.from(".logo, .nav-links li, .nav-cta", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: "power2.out"
  });

  // Hero content stagger reveal
  tl.from(".hero-title", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.3
  })
  .from(".hero-content p", {
    y: 30,
    opacity: 0,
    duration: 1
  }, "-=0.8")
  .from(".hero-ctas", {
    y: 20,
    opacity: 0,
    duration: 0.8
  }, "-=0.6");

  // Underline path draw-in animation
  const underlinePath = document.querySelector('.hero-title .underline-svg path');
  if (underlinePath) {
    const length = underlinePath.getTotalLength();
    gsap.fromTo(underlinePath, {
      strokeDasharray: length,
      strokeDashoffset: length
    }, {
      strokeDashoffset: 0,
      duration: 1.2,
      delay: 1.2,
      ease: "power2.inOut"
    });
  }

  // Floating micro-animations for doodles
  gsap.to(".doodle-loop", {
    y: "-=15",
    rotation: "+=8",
    duration: 4.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });
  gsap.to(".doodle-sparkle", {
    y: "+=12",
    rotation: "-=10",
    duration: 3.8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });
}

// Sub-Hero animations on subpages
function initSubHeroAnimations() {
  const subHero = document.querySelector('.sub-hero');
  if (!subHero) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(".sub-hero h1", {
    y: 40,
    opacity: 0,
    duration: 1
  })
  .from(".sub-hero p", {
    y: 20,
    opacity: 0,
    duration: 0.8
  }, "-=0.6");
}

// Scroll Trigger reveal animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    // Avoid double animating elements inside sections with custom animations
    if (el.closest('.grid-3')) return;
    
    gsap.fromTo(el, {
      opacity: 0,
      y: 35
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none"
      }
    });
  });

  // Program cards grid stagger
  const programCards = document.querySelectorAll('.program-framer-card');
  if (programCards.length > 0) {
    gsap.from(programCards, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: programCards[0].closest('.grid-3'),
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  // Way to help cards grid stagger
  const wayCards = document.querySelectorAll('.way-framer-card');
  if (wayCards.length > 0) {
    gsap.from(wayCards, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wayCards[0].closest('.grid-3'),
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  // Testimonial cards grid stagger
  const testimonialCards = document.querySelectorAll('.testimonial-framer-card');
  if (testimonialCards.length > 0) {
    gsap.from(testimonialCards, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: testimonialCards[0].closest('.grid-3'),
        start: "top 82%",
        toggleActions: "play none none none"
      }
    });
  }

  // Draw-in for all SVG underlines in page content on scroll
  document.querySelectorAll('.hero-underlined').forEach(container => {
    // Avoid double animating the main hero title
    if (container.closest('.hero')) return;

    const path = container.querySelector('.underline-svg path');
    if (!path) return;

    const length = path.getTotalLength();
    gsap.fromTo(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    }, {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });

  // Animated progress bars inside program cards
  document.querySelectorAll('.program-framer-bar-fill').forEach(bar => {
    const targetWidth = bar.style.width || '100%';
    bar.style.width = '0%';

    gsap.to(bar, {
      width: targetWidth,
      duration: 1.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });
  });
}

// Split donation banner redirection helper
function initSplitBannerForm() {
  const form = document.getElementById('banner-donation-form');
  const btn = document.getElementById('banner-donate-btn');
  const input = document.getElementById('banner-amount');
  
  if (!input) return;

  const handleDonate = (e) => {
    if (e) e.preventDefault();
    const val = input.value.trim();
    if (val && !isNaN(val) && val > 0) {
      window.location.href = `participer.html?tab=don&amount=${val}`;
    } else {
      window.location.href = `participer.html?tab=don`;
    }
  };

  if (form) form.addEventListener('submit', handleDonate);
  if (btn) btn.addEventListener('click', handleDonate);
}

// Donation Button click feedback & Confetti Animations
function initDonationEffects() {
  const donationSelectors = [
    'a[href="participer.html"]',
    'a[href*="participer.html?tab=don"]',
    '.footer-cta-btn',
    '#banner-donate-btn',
    'button[type="submit"]'
  ];

  document.addEventListener('click', (e) => {
    // Check if clicked element or its parent matches our selectors
    const btn = e.target.closest(donationSelectors.join(', '));
    if (!btn) return;

    // Trigger local particle burst at click position
    const x = e.clientX;
    const y = e.clientY;
    triggerConfetti(x, y, false); // Local click burst

    // Button squish micro-animation using GSAP
    gsap.to(btn, {
      scale: 0.96,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    });

    // If it's a link, delay navigation slightly to let the animation start
    if (btn.tagName === 'A' && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      const href = btn.getAttribute('href');
      setTimeout(() => {
        window.location.href = href;
      }, 250);
    }
  });

  // Intercept the main donation form submission for a local burst on submit click
  const donationForm = document.getElementById('donation-form');
  if (donationForm) {
    donationForm.addEventListener('submit', () => {
      const submitBtn = donationForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const rect = submitBtn.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        triggerConfetti(x, y, false);
      }
    });
  }
}

// Custom lightweight DOM/GSAP physics confetti particles system
function triggerConfetti(clientX, clientY, isMassive = false) {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '99999';
  document.body.appendChild(container);

  const colors = ['#ca1e73', '#cef38b', '#5e8900', '#FDDB22', '#7C4A2D'];
  const shapes = ['circle', 'square', 'triangle', 'heart'];

  if (isMassive) {
    // Cannon from bottom left (shoots up and right)
    createConfettiCannon(0, window.innerHeight, 50, container, colors, shapes);
    // Cannon from bottom right (shoots up and left)
    createConfettiCannon(window.innerWidth, window.innerHeight, 130, container, colors, shapes);
  } else {
    // Simple point explosion around the click coordinate
    for (let i = 0; i < 30; i++) {
      const angle = gsap.utils.random(0, Math.PI * 2);
      createConfettiParticle(clientX, clientY, angle, container, colors, shapes, false);
    }
  }

  setTimeout(() => {
    container.remove();
  }, 4000);
}

function createConfettiCannon(startX, startY, centerAngleDeg, container, colors, shapes) {
  for (let i = 0; i < 50; i++) {
    const angleRad = (centerAngleDeg + gsap.utils.random(-25, 25)) * Math.PI / 180;
    createConfettiParticle(startX, startY, angleRad, container, colors, shapes, true);
  }
}

function createConfettiParticle(startX, startY, angleRad, container, colors, shapes, isCannon) {
  const particle = document.createElement('div');
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = gsap.utils.random(8, 16);
  
  particle.style.position = 'absolute';
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${startX}px`;
  particle.style.top = `${startY}px`;
  particle.style.pointerEvents = 'none';
  
  if (shape === 'circle') {
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = color;
  } else if (shape === 'square') {
    particle.style.backgroundColor = color;
  } else if (shape === 'triangle') {
    particle.style.width = '0';
    particle.style.height = '0';
    particle.style.borderLeft = `${size / 2}px solid transparent`;
    particle.style.borderRight = `${size / 2}px solid transparent`;
    particle.style.borderBottom = `${size}px solid ${color}`;
  } else if (shape === 'heart') {
    particle.innerHTML = `<svg viewBox="0 0 24 24" fill="${color}" width="100%" height="100%"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
  }
  
  container.appendChild(particle);
  
  const velocity = isCannon ? gsap.utils.random(350, 750) : gsap.utils.random(80, 250);
  const destX = Math.cos(angleRad) * velocity;
  const destY = Math.sin(angleRad) * (isCannon ? -velocity : velocity) - (isCannon ? 100 : 50); // always push slightly upwards
  
  // Custom gravity simulation with GSAP
  gsap.to(particle, {
    x: `+=${destX}`,
    y: `+=${destY}`,
    rotation: gsap.utils.random(-720, 720),
    scale: gsap.utils.random(0.3, 1),
    duration: isCannon ? gsap.utils.random(1.6, 2.8) : gsap.utils.random(0.8, 1.6),
    ease: "power2.out"
  });
  
  // Apply gravity effect pulling particles down
  gsap.to(particle, {
    y: `+=${isCannon ? gsap.utils.random(400, 700) : gsap.utils.random(120, 220)}`,
    opacity: 0,
    duration: isCannon ? gsap.utils.random(1.6, 2.8) : gsap.utils.random(0.8, 1.6),
    ease: "sine.in",
    delay: isCannon ? 0.35 : 0.15,
    onComplete: () => {
      particle.remove();
    }
  });
}
