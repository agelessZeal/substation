docker build -t ng-substation-server .
docker run --name=ng-substation-server -d -p 8081:8081 ng-substation-server
