## Project name
Studifix

## Members
- Fehmel Luca | lf054
- Valentinova Viktoria | vv
- Vu Khanh | kv

## Introduction
Studifix makes it easy for students to search for scholarships and directly apply for them. 

## Setup 

1. Clone Repo
2. Run `Docker Compose up` or `Docker-Compose up`
3. For Production Build run `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d` (right now there are problems when running in Production mode.)

- You can also use Make Files by running `make` + command. See Makefile at root for list of all commands.
- If you want to add new rules to gitlab-ci pipeline edit `.gitlab-ci.yml` at root
