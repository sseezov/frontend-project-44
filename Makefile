install:
<<<<<<< HEAD
	npm ci
=======
	npm ci 
>>>>>>> kz

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint-fix:
	npx eslint . --fix
