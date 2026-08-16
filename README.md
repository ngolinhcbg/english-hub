# English for Real Life — V1

A static course website designed for GitHub Pages.

## Included
- Home / landing page
- Course curriculum
- Lesson pages
- YouTube embed
- PDF download links
- Previous / Next lesson navigation
- Responsive desktop/mobile layout

## Deploy to GitHub Pages
1. Create a new GitHub repository.
2. Upload all files and folders from this project.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Your site will be published at your GitHub Pages address.

## Customize lessons
Open `app.js` and edit the `lessons` array:
- `title`: lesson title
- `duration`: duration shown on the page
- `intro`: short description
- `pdf`: path or URL to the PDF
- `video`: YouTube video ID

Example:
`https://www.youtube.com/watch?v=ABC123XYZ`
has the video ID `ABC123XYZ`.

## PDF
Put your PDF files in the `pdf/` folder using the names already referenced in `app.js`, or replace each `pdf` value with a full URL.

## Important
The current YouTube IDs are placeholders. Replace them with your actual lesson video IDs before publishing.
