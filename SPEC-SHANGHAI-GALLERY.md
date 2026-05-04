# SPEC: Shanghai Map Popup Image Gallery + Hub Photo Gallery

## Overview
Two enhancements for Shanghai:
1. **Map Popup**: Add scroll arrows to the image row in the hover popup on the /destinations map, so users can browse through city photos
2. **Shanghai Hub**: Replace the single hero banner at top with a photo gallery/carousel

## 1. Map Popup Image Gallery (DestinationsMapInner.tsx)

### Current State
- The `MapPopup` component shows city images in a horizontal row with `overflow-x-auto`
- Users can only scroll by dragging (no arrows, no indication there are more)
- Each city has 5 images in the `images` array, all using picsum.photos seeds

### Changes Needed
- Add left/right scroll arrows (chevrons) on the image row
- Arrows should appear on hover of the image container area
- Left arrow hidden when at start, right arrow hidden when at end
- Smooth scroll behavior
- Keep the existing popup layout and content structure
- This should work for ALL cities on the map, not just Shanghai

### Implementation
- Wrap the image row in a `relative` container
- Add `ref` for scroll position tracking
- Add `<button>` with ChevronLeft/ChevronRight icons
- On click: `container.scrollBy({ left: 120, behavior: 'smooth' })`
- Track scroll position with onScroll handler
- Show/hide arrows based on scrollLeft position
- Arrows: small, circular, white bg, shadow, positioned at edges of the image container

## 2. Shanghai Hub Photo Gallery (ShanghaiSuperClient.tsx)

### Current State
- Shanghai hub has a large hero banner at top (single image via picsum)
- Below are tabbed sections (Things to Do, Where to Eat, Where to Stay, etc.)

### Changes Needed
- Replace the single hero banner with a **photo gallery carousel**
- Use the same image seeds that already exist in the Shanghai data (shanghai-bund, shanghai-yugarden, shanghai-frenchconcession, shanghai-tower, shanghai-tianzifang, shanghai-jadebuddha)
- Gallery should be:
  - Full-width within the container
  - 3-4 images visible at once on desktop, 1-2 on mobile
  - Left/right arrow buttons to scroll
  - Subtle dot indicators at bottom
  - Images should have subtle rounded corners and spacing
  - Aspect ratio consistent (landscape, ~3:2)
- Keep the rest of the Shanghai hub exactly as-is (tabs, sections, map, etc.)
- This is a NEW variant — create a copy or modify in-place? **Modify in-place** since this is an improvement, not an A/B test

### Image Seeds for Shanghai
Use these existing seeds (already defined in the attractions data):
- shanghai-bund
- shanghai-yugarden
- shanghai-frenchconcession
- shanghai-tower
- shanghai-tianzifang
- shanghai-jadebuddha
- Plus attraction-specific ones: shanghai-bund-night, shanghai-nanjing-road, shanghai-xintiandi
- Add a few more scenic ones: shanghai-skyline, shanghai-huangpu, shanghai-lujiazui

All images still use picsum.photos for now (real photos will replace later).

### Gallery Design
- Background: slightly off-white or transparent over the existing gradient
- No thumbnails strip — just the main gallery with arrows
- Height: ~300-400px on desktop, ~200-250px on mobile
- Smooth scroll, snap to each image
- Autoplay: NO (user-controlled only)
- On mobile: swipe/drag should also work (native scroll)

## Files to Modify
1. `app/destinations/DestinationsMapInner.tsx` — MapPopup component: add scroll arrows to image row
2. `app/destinations/shanghai-8/ShanghaiSuperClient.tsx` — Replace hero banner with photo gallery

## Important
- Keep using picsum.photos for all images (real photos will come later)
- Do NOT change any other functionality on these pages
- Build must pass after changes