export const preloadImage = (src) => {
    const image = document.createElement('img');
    image.style.position = 'absolute';
    image.style.top = '-9999px';
    image.style.left = '-9999px';
    image.src = src;

    document.body.appendChild(image);

    return () => document.body.removeChild(image);
};