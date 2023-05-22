This is a basic React/[Next.js](https://nextjs.org/)/TypeScript image viewer bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that loads a predetermined array of images for which the user can view EXIF data using the exifr module. Additionally, the user can upload their own images individually to view their EXIF data.

## Getting Started

Run the development server:

```bash
npm install && npm run dev (only need to run npm install once)
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Limitations:
Although the file picker component supports selection of multiple files, I assume the user is only adding one at a time so batch uploads are not supported with the current implementation.
