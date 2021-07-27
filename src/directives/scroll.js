const observer = new IntersectionObserver(
    (arr, obs) => {
        arr.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation');
                obs.unobserve(entry.target);
            }
        });
    }
);

export default {
    mounted(el) {
        el.classList.add('before-animation');
        observer.observe(el);
    }
}