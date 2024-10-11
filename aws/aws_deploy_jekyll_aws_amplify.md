I've been noticing a lot of companies are looking for AWS experience.  Since I learn best by doing, I decided to start trying out the service.  The first thing I wanted to do was host my [personal website](https://mtzlr.io) on AWS.  I did some googling and found [this page](https://medium.com/@jameshamann/deploy-your-jekyll-site-using-aws-amplify-with-only-a-few-clicks-8f3dd8f26112) documenting how to deploy my site using AWS.  Mostly it worked except for the yaml.  It didn't work as documented on the site.  To get it working I used the below.  It eliminates bundler and simple calls jekyll directly via `jekyll b` as a build command.  The artifacts configuration pulls the contents of the `_site` directory for deployment. 

```yaml
version: 1
frontend:
  phases:
    build:
      commands: 
        - jekyll b
  artifacts:
    baseDirectory: _site
    files:
      - '**/*'
  cache:
    paths: []
```

