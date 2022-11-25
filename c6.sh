#compile
alias sass=./node_modules/sass/sass.js

sass styles/index.scss styles/index.css
dd=$(date +%H:%M:%S);
echo "compiled $dd";