 all:

 install:
	yarn install
	bundle
	cd api; yarn install
