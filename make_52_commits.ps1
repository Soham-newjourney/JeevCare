Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue
git init
git config user.email "you@example.com"
git config user.name "Your Name"
git add .
git commit -m "Initial commit of JeevCare"
for ($i=2; $i -le 52; $i++) {
    Add-Content -Path README.md -Value "<!-- commit $i -->"
    git add README.md
    git commit -m "Update README (Commit $i)"
}
git remote add origin https://github.com/Soham-newjourney/JeevCare.git
git branch -M main
git config http.postBuffer 524288000
git push -u origin main --force
