/** Variable to rotate the gradient. */
let currentIndex = 1;
/**
 * Get the URL of a random gradient by rotating over a fixed set of gradients.
 * @returns the URL of a random gradient.
 */
export function getRandomGradientImage() {
    const gradientURL = `/images/gradients_background/gradient${currentIndex}.png`;
    currentIndex++;
    if (currentIndex > 4) currentIndex = 1;

    return gradientURL;
}
