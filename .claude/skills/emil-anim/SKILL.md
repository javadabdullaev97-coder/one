---
name: emil-anim
description: Tasteful, subtle web animations following Emil Kowalski's philosophy and animations.dev principles. Use this skill when adding motion to interfaces - hover states, page transitions, micro-interactions, loading states, or any UI animation. Produces refined, purposeful motion that enhances UX without becoming decorative noise.
---

# Tasteful Web Animation

## Core Philosophy

**Animation should be invisible.** When executed well, users don't consciously register the motion—they simply perceive the interface as responsive. The moment someone compliments an animation, you've likely exceeded the bounds of restraint.

> "The best animations are the ones you don't notice." — Emil Kowalski

## The 40 Rules of Tasteful Animation

### Timing & Duration
1. Micro-interactions: 150-250ms
2. Standard transitions: 200-350ms
3. Complex orchestrations: 400-600ms total
4. Exit animations faster than entrances
5. Stagger delays: 30-60ms between items
6. Never animate beyond 1 second total

### Easing & Physics
7. Ease-out for entrances
8. Ease-in for exits
9. Ease-in-out sparingly
10. Never linear for UI
11. Prefer spring physics
12. Match easing to physical metaphor
13. Consistent easing across related elements

### What to Animate
14. Animate transform and opacity only
15. Never animate width, height, top, left, margin, padding
16. Animate from definite to definite state
17. Scale from center for growth, origin for menus
18. Opacity changes should accompany movement
19. Keep movement distances small (4-16px micro, 20-40px larger)

### Interaction States
20. Hover: instant on, 150ms off
21. Active/pressed: scale(0.97-0.98)
22. Focus: don't animate focus ring itself
23. Disabled elements: no animation
24. Loading states: subtle pulse or skeleton shimmer

### Entrance & Exit Patterns
25. Fade + rise for content appearing
26. Fade + sink for content disappearing
27. Scale for emphasis, translate for navigation
28. Modals: scale(0.96) + opacity
29. Toasts: slide from edge + fade
30. Menus: transform-origin at trigger

### Orchestration & Staggering
31. Lead with most important element
32. Background animates first, foreground last
33. Stagger related items only
34. Keep stagger groups small (3-7 items)
35. Exit in reverse or all-at-once

### Performance & Accessibility
36. Always respect `prefers-reduced-motion`
37. Use `will-change` only when needed
38. Avoid animating during scroll
39. Test on low-end devices
40. Don't animate layout on mobile

## CSS Implementation Patterns

### Standard Transition
```css
.element {
  transition: transform 200ms ease-out, opacity 200ms ease-out;
}
.element:hover {
  transform: translateY(-2px);
  transition-duration: 0ms;
}
.element:not(:hover) {
  transition-duration: 150ms;
}
```

### Fade + Rise Entrance
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.entering {
  animation: fadeInUp 250ms ease-out forwards;
}
```

### Spring-like Easing
```css
:root {
  --spring-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --spring-smooth: cubic-bezier(0.22, 1, 0.36, 1);
  --spring-snappy: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Stagger Pattern
```css
.item { animation: fadeInUp 200ms ease-out backwards; }
.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 40ms; }
.item:nth-child(3) { animation-delay: 80ms; }
.item:nth-child(4) { animation-delay: 120ms; }
.item:nth-child(5) { animation-delay: 160ms; }
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Motion (Framer Motion) Patterns

### Fade + Rise
```jsx
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 4 }}
  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
/>
```

### Spring Physics
```jsx
<motion.div
  animate={{ scale: 1 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 25 }}
/>
```

### Stagger Children
```jsx
<motion.ul
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.04 } },
  }}
>
  {items.map(item => (
    <motion.li
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0 },
      }}
    />
  ))}
</motion.ul>
```

### Exit Before Enter
```jsx
<AnimatePresence mode="wait">
  <motion.div
    key={currentView}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
  />
</AnimatePresence>
```

## Common Mistakes to Avoid

- Bouncy everything
- Slow fades
- Scale(0) to scale(1)
- Inconsistent directions
- Animating unconditionally on mount
- Forgetting exit animations
- Using animation to mask slow code
- Too many simultaneous movements

## When NOT to Animate

- Form validation errors
- Critical error states
- Content being actively read
- High-frequency updates
- Frequently-viewed elements

## Testing Checklist

- Feels good at 2x speed?
- Feels good at 0.5x speed?
- Works with reduced motion enabled?
- Exit considered as entrance?
- Would removal be noticeable? (if yes, reconsider)
- Works on budget devices?

---

> "Animation is not about moving things. It's about not making users wait."
