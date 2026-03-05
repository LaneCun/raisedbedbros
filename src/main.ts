import './style.css'

interface SiteConfig {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  headline: string;
  serviceArea: string;
}

const site: SiteConfig = {
  businessName: "The Raised Bed Bros",
  tagline: "From Build to Bloom 🌱",
  phone: "931-477-6544",
  email: "graysonvincent4@gmail.com",
  headline: "Premium 8x4 Cedar Raised Bed Installation",
  serviceArea: "Serving Spring Hill & Surrounding Areas",
};

function initSite() {
  const phone = site.phone || "";
  const email = site.email || "";
  const numericPhone = phone.replace(/\D/g, '');
  const callHref = phone ? `tel:${numericPhone}` : "#";
  const textHref = phone ? `sms:${numericPhone}?body=Hi! I'm interested in a quote for a raised garden bed.` : "#";
  const emailHref = email ? `mailto:${email}?subject=Quote Request for Raised Garden Bed` : "#";

  const setText = (id: string, val: string) => { 
    const el = document.getElementById(id); 
    if (el) el.textContent = val; 
  };

  const setHref = (id: string, href: string, label?: string) => {
    const el = document.getElementById(id) as HTMLAnchorElement;
    if (!el) return;
    el.href = href;
    if (label) el.textContent = label;
  };

  // Populate basic text
  setText("tagline", site.tagline);
  setText("headline", site.headline || site.businessName);
  setText("serviceAreaTopHero", site.serviceArea);
  setText("serviceAreaBottom", site.serviceArea);
  setText("bizNameTop", site.businessName);
  setText("serviceAreaTop", site.serviceArea);
  setText("bizNameFoot", site.businessName);
  setText("phoneFoot", phone);
  setText("emailFoot", email);
  setText("phoneSide", phone);
  setText("year", new Date().getFullYear().toString());

  // Set CTAs
  setHref("callBtn", callHref, phone ? `Call ${phone}` : "Call Now");
  setHref("callBtnTop", callHref, "Call Now");
  setHref("callBtnSide", callHref);

  setHref("textBtn", textHref, "Text for Quote");
  setHref("textBtnTop", textHref);
  setHref("textBtnSide", textHref);

  setHref("emailBtn", emailHref, "Email for Quote");
  setHref("emailBtnSide", emailHref);

  // New Story Phone Link
  setHref("storyPhoneLink", callHref, phone);

  console.log(`${site.businessName} site is running!`);
}

document.addEventListener('DOMContentLoaded', initSite);

// Fallback if DOMContentLoaded already fired
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initSite();
}
