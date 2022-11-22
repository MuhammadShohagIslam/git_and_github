/*
    *** Private Project From Another Github Account 
    To Public Project in You Github Account with whole commit
*/

/*
step 1: 
    Go to the Github private repo and clone
    open cmd from the parent folder
    git clone --bare ____ (clone URL) [--bare => clone with all commits]
    open the cloned folder from explorer
*/

/*
step 2: 
    create a new repo
    just copy the origin url
    git push --mirror ___(origin url)[--mirror => transfer all commits]
    
*/
/*
step 3: 
   change origin [otherwise new code will push to the previous git location]
   apply those code where your project done
   git remote -v [checking remote version]
   git set-url origin __ (origin)
   git remote -v
*/
