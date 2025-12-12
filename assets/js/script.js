/* ======================================================
   Micro Offer Engine
   SignalForge Integration – Phase 1
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     OPTIONS
  ========================= */

  const expertiseOptions = [
    "SaaS",
    "Affiliate Marketing",
    "SEO",
    "Email Marketing",
    "AI Tools",
    "Automation",
    "Online Business",
    "Content Creation",
    "Custom"
  ];

  const customerOptions = [
    "SaaS Founders",
    "Entrepreneurs",
    "Affiliate Marketers",
    "Small Business Owners",
    "Content Creators",
    "Agencies"
  ];

  const formatOptions = [
    "Toolkit",
    "Checklist",
    "Template Pack",
    "Prompt Pack",
    "Playbook",
    "Framework"
  ];

  /* =========================
     ELEMENTS
  ========================= */

  const form = document.getElementById("microOfferForm");
  const expertise = document.getElementById("expertise");
  const customer = document.getElementById("customer");
  const problem = document.getElementById("problem");
  const format = document.getElementById("format");
  const verdictInfo = document.getElementById("signalforgeInfo");

  /* =========================
     HELPERS
  ========================= */

  function populate(select, items, placeholder) {
    select.innerHTML = `<option value="">${placeholder}</option>`;
    items.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item;
      opt.textContent = item;
      select.appendChild(opt);
    });
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  /* =========================
     INIT DROPDOWNS
  ========================= */

  populate(expertise, expertiseOptions, "Select expertise...");
  populate(customer, customerOptions, "Select customer...");
  populate(format, formatOptions, "Select format...");

  /* =========================
     SIGNALFORGE AUTOFILL
  ========================= */

  const sfData = {
    expertise: getParam("expertise"),
    customer: getParam("customer"),
    problem: getParam("problem"),
    format: getParam("format"),
    verdict: getParam("verdict"),
    score: getParam("score")
  };

  if (sfData.expertise) expertise.value = sfData.expertise;
  if (sfData.customer) customer.value = sfData.customer;
  if (sfData.problem) problem.value = decodeURIComponent(sfData.problem);
  if (sfData.format) format.value = sfData.format;

  if (sfData.verdict && sfData.score) {
    verdictInfo.textContent =
      `SignalForge Verdict: ${sfData.verdict} • Score: ${sfData.score}`;
  }

  /* =========================
     SUBMIT
  ========================= */

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      !expertise.value ||
      !customer.value ||
      !problem.value.trim() ||
      !format.value
    ) {
      alert("Please complete all fields before generating your offer.");
      return;
    }

    const payload = {
      expertise: expertise.value,
      customer: customer.value,
      problem: problem.value.trim(),
      format: format.value,
      source: "SignalForge",
      verdict: sfData.verdict || null,
      score: sfData.score || null,
      createdAt: new Date().toISOString()
    };

    console.log("🚀 Micro Offer Build Payload:", payload);

    alert(
      "Offer data locked in.\n\n" +
      "Next step: AI generation pipeline."
    );

    // NEXT PHASE:
    // - Save to Supabase
    // - Trigger AI generator
    // - Gate by plan
  });

});
       
