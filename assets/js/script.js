/* ======================================================
   Micro Offer Engine – Working Base Logic
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* DATA */
  const expertiseOptions = [
    "Digital Marketing",
    "Affiliate Marketing",
    "SEO",
    "Email Marketing",
    "Social Media",
    "AI Tools",
    "Automation",
    "SaaS",
    "Online Business",
    "Custom"
  ];

  const customerOptions = [
    "Complete Beginners",
    "Side Hustlers",
    "Affiliate Marketers",
    "Entrepreneurs",
    "Small Business Owners",
    "Content Creators",
    "SaaS Founders"
  ];

  const formatOptions = [
    "Checklist",
    "Step-by-Step Guide",
    "Template Pack",
    "Prompt Pack",
    "Swipe File",
    "Mini Playbook",
    "Toolkit"
  ];

  /* ELEMENTS */
  const form = document.getElementById("microOfferForm");
  const expertise = document.getElementById("expertise");
  const customer = document.getElementById("customer");
  const problem = document.getElementById("problem");
  const format = document.getElementById("format");

  /* HELPERS */
  function populate(select, items, placeholder) {
    select.innerHTML = `<option value="">${placeholder}</option>`;
    items.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item;
      opt.textContent = item;
      select.appendChild(opt);
    });
  }

  /* INIT */
  populate(expertise, expertiseOptions, "Select expertise...");
  populate(customer, customerOptions, "Select customer...");
  populate(format, formatOptions, "Select format...");

  /* SUBMIT */
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
      format: format.value
    };

    console.log("✅ Micro Offer Captured:", payload);

    alert(
      "Micro Offer captured successfully.\n\n" +
      "Next step: SignalForge scoring → AI build."
    );

    // READY FOR:
    // - SignalForge autofill
    // - Supabase save
    // - AI generation
  });

});
      
