// ========================================
// JOURNA - Footer Loader
// Single source of truth for footer
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-about">
                            <h4>About JOURNA</h4>
                            <p>Helping Ghanaian students discover and plan their career paths through personalized guidance. Completely free and no account needed.</p>
                        </div>
                        <div class="footer-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li><i class="fas fa-envelope"></i>arthurtahil64@gmail.com</li>
                                <li><i class="fas fa-phone-alt"></i> +233-548-501-161</li>
                                <li><i class="fas fa-map-marker-alt"></i> Accra, Ghana</li>
                            </ul>
                            <div class="social-links mt-md">
                                <a href="#" style="color: white; margin-right: 12px;"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" style="color: white; margin-right: 12px;"><i class="fab fa-twitter"></i></a>
                                <a href="#" style="color: white; margin-right: 12px;"><i class="fab fa-instagram"></i></a>
                                <a href="#" style="color: white;"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2025 JOURNA. All rights reserved. Empowering Ghanaian students.</p>
                    </div>
                </div>
            </footer>
        `;
    }
});