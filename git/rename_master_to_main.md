The use of the term "master" can be considered offensive because of its use with slavery.  Github and other communities have, rightfully, decided replace it with an alternative.  In the case of github they are going to use the term "main" going forward.  I wanted to follow this style for my existing repos.  To rename my existing repos, I did the following.
1. `git branch -m master main` # rename your local branch to main
2. `git push -u origin main` # push the renamed branch to the repo
3. In your repo settings, update the default branch from "master" to "main"
<img width=50% src="https://raw.githubusercontent.com/benjaminmetzler/til/git/master/default_branch.png" alt="Change the default branch to main">
4. `git push origin --delete master` # Delete the master branch
5. `git remote set-head origin -a` # Update the upstream remote

At this point your default branch will be called main and your local branch will be on that branch.  No other changes are needed.
