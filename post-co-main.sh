#!/bin/zsh

rm -rf _app package.json README.md static tsconfig.json package-lock.json src svelte.config.js && mv build/* . && rm -rf build && touch .nojekyll && ga . && gc -m 'Updates'
