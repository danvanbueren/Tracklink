# [Tracklink](https://tracklink.app/) &middot; [![License](https://img.shields.io/github/license/danvanbueren/Tracklink?color=blue)](https://github.com/danvanbueren/Tracklink/blob/main/LICENSE) [![Repo Size](https://img.shields.io/github/repo-size/danvanbueren/Tracklink?color=blue)](https://github.com/danvanbueren/Tracklink) [![Issues](https://img.shields.io/github/issues/danvanbueren/Tracklink)](https://github.com/danvanbueren/Tracklink/issues) [![Last Commit](https://img.shields.io/github/last-commit/danvanbueren/Tracklink)](https://github.com/danvanbueren/Tracklink/commits/main/) [![Discord](https://img.shields.io/discord/1311699891466276896)](https://discord.gg/fHgcsGZSjj)


**Tracklink** is a project management solution for music artists, producers and engineers.

See [#context](#context) for more detail about the goal and backstory of this application.

## Get started

Any and all testing and contribution to Tracklink's codebase would significantly speed up development.
- **Developers:** [Fork this repo](https://github.com/danvanbueren/Tracklink/fork) to get started.
- **Testers:** [Report issues here](https://github.com/danvanbueren/Tracklink/issues) if you find problems or have suggestions.

### Deployment

A quick start guide to deploy the current development build of this software is available [here](./tracklink).

### Repo structure
| Folder | Description |
|--|--|
| archive | Files and snapshots of past builds from previous phases of development no longer applicable to the current build phase |
| docs | File store for GitHub Pages, used to host the current static placeholder site at [tracklink.app](https://tracklink.app/) | 
| tests | A sandbox of tools to test functionality and run unit tests |
| **tracklink** | **Current working directory for active development** |

## Development

### Tech stack
- **Frontend**
  - [React](https://react.dev/) &middot; _[docs](https://react.dev/reference/react)_
  - [NextJS](https://nextjs.org/) &middot; _[docs](https://nextjs.org/docs)_
  - [MaterialUI](https://mui.com/) &middot; _[docs](https://mui.com/material-ui/getting-started/)_
- **Backend**
  - [FastAPI](https://fastapi.tiangolo.com/) &middot; _[docs](https://fastapi.tiangolo.com/)_
  - [Postgres](https://www.postgresql.org/) &middot; _[docs](https://www.postgresql.org/docs/)_
  - [Express](https://expressjs.com/) &middot; _[docs](https://expressjs.com/en/guide/routing.html)_
- **DevOps**
  - [Docker](https://www.docker.com/) &middot; _[docs](https://docs.docker.com/)_

### Roadmap
#### 1. 🟢 Design mockup
- Design frontend skeleton and implement basic client-side functionality
#### 2. 🟡 Simple backend
- Build API endpoints and integrate database and file server
#### 3. 🔴 Stack integration
- Connect frontend to API endpoints and finish building out frontend components dependent on dynamic content
#### 4. 🔴 Permissions
- Build out authorization/authentication for user sessions and enforce access control through a permissions system (frontend and backend)
#### 5. ...

## Context

### Inspiration

**Hi, I'm Dan**, an overly vertically integrated music producer, engineer, vocalist, songwriter, and everything in between. I've been making music for over fifteen years and have spent much of that experience collaborating with fellow musicians.

Through this experience, I have learned that project management can strangle productivity and completely interrupt the creative flow. I have spent the past six years looking for an all-in-one project management solution to support and sustain distributed management for tracks and projects to no avail. While there are some promising programs on the horizon, I have yet to find a polished, mature and feature-complete program to meet this goal.

Well, guess what? I occasionally pretend to be a web developer. Through this time, this small thought slowly blossomed into a full-scale platform while I iterated through my own development of the platform I have christened Tracklink.

### Mission

**Tracklink** seeks to offer music producers, engineers and artists a full suite of integrated project management functions in one simple, optimized platform. I have noticed over the course of my own collaboration that musicians have to bend over backwards by using a multitude of different platforms and tools to share ideas and files. My goal with this software is to eliminate the management disaster incurred from using so many platforms.

After years of planning, I have drawn inspiration from the best features across noteworthy platforms like Google Drive for its excellent file management system, Discord for its intuitive UX, Spotify for its playback, and social media platforms for their chronological social activity features.
