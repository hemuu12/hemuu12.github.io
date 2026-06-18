import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

export default class CursorTrail extends Component {
  componentDidMount() {
    if (typeof window === 'undefined') return;
    if ('ontouchstart' in window) return;

    this.dots = [];
    this.mouse = { x: -100, y: -100 };
    this.cursorDot = document.createElement('div');
    this.cursorDot.className = 'cursor-dot';
    document.body.appendChild(this.cursorDot);

    this.cursorRing = document.createElement('div');
    this.cursorRing.className = 'cursor-ring';
    document.body.appendChild(this.cursorRing);

    for (var i = 0; i < 8; i++) {
      var dot = document.createElement('div');
      dot.className = 'cursor-trail-dot';
      dot.style.opacity = (1 - i * 0.12).toString();
      dot.style.transform = 'scale(' + (1 - i * 0.08) + ')';
      document.body.appendChild(dot);
      this.dots.push({ el: dot, x: -100, y: -100 });
    }

    var self = this;
    this._onMove = function(e) {
      self.mouse.x = e.clientX;
      self.mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', this._onMove);

    this._onDown = function() { self.cursorRing.classList.add('cursor-click'); };
    this._onUp = function() { self.cursorRing.classList.remove('cursor-click'); };
    window.addEventListener('mousedown', this._onDown);
    window.addEventListener('mouseup', this._onUp);

    this._onHover = function(e) {
      var t = e.target;
      if (t.tagName === 'A' || t.tagName === 'BUTTON' || t.closest('a') || t.closest('button')) {
        self.cursorRing.classList.add('cursor-hover');
      } else {
        self.cursorRing.classList.remove('cursor-hover');
      }
    };
    window.addEventListener('mouseover', this._onHover);

    function animate() {
      self.cursorDot.style.left = self.mouse.x + 'px';
      self.cursorDot.style.top = self.mouse.y + 'px';
      self.cursorRing.style.left = self.mouse.x + 'px';
      self.cursorRing.style.top = self.mouse.y + 'px';

      var prevX = self.mouse.x;
      var prevY = self.mouse.y;
      for (var i = 0; i < self.dots.length; i++) {
        var dot = self.dots[i];
        dot.x += (prevX - dot.x) * 0.35;
        dot.y += (prevY - dot.y) * 0.35;
        dot.el.style.left = dot.x + 'px';
        dot.el.style.top = dot.y + 'px';
        prevX = dot.x;
        prevY = dot.y;
      }
      self._raf = requestAnimationFrame(animate);
    }
    this._raf = requestAnimationFrame(animate);

    document.body.classList.add('custom-cursor-active');
  }

  componentWillUnmount() {
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this._onMove) window.removeEventListener('mousemove', this._onMove);
    if (this._onDown) window.removeEventListener('mousedown', this._onDown);
    if (this._onUp) window.removeEventListener('mouseup', this._onUp);
    if (this._onHover) window.removeEventListener('mouseover', this._onHover);
    if (this.cursorDot && this.cursorDot.parentNode) this.cursorDot.parentNode.removeChild(this.cursorDot);
    if (this.cursorRing && this.cursorRing.parentNode) this.cursorRing.parentNode.removeChild(this.cursorRing);
    if (this.dots) {
      this.dots.forEach(function(d) {
        if (d.el.parentNode) d.el.parentNode.removeChild(d.el);
      });
    }
    document.body.classList.remove('custom-cursor-active');
  }

  render() {
    return null;
  }
}
