#compile
if [ "$1" = 'card' ]; then
	sass components/card/card.module.scss components/card/card.module.css
elif [ "$1" = 'prompt' ]; then
	 sass styles/prompt.scss styles/prompt.css
elif [ "$1" = 'navbar' ]; then
    sass components/navbar/navbar.module.scss components/navbar/navbar.module.css
elif [ "$1" = 'listwindow' ]; then
    sass components/listwindow/listwindow.module.scss components/listwindow/listwindow.module.css
elif [ "$1" = 'board' ]; then
    sass components/board/board.module.scss components/board/board.module.css
elif [ "$1" = 'common' ]; then
    sass styles/common.scss pages/styles/common.css
elif [ "$1" = 'collors' ]; then
    sass styles/colors.scss pages/styles/colors.css
else
    sass components/navbar/navbar.module.scss components/navbar/navbar.module.css
    sass components/listwindow/listwindow.module.scss components/listwindow/listwindow.module.css
    sass components/board/board.module.scss components/board/board.module.css
	sass components/card/card.module.scss components/card/card.module.css
    sass styles/common.scss styles/common.css
    sass styles/colors.scss styles/colors.css
    sass styles/prompt.scss styles/prompt.css
fi
dd=$(date +%H:%M:%S);
echo "compiled $dd";