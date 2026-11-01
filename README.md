# Muhammad Huzaifa's Portfolio

A static personal portfolio with a charcoal and gold theme, a local portrait, projects, research, experience, and creative interests. Built with HTML and CSS; no build step or JavaScript is required.

## Preview locally

From the repository folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000 in your browser.

## Update content

Edit `index.html` for text and links, and `styles.css` for appearance. The original portrait is `assets/profile_1.jpeg`. Google Fonts are optional; the page falls back to system sans-serif fonts when they are unavailable.

## Replace the videography placeholder

Keep the placeholder until a suitable image is ready. For a real frame or a generated concept image, use a 16:9 JPG or WebP at least 1600 × 900 pixels. Warm light and dark shadows suit the page. Keep exported files reasonably small, ideally below 300 KB.

Save the image as `assets/videography.webp`, replace the contents of `.film` with an image and meaningful alternative text, and replace the placeholder's `role` and `aria-label` as appropriate. The new image should fill the frame with `width: 100%; height: 100%; object-fit: cover;`. Remove the placeholder copy and framing pseudo-elements if they no longer suit the photograph.

The page currently uses GitHub as its public contact route. Add an email or another contact link when ready. Research statuses and job dates were carried over from the existing portfolio and can be edited in `index.html`.

## Checks

Check the page at desktop and phone widths, verify that all menu links reach the right sections, and navigate by keyboard. Content and links must remain usable with JavaScript disabled. Respect the visitor's reduced-motion preference.
