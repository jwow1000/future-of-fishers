export class waveAnimate {
  constructor(element, duration, loop = true, scrollRange = null, phase = 0,) {
    this.element = element;
    this.duration = duration;
    this.loop = loop;
    this.scrollRange = scrollRange ?? (element.scrollHeight - element.clientHeight);
    this.waveform = t => Math.sin(t * 2 * Math.PI);
    this.currentScroll = 0;
    this.phaseOffset = phase;
    this.rafId = null;

    // Set currentScroll based on initial scroll
    this.currentScroll = element.scrollTop;

    // Optional: track manual scroll
    this.element.addEventListener('scroll', (e) => {
      this.currentScroll = this.element.scrollTop;
    });
  }

  animate() {
    const startTime = performance.now();

    const animateFrame = (time) => {
      const elapsed = time - startTime;
      let phasor = ((elapsed / this.duration) + this.phaseOffset) % 1;

      if (phasor > 1 && !this.loop) {
        this.isAnimating = false;
        return;
      }
      

      const shaped = this.waveform(phasor);
      const scrollTarget = (shaped * this.scrollRange);

      // Use scrollTop for pixel precision (recommended for animation)
      this.element.style.transform = `translateY(${scrollTarget}px)`;

      this.rafId = requestAnimationFrame(animateFrame);
    };

    this.rafId = requestAnimationFrame(animateFrame);
  }

  stop() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}
