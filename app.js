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
  const submitBtn = form.querySelector('button[type="submit"]');

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
    
    if (submitBtn) {
      if (amountStr) {
        submitBtn.textContent = `Faire un don de ${amountStr}${frequencyStr} →`;
      } else {
        submitBtn.textContent = 'Faire un don →';
      }
    }
  }

  updateSubmitText();

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
          if (submitBtnDonation) submitBtnDonation.textContent = 'Faire un don de 5 000 FCFA →';
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
