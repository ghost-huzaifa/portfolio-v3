# Muhammad Huzaifa's Portfolio

A static personal portfolio with a bright white and gold theme, a local portrait, projects, research, experience, and creative interests. Built with HTML and CSS; no build step is required. A small optional script adds the theme switch.

## Themes

The default theme uses clean white surfaces with charcoal text, warm ivory panels, and bronze and amber accents matched to the portrait. The “Dark mode” button switches to a charcoal and warm gold palette and remembers the visitor's choice in their browser. The saved theme is applied before the page styles load to avoid a flash of the wrong theme.

If JavaScript or browser storage is unavailable, all portfolio content and navigation still work. Without JavaScript, the page stays bright and the theme switch stays hidden. If only storage is blocked, the switch works for the current page.

## Preview locally

From the repository folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000 in your browser.

## Update content

Edit `index.html` for text and links, and `styles.css` for appearance. The current portrait is `assets/portrait.jpg`, optimized to 1200 × 1200 pixels for the web. Its crop is controlled by `.photo` in the stylesheet. Google Fonts are optional; the page falls back to system sans-serif fonts when they are unavailable.

## Replace the videography placeholder

Keep the placeholder until a suitable image is ready. For a real frame or a generated concept image, use a 16:9 JPG or WebP at least 1600 × 900 pixels. Warm light and dark shadows suit the page. Keep exported files reasonably small, ideally below 300 KB.

Save the image as `assets/videography.webp`, replace the contents of `.film` with an image and meaningful alternative text, and replace the placeholder's `role` and `aria-label` as appropriate. The new image should fill the frame with `width: 100%; height: 100%; object-fit: cover;`. Remove the placeholder copy and framing pseudo-elements if they no longer suit the photograph.

The page currently uses GitHub as its public contact route. Add an email or another contact link when ready. Research statuses and job dates were carried over from the existing portfolio and can be edited in `index.html`.

## Checks

Check the page at desktop and phone widths, verify that all menu links reach the right sections, and navigate by keyboard. Content and links must remain usable with JavaScript disabled. Respect the visitor's reduced-motion preference.

Run the theme behavior checks with Node.js:

```sh
node --test tests/theme.test.cjs
```
