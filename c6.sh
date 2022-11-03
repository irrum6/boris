#compile
alias sass=./node_modules/sass/sass.js

if [ "$1" = 'card' ]; then
	sass components/cardspage/card/card.module.scss components/cardspage/card/card.module.css
elif [ "$1" = 'navbar' ]; then
    sass components/cardspage/navbar/navbar.module.scss components/cardspage/navbar/navbar.module.css
elif [ "$1" = 'listwindow' ]; then
    sass components/cardspage/listwindow/listwindow.module.scss components/cardspage/listwindow/listwindow.module.css
elif [ "$1" = 'board' ]; then
    sass components/cardspage/board/board.module.scss components/board/cardspage/board.module.css
elif [ "$1" = 'common' ]; then
    sass styles/common.scss styles/common.css
elif [ "$1" = 'com' ]; then
    sass styles/common.scss styles/common.css
elif [ "$1" = 'colors' ]; then
    sass styles/colors.scss styles/colors.css
elif [ "$1" = 'rgb' ]; then
    sass styles/colors.scss styles/colors.css
elif [ "$1" = 'sizes' ]; then
    $sass styles/sizes.scss styles/sizes.css
else
    sass components/cardspage/navbar/navbar.module.scss components/cardspage/navbar/navbar.module.css
    sass components/cardspage/listwindow/listwindow.module.scss components/cardspage/listwindow/listwindow.module.css
    sass components/cardspage/board/board.module.scss components/cardspage/board/board.module.css
	sass components/cardspage/card/card.module.scss components/cardspage/card/card.module.css
    sass styles/common.scss styles/common.css
    sass styles/sizes.scss styles/sizes.css
    sass styles/colors.scss styles/colors.css
    # sass styles/prompt.scss styles/prompt.css
fi
dd=$(date +%H:%M:%S);
echo "compiled $dd";