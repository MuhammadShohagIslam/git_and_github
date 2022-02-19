/*
    *** Git Push And Pull ***

    /*
        *** HEAD and UNDO of Git ***

    Working directory/        Stagging area/             local repository                                                
    workpace                           index
                            
    notes
    .git      ->git add .-><git commit -m>  <-- git push -->
    day1.txt -> git diff --->

                                            -------------- git reset --soft HEAD^ ---            
        --------------------  git reset HEAD ^ ----------------------------- 
------------------ git reset --hard HEAD ^ ------------------------------

    --------- git status ------          ------------- git log -------------------

    => Pull: Pull is the one kind of github system through which we can received another code, what they update, 
    what they change, after we can work with this code.

    => Push: Push is the another kind of github system 
    through which we can store of our code into the github reprository.

    *** Check remote connection: git remote
            git remote -v: shows the remote along with the url.

            Syntax: git remote add name <REMOTE_URL>
            Example: git remote add origin https://github.com//name/github_repository

    => (git pull / clone), through this git command, we can copy code and code come from remote repository to working directory.

    => ( git fetch ), through this git command, we can fetch code from remote repository to local repository

    => ( git merge ), through this git command, we can merge code from local repository to working directory.

*/