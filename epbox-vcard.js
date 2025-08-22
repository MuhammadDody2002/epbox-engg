// EPBOX ENGINEERING vCard Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive elements
    initializeVCard();
    
    // Add smooth scrolling for anchor links
    addSmoothScrolling();
    
    // Add copy to clipboard functionality
    addCopyToClipboard();
    
    // Add tooltip functionality
    addTooltips();
    
    // Add parallax effect
    addParallaxEffect();
    
    // Add click animations
    addClickAnimations();

    // Initialize hint dismiss
    const hint = document.querySelector('.contact-hint');
    if (hint) {
        const btn = hint.querySelector('.hint-close');
        if (btn) btn.addEventListener('click', () => hint.remove());
        // auto hide after 2s
        setTimeout(() => { if (document.body.contains(hint)) hint.remove(); }, 2000);
    }
});

function initializeVCard() {
    const vcard = document.querySelector('.vcard');
    const contactItems = document.querySelectorAll('.contact-item');
    const logoCircle = document.querySelector('.logo-circle');
    const isoBadge = document.querySelector('.iso-badge');
    
    // Add entrance animation delay for elements
    setTimeout(() => {
        vcard.style.opacity = '1';
        vcard.style.transform = 'translateY(0) scale(1)';
    }, 100);
    
    // Add hover sound effect (optional)
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            playHoverSound();
        });
    });
    
    // Add logo circle interaction
    if (logoCircle) {
        logoCircle.addEventListener('click', function() {
            showCompanyInfo();
        });
    }
    
    // Add ISO badge interaction
    if (isoBadge) {
        isoBadge.addEventListener('click', function() {
            showISODetails();
        });
    }
}

function addSmoothScrolling() {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function addCopyToClipboard() {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // For phone numbers and email, show copy feedback
            if (this.href.startsWith('tel:') || this.href.startsWith('mailto:')) {
                showCopyFeedback(this.textContent);
            } else if (this.href.startsWith('http')) {
                // Try to open in a new tab; if blocked, open in same tab
                const win = window.open(this.href, '_blank');
                if (!win || win.closed || typeof win.closed === 'undefined') {
                    window.location.href = this.href;
                }
                e.preventDefault();
            }
        });
    });
    
    // Add right-click context menu for copy
    contactLinks.forEach(link => {
        link.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            copyToClipboard(this.textContent);
            showCopyFeedback(this.textContent);
        });
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied to clipboard:', text);
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        console.log('Copied to clipboard:', text);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
    
    document.body.removeChild(textArea);
}

function showCopyFeedback(text) {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.textContent = `Copied: ${text}`;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #1a365d;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(feedback);
    
    // Animate in
    setTimeout(() => {
        feedback.style.opacity = '1';
        feedback.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}

function addTooltips() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        const link = item.querySelector('.contact-link');
        if (link) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            
            if (link.href.startsWith('tel:')) {
                tooltip.textContent = 'Click to call';
            } else if (item.classList.contains('phone') && link.href.includes('wa.me')) {
                tooltip.textContent = 'Click to WhatsApp';
            } else if (link.href.startsWith('mailto:')) {
                tooltip.textContent = 'Click to email';
            } else if (item.classList.contains('address') || link.href.includes('maps.app.goo.gl') || link.href.includes('google.com/maps')) {
                tooltip.textContent = 'Click to open maps';
            } else if (item.classList.contains('website')) {
                tooltip.textContent = 'Click to open website';
            }
            
            tooltip.style.cssText = `
                position: absolute;
                background: #1a365d;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 12px;
                white-space: nowrap;
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s ease;
                z-index: 1000;
                transform: translateY(10px);
            `;
            
            item.style.position = 'relative';
            item.appendChild(tooltip);
            
            item.addEventListener('mouseenter', function() {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
            });
            
            item.addEventListener('mouseleave', function() {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(10px)';
            });
        }
    });
}

function addParallaxEffect() {
    const vcard = document.querySelector('.vcard');
    const patternBg = document.querySelector('.pattern-bg');
    
    if (vcard && patternBg) {
        vcard.addEventListener('mousemove', function(e) {
            const rect = vcard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / centerX * 10;
            const moveY = (y - centerY) / centerY * 10;
            
            patternBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        vcard.addEventListener('mouseleave', function() {
            patternBg.style.transform = 'translate(0, 0)';
        });
    }
}

function addClickAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(26, 54, 93, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                this.removeChild(ripple);
            }, 600);
        });
    });
    
    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function showCompanyInfo() {
    const modal = createModal(
        'EPBOX ENGINEERING',
        `
        <div style="text-align: center; padding: 20px;">
            <h3 style="color: #1a365d; margin-bottom: 15px;">About EPBOX ENGINEERING</h3>
            <p style="line-height: 1.6; color: #666;">
                EPBOX ENGINEERING is a leading engineering company specializing in innovative solutions 
                and cutting-edge technology. With ISO 9001 certification, we ensure the highest quality 
                standards in all our projects.
            </p>
            <div style="margin-top: 20px;">
                <strong style="color: #1a365d;">Our Services:</strong>
                <ul style="text-align: left; margin-top: 10px; color: #666;">
                    <li>Engineering Consulting</li>
                    <li>Project Management</li>
                    <li>Technical Solutions</li>
                    <li>Quality Assurance</li>
                </ul>
            </div>
        </div>
        `
    );
    showModal(modal);
}

function showISODetails() {
    const modal = createModal(
        'ISO 9001 Certification',
        `
        <div style="text-align: center; padding: 20px;">
            <h3 style="color: #1a365d; margin-bottom: 15px;">ISO 9001:2015 Quality Management</h3>
            <p style="line-height: 1.6; color: #666;">
                EPBOX ENGINEERING is certified to ISO 9001:2015 standards, demonstrating our commitment 
                to quality management and continuous improvement in all our processes and services.
            </p>
            <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <strong style="color: #1a365d;">Certification Benefits:</strong>
                <ul style="text-align: left; margin-top: 10px; color: #666;">
                    <li>Consistent Quality Standards</li>
                    <li>Customer Satisfaction Focus</li>
                    <li>Continuous Process Improvement</li>
                    <li>International Recognition</li>
                </ul>
            </div>
        </div>
        `
    );
    showModal(modal);
}

function createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: none;
        }
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
        }
        .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.9);
            background: white;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        .modal-header h2 {
            color: #1a365d;
            margin: 0;
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        .modal-close:hover {
            background: #f0f0f0;
            color: #333;
        }
        .modal-body {
            padding: 20px;
        }
    `;
    document.head.appendChild(style);
    
    return modal;
}

function showModal(modal) {
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // Animate in
    setTimeout(() => {
        const content = modal.querySelector('.modal-content');
        content.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
    
    // Close functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    function closeModal() {
        const content = modal.querySelector('.modal-content');
        content.style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function playHoverSound() {
    // Optional: Add hover sound effect
    // This is a placeholder for future sound implementation
    console.log('Hover sound effect');
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const contactItems = document.querySelectorAll('.contact-item');
    const currentIndex = Array.from(contactItems).findIndex(item => 
        item === document.activeElement || item.contains(document.activeElement)
    );
    
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % contactItems.length;
            contactItems[nextIndex].focus();
            break;
        case 'ArrowUp':
            e.preventDefault();
            const prevIndex = currentIndex <= 0 ? contactItems.length - 1 : currentIndex - 1;
            contactItems[prevIndex].focus();
            break;
        case 'Enter':
        case ' ':
            if (document.activeElement.classList.contains('contact-item')) {
                e.preventDefault();
                const link = document.activeElement.querySelector('.contact-link');
                if (link) {
                    link.click();
                }
            }
            break;
        case 'ArrowRight':
            // Open website when focused on website row
            const focused = document.activeElement;
            if (focused && focused.classList && focused.classList.contains('website')) {
                const link = focused.querySelector('.contact-link');
                if (link) {
                    const win = window.open(link.href, '_blank');
                    if (!win || win.closed || typeof win.closed === 'undefined') {
                        window.location.href = link.href;
                    }
                }
            }
            break;
    }
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function() {
    // Add touch feedback
}, { passive: true });

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll-based animations
const debouncedScroll = debounce(function() {
    const vcard = document.querySelector('.vcard');
    if (vcard) {
        const rect = vcard.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            vcard.style.opacity = '1';
            vcard.style.transform = 'translateY(0) scale(1)';
        }
    }
}, 100);

window.addEventListener('scroll', debouncedScroll);

// Initialize on load
window.addEventListener('load', function() {
    // Ensure all animations are properly initialized
    const vcard = document.querySelector('.vcard');
    if (vcard) {
        vcard.style.opacity = '1';
    }
});
