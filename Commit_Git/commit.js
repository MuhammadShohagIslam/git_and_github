/*
    *** Commit of Git ***

        Working directory/        Stagging area/         local repository                                                
          workpace                           index
                            
        notes
        .git      ----->git add .->           ---- git commit -m ---> 
        day1.txt -> git diff --->

                                            -------------- git reset --soft HEAD^ ---            
        --------------------  git reset HEAD ^ ----------------------------- 
------------------ git reset --hard HEAD ^ ------------------------------

    --------- git status ------          ------------- git log -------------------


        => For moving staging to local repo we can use following command 
                    git commit -m "message here"
        => Message should be clear and understandable

        => Staging and commiting directly: git commit -am "message here"

        => Staging and commiting both at a time: git add . && git commit -m "message here"

        => Git log: to see the commit history.

        *** if we want to push any file to the remote, file should be stay in local repository.
*/



