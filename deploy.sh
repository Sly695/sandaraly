echo "Switching to branch master"
git checkout master 

echo "Building app..." 
npm run build

#!/bin/bash


echo "Deploying files to server.e.." 

rsync -av --exclude=node_modules -e "ssh -i /Users/sly/.ssh/id_rsa -p 5555" /Applications/Documents/Projets/sandaraly/ sly@192.168.1.34:/home/sly/projects/sandaraly

scp -r -P 5555 -i /Users/sly/.ssh/id_rsa --exclude=node_modules /Applications/Documents/Projets/sandaraly/* sly@192.168.1.34:/home/sly/projects/

echo "Done!" 