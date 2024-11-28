# *TRACKLINK*

**Tracklink** is a project management solution for music artists, producers and engineers.

[See below](#context) for more context about the goal and backstory of this application.

## TL;DR

### GUIDE

A quick start guide to deploy the current development build of this software is available [here](./tracklink).

### REPO STRUCTURE
| Folder | Description |
|--|--|
| archive | Files and snapshots of past builds from previous phases of development no longer applicable to the current build phase |
| docs | File store for GitHub Pages, used to host the current static placeholder site at [tracklink.app](https://tracklink.app/) | 
| tests | A sandbox of tools to test functionality and run unit tests |
| **tracklink** | **Current working directory for active development** |

## DEVELOPMENT

### TECH STACK
- FRONTEND: React, NextJS, MaterialUI
- BACKEND: FastAPI, Postgres, Express(?)
- NOTE: The whole stack is containerized with Docker

### ROADMAP
1. 🟢 DESIGN MOCKUP - Design frontend skeleton and implement basic client-side functionality
2. 🟡 SIMPLE BACKEND - Build API endpoints and integrate database and file server
3. 🔴 STACK INTEGRATION - Connect frontend to API endpoints and finish building out frontend components dependent on dynamic content
4. 🔴 PERMISSIONS - Build out authorization/authentication for user sessions and enforce access control through a permissions system (frontend and backend)
5. ...

## CONTEXT

### INSPIRATION

**Hi, I'm Dan**, an overly vertically integrated music producer, engineer, vocalist, songwriter, and everything in between. I've been making music for over fifteen years and have spent much of that experience collaborating with fellow musicians.

Through this experience, I have learned that project management can strangle productivity and completely interrupt the creative flow. I have spent the past six years looking for an all-in-one project management solution to support and sustain distributed management for tracks and projects to no avail. While there are some promising programs on the horizon, I have yet to find a polished, mature and feature-complete program to meet this goal.

Well, guess what? I occasionally pretend to be a web developer. Through this time, this small thought slowly blossomed into a full-scale platform while I iterated through my own development of the platform I have christened Tracklink.

### MISSION

**Tracklink** seeks to offer music producers, engineers and artists a full suite of integrated project management functions in one simple, optimized platform. I have noticed over the course of my own collaboration that musicians have to bend over backwards by using a multitude of different platforms and tools to share ideas and files. My goal with this software is to eliminate the management disaster incurred from using so many platforms.

After years of planning, I have drawn inspiration from the best features across noteworthy platforms like Google Drive for its excellent file management system, Discord for its intuitive UX, Spotify for its playback, and social media platforms for their chronological social activity features.
