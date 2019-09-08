docker build -t ng-management-server .
docker run --name=ng-management-server -d -p 8082:8082 ng-management-server
