#!/usr/bin/env bash
docker build -t ng-event-server .
docker run --rm --name=ng-event-server -d -p 8083:8083 ng-event-server
