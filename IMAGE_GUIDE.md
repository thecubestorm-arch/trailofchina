# Image Organization - Trail of China

## Folder Structure

All images go in `public/images/` — Next.js serves everything in `public/` as static files.

```
public/images/
├── hero/          → Homepage hero, large banners
├── shanghai/      → Shanghai destination photos
├── beijing/       → Beijing destination photos
├── xian/          → Xi'an destination photos
├── chengdu/       → Chengdu destination photos
├── chongqing/     → Chongqing destination photos
├── guilin/        → Guilin destination photos (future)
├── general/       → China general (food, trains, streets, etc.)
└── icons/          → App icons, small UI graphics
```

## Naming Convention

- `kebab-case.jpg` or `kebab-case.webp`
- Examples: `bund-night.jpg`, `peking-duck.jpg`, `great-wall-01.jpg`
- Use descriptive names, not IMG_1234.jpg

## How to Upload

### Option 1: Direct file copy (easiest)
Drop files into the local repo folder:
```
/data/.openclaw/workspace/trailofchina/public/images/shanghai/
```

### Option 2: Via this chat
Send photos in the chat and I'll organize them into the right folder.

### Option 3: Git push from your machine
Clone the repo locally, add photos to `public/images/`, push.

## Usage in Code

```tsx
<img src="/images/shanghai/bund-night.jpg" alt="The Bund at night" />
```

Next.js optimizes images with `next/image`:
```tsx
import Image from 'next/image'
<Image src="/images/shanghai/bund-night.jpg" alt="The Bund at night" width={800} height={600} />
```

## Image Optimization Tips
- Prefer .jpg or .webp for photos
- Target 800-1200px width for content images
- Hero images: 1600-2000px width
- Thumbnails: 400-600px width
- Compress before uploading (TinyPNG, Squoosh)