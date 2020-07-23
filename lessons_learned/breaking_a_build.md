A week after I had started a new job I was asked to deploy a base release of the test software.  A base release is the fundamental release every test system pulls when it starts up.  When a base release is updated, it superseded all other releases and is used to pull any additional releases needed to run a test.

I followed the instructions, created a new package, tested it locally, and then pushed it to the server.  Finally, I updated the test servers to pull the new release.  And waited.

Ten minutes later the floor went down.  I quickly pulled the new image and pushed the old base image back up.  And the floor stayed down.  I logged into the test servers, cleared out the old releases, and pulled the newest release.  And it failed again.  At this point, our team's email inboxes had started filling up with "the floor is down!".  My manager came to me and asked what was going on.  I explained the scenario.  We looked at the situation, troubleshot, but nothing we did fixed the issue.  

Fortune was on our side as I had pushed the new release later in the day, so the total amount of affected work was limited to the last couple of work hours, but sufficient to say it took 4 hours to get the floor back up.  

The issue turned out to be the umask setting on my development PC.  During setup, my umask been set to 077 instead of 022.  What this means is that only I, the creator, could read and write the files.  Normally this might be okay, but because I was creating a package locally, they were being created with these permissions.  When the test servers pulled the package, it was expanding them and trying to read them.  Because of the peculiarities of the test system, the permissions were not being reset to the test server user, and more importantly, the test software didn't indicate what was the real issue and instead gave a generic failure.

We discovered the root of the problem and fixed the issue.  Pushing the new image up, the test servers were able to pull the image and run it correctly.

In our impromptu post-mortem, we identified three actions.
1. Better logging for error messages.  All error messages before a certain stage resulted in a generic failure.
2. Create a build system so developers aren't building and pushing from their local machines.  
3. Create a test environment to test new packages before deploying to the production environment.

Of the three, I was able to build out 2 and 3.  I built out a subset test environment that allowed us to deploy to that environment first before deploying to the production server.  We also created a build environment using Jenkins and Subversion.  This allowed us to standardize our build environment off of the developer's machines.  

We weren't able to add to the logging messages because the failure code was written by another team and they refused to accept any changes outside of their group.  That said we at least were able to document troubleshooting, starting with "check your umask".

