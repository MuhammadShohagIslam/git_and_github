/*
    *** How to Create Git Folder ***

    Working directory/        Stagging area/         local repository                                                
    workpace                      index
                            
        notes
        .git      ----->git add .-> 
        day1.txt -> git diff --->



    --------- git status ------




    => (mkdir notes) --- created new folder
    => (cd notes) --- to go notes folder
    => dir  / ls -a(mac) --- we can see, all of folder and hidden file.
    => (git init) --- creating / initializing git repository
    => (type nul > day1.txt / touch day1.txt(mac) ) --- created new file
    => (day1.txt / open day1.txt) --- we can be opend file.
    => git status ( display the state of the working directory and stagging area )
    
    *** when you hit through with (git status), if we see any file untracking, it's mean this file is not gone (stagging area.)

    *****  Git staging and Unstaging *****
        => (git add filename) --- we can transfered stagging area specific file
        => (git add -A(A is shorthand for --all)) --- stage all changed file in directory and subdirectories
        => (git add .) --- stage all changed file directory but not subdirectories 
        => (git add *.js ) --- like regex  (js include file are gone stagging area)
        => (Git add ***.js) --- if we want to transfere js file directory and subdirectory file, we can use this command line.
        => Cheacking the difference : git diff

        *** if we want to back your stagging area file to working workpace, we should write (git restore --staged <filename>)

        *** if we want to back your modify data from stagging area to working directory, we should use(git restore <modifyFileName>)
*/

