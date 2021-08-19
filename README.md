## Project name
Studifix

## Members
- Viktoria Valentinova | vv011
- Duy Khanh Vu | dv029
- Luca Fehmel | lf054

## Introduction
Studifix makes it easy for students to search for scholarships and directly apply for them. You only need to answer a few questions within a filter mask and apply for a matching scholarship with your personal data. (Application will not be sent or proceeded in any other way yet. It's only stored in the database and links user with provider and scholarship) 

## Setup 
1. Clone Repository
2. Navigate to studifix folder `cd studifix`
3. Run `Docker Compose up` or `Docker-Compose up` in Terminal
4. For Production Build run `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d` (right now there are problems when running in Production mode)

- You can also use Make Files by running `make` + command. See Makefile at root level for list of all commands. e.g `make backup` for DB backup.
- If you want to add new rules to gitlab-ci pipeline edit `.gitlab-ci.yml` at root level.
