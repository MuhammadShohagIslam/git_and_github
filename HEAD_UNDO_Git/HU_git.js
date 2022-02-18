/*
        *** HEAD and UNDO of Git ***

                Working directory/        Stagging area/         local repository                                                
          workpace                           index
                            
        notes
        .git      ----->git add .->           ---- git commit -m ---> 
        day1.txt -> git diff --->

                                            -------------- git reset --soft HEAD^ ---            
        --------------------  git reset HEAD ^ ----------------------------- 
------------------ git reset --hard HEAD ^ ------------------------------

    --------- git status ------          ------------- git log -------------------

        *** git log --online (We can see important information)



            => if we use following command, we can undo recent commit use:
                        git reset --soft HEAD^
                        git reset --soft HEAD~1

            => If we use following command, we can undo recent commit and removing from the stagging area:
                        git reset HEAD^
                        git reset HEAD~1

            => If we use following command, if we can completely undo it, throwing away all uncommitted changes, resetting everything to the previous commit.
                        git reset --hard HEAD^
                        git reset --hard HEAD~1

        => number wise if we want to undo, we can use 
                        git reset --soft HEAD-2
                        git reset --soft HEAD-n

                *** ( git reset ), it's remove permanantly, so it's not good for securety purpose

        => we can see details information according to specific id.
                git show commit_id  

        => we can see details information according to specific id.
                git show HEAD~NUMBER

        => git checkout coomit_id / HEAD~1 (we can easily to go one commit to another commit)
                *** We can previous state, using this way 
                git checkout master/main
                => it is save for our life instead of git reset
*/