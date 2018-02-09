# Kong Demo

A simple, neatly contained Kong+Konga+Postgres composition to get your hands dirty

#### Images included:

- [Kong](https://hub.docker.com/_/kong/) - API gateway
- [Konga](https://hub.docker.com/r/pantsel/konga/) - GUI for Kong
- [Postgres](https://hub.docker.com/_/postgres/) - Persistent storage for both Kong and Konga

# Usage

The following usage instructions assume you made no changes to any file in `./config`

### First run

Perform kong+konga postgres migrations:

`docker-compose -f docker-compose.init.yml up --abort-on-container-exit`

Kill the composition after kong and konga complete their migrations

### Exec

`docker-compose up` 
- Visit: http://localhost:12000 
- Auth: 
    - Username: `admin`
    - Password: `adminadminadmin`
- Connection Setup
    - Name: `test_connection`
    - Kong Admin URL: `http://kong:8001`
- Go nuts!

# Configuration

Configs are loaded from the respective `*.env` file for each service. See the Dockerhub pages and Github repos for additional config options.

# Persistent data

Persistent data is mounted to `.data/**/*` when docker-compose is run. deleting the `.data` folder will start from scratch.

# Dev notes

- The Kong version is limited by what is currently supported by Konga
