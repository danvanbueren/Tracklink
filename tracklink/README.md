# Full Stack Deployment Instructions
This is a step-by-step guide to install Tracklink's full tech stack from beginning to end.
### 1. Install Docker
Docker is used to build and containerize each service in the Tracklink tech stack.
To use Tracklink, you must first download and install Docker from their website:
- Open [docker.com](https://www.docker.com/) and download app
- Reference Docker's [documentation](https://docs.docker.com/desktop/) for specific setup instructions
   - Windows prerequisites: [install WSL](https://learn.microsoft.com/en-us/windows/wsl/install) & [enable virtualization](https://support.microsoft.com/en-us/windows/enable-virtualization-on-windows-11-pcs-c5578302-6e43-4b4b-a449-8ced115f58e1)
### 2. Clone Repo
Use one of the following options to clone or download the repo:
- via HTTPS: ```https://github.com/danvanbueren/Tracklink.git```
- via SSH: ```git@github.com:danvanbueren/Tracklink.git```
- via GitHub CLI: ```gh repo clone danvanbueren/Tracklink```
- via GitHub Desktop: ~~[Follow Link](x-github-client://openRepo/https://github.com/danvanbueren/Tracklink)~~
- via ZIP Archive: [Download](https://github.com/danvanbueren/Tracklink/archive/refs/heads/main.zip)
### 3. Compose
Use Docker CLI to compose the tech stack.
1. Change directory to `tracklink`:
   ```sh
   cd VOLUME:/.../Tracklink/tracklink
    ```
2. Compose images and containers via Docker CLI:
   ```sh
   docker compose up --build
    ```
   ###### *Note: After installation, verify containers are running via Docker Desktop app*
### 4. Open Tracklink
Launch the frontend in a web browser.
- [http://localhost:3000/](http://localhost:3000/)
###### *Note: Backend endpoint tests are available here: [FastAPI - Swagger UI](localhost:8000/docs)*
# All Done!
If you were unsuccessful after double-checking your work, collect as many details as you can so that I can reproduce the problem, then **report your issue [with this form](https://github.com/danvanbueren/Tracklink/issues/new)**.