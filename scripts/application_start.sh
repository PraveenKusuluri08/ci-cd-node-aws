sudo chmod -R 777 /home/ec2-user/express-app

cd /home/ec2-user/express-app


export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  

npm install

#start our node app in the background
node server.js > server.out.log 2> server.err.log < /dev/null & 