# How to Push Your Project to GitHub

This guide provides the step-by-step commands to get your Firebase Studio project into a new GitHub repository.

You'll need to run these commands in the terminal.

### Step 1: Initialize a Git Repository

This command creates a new Git repository in your project directory. The `-b main` part sets the default branch name to `main`, which is the current standard.

```bash
git init -b main
```

### Step 2: Add All Files to Staging

This command stages all the files in your project, preparing them to be committed.

```bash
git add .
```

### Step 3: Make Your First Commit

This command saves your staged files into the repository's history. The message "Initial commit" is a common standard for the first commit.

```bash
git commit -m "Initial commit"
```

### Step 4: Link Your Local Repository to GitHub

This command connects your local repository to the remote one you just created on GitHub.

```bash
git remote add origin https://github.com/TeamStationAIAxiomVertex/hire.git
```

### Step 5: Push Your Code to GitHub

This command sends your committed files to your GitHub repository. The `-u` flag links your local `main` branch to the remote `origin/main` branch, so in the future, you can simply run `git push`.

```bash
git push -u origin main
```

### Step 6: Set Up Deployment Secret

To allow the new GitHub Action to deploy to your Firebase project, you need to add one secret to your GitHub repository settings:

1.  **Generate a Firebase Service Account Key:**
    *   Go to your Firebase Project Settings > Service accounts.
    *   Click "Generate new private key" and save the JSON file.
2.  **Add the Secret to GitHub:**
    *   In your GitHub repository, go to `Settings > Secrets and variables > Actions`.
    *   Click "New repository secret".
    *   Name the secret `FIREBASE_SERVICE_ACCOUNT_HIRE_TEAMSTATION_DEV`.
    *   Copy the entire content of the JSON file you downloaded and paste it into the "Value" field.
    *   Click "Add secret".

That's it! Now, every time you push to the `main` branch, your site will automatically build and deploy.
