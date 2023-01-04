# Renaming Master to Main

The use of the term "master" can be considered offensive because of its connection with slavery. Github and other communities have decided replace it with an alternative. In the case of github they are going to use the term "main" going forward. I wanted to follow this style for my existing repos.  To rename my existing repos, I did the following.

1. Rename your local `master` branch to `main`:
   `git branch -m master main`
2. Push the renamed branch to the repo:
   `git push -u origin main`
3. Update the default branch from `master` to `main`
    <img width=50% src="https://raw.githubusercontent.com/benjaminmetzler/til/main/git/default_branch.png" alt="Change the default branch to main">
4. Delete the master branch:
   `git push origin --delete master`
5. Configure the upstream remote:
   `git remote set-head origin -a`

Your default branch is now called main and your local branch will be on that branch.  
