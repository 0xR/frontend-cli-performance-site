cd packages


for d in *
do 
    cd $d
    gcloud app deploy
    cd ..
done
