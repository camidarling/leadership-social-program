# Push to GitHub - Quick Guide

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it (e.g., "leadership-social-program")
4. **Don't** initialize with README, .gitignore, or license (we already have files)
5. Click "Create repository"

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd "/Users/cami/COLD CUTS GUIDE"

# Add the remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Future Pushes (Automatic)

Once set up, you can push changes with:

```bash
git add .
git commit -m "Your commit message"
git push
```

## Optional: Set up GitHub CLI for easier workflow

If you have GitHub CLI installed:
```bash
gh repo create leadership-social-program --public --source=. --remote=origin --push
```

