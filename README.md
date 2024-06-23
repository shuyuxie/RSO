
# UIUC Registered Student Organization Web Application
#### By: Hammad (hammadr2), Anna (apopr2), Farhan (farhan4), Shuyu (shuyux3)

# Introduction

Students need an all in one platform to connect with RSOs at their school. With our UIUC Registered Student Organization site, RSOs can register their own clubs with the most up to date information while potential members can discover RSOs that best fit their schedules and interests.

Functionality:
1. Users can register as either an organization or as a student
2. Organization users can make an RSO page that contains the description of their RSO, contact information for officers, scheduling, regular meeting spots, announcements, and events
3. Student users can view all RSOs and search for RSOs by name

For more details, view the full project proposal [here](https://docs.google.com/document/d/1Z2pH9ocPFnLlw5O6M8BUN2g90qgc9cN3F6BZIYlaZFk/edit?usp=sharing)

# Technical Architecture

![image](https://github.com/CS222-UIUC-SP24/group-project-team-66/assets/117466956/fb0b9bec-d112-4fe8-a19c-bef8f6a32c15)

User Input
- The user is able to search for RSOs that they would be interested in and is able to login

Databases
- User, Organizations, members, and events are all databases that store information respectively
- Each of the databases have their respective attributes that are shown in the wireframe
- Built using Python (SQLAlchemy, Pandas)

Web Parser
- The parser was used to acquire data from the UIUC’s RSO page 
- Information acquired was added to its respective database
- Built using Python (Flask, CSV library)


# Developers

Anna Poprawski: Worked on the frontend development of the website

Hammad Rasheed: Worked on UIUC RSO webscraping and frontend development

Farhan Ahmed: Worked on user, organizations, members, and events databases

Shuyu Xie: Worked on UIUC RSO webscraping

# How It Works

This is a hybrid Next.js + Python app that uses Next.js as the frontend and Flask as the API backend.

The Python/Flask server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/vercel/examples/blob/main/python/nextjs-flask/next.config.js) to map any request to `/api/:path*` to the Flask API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:5328` port, which is where the Flask server is running.

In production, the Flask server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

# Environment Setup

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The Flask server will be running on [http://127.0.0.1:5328](http://127.0.0.1:5328) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).

# Practical Use

This repository is connected directly to Vercel, which will host and deploy the most recent commit of the repository.

The link for the website is currently:

## https://group-project-team-66.vercel.app/

# Component Diagram

![Diagram](public\Components.png)
