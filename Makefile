NAME=sudofish
VERSION=1.4
IMAGE_NAME=registry.tr0:5000/$(NAME):$(VERSION)

build-image:
	docker build -t $(IMAGE_NAME) .

push-image:
	docker push $(IMAGE_NAME)

deploy:
	build-image push-image
	echo kubectl update and replace
