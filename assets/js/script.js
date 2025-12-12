// script.js - Functional logic for Micro Offer Engine

$(document).ready(function() {
    const $form = $('#offerForm');
    const $generateBtn = $('#generateBtn');
    const $resultsSection = $('#resultsSection');
    const $generateNewBtn = $('#generateNewBtn');
    const $formPanel = $form.closest('.nextwave-glass');

    // Function to handle form submission
    $form.on('submit', function(e) {
        e.preventDefault();
        
        // Basic Bootstrap form validation check
        if (!this.checkValidity()) {
            e.stopPropagation();
            $form.addClass('was-validated');
            return;
        }

        // 1. Show Loading State
        $generateBtn.html('<i class="fa-solid fa-spinner fa-spin me-2"></i> Generating Offer...');
        $generateBtn.prop('disabled', true);
        $formPanel.css('opacity', '0.5');

        // 2. Simulate AI generation process (e.g., an API call)
        setTimeout(function() {
            // 3. Hide form and show results
            $formPanel.hide();
            $resultsSection.show();
            
            // 4. Reset button state
            $generateBtn.html('<i class="fa-solid fa-wand-magic-sparkles me-2"></i> Generate Offer Package');
            $generateBtn.prop('disabled', false);
            $formPanel.css('opacity', '1');

            // Optional: You would insert the actual generated content here
            // For now, we use the placeholder content already in index.html
            
        }, 3000); // 3 second delay to simulate processing
    });

    // Function to handle "Generate New Offer" button
    $generateNewBtn.on('click', function() {
        // 1. Hide results and show form
        $resultsSection.hide();
        $formPanel.show();
        
        // 2. Reset form
        $form[0].reset();
        $form.removeClass('was-validated');
    });

    // Simple handler for the Download All Files button
    $('#downloadAllBtn').on('click', function() {
        alert('Download functionality would be handled here (e.g., zipping and serving files).');
    });
});
