// ========================================
// JOURNA - Utility Functions
// Helper functions used across the application
// ========================================

/**
 * Show a notification message to the user
 * @param {string} message - Message to display
 * @param {string} type - Type of notification (success, error, warning, info)
 * @param {number} duration - Duration in milliseconds
 */
export const showNotification = (message, type = 'info', duration = 3000) => {
    // Check if notification container exists, create if not
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
        max-width: 350px;
        min-width: 250px;
        position: relative;
    `;

    // Set colors based on type
    const colors = {
        success: { bg: '#28A745', text: '#FFFFFF' },
        error: { bg: '#DC3545', text: '#FFFFFF' },
        warning: { bg: '#FFC107', text: '#212529' },
        info: { bg: '#17A2B8', text: '#FFFFFF' }
    };

    notification.style.backgroundColor = colors[type].bg;
    notification.style.color = colors[type].text;
    
    // Add message text
    const textSpan = document.createElement('span');
    textSpan.textContent = message;
    notification.appendChild(textSpan);

    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 20px;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.7;
    `;
    closeBtn.onclick = () => notification.remove();
    notification.appendChild(closeBtn);

    // Add to container
    container.appendChild(notification);

    // Auto remove after duration
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);
};

/**
 * Format a date to readable string
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date
 */
export const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-GH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

/**
 * Format time ago
 * @param {string|Date} date - Date to format
 * @returns {string} Time ago string
 */
export const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' years ago';
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' months ago';
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' days ago';
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' hours ago';
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';
    
    return Math.floor(seconds) + ' seconds ago';
};

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

/**
 * Validate phone number (Ghana format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid
 */
export const validatePhone = (phone) => {
    const re = /^(0|233)?[2-9][0-9]{8}$/;
    return re.test(phone.replace(/\s/g, ''));
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 100) => {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
};

/**
 * Capitalize first letter of each word
 * @param {string} text - Text to capitalize
 * @returns {string} Capitalized text
 */
export const capitalizeWords = (text) => {
    if (!text) return '';
    return text.replace(/\b\w/g, char => char.toUpperCase());
};

/**
 * Get random item from array
 * @param {Array} arr - Array to pick from
 * @returns {*} Random item
 */
export const randomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

/**
 * Save data to localStorage with expiration
 * @param {string} key - Storage key
 * @param {any} data - Data to store
 * @param {number} ttl - Time to live in seconds
 */
export const setStorageWithExpiry = (key, data, ttl = 3600) => {
    const item = {
        value: data,
        expiry: Date.now() + (ttl * 1000)
    };
    localStorage.setItem(key, JSON.stringify(item));
};

/**
 * Get data from localStorage with expiration check
 * @param {string} key - Storage key
 * @returns {any|null} Stored data or null if expired
 */
export const getStorageWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    try {
        const item = JSON.parse(itemStr);
        if (Date.now() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    } catch {
        return null;
    }
};

/**
 * Handle errors and show user-friendly message
 * @param {Error} error - Error object
 * @returns {string} User-friendly error message
 */
export const handleError = (error) => {
    console.error('Error:', error);
    
    if (error.message) {
        if (error.message.includes('Network')) {
            return 'Network error. Please check your connection.';
        }
        return error.message;
    }
    
    return 'An unexpected error occurred. Please try again.';
};

/**
 * Show loading spinner on button
 * @param {HTMLButtonElement} button - Button element
 * @param {boolean} isLoading - Loading state
 * @param {string} originalText - Original button text (optional)
 */
export const setButtonLoading = (button, isLoading, originalText = null) => {
    if (!button) return;
    
    if (isLoading) {
        button.dataset.originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        button.disabled = true;
    } else {
        button.innerHTML = button.dataset.originalText || (originalText || button.innerHTML);
        button.disabled = false;
    }
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        showNotification('Copied to clipboard!', 'success');
        return true;
    } catch (error) {
        console.error('Failed to copy:', error);
        showNotification('Failed to copy', 'error');
        return false;
    }
};

/**
 * Scroll to element smoothly
 * @param {string|HTMLElement} element - Element or selector
 * @param {number} offset - Offset from top
 */
export const scrollToElement = (element, offset = 80) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (el) {
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);