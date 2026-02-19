# How to Push Your Project to GitHub

This guide provides the simple commands to push your application's source code to your existing GitHub repository. The new `.gitignore` file ensures that only the lightweight source code is pushed.

The GitHub Action is already configured to automatically build your static site from this source code and deploy it to Firebase Hosting every time you push to the `main` branch.

### Step 1: Add All Files to Staging

This command prepares your files to be committed. The `.gitignore` file will make sure that 'heavy' folders like `node_modules` are not included.

```bash
git add .
```

### Step 2: Make Your Commit

This command saves your files to the repository's history.

```bash
git commit -m "Finalize application source"
```

### Step 3: Push Your Code to GitHub

This command sends your code to your GitHub repository at `https://github.com/TeamStationAIAxiomVertex/hire.git`.

```bash
git push -u origin main
```

That's it! Your code will be on GitHub, and the automated deployment will begin.
