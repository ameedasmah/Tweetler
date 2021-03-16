# Project Name : Tweeter 

## Team
- [Yasir Tobbileh]
- [Sara Al-Ayed]
- [Israa kittaneh] 
- [Ameed Asmah]
- [Noor Aldeen Ashqar]
- [Mo'men Hanbali]

## Table of Contents


1. [About](#about)
1. [Technologies Used](#technologies-used)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies FrontEnd](#installing-dependencies-frontend)
    1. [Installing Dependencies BackEnd](#installing-dependencies-backend)
    1. [Deploying](#deploying)
1. [Links](#links)
1. [Picture Documentation](#picture-documentation)

## About


## Technologies Used

- Backend (Python Django)
- Frontend (React)
   - React (Redux - Hooks)
   - meterial ui
- Authentication (JWT - Django Rest Framework Permissions)

## Requirements

- Node v12.18.4
- React v17.0.1
- Python 3.9 
- django 1.0.0

## Development

1. Fork the repo from github.
2. Clone down your fork
```
git clone https://github.com/<user Name>/twitter-clone-1.git
```
3. Move into the repo after its been cloned onto your machine.
4. Follow the instructions in the 'Installing Dependencies' section.

### Installing Dependencies FrontEnd

1. Open terminal 1: From root directory to forntend directory:
```
cd frontend/
```
2. Open terminal 2: From within the root directory:
```
npm install
```
```
npm start 
```
open your http://localhost:3000/

### Installing Dependencies BackEnd

1. Open terminal 2: From root directory to backend directory:

```
cd backend/
python -m venv venv
```
2. To enter venv (Virtual Environment)
```
. venv/Scripts/activate
```
3. To install dependencies (after entering venv)
```
pip install -r requirements.txt
```
4. make the migrations 
```
py manage.py makemigrations users tweets comments likes followers favorite
```
5. migrate it
```
py manage.py migrate
```

6. To run server localy (You should install the dependencies first)
```
python manage.py runserver
```
### Picture Documentation
![Home Page](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/788px-Adobe_XD_CC_icon.svg.png)


