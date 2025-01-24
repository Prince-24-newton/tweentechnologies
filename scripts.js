// Ensure particles.js is initialized after the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing particles.js');

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 150, // More particles for higher movement
                density: {
                    enable: true,
                    value_area: 800 // Particle density in canvas
                }
            },
            color: {
                value: '#ffffff' // Particle color
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000' // Border color of particles (not visible with width 0)
                },
                polygon: {
                    nb_sides: 5 // Default shape polygon sides
                }
            },
            opacity: {
                value: 0.5, // Default opacity
                random: true, // Randomize opacity between particles
                anim: {
                    enable: true,
                    speed: 1, // Speed of opacity change
                    opacity_min: 0.1, // Minimum opacity for animation
                    sync: false // Do not synchronize opacity changes
                }
            },
            size: {
                value: 4, // Default size of particles
                random: true, // Randomize sizes between particles
                anim: {
                    enable: true,
                    speed: 20, // Speed of size change animation
                    size_min: 0.1, // Minimum size for animation
                    sync: false // Do not synchronize size changes
                }
            },
            line_linked: {
                enable: true, // Enable lines between particles
                distance: 150, // Maximum distance for lines between particles
                color: '#ffffff', // Line color
                opacity: 0.4, // Line opacity
                width: 1 // Line width
            },
            move: {
                enable: true, // Enable particle movement
                speed: 4, // Speed of particle movement
                direction: 'none', // Random directions
                random: true, // Randomize particle movement
                straight: false, // Do not move in straight lines
                out_mode: 'out', // Allow particles to exit canvas
                bounce: false, // Disable bouncing off canvas edges
                attract: {
                    enable: true, // Enable attraction between particles
                    rotateX: 3000, // Attraction strength on X-axis
                    rotateY: 3000 // Attraction strength on Y-axis
                }
            }
        },
        interactivity: {
            detect_on: 'canvas', // Enable interaction detection on the canvas
            events: {
                onhover: {
                    enable: true, // Enable hover effect
                    mode: 'bubble' // Bubble effect on hover
                },
                onclick: {
                    enable: true, // Enable click interaction
                    mode: 'repulse' // Repulse effect on click
                },
                resize: true // Enable canvas resizing on window resize
            },
            modes: {
                grab: {
                    distance: 200, // Maximum distance for grabbing particles
                    line_linked: {
                        opacity: 1 // Line opacity during grab
                    }
                },
                bubble: {
                    distance: 200, // Distance for bubble effect
                    size: 100, // Size of particles during bubble effect
                    duration: 2, // Duration of the bubble effect
                    opacity: 0.8, // Opacity during bubble effect
                    speed: 3 // Speed of bubble effect
                },
                repulse: {
                    distance: 150, // Repulse distance on click
                    duration: 0.4 // Duration of the repulse effect
                },
                push: {
                    particles_nb: 4 // Number of particles added on push
                },
                remove: {
                    particles_nb: 2 // Number of particles removed
                }
            }
        },
        retina_detect: true // Enable retina display detection
    });

    console.log('Particles.js configuration applied successfully');
});
// Show a prompt after the entire page (including images, styles, etc.) is fully loaded
window.onload = function() {
    // Display alert message after the page has fully loaded
    setTimeout(function() {
        alert("The site is currently undergoing rebranding. Some functionalities have been temporarily removed. Thank you for your patience.");
    }, 1000); // Adjust the delay as needed
};
