docker build -t ng-substation-website .
docker run --name=ng-substation-website -d -p 8084:8084 ng-substation-website
