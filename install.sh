cd packages

for d in *
do 
    cd $d
    npm install
    cd ..
done