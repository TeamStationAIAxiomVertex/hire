
# How to Download Your Project

This guide provides the simple command to package your entire application into a single downloadable file.

This script is safe to run and will automatically exclude heavy directories like `node_modules` and `.next`, keeping the download small and focused on your source code.

### Step 1: Open the Terminal

Ensure you have the terminal open in your workspace.

### Step 2: Run the Recovery Script

Execute the following command in your terminal. This will create a compressed archive file (ending in `.tar.gz`) containing all your project files.

```bash
bash ./recover_workspace.sh
```

### Step 3: Download the Archive

After the script finishes, a new file (e.g., `teamstation-ai-full-....tar.gz`) will appear in your file explorer on the left.

Right-click on this new file and select **Download**.

That's it! You now have a complete backup of your application on your local machine.
